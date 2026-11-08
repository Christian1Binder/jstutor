# Neue Übungen für jstutor erzeugen

Diesen Prompt gemeinsam mit dem aktuellen Repository verwenden. Vorher `data/m01.js`, ein Modul auf dem gewünschten Niveau, `runner.js` und `tests/validate.mjs` lesen.

---

Du erweiterst jstutor, eine deutschsprachige, eigenständige Browser-Lernplattform für HTML, modernes CSS und JavaScript. Erzeuge ein vollständig ausgearbeitetes Modul mit zehn verschiedenen, aufeinander aufbauenden Übungen. Zielgruppe: ältere Kinder ohne Vorkenntnisse bis erfahrene Wiedereinsteiger. Erkläre ruhig und konkret, nicht verniedlichend.

**Mein neues Thema:** [THEMA]
**Niveau und Position im Lernpfad:** [NIVEAU / NACH MODUL]
**Neue Stadt und Tag:** [STADT / TAG]

Arbeite direkt in diesem Repository. Keine externe Laufzeitbibliothek, kein CDN, keine Zugangsdaten, keine kostenpflichtige API. Die Anwendung bleibt GitHub-Pages-kompatibel. Keine KI-Anfragen während der Benutzung.

1. Lies den bisherigen Lernpfad. Erstelle vor den Aufgaben eine Übersicht aller vorausgesetzten und neu eingeführten Begriffe. Jeder vorausgesetzte Begriff muss vorher erklärt worden sein. Führe neue Konstrukte im Modulgrundwissen und unmittelbar in der betreffenden Aufgabe ein. Wenn eine Voraussetzung fehlt, ergänze eine Brücke statt sie stillschweigend zu erwarten.
2. Nutze das bestehende Modulformat exakt: `window.CURRICULUM.push({...})`. Modul: `id,title,city,tag,level,description,lesson,exercises`. Übung: `id,title,explanation,task,minutes,xp,focus,starter,solution,hints,tests,prerequisites,solutionNotes`. `starter` und `solution` enthalten jeweils die Strings `html,css,js`. `focus` ist `html`, `css` oder `js`. IDs und Tags müssen eindeutig und stabil sein.
3. Zehn **inhaltlich unterschiedliche** Aufgaben: vom geführten Einstieg zur Transferaufgabe und einem kleinen Abschlussprojekt. Keine künstlichen Zahlen- oder Textvarianten derselben Übung. Begrenze jedes Ziel verständlich. Jede Aufgabe läuft unabhängig vom Zustand der vorherigen Vorschau; der vorausgesetzte Wissensstand darf wachsen.
4. Der Startcode enthält nur bekannte Umgebung und nötiges Gerüst, aber nicht schon die Lösung des Lernziels. Vorgegebene Hilfsbausteine erklären. Nutzer können alle drei Felder verändern.
5. Drei individuelle, gestaffelte Tipps: erst Denkansatz, dann passender API-/Syntaxbaustein, zuletzt ein konkreter Teilschritt. Nicht dreimal dieselbe Erklärung. Eine kommentierte, tatsächlich lauffähige Musterlösung und eine Erläuterung der entscheidenden Zeilen liefern.
6. Tests bestehen aus `{label,code}`. `code` ist ein JavaScript-Ausdruck, der im gleichen async Funktionskontext **nach** dem Lösungscode ausgewertet wird. Er muss einen Wahrheitswert liefern, darf await verwenden und auf lokale Funktionen/Variablen zugreifen. Nutze mehrere Eingaben und sinnvolle Grenzfälle; prüfe Verhalten statt unnötig eine bestimmte Schreibweise vorzuschreiben. DOM-Prüfungen laufen in einem opaken iframe. Verlasse dich nicht auf Tastatur-Fokusmodalität oder exakte Subpixelgrößen. Starter müssen beim Prüfen scheitern, Musterlösungen bestehen. Die Prüfungen sind Lernhilfen, keine manipulationssichere Zertifizierung.
7. Verfügbar: `document`, `console`, Timer, Browser-APIs und ein flüchtiger, pro Ausführung leerer `localStorage`-Ersatz. `fetch` ist eine lokale Lern-API: `/api/cities` → `[{id:1,name:'Köln'},{id:2,name:'Bonn'}]`; `/api/weather` → `{city:'Köln',temperature:18}`; andere Pfade → 404. Abgebrochene Signale ergeben AbortError. Keine echten Netzanfragen. Erkläre den Unterschied zum produktiven fetch. Für zusätzliche Endpunkte erweitere bewusst `runner.js` und teste Fehlerpfade.
8. Registriere die neue Datei in index.html und sw.js, erhöhe die Cacheversion und passe alle bisherigen 20/200-Annahmen, Zähler, Modulpositionen und Testgrenzen an. Erweitere die Autorenquelle `scripts/build_curriculum.py` oder dokumentiere einen gezielten Wechsel der Quelle; das nächste Generieren darf das neue Modul nicht verlieren.
9. Führe `npm test` und `npm run build` aus. Ergänze/benutze den Browser-Test aus `tests/browser.html`, teste alle Musterlösungen und verifiziere neue Starter. Kontrolliere responsive Ansicht, Lernkartenposition und Offline-Dateiliste. Bestehende IDs niemals umnummerieren, weil Fortschritte daran hängen.
10. Berichte die neuen Lernziele, den genauen Umfang und die tatsächlich ausgeführten Prüfungen. Behaupte keine erfolgreiche Browserprüfung, wenn du sie nicht ausgeführt hast.

