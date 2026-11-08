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

## Überarbeitung 1.1 – verständlichere Aufgaben und lesbare Proportionen

- Alle 200 Übungen erhalten eine zusätzliche Mechanikerklärung und ein fachlich verwandtes Beispiel mit anderen Inhalten. Verbindliche Namen, Arbeitsbereich und Freiheiten werden sichtbar; aus den Tests abgeleitete Ein-/Ausgabebeispiele zeigen den Vertrag ohne Implementierung. Bei mehreren Prüffällen wird ihr Kontext mit angezeigt.
- Konkrete bisher versteckte Anforderungen wurden in 21 Aufgaben ausdrücklich beschrieben (u. a. Formular-IDs, Feldnamen, Ausgabetexte, globale Ladevariable und Verhalten des Zählers). Die Aufgaben-IDs und das Speicherformat bleiben erhalten.
- Die drei Tipps jeder Übung sind jetzt Denkfrage, Konzepterklärung und Diagnosehilfe. Die frühere Ableitung aus der ersten/letzten Musterlösungszeile ist entfernt. Ein automatischer Test weist mehrzeilige Codeblöcke, HTML-Tags und Funktions-/Variablendeklarationen in Tipps zurück.
- Sichtbare DOM-Texte werden bei den betroffenen Prüfungen über `__text`/`__normalize` verglichen: Einrückung, mehrfacher Whitespace und gerade/typografische Apostrophe sind gleichwertig. Falsche Texte und falsche Daten bleiben falsch.
- Chrome-Browserlauf: **200/200 Musterlösungen bestanden**. Sieben zusätzliche Varianten/Gegenproben sind korrekt bewertet: eingerückte Überschrift, falscher Text, gerades Apostroph, mehrzeilige Liste, Arrow Function, hartcodierte Ausgabe ohne Funktion sowie falsche Formular-ID.
- Node-Prüfungen für Schema, Syntax, Speicherlogik, Assets sowie den neuen didaktischen Vertrag bestanden; statischer Build erfolgreich.
- Schriftgrößen verwenden relative Einheiten. Erklärungstext 16px, ab 1600px Fensterbreite 18px; Editorcode 15px bzw. 16,875px. Bedienelemente und Abstände wachsen entsprechend. Mobil-/Tabletprüfung ohne horizontales Überlaufen der Lernkarte.
- Die Offline-Cacheversion wurde erhöht. Die neue Anwendung kann künftig verfügbare Updates mit einem bewussten Aktualisieren-Button aktivieren, nachdem der aktuelle Entwurf gespeichert wurde. Beim ersten Wechsel von 1.0 auf 1.1 müssen gegebenenfalls alle alten Website-Tabs einmal geschlossen werden; Websitedaten nicht löschen, da darin Lernstände liegen.

Zusätzlich bei 1920px Außenbreite gemessen: 1905px Inhalt ohne horizontales Überlaufen, Erklärung 18px und Editor 16,875px. Sprungnavigation zwischen Verstehen, Aufgabe und Tipps im Browser geprüft.

## Version 1.1.1 – ursprüngliche Standardgröße, persönliche Vergrößerung

- Standardgrößen aus dem ursprünglichen Stylesheet wiederhergestellt; die neu hinzugekommenen Lernabschnitte verwenden dazu passende kompakte Größen.
- Kopfzeilenauswahl Standard/Groß/Sehr groß skaliert UI-Texte um 1/1,2/1,4. Kein Browserzoom, keine Veränderung der eigenen Vorschau.
- Browserprüfung: Erklärungstext 12px bei Standard, 14,4px bei Groß und 16,8px bei Sehr groß. Groß blieb nach Neuladen ausgewählt; Rückkehr zu Standard funktioniert.
- Speicherprüfungen: fehlende/ungültige Präferenz fällt auf Standard zurück; neue Profile beginnen bei Standard; Profilwechsel erhält die jeweilige Auswahl; Export/Import bewahrt die Auswahl.
- Syntax-, Inhalts-, Speicher- und Assetprüfungen sowie statischer Build erfolgreich. Übungsinhalte und ihre Prüfungen wurden nicht verändert.

## Version 1.2 – Flexible Editoren

- Schema-, Syntax-, Profil- und Importtests für 200 Übungen erfolgreich; neue Prüfungen für Workspace-Defaults, ungültige Einstellungen, minimierte Editoren und Export/Import erfolgreich.
- Statischer Build enthält lokal gebündelten CodeMirror samt Lizenztexten und Offline-Cache-Einträgen.
- Echter Browser: Syntaxfarben und Zeilennummern für HTML/CSS/JS sichtbar; Ctrl+Enter führt aus, Ctrl+Shift+Enter prüft eine Lösung erfolgreich (45 XP).
- Navigation aus-/einblendbar; ausgeblendete Navigation gibt die gesamte Seitenbreite frei. Nebeneinander/untereinander, einzelne Minimierung, Soloansicht und vollständig minimierter Zustand funktionieren.
- Neuladen bewahrt Code, Anordnung, Navigation und minimierte Editoren. Zurücksetzen stellt Startcode in CodeMirror wieder her.
- Responsive-Prüfung im 390px- und 768px-Frame: Dokumentbreite entspricht Scrollbreite, kein horizontales Überlaufen der Seite. Schmale Editoren werden gestapelt.
- Screenshot: `docs/screenshots/editors-v1.2.jpg`.
