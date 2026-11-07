# Serverumzug und Nutzeranmeldung

## Was heute funktioniert

Die erste Version ist eine rein statische Anwendung. Lokale Profile sind **keine Benutzerkonten** und keine Sicherheitsgrenze. Sie trennen Lernstände auf demselben Browser, bieten aber keinerlei Zugriffsschutz. Es werden keine E-Mail-Adressen, Passwörter oder Session-Token erfasst. Synchronisierung und echte Anmeldung sind bewusst deaktiviert (`JSTAuth.enabled === false`).

`JSTStore` in `storage.js` kapselt Lese-/Schreibzugriff, Profilwechsel, Import und Export. Die UI verwendet diesen Adapter. Bei einer Serverintegration asynchrone Speicheroperationen ausdrücklich abbilden; nicht stillschweigend den synchronen Vertrag ändern. Der lokale Export Version 1 bleibt als Migrationsquelle erhalten.

## Ziel auf Binder-lab

PHP 8.2+ und MySQL 8 / MariaDB auf einer HTTPS-Subdomain. Statische Assets können unverändert ausgeliefert werden. `schema.sql` ist ein vorbereiteter Datenentwurf, kein fertiges Anmeldesystem. Keine produktiven Endpunkte sind implementiert.

Vorgesehene Same-Origin-Endpunkte unter `/api/v1`:

| Methode | Pfad | Vertrag |
|---|---|---|
| GET | /auth/session | `{user:null}` oder `{user:{id,displayName},csrfToken}` |
| POST | /auth/register | E-Mail, Name, Passwort; Verifizierung erforderlich |
| POST | /auth/login | Session setzen; generische Fehlermeldungen |
| POST | /auth/logout | Session widerrufen |
| POST | /auth/password-reset | Generische Bestätigung, kurzlebiger Einmaltoken |
| GET | /learning-state | Eigenen versionierten Stand und revision liefern |
| PUT | /learning-state | Änderungen mit erwarteter revision; Konflikt 409 |
| POST | /learning-state/import | Geprüften lokalen Export dem angemeldeten Konto zuordnen |

## Vor Aktivierung zu implementieren

- Serverseitige Authentifizierung und Autorisierung jeder Anfrage. Nutzer-ID aus Session ableiten, niemals aus einem unkontrollierten UI-Parameter übernehmen.
- `password_hash` mit PASSWORD_ARGON2ID, falls verfügbar, sonst PASSWORD_DEFAULT; `password_verify`, Rehash und Rate-Limiting. Keine selbst entworfene Kryptografie.
- Sessions in Secure/HttpOnly/SameSite-Cookies; Session-ID nach Anmeldung erneuern; CSRF-Token für schreibende Anfragen, Session-Widerruf bei Logout. Keine Tokens in localStorage.
- Verifizierte E-Mail, Passwortreset mit gehashtem Einmaltoken und Ablauf. Keine Passwörter per E-Mail.
- Serverseitige Eingabe- und Größenprüfung, vorbereitete SQL-Statements und Berechtigungsprüfungen. Fehler intern protokollieren, keine internen Details an Clients geben.
- Conflict-aware Synchronisierung mit revision/updated_at; mehrere Geräte dürfen sich nicht stillschweigend überschreiben. Erst nach ausdrücklicher Kontozuordnung importieren.
- Rollen serverseitig; XP und Prüfungen sind heute lokal und veränderbar. Für Wettbewerbe oder Zertifikate braucht es ein eigenes serverseitiges Vertrauensmodell.
- Aufbewahrung/Löschung, Datenexport, Wiederherstellung und Backups festlegen. Offline-Cache enthält nur öffentliche Assets, niemals personalisierte API-Antworten.

## Vorschau-Isolation

`runner.js` verwendet iframe sandbox=allow-scripts **ohne** allow-same-origin sowie eine Netzwerk-CSP. Fremder Code erhält keinen Zugriff auf die Hauptanwendung oder deren Speicherung. Lokale APIs sind Simulationsdaten. Der Übungsspeicher wird bei jedem Lauf neu angelegt. Vorschau-Code kann seine eigenen Prüfungen beeinflussen; die Plattform ist eine Lernwerkstatt, keine Prüfungsplattform.

Eine CPU-Endlosschleife kann einen Browser-Renderer blockieren; ein Zeit-Hinweis ist keine garantierte Ausführungsunterbrechung. Für einen öffentlichen Mehrbenutzerbetrieb sind weitergehende Ressourcenbegrenzungen und eine dedizierte Sandbox-Domain zu prüfen.
