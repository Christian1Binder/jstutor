<?php
declare(strict_types=1);
require __DIR__ . '/deployment.php';
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header("Content-Security-Policy: default-src 'self'; style-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");
ini_set('display_errors', '0');
function h(mixed $value): string { return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
$configPath = tutor_config_path();
$installed = is_file($configPath);
$secure = tutor_https();
$requirements = PHP_VERSION_ID >= 80100 && extension_loaded('pdo_mysql') && extension_loaded('mbstring');
$keyPath = __DIR__ . '/setup-key.php';
$key = is_readable($keyPath) ? require $keyPath : [];
$keyReady = is_array($key) && preg_match('/^[a-f0-9]{64}$/D', (string)($key['token_hash'] ?? ''));
$defaults = $key['defaults'] ?? [];
$error = ''; $success = false;
if ($secure) {
    ini_set('session.use_strict_mode', '1');
    session_name('binder_tutor_setup');
    session_set_cookie_params(['lifetime'=>0,'path'=>'/','secure'=>true,'httponly'=>true,'samesite'=>'Strict']);
    session_start();
    $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
}
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST' && !$installed) {
    $lock = null; $db = null; $createdConfig = false;
    try {
        if (!$secure || !$requirements || !$keyReady) throw new RuntimeException('Die Voraussetzungen für das Setup sind noch nicht erfüllt.');
        if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) throw new RuntimeException('Anfrage zu groß.');
        if (!hash_equals($_SESSION['csrf'], (string)($_POST['csrf'] ?? ''))) throw new RuntimeException('Sitzung abgelaufen. Bitte Seite neu laden.');
        if (!hash_equals($key['token_hash'], hash('sha256', trim((string)($_POST['setup_code'] ?? ''))))) throw new RuntimeException('Der Installationscode stimmt nicht. Er steht in INSTALLATIONSCODE.txt aus deinem Paket.');
        $host = trim((string)($_POST['db_host'] ?? ''));
        $name = trim((string)($_POST['db_name'] ?? ''));
        $user = trim((string)($_POST['db_user'] ?? ''));
        $password = (string)($_POST['db_password'] ?? '');
        $email = strtolower(trim((string)($_POST['email'] ?? '')));
        $displayName = trim((string)($_POST['display_name'] ?? ''));
        $accountPassword = (string)($_POST['account_password'] ?? '');
        if (!preg_match('/^[a-zA-Z0-9.-]{1,253}$/D', $host) || !preg_match('/^[a-zA-Z0-9_]{1,64}$/D', $name) || !preg_match('/^[a-zA-Z0-9_]{1,80}$/D', $user) || $password === '') throw new RuntimeException('Bitte prüfe Server, Datenbankname, Benutzername und Datenbankpasswort. Der Server wird ohne http:// eingegeben.');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email)>254 || $displayName==='' || mb_strlen($displayName)>30 || strlen($accountPassword)<12 || strlen($accountPassword)>72) throw new RuntimeException('Für dein Lernkonto: gültige E-Mail, Anzeigename mit 1–30 Zeichen und Passwort mit 12–72 Bytes eingeben.');
        if (!hash_equals($accountPassword, (string)($_POST['account_password_repeat'] ?? ''))) throw new RuntimeException('Die beiden Passwörter für das Lernkonto stimmen nicht überein.');
        $directory = dirname($configPath);
        if (!is_dir($directory) && !@mkdir($directory, 0700, true)) throw new RuntimeException('Der private Konfigurationsordner neben dem Webroot konnte nicht erstellt werden. Lege ihn per SFTP an: ' . $directory);
        if (tutor_path_is_public($directory)) throw new RuntimeException('Die Konfiguration muss außerhalb des öffentlichen Webroots liegen. Nutze BINDER_TUTOR_CONFIG für einen privaten absoluten Pfad.');
        @chmod($directory, 0700);
        $lock = @fopen($directory . '/setup.lock', 'c');
        if (!$lock || !flock($lock, LOCK_EX | LOCK_NB)) throw new RuntimeException('Ein Setup läuft bereits. Bitte kurz warten und neu laden.');
        @chmod($directory . '/setup.lock', 0600);
        clearstatcache(true, $configPath);
        if (is_file($configPath)) throw new RuntimeException('Die Installation ist bereits eingerichtet und gesperrt.');
        $dsn = 'mysql:host=' . $host . ';dbname=' . $name . ';charset=utf8mb4';
        try { $db = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_EMULATE_PREPARES=>false,PDO::ATTR_TIMEOUT=>10]); }
        catch (PDOException $e) { throw new RuntimeException('Die Datenbankverbindung ist fehlgeschlagen. Prüfe die vier Datenbankangaben und ob diese Datenbank für den Webspace verfügbar ist.'); }
        // No DROP, DELETE, or replacement of existing users. DDL may auto-commit in MySQL.
        $schema = file_get_contents(__DIR__ . '/schema.sql');
        foreach (explode(';', $schema) as $sql) if (trim($sql) !== '') $db->exec($sql);
        foreach (['tutor_users'=>['id','email','name','password_hash','created_at'],'tutor_states'=>['user_id','track','revision','state_json','updated_at'],'tutor_login_attempts'=>['email_hash','attempted_at']] as $table=>$expected) {
            $columns = $db->query('SHOW COLUMNS FROM ' . $table)->fetchAll(PDO::FETCH_COLUMN);
            if (array_diff($expected, $columns)) throw new RuntimeException('Vorhandene Tutor-Tabellen haben ein anderes Schema. Es wurden keine vorhandenen Lernkonten ersetzt.');
        }
        if ((int)$db->query('SELECT COUNT(*) FROM tutor_users')->fetchColumn() !== 0) throw new RuntimeException('Diese Datenbank enthält bereits Lernkonten. Das Setup überschreibt sie nicht. Bitte die vorhandene Konfiguration wiederherstellen.');
        $db->beginTransaction();
        $db->prepare('INSERT INTO tutor_users(email,name,password_hash) VALUES (?,?,?)')->execute([$email,$displayName,password_hash($accountPassword,PASSWORD_DEFAULT)]);
        $config = ['dsn'=>$dsn,'user'=>$user,'password'=>$password,'registration_enabled'=>isset($_POST['registration_enabled']),'installed_at'=>gmdate('c')];
        $contents = "<?php\n// Private deployment configuration. Keep outside the webroot.\nreturn " . var_export($config,true) . ";\n";
        $file = @fopen($configPath, 'x');
        if (!$file) throw new RuntimeException('Die private Konfiguration konnte nicht exklusiv erstellt werden.');
        $createdConfig = true;
        @chmod($configPath, 0600);
        $written = fwrite($file, $contents);fflush($file);fclose($file);
        if ($written !== strlen($contents)) throw new RuntimeException('Die private Konfiguration konnte nicht vollständig geschrieben werden.');
        $db->commit();
        $success = true; $installed = true;
        $_SESSION = [];
    } catch (Throwable $e) {
        if ($db instanceof PDO && $db->inTransaction()) $db->rollBack();
        if ($createdConfig && !$success) @unlink($configPath);
        // Never expose driver messages, stack traces, SQL or submitted passwords.
        $error = $e instanceof PDOException ? 'Datenbanktabellen konnten nicht angelegt werden. Prüfe die Rechte für CREATE, SELECT, INSERT und UPDATE in der vorhandenen Datenbank.' : $e->getMessage();
    } finally { if (is_resource($lock)) { flock($lock, LOCK_UN);fclose($lock); } }
}
?>
<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Binder Lab · STRATO-Setup</title><link rel="stylesheet" href="./styles.css"></head><body class="hub"><main class="hub-main"><a class="brand" href="./start.html"><span class="brand-icon">&lt;/&gt;</span>Binder<span>Lab</span></a><section class="hub-hero"><span class="eyebrow">DEINE LERNWERKSTATT EINRICHTEN</span><h1>Bereit für<br>dein Lernkonto.</h1><p>Das Setup verbindet deine vorhandene Datenbank, legt die drei benötigten Tabellen an und erstellt dein erstes Lernkonto. Bestehende lokale Übungsstände bleiben in deinem Browser.</p></section>
<?php if ($installed): ?>
<section class="track-card"><h2><?= $success ? 'Einrichtung abgeschlossen.' : 'Setup ist gesperrt.' ?></h2><p><?= $success ? 'Die Datenbank und dein erstes Konto sind eingerichtet. Du kannst dich jetzt auf der Startseite anmelden.' : 'Für diese Installation existiert bereits eine private Konfiguration. Dieses Setup kann keine Konten oder Zugangsdaten überschreiben.' ?></p><p>Entferne jetzt setup.php, setup-key.php und schema.sql aus dem öffentlichen Uploadordner. deployment.php und api.php bleiben dort. Die private Konfiguration liegt außerhalb des Webroots.</p><p>Die Anmeldung ist aktiv. Gerätesynchronisierung der Übungen wird separat ergänzt; deine bisherigen Lernstände bleiben vorerst lokal.</p><a class="primary" href="./start.html?setup=complete">Zur Anmeldung ↗</a></section>
<?php elseif (!$secure): ?><section class="track-card"><h2>HTTPS erforderlich</h2><p>Öffne das Setup mit https:// und dem Hostnamen deiner Subdomain.</p></section>
<?php elseif (!$requirements): ?><section class="track-card"><h2>PHP-Voraussetzungen prüfen</h2><p>Benötigt werden PHP 8.1 oder neuer, PDO MySQL und mbstring. Aktuelle PHP-Version: <?= h(PHP_VERSION) ?>.</p></section>
<?php elseif (!$keyReady): ?><section class="track-card"><h2>Installationsschlüssel fehlt</h2><p>Lade setup-key.php aus deinem persönlichen Setup-Paket mit hoch. Den Code aus INSTALLATIONSCODE.txt gibst du anschließend hier ein.</p></section>
<?php else: ?>
<?php if ($error): ?><p class="error-text" role="alert"><?= h($error) ?></p><?php endif; ?>
<section class="hub-account"><div><h2>Datenbank & Lernkonto</h2><p>Das Datenbankpasswort gehört zur STRATO-Datenbank. Das Passwort für dein Lernkonto legst du unabhängig davon fest.</p><p>Das Setup speichert Datenbankzugänge ausschließlich in einer privaten PHP-Datei außerhalb des Webroots. Das Lernpasswort wird nur als Hash gespeichert.</p><p>Die Tabellen werden bei Bedarf angelegt. Ein zusätzlicher manueller SQL-Import ist nicht nötig.</p></div><form method="post" autocomplete="off"><input type="hidden" name="csrf" value="<?= h($_SESSION['csrf']) ?>">
<label for="setup_code">Installationscode aus INSTALLATIONSCODE.txt</label><input id="setup_code" name="setup_code" type="password" required autocomplete="off">
<label for="db_host">Datenbankserver (ohne http://)</label><input id="db_host" name="db_host" required maxlength="253" value="<?= h($_POST['db_host'] ?? $defaults['host'] ?? '') ?>">
<label for="db_name">Datenbankname</label><input id="db_name" name="db_name" required maxlength="64" value="<?= h($_POST['db_name'] ?? $defaults['database'] ?? '') ?>">
<label for="db_user">Datenbankbenutzer</label><input id="db_user" name="db_user" required maxlength="80" value="<?= h($_POST['db_user'] ?? $defaults['user'] ?? '') ?>">
<label for="db_password">Datenbankpasswort</label><input id="db_password" name="db_password" type="password" required autocomplete="off">
<label for="display_name">Dein Anzeigename</label><input id="display_name" name="display_name" required maxlength="30" autocomplete="nickname" value="<?= h($_POST['display_name'] ?? '') ?>">
<label for="email">E-Mail für dein Lernkonto</label><input id="email" name="email" type="email" required maxlength="254" autocomplete="username" value="<?= h($_POST['email'] ?? '') ?>">
<label for="account_password">Neues Lernpasswort (12–72 Bytes)</label><input id="account_password" name="account_password" type="password" required minlength="12" maxlength="72" autocomplete="new-password">
<label for="account_password_repeat">Lernpasswort wiederholen</label><input id="account_password_repeat" name="account_password_repeat" type="password" required minlength="12" maxlength="72" autocomplete="new-password">
<label><input type="checkbox" name="registration_enabled" value="1"> Weitere Nutzer dürfen sich selbst registrieren</label><button class="primary" type="submit">Datenbank einrichten und Konto anlegen</button></form></section>
<?php endif; ?></main></body></html>
