# Vorbereitete STRATO-Anmeldung (noch nicht aktiviert)

Statischer Betrieb bleibt vollständig möglich. `platform-config.js` hat `apiUrl:null`; dann werden keine Kontoanfragen gesendet und die Eingabefelder sind deaktiviert. JS- und PS-Fortschritt liegen weiterhin in getrennten lokalen Speichern. Vorhandene JS-Tutor-Profile bleiben kompatibel. Es gibt noch keine automatische Synchronisierung oder Zusammenführung mit dem Server.

## Einrichtung nach dem Umzug

1. PHP 8.1+ mit PDO MySQL und mbstring sowie HTTPS bereitstellen.
2. `schema.sql` einmal in der ausgewählten MySQL/MariaDB-Datenbank ausführen.
3. `config.example.php` außerhalb des öffentlich erreichbaren Webroots kopieren und dort die echten Datenbankzugänge eintragen. Auf diesen Pfad über die Server-Umgebungsvariable `BINDER_TUTOR_CONFIG` verweisen. Keine Zugangsdaten ins Repository einchecken.
4. Ausschließlich `api.php` in den Webroot kopieren. Konfiguration, SQL und diese Dokumentation werden vom statischen Build nicht veröffentlicht. Der Webroot muss über HTTPS erreichbar sein, da der Sitzungscookie Secure ist.
5. Registrierung bei Bedarf in der privaten Konfiguration aktivieren. `platform-config.js` auf `apiUrl:'./api.php'` umstellen und den statischen Offline-Cache versionieren. Nach der Konfigurationsänderung muss das Website-Update übernommen werden.
6. Kontoabläufe auf dem Zielserver prüfen, bevor echte Nutzer zugelassen werden: Registrierung, Anmeldung, Abmeldung, ungültige CSRF-Tokens, Fehlversuche, Benutzerisolation und konkurrierende Speicherrevisionen. PHP/MySQL waren in der Entwicklungsumgebung nicht verfügbar; die Vorlage ist noch nicht im Zielbetrieb verifiziert.

## Schnittstelle

Alle Antworten sind JSON, Kontodaten werden nicht offline gecacht. Same-Origin-Sitzung, HttpOnly/Secure/SameSite-Lax-Cookie; keine Tokens in localStorage.

- `GET api.php?action=session`: `{user,csrf}`; vor schreibenden Aktionen abrufen.
- `POST ...?action=register`: `{name,email,password}`; Passwort 12–72 Bytes, `password_hash`/`password_verify`.
- `POST ...?action=login`: `{email,password}`; Sitzungs-ID wird gewechselt. Acht Versuche je E-Mail in 15 Minuten begrenzen Fehlversuche.
- `POST ...?action=logout`: `{}`.
- Schreibende Anfragen verlangen `X-CSRF-Token` aus der Sitzung.
- `GET ...?action=state&track=javascript` bzw. `powershell`: `{state,revision}` für das angemeldete Konto.
- `POST ...?action=state`: `{track,state,revision}`; revision=0 erzeugt den ersten Stand. Veraltete Revisionen liefern HTTP 409, damit ein anderer Gerätestand nicht blind überschrieben wird.

`account.js` stellt die Methoden unter `TutorAccount` bereit. Die Anmeldung lässt sich nach Einrichtung direkt auf start.html verwenden. Laden/Speichern der Übungen wird bewusst erst mit einer expliziten Konflikt- und Importoberfläche angeschlossen. Lokale Backups sollten vor dieser späteren Migration exportiert werden. Für einen öffentlichen Produktivbetrieb fehlen außerdem E-Mail-Bestätigung und ein Passwort-zurücksetzen-Ablauf; eine E-Mail-Versandinfrastruktur ist nicht Bestandteil dieses statischen Projekts.
