# Validierung der ersten Version

## Ausgeführt

- `node tests/validate.mjs`: 20 Module, 200 eindeutige Übungen, erforderliche Inhalte, drei Tipps, Start-/Lösungscode, JavaScript-Syntax aller Lösungen und Tests, gültige Vorgänger-IDs, Profiltrennung und validierter Import/Export. Zusätzlich lokale Assetreferenzen und HTML ohne externe Laufzeitressourcen.
- `node scripts/build.mjs`: statischer Build ohne Installation externer Pakete.
- Chrome im Browser: **200/200 Musterlösungen** mit den jeweiligen Prüfungen im isolierten Vorschau-iframe bestanden.
- Gegenprobe aller 200 Startcodes: 199 wurden unmittelbar korrekt abgelehnt. Bei `m12-06` wurde eine zu schwache Reset-Prüfung entdeckt und um einen vorherigen Zähltest ergänzt. Die korrigierte Aufgabe wurde anschließend gezielt erneut geprüft: Musterlösung besteht beide Prüfungen, unveränderter Startcode wird abgelehnt.
- Manuell im Browser: erste HTML-Aufgabe schreiben und prüfen; XP-Vergabe; Suche nach Wetterwidget; heller/dunkler Modus; Tipp aufdecken; Lösung bewusst freigeben und übernehmen; API-Widget ausführen; Kennzeichnung „Mit Musterlösung“; neues lokales Profil mit getrenntem Fortschritt; Profil bleibt nach Neuladen aktiv.
- Responsive Prüfung über echte eingebettete Viewports: 390px und 768px Außenbreite (375px/753px Inhaltsbreite nach Scrollbar), keine horizontale Überbreite auf der Lernkarte. Desktop-Gestaltung und Werkstatt visuell geprüft.
- GitHub Actions im ersten Veröffentlichungsversuch: Code-/Inhaltsprüfung erfolgreich; Pages-Konfiguration scheitert mit `Resource not accessible by integration`. Pages muss einmalig vom Repository-Inhaber aktiviert werden. Der Workflow trennt deshalb jetzt Prüfung/Build/Artefakt und Veröffentlichung in eigene Jobs.

## Grenzen dieser Prüfung

Keine behauptete Prüfung auf physischem iPad, Safari oder Arbeits-PC. Die Offline-Dateiliste wurde geprüft; ein tatsächlicher Flugmodus-Test auf einem Endgerät wurde nicht durchgeführt. Live-APIs und produktive Anmeldung sind nicht Bestandteil dieser statischen Version. Die Musterlösungsprüfungen decken die formulierten Lernziele ab, beweisen keine vollständige Fehlerfreiheit für beliebigen eigenen Code.
