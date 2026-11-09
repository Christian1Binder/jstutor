<?php
declare(strict_types=1);
// PHP 8.1+. Copy only this file to the web root as api.php after migration.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function reply(array $data, int $status = 200): never { http_response_code($status); echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR); exit; }
function fail(string $message, int $status): never { reply(['error'=>$message], $status); }
require __DIR__ . '/deployment.php';
$configPath = tutor_config_path();
if (!$configPath || !is_readable($configPath)) reply(['error'=>'Konten sind noch nicht eingerichtet.','code'=>'not_configured'], 503);
$config = require $configPath;
if (!tutor_https()) fail('Anmeldung benötigt HTTPS.', 400);
ini_set('session.use_strict_mode', '1');
session_name('binder_tutor');
session_set_cookie_params(['lifetime'=>0,'path'=>'/','secure'=>true,'httponly'=>true,'samesite'=>'Lax']);
session_start();
$_SESSION['csrf'] ??= bin2hex(random_bytes(32));
$action = $_GET['action'] ?? 'session';
$method = $_SERVER['REQUEST_METHOD'];
$write = in_array($action, ['login','register','logout'], true) || ($action === 'state' && $method === 'POST');
if ($write) {
    if ($method !== 'POST') fail('POST erforderlich.', 405);
    if (!hash_equals($_SESSION['csrf'], $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '')) fail('Sitzung abgelaufen. Seite neu laden.', 403);
    if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 12000000) fail('Anfrage zu groß.', 413);
    $raw = file_get_contents('php://input', false, null, 0, 12000001);
    if (strlen($raw) > 12000000) fail('Anfrage zu groß.', 413);
    try { $data = json_decode($raw, true, 64, JSON_THROW_ON_ERROR); } catch (Throwable $e) { fail('Ungültige JSON-Daten.', 400); }
    if (!is_array($data)) fail('Ungültige Anfrage.', 400);
} elseif ($method !== 'GET') fail('Methode nicht unterstützt.', 405);
try {
    $db = new PDO($config['dsn'], $config['user'], $config['password'], [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES=>false]);
    if ($action === 'session') reply(['user'=>$_SESSION['user'] ?? null,'csrf'=>$_SESSION['csrf'],'registrationEnabled'=>!empty($config['registration_enabled'])]);
    if ($action === 'login' || $action === 'register') {
        $email = strtolower(trim((string)($data['email'] ?? '')));
        $password = (string)($data['password'] ?? '');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email)>254 || strlen($password)<12 || strlen($password)>72) fail('Gültige E-Mail und Passwort mit 12 bis 72 Zeichen erforderlich.', 400);
        $hash = hash('sha256', $email);
        $stmt=$db->prepare('SELECT COUNT(*) FROM tutor_login_attempts WHERE email_hash=? AND attempted_at > DATE_SUB(NOW(), INTERVAL 15 MINUTE)');$stmt->execute([$hash]);
        if ((int)$stmt->fetchColumn()>=8) fail('Zu viele Versuche. Bitte später erneut versuchen.',429);
        $db->prepare('INSERT INTO tutor_login_attempts(email_hash) VALUES (?)')->execute([$hash]);
        $db->exec('DELETE FROM tutor_login_attempts WHERE attempted_at < DATE_SUB(NOW(), INTERVAL 1 DAY)');
        if ($action === 'register') {
            if (empty($config['registration_enabled'])) fail('Registrierung ist noch nicht freigeschaltet.',403);
            $name=trim((string)($data['name'] ?? ''));
            if ($name==='' || mb_strlen($name)>30) fail('Anzeigename mit 1 bis 30 Zeichen erforderlich.',400);
            try { $db->prepare('INSERT INTO tutor_users(email,name,password_hash) VALUES (?,?,?)')->execute([$email,$name,password_hash($password,PASSWORD_DEFAULT)]); } catch (PDOException $e) { if ($e->getCode()==='23000') fail('Konto konnte nicht erstellt werden. Prüfe die Angaben oder verwende die Anmeldung.',409); throw $e; }
        }
        $stmt=$db->prepare('SELECT id,email,name,password_hash FROM tutor_users WHERE email=?');$stmt->execute([$email]);$user=$stmt->fetch(PDO::FETCH_ASSOC);
        $valid=password_verify($password,$user['password_hash'] ?? '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.');
        if (!$user || !$valid) fail('Anmeldung fehlgeschlagen.',401);
        if (password_needs_rehash($user['password_hash'], PASSWORD_DEFAULT)) $db->prepare('UPDATE tutor_users SET password_hash=? WHERE id=?')->execute([password_hash($password,PASSWORD_DEFAULT),$user['id']]);
        session_regenerate_id(true);$_SESSION['csrf']=bin2hex(random_bytes(32));$_SESSION['user']=['id'=>(string)$user['id'],'name'=>$user['name'],'email'=>$user['email']];
        $db->prepare('DELETE FROM tutor_login_attempts WHERE email_hash=?')->execute([$hash]);
        reply(['user'=>$_SESSION['user'],'csrf'=>$_SESSION['csrf']]);
    }
    if ($action === 'logout') { $_SESSION=[];session_regenerate_id(true);$_SESSION['csrf']=bin2hex(random_bytes(32));reply(['user'=>null,'csrf'=>$_SESSION['csrf']]); }
    if ($action === 'state') {
        if (empty($_SESSION['user'])) fail('Anmeldung erforderlich.',401);
        $track = $method==='POST' ? ($data['track'] ?? '') : ($_GET['track'] ?? '');
        if (!in_array($track,['javascript','powershell'],true)) fail('Unbekannter Lernpfad.',400);
        $userId=$_SESSION['user']['id'];
        if ($method==='GET') { $stmt=$db->prepare('SELECT revision,state_json FROM tutor_states WHERE user_id=? AND track=?');$stmt->execute([$userId,$track]);$row=$stmt->fetch(PDO::FETCH_ASSOC);reply(['revision'=>$row?(int)$row['revision']:0,'state'=>$row?json_decode($row['state_json'],true):null]); }
        $state=$data['state'] ?? null;$revision=$data['revision'] ?? null;
        if (!is_int($revision)||$revision<0||!is_array($state)||($state['version']??null)!==1||!is_array($state['profiles']??null)||count($state['profiles'])>30) fail('Ungültiger Lernstand.',400);
        $json=json_encode($state,JSON_THROW_ON_ERROR);
        if (strlen($json)>11000000) fail('Lernstand zu groß.',413);
        $db->beginTransaction();
        if ($revision===0) { try {$db->prepare('INSERT INTO tutor_states(user_id,track,state_json) VALUES (?,?,?)')->execute([$userId,$track,$json]);}catch(PDOException $e){$db->rollBack();if($e->getCode()==='23000')fail('Lernstand wurde inzwischen geändert. Zuerst neu laden.',409);throw $e;} }
        else { $stmt=$db->prepare('UPDATE tutor_states SET state_json=?,revision=revision+1 WHERE user_id=? AND track=? AND revision=?');$stmt->execute([$json,$userId,$track,$revision]);if($stmt->rowCount()!==1){$db->rollBack();fail('Lernstand wurde inzwischen geändert. Zuerst neu laden.',409);} }
        $db->commit();reply(['revision'=>$revision+1]);
    }
    fail('Unbekannte Aktion.',404);
} catch (Throwable $e) { error_log('Tutor API: '.$e->getMessage());fail('Serveranfrage fehlgeschlagen.',500); }
