window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m14",
  "title": "Asynchron und mit APIs",
  "city": "Köln",
  "tag": "async",
  "level": 3,
  "description": "Promises, Fehler und kontrollierte Datenquellen.",
  "lesson": "Ein Promise steht für ein späteres Ergebnis. async-Funktionen liefern immer ein Promise; await wartet darin auf dessen Ergebnis. try/catch fängt Fehler, throw new Error(\"Text\") erzeugt einen Fehler. fetch(url) liefert eine Response; prüfe response.ok und lies Daten mit await response.json(). Unsere Werkstatt stellt fetch als lokale Lern-API bereit: /api/cities liefert [{id:1,name:\"Köln\"},{id:2,name:\"Bonn\"}], /api/weather liefert {city:\"Köln\",temperature:18}, /api/missing liefert Status 404. Es werden keine externen Anfragen gesendet. setTimeout plant einen späteren Aufruf. Promise.all bündelt unabhängige Aufgaben.",
  "exercises": [
    {
      "id": "m14-01",
      "title": "Ein versprochener Wert",
      "explanation": "Promise.resolve(wert) erzeugt ein bereits erfülltes Promise; await liest seinen Wert.",
      "task": "Schreibe async antwort(), die 42 liefert; zeige await antwort() in #output.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein versprochener Wert: Promise.resolve(wert) erzeugt ein bereits erfülltes Promise; await liest seinen Wert. */\nasync function antwort() { return 42; }\ndocument.querySelector(\"#output\").textContent = await antwort();"
      },
      "hints": [
        "Promise.resolve(wert) erzeugt ein bereits erfülltes Promise; await liest seinen Wert.",
        "Orientiere dich an diesem Baustein:\nasync function antwort() { return 42; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = await antwort();"
      ],
      "tests": [
        {
          "label": "Schreibe async antwort(), die 42 liefert; zeige await antwort() in #output.",
          "code": "typeof antwort==='function' && await antwort()===42 && document.querySelector('#output').textContent==='42'"
        }
      ],
      "prerequisites": [
        "m13-10"
      ],
      "solutionNotes": "Promise.resolve(wert) erzeugt ein bereits erfülltes Promise; await liest seinen Wert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-02",
      "title": "Ein kurzer Moment",
      "explanation": "new Promise(resolve => setTimeout(...)) verbindet einen Timer mit await.",
      "task": "Schreibe warte(ms), das nach ms Millisekunden mit fertig erfüllt wird.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein kurzer Moment: new Promise(resolve => setTimeout(...)) verbindet einen Timer mit await. */\nfunction warte(ms) { return new Promise(resolve => setTimeout(() => resolve(\"fertig\"), ms)); }\nconsole.log(await warte(30));"
      },
      "hints": [
        "new Promise(resolve => setTimeout(...)) verbindet einen Timer mit await.",
        "Orientiere dich an diesem Baustein:\nfunction warte(ms) { return new Promise(resolve => setTimeout(() => resolve(\"fertig\"), ms)); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(await warte(30));"
      ],
      "tests": [
        {
          "label": "Schreibe warte(ms), das nach ms Millisekunden mit fertig erfüllt wird.",
          "code": "typeof warte==='function' && await warte(1)==='fertig'"
        }
      ],
      "prerequisites": [
        "m14-01"
      ],
      "solutionNotes": "new Promise(resolve => setTimeout(...)) verbindet einen Timer mit await. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-03",
      "title": "Die erste Datenabfrage",
      "explanation": "fetch liefert zunächst die Response. json() ist ebenfalls asynchron.",
      "task": "Lade /api/cities in const staedte und zeige die erste Stadt in #output.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Die erste Datenabfrage: fetch liefert zunächst die Response. json() ist ebenfalls asynchron. */\nconst response = await fetch(\"/api/cities\");\nconst staedte = await response.json();\ndocument.querySelector(\"#output\").textContent = staedte[0].name;"
      },
      "hints": [
        "fetch liefert zunächst die Response. json() ist ebenfalls asynchron.",
        "Orientiere dich an diesem Baustein:\nconst response = await fetch(\"/api/cities\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = staedte[0].name;"
      ],
      "tests": [
        {
          "label": "Lade /api/cities in const staedte und zeige die erste Stadt in #output.",
          "code": "typeof staedte!=='undefined' && staedte.length===2 && document.querySelector('#output').textContent==='Köln'"
        }
      ],
      "prerequisites": [
        "m14-02"
      ],
      "solutionNotes": "fetch liefert zunächst die Response. json() ist ebenfalls asynchron. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-04",
      "title": "Status ist Teil des Vertrags",
      "explanation": "fetch wirft bei 404 nicht automatisch. response.ok ist bei 200–299 wahr.",
      "task": "Schreibe lade(url), das bei !ok Error(\"HTTP \"+status) wirft, sonst JSON liefert.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Status ist Teil des Vertrags: fetch wirft bei 404 nicht automatisch. response.ok ist bei 200–299 wahr. */\nasync function lade(url) {\n  const response = await fetch(url);\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}"
      },
      "hints": [
        "fetch wirft bei 404 nicht automatisch. response.ok ist bei 200–299 wahr.",
        "Orientiere dich an diesem Baustein:\nasync function lade(url) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Erfolg",
          "code": "typeof lade==='function' && (await lade('/api/cities'))[0].name==='Köln'"
        },
        {
          "label": "HTTP-Fehler",
          "code": "await (async()=>{try{await lade('/api/missing');return false}catch(e){return e.message==='HTTP 404'}})()"
        }
      ],
      "prerequisites": [
        "m14-03"
      ],
      "solutionNotes": "fetch wirft bei 404 nicht automatisch. response.ok ist bei 200–299 wahr. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-05",
      "title": "Ein Fehler wird sichtbar",
      "explanation": "catch erhält das Fehlerobjekt. message enthält den erklärenden Text.",
      "task": "Fange die 404 von /api/missing ab und zeige Daten fehlen in #output.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Fehler wird sichtbar: catch erhält das Fehlerobjekt. message enthält den erklärenden Text. */\ntry {\n  const response = await fetch(\"/api/missing\");\n  if (!response.ok) throw new Error(\"Daten fehlen\");\n} catch (error) { document.querySelector(\"#output\").textContent = error.message; }"
      },
      "hints": [
        "catch erhält das Fehlerobjekt. message enthält den erklärenden Text.",
        "Orientiere dich an diesem Baustein:\ntry {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n} catch (error) { document.querySelector(\"#output\").textContent = error.message; }"
      ],
      "tests": [
        {
          "label": "Fange die 404 von /api/missing ab und zeige Daten fehlen in #output.",
          "code": "document.querySelector('#output').textContent==='Daten fehlen'"
        }
      ],
      "prerequisites": [
        "m14-04"
      ],
      "solutionNotes": "catch erhält das Fehlerobjekt. message enthält den erklärenden Text. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-06",
      "title": "Zwei Abfragen parallel",
      "explanation": "Promise.all startet übergebene Promises gemeinsam und liefert Ergebnisse in Eingabereihenfolge.",
      "task": "Schreibe ladeBeides(): lade Städte und Wetter mit Promise.all; Ergebnis {staedte,wetter}.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Zwei Abfragen parallel: Promise.all startet übergebene Promises gemeinsam und liefert Ergebnisse in Eingabereihenfolge. */\nasync function ladeBeides() {\n  const [a, b] = await Promise.all([fetch(\"/api/cities\"), fetch(\"/api/weather\")]);\n  const [staedte, wetter] = await Promise.all([a.json(), b.json()]);\n  return { staedte, wetter };\n}"
      },
      "hints": [
        "Promise.all startet übergebene Promises gemeinsam und liefert Ergebnisse in Eingabereihenfolge.",
        "Orientiere dich an diesem Baustein:\nasync function ladeBeides() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe ladeBeides(): lade Städte und Wetter mit Promise.all; Ergebnis {staedte,wetter}.",
          "code": "typeof ladeBeides==='function' && await (async()=>{const x=await ladeBeides();return x.staedte.length===2 && x.wetter.temperature===18})()"
        }
      ],
      "prerequisites": [
        "m14-05"
      ],
      "solutionNotes": "Promise.all startet übergebene Promises gemeinsam und liefert Ergebnisse in Eingabereihenfolge. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-07",
      "title": "Ein Ladezustand",
      "explanation": "finally wird bei Erfolg und Fehler ausgeführt. Nutze es für Aufräumarbeiten.",
      "task": "Schreibe async laden(), das loading erst true setzt und in finally auf false; gib Wetter zurück.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Ladezustand: finally wird bei Erfolg und Fehler ausgeführt. Nutze es für Aufräumarbeiten. */\nlet loading = false;\nasync function laden() {\n  loading = true;\n  try { const r = await fetch(\"/api/weather\"); return await r.json(); }\n  finally { loading = false; }\n}"
      },
      "hints": [
        "finally wird bei Erfolg und Fehler ausgeführt. Nutze es für Aufräumarbeiten.",
        "Orientiere dich an diesem Baustein:\nlet loading = false;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe async laden(), das loading erst true setzt und in finally auf false; gib Wetter zurück.",
          "code": "typeof laden==='function' && (await laden()).temperature===18 && loading===false"
        }
      ],
      "prerequisites": [
        "m14-06"
      ],
      "solutionNotes": "finally wird bei Erfolg und Fehler ausgeführt. Nutze es für Aufräumarbeiten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-08",
      "title": "Abbrechen ist erlaubt",
      "explanation": "AbortController besitzt ein signal. abort() markiert das Signal als abgebrochen. Eine kooperative API beachtet es.",
      "task": "Schreibe abgebrochen(), das eine Anfrage mit bereits abgebrochenem Signal startet und bei AbortError true liefert.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Abbrechen ist erlaubt: AbortController besitzt ein signal. abort() markiert das Signal als abgebrochen. Eine kooperative API beachtet es. */\nasync function abgebrochen() {\n  const controller = new AbortController();\n  controller.abort();\n  try { await fetch(\"/api/cities\", { signal: controller.signal }); return false; }\n  catch (error) { return error.name === \"AbortError\"; }\n}"
      },
      "hints": [
        "AbortController besitzt ein signal. abort() markiert das Signal als abgebrochen. Eine kooperative API beachtet es.",
        "Orientiere dich an diesem Baustein:\nasync function abgebrochen() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe abgebrochen(), das eine Anfrage mit bereits abgebrochenem Signal startet und bei AbortError true liefert.",
          "code": "typeof abgebrochen==='function' && await abgebrochen()===true"
        }
      ],
      "prerequisites": [
        "m14-07"
      ],
      "solutionNotes": "AbortController besitzt ein signal. abort() markiert das Signal als abgebrochen. Eine kooperative API beachtet es. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-09",
      "title": "Teilweise Ergebnisse",
      "explanation": "Promise.allSettled liefert je Promise {status,value} oder {status,reason}, ohne beim ersten Fehler abzubrechen.",
      "task": "Schreibe erfolge(): allSettled mit resolve(1), reject(Error) und resolve(3); liefere nur [1,3].",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Teilweise Ergebnisse: Promise.allSettled liefert je Promise {status,value} oder {status,reason}, ohne beim ersten Fehler abzubrechen. */\nasync function erfolge() {\n  const resultate = await Promise.allSettled([Promise.resolve(1), Promise.reject(new Error(\"Fehler\")), Promise.resolve(3)]);\n  return resultate.filter(x => x.status === \"fulfilled\").map(x => x.value);\n}"
      },
      "hints": [
        "Promise.allSettled liefert je Promise {status,value} oder {status,reason}, ohne beim ersten Fehler abzubrechen.",
        "Orientiere dich an diesem Baustein:\nasync function erfolge() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe erfolge(): allSettled mit resolve(1), reject(Error) und resolve(3); liefere nur [1,3].",
          "code": "typeof erfolge==='function' && JSON.stringify(await erfolge())==='[1,3]'"
        }
      ],
      "prerequisites": [
        "m14-08"
      ],
      "solutionNotes": "Promise.allSettled liefert je Promise {status,value} oder {status,reason}, ohne beim ersten Fehler abzubrechen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m14-10",
      "title": "Projekt: Ein Wetterwidget",
      "explanation": "Trenne Beschaffung und Darstellung. Ersetze den Ladehinweis durch Ergebnis oder Fehlertext.",
      "task": "Schreibe async wetterWidget(): lade /api/weather und zeige Köln: 18 °C; rufe sie auf.",
      "minutes": 15,
      "xp": 85,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ein Wetterwidget: Trenne Beschaffung und Darstellung. Ersetze den Ladehinweis durch Ergebnis oder Fehlertext. */\nasync function wetterWidget() {\n  const output = document.querySelector(\"#output\");\n  output.textContent = \"Lädt …\";\n  try {\n    const response = await fetch(\"/api/weather\");\n    if (!response.ok) throw new Error(\"Wetter nicht verfügbar\");\n    const wetter = await response.json();\n    output.textContent = `${wetter.city}: ${wetter.temperature} °C`;\n  } catch (error) { output.textContent = error.message; }\n}\nawait wetterWidget();"
      },
      "hints": [
        "Trenne Beschaffung und Darstellung. Ersetze den Ladehinweis durch Ergebnis oder Fehlertext.",
        "Orientiere dich an diesem Baustein:\nasync function wetterWidget() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nawait wetterWidget();"
      ],
      "tests": [
        {
          "label": "Schreibe async wetterWidget(): lade /api/weather und zeige Köln: 18 °C; rufe sie auf.",
          "code": "typeof wetterWidget==='function' && document.querySelector('#output').textContent==='Köln: 18 °C'"
        }
      ],
      "prerequisites": [
        "m14-09"
      ],
      "solutionNotes": "Trenne Beschaffung und Darstellung. Ersetze den Ladehinweis durch Ergebnis oder Fehlertext. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
