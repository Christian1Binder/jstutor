# PS-Tutor: Übungen erweitern

Die 20 Module liegen einzeln unter `ps/data/m01.js` bis `m20.js`. Jede Datei ergänzt `window.CURRICULUM`. Die Oberfläche, Speicherverwaltung und Editoren werden mit JS-Tutor geteilt; die PowerShell-Ausführung ist ein eigenständiger, begrenzter Interpreter in `ps/engine.js` und läuft im Worker.

## Prompt für neue Übungen

> Erstelle ein didaktisch aufbauendes PS-Tutor-Modul mit zehn unterschiedlichen Übungen im Schema der vorhandenen Datei ps/data/mXX.js. Ziel: Grundlagen sicher anwenden. Beschreibe Eingaben, verlangte Verarbeitung und jede erwartete Ausgabe ausdrücklich. Erkläre jede neue Syntax vor ihrer ersten Anwendung. Zeige ein paralleles Beispiel mit anderen Daten. Drei gestufte Tipps erklären Prinzip und Vorgehen; sie enthalten keine vollständige Lösung. Hinterlege getrennt eine nachvollziehbare Musterlösung und deren Erläuterung. Verwende ausschließlich bereits erklärte Bausteine und den in ps/runtime.html dokumentierten Interpreterumfang. Systemaufgaben müssen mit ausdrücklich simulierten Daten oder virtuellen Dateien arbeiten. Keine echten System- oder Netzwerkzugriffe voraussetzen. Tests enthalten unabhängig ermittelte erwartete Ausgabezeilen unter tests[0].expected. Jeder Test muss auch falsche Ausgabe zurückweisen. Die Aufgaben werden über Verhalten, nicht exakten Quelltext geprüft. IDs sind mXX-01 bis mXX-10. prerequisites dürfen nur frühere IDs enthalten. Starterdaten bleiben in starter.js; html und css sind leere Strings. focus ist js (internes Speicherfeld für PowerShell). Verwende bestehende Beispiele nur zur Schemaorientierung, erzeuge neue Lernaufgaben.

Nach Bearbeitung `npm test` ausführen. `tests/powershell.cjs` prüft alle 200 Musterlösungen und Speicherisolation. Für zusätzliche Browserprüfung `tests/ps-browser.html` in den fertigen dist-Ordner kopieren und über den Previewhost öffnen. Die Testseite gehört nicht zur Veröffentlichung.

Für neue Syntax muss zuerst der Interpreter erweitert werden. Unterstützte Syntax, Beschränkungen und Unterschiede zu PowerShell sind auf `ps/runtime.html` offengelegt. Nicht unterstützte Befehle dürfen nicht stillschweigend Ergebnisse vortäuschen.

## Fachliche Referenzen

- https://learn.microsoft.com/powershell/scripting/learn/deep-dives/everything-about-arrays
- https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_return
- https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/convertfrom-csv

Der Interpreter ist eine eigene Implementierung und verwendet keinen Code aus dem experimentellen PSWasm-Projekt. Ein Funktionsvergleich mit der vollständigen Microsoft-PowerShell ist nicht zugesichert. Windows-spezifische Administration, Remoting, Module und fortgeschrittene .NET-Nutzung benötigen eine echte PowerShell-Testumgebung.