---

## Wo die Inhalte liegen

`data/mXX.js` ist das Browserformat. `scripts/build_curriculum.py` ist die reproduzierbare Autorenquelle der ersten 200 Übungen. `python scripts/build_curriculum.py` schreibt diese Module neu. Zum normalen Hosten ist kein Python nötig.

## Verbindlicher didaktischer Standard ab Version 1.1

Lies zusätzlich `scripts/pedagogy.py`. Die dortigen redaktionellen Inhalte ergänzen die Autorenquelle dauerhaft. Jede Übung besitzt jetzt `concept` (`example`, `explanation`, `note`), `requirements` (Liste aus `label`, `text`) und `examples` (Liste aus `input`, `expected`, `context`).

- Erkläre zuerst die Funktionsweise und die einzelnen Syntaxbestandteile. Zeige ein bewusst anderes Beispiel; es darf keine ungelernte Voraussetzung einschmuggeln.
- Benenne Arbeitsbereich, verbindliche IDs/Funktions-/Variablennamen, Eingaben und Rückgaben. Trenne genaue Textvorgaben von frei gewählter Gestaltung. Jeder Test muss aus dem sichtbaren Vertrag ableitbar sein.
- Schreibe drei Hinweise als Denkfrage, Erklärung und Diagnosehilfe. Keine vollständigen HTML-/CSS-/JS-Lösungen in den Hinweisen; auch keine erste/letzte Zeile aus der Musterlösung extrahieren.
- Erwartete Ergebnisse beschreiben Ein-/Ausgaben, keine Implementierung. Mehrere ereignisabhängige Ergebnisse benötigen einen Kontext, damit sie nicht widersprüchlich erscheinen.
- In Tests stehen `__text(selector)` und `__normalize(text)` für den Vergleich von sichtbarem DOM-Text bereit. Sie vereinheitlichen Whitespace und gerade/typografische Apostrophe. Inhaltlich falsche Texte bleiben falsch. Vergleiche Quelltext nur, wenn die konkrete Technik selbst das erklärte Lernziel ist.
- Führe neben Musterlösungen auch gültige Alternativen und bewusst falsche Gegenbeispiele aus. Ergänze `tests/variants.html` bei geänderten Prüfregeln.
