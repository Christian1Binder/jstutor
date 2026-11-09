# STRATO-Setup und gemeinsame Anmeldung

Die Plattform läuft weiterhin auch ohne Anmeldung. Auf PHP-Hosting erkennt die Startseite den Konto-Endpunkt automatisch. Vor der Einrichtung und auf rein statischem Hosting sind die Kontoeingaben deaktiviert. JS- und PS-Lernstände bleiben zunächst lokal; Gerätesynchronisierung wird separat angeschlossen.

## Einfacher Weg: Setup-Paket

`npm run package:strato -- --output /absoluter/pfad/strato-setup.zip` baut die Plattform und erzeugt ein privates Upload-Paket. Optional lassen sich `--host`, `--database` und `--user` zum Vorbelegen angeben. Das Skript nimmt **kein Datenbankpasswort** entgegen. Es benötigt Node und Python, aber keine npm-Installation für den normalen statischen Build.

Das Paket enthält:

- `upload/`: die vollständige Plattform und zusätzlich `api.php`, `deployment.php`, `setup.php`, `setup-key.php`, `schema.sql`.
- `INSTALLATIONSCODE.txt`: einen zufälligen Installationscode. Diese Datei privat behalten und **nicht hochladen**. Der Webspace erhält nur den SHA-256-Hash des Codes in der ausführbaren PHP-Schlüsseldatei. Die Benutzerangaben zum Vorbelegen sind nur im persönlichen Paket enthalten, nicht im Repository.

1. Nur den Inhalt von `upload/` ins Root der Lernplattform hochladen.
2. `https://DEINE-SUBDOMAIN/setup.php` öffnen.
3. Installationscode eingeben, die Datenbankangaben prüfen und das Datenbankpasswort eintragen.
4. Anzeigename, E-Mail und ein **unabhängiges** neues Passwort für das erste Lernkonto festlegen. Weitere Selbstregistrierungen sind optional und standardmäßig ausgeschaltet.
5. Setup ausführen. Es legt drei Tabellen mit `CREATE TABLE IF NOT EXISTS` an und erstellt das erste Konto. Vorhandene Konten werden nicht ersetzt; wenn bereits Lernkonten vorhanden sind, wird abgebrochen. Ein manueller SQL-Import ist nicht nötig.
6. Nach Erfolg `setup.php`, `setup-key.php` und `schema.sql` vom öffentlichen Webspace entfernen. `api.php` und `deployment.php` bleiben dort. Die private Konfiguration darf nicht gelöscht werden.
7. Alte Website-Tabs schließen und den Anmeldelink aus dem Setup öffnen. Der Link umgeht alte HTML-Cacheeinträge; die neuen Kontoskripte sind versioniert. Vorhandene lokale Lernstände brauchen nicht gelöscht zu werden.

PHP 8.1+ mit PDO MySQL und mbstring sowie HTTPS sind erforderlich. Die Datenbank muss bereits bei STRATO angelegt sein und der angegebene Benutzer braucht Rechte für CREATE, SELECT, INSERT, UPDATE und DELETE in dieser Datenbank. Das Setup erstellt keine zusätzliche Datenbank.

## Private Konfiguration

`deployment.php` ermittelt anhand von DOCUMENT_ROOT einen Ordner **neben** dem öffentlichen Webroot. Jede Installation erhält einen eigenen Namen `.binder-tutor-<hash>`. Dort liegt `config.php` mit den Datenbankzugängen. Der private Ordner muss vom PHP-Webspace-Benutzer angelegt/beschrieben werden dürfen. Das Setup verweigert eine Konfiguration innerhalb des aktuellen öffentlichen Webroots. Bei abweichendem Hosting kann `BINDER_TUTOR_CONFIG` weiterhin einen privaten absoluten Konfigurationspfad vorgeben.

Das Vorhandensein der Konfiguration sperrt das Setup. Zusätzlich verhindert eine Dateisperre parallele Installationsdurchläufe. Bei regulären Fehlern wird eine eventuell begonnene Benutzertransaktion zurückgerollt und eine unvollständige neue Konfiguration entfernt. MySQL kann DDL-Anweisungen automatisch committen; bereits angelegte Tabellen bleiben nach einem Fehler bestehen und können mit demselben Setup weiterverwendet werden. Ein abrupter Prozessabbruch zwischen Dateiablage und Transaktionsabschluss erfordert gegebenenfalls eine manuelle Prüfung der privaten Konfiguration und Tabelle tutor_users.

Datenbankpasswörter und Lernpasswörter werden nach Fehlern nicht wieder ins Formular geschrieben. Lernpasswörter werden mit password_hash gespeichert und password_verify geprüft. Sitzungen verwenden Secure-/HttpOnly-/SameSite-Cookies, Login wechselt die Sitzungs-ID. Schreibende API-Anfragen verlangen ein CSRF-Token. Acht Versuche je E-Mail in 15 Minuten begrenzen Anmeldeversuche.

## Manuelle Einrichtung statt Setup

`schema.sql` kann alternativ über STRATO/phpMyAdmin importiert werden. Danach `config.example.php` privat ablegen, Zugangsdaten eintragen und `BINDER_TUTOR_CONFIG` setzen oder den von deployment.php berechneten privaten Pfad verwenden. `api.php` und `deployment.php` gehören zusammen in den Webroot. Für das erste Konto entweder vor dem Import eines Benutzers das Setup verwenden oder Selbstregistrierung in der privaten Konfiguration aktivieren und anschließend nach Bedarf wieder deaktivieren.

## API-Vertrag

Antworten sind JSON und werden nie im Service-Worker gecacht. Der Konto-Client liegt in `account.js`.

- `GET api.php?action=session`: `{user,csrf,registrationEnabled}`. Ohne Konfiguration HTTP 503 mit `code:not_configured`.
- `POST ...?action=register`: `{name,email,password}`; Passwort 12–72 Bytes. Nur bei freigeschalteter Registrierung.
- `POST ...?action=login`: `{email,password}`.
- `POST ...?action=logout`: `{}`.
- Alle POST-Aufrufe verlangen `X-CSRF-Token` aus der Sitzung.
- `GET ...?action=state&track=javascript` bzw. `powershell`: `{state,revision}` für das angemeldete Konto.
- `POST ...?action=state`: `{track,state,revision}`. Revision 0 erzeugt den ersten Stand, eine veraltete Revision liefert HTTP 409.

Die Speicherendpunkte sind vorbereitet. Die Oberfläche synchronisiert die Übungsstände noch nicht automatisch. Eine Konflikt- und Importoberfläche sowie E-Mail-Verifikation und ein Passwort-zurücksetzen-Ablauf sind separate nächste Schritte.

## Prüfung

PHP-Syntax und Pfade: `php -l server/setup.php`, `php -l server/api.php`, `php -l server/deployment.php`, `php tests/deployment.php`.

Zusätzlich wurde die Einrichtung mit PHP 8.3 und einer lokalen MariaDB 10.11 geprüft: HTTPS-Prüfung, falscher Setupcode, Tabellenerstellung, erstes Konto, private Konfiguration, erneute Setupsperre, Login, CSRF-Ablehnung, abgeschaltete Registrierung, Zustandsablage mit Revisionskonflikt, Abmeldung und Ablehnung unangemeldeter Zustandsabfragen. STRATO-Zugangsdaten wurden dabei nicht verwendet. Die erste Verbindung zur tatsächlichen Datenbank stellt das Setup auf deinem Webspace her.
