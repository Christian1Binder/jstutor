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
        "Wartest du auf das Ergebnis statt das Promise selbst anzuzeigen?",
        "async macht aus dem Rückgabewert ein Promise. await entpackt dessen späteres Ergebnis innerhalb eines async-Kontexts.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe async antwort(), die 42 liefert; zeige await antwort() in #output.",
          "code": "typeof antwort==='function' && await antwort()===42 && __text('#output')==='42'"
        }
      ],
      "prerequisites": [
        "m13-10"
      ],
      "concept": {
        "example": "async function zahl() { return 8; } console.log(await zahl());",
        "explanation": "async macht aus dem Rückgabewert ein Promise. await entpackt dessen späteres Ergebnis innerhalb eines async-Kontexts.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "antwort. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "antwort()",
          "expected": "42",
          "context": "Schreibe async antwort(), die 42 liefert; zeige await antwort() in #output."
        },
        {
          "input": "Text in '#output'",
          "expected": "'42'",
          "context": "Schreibe async antwort(), die 42 liefert; zeige await antwort() in #output."
        }
      ],
      "solutionNotes": "async macht aus dem Rückgabewert ein Promise. await entpackt dessen späteres Ergebnis innerhalb eines async-Kontexts. Promise.resolve(wert) erzeugt ein bereits erfülltes Promise; await liest seinen Wert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wird dein Promise innerhalb des Timer-Callbacks erfüllt?",
        "Der Timer ruft den Callback später auf. Erst resolve erfüllt das Promise. Ohne resolve bleibt der wartende Aufruf unvollendet.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "await new Promise(resolve => setTimeout(() => resolve(\"bereit\"), 50));",
        "explanation": "Der Timer ruft den Callback später auf. Erst resolve erfüllt das Promise. Ohne resolve bleibt der wartende Aufruf unvollendet.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "warte. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "warte(1)",
          "expected": "'fertig'",
          "context": "Schreibe warte(ms), das nach ms Millisekunden mit fertig erfüllt wird."
        }
      ],
      "solutionNotes": "Der Timer ruft den Callback später auf. Erst resolve erfüllt das Promise. Ohne resolve bleibt der wartende Aufruf unvollendet. new Promise(resolve => setTimeout(...)) verbindet einen Timer mit await. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du sowohl die Antwort als auch das Lesen ihrer Daten abgewartet?",
        "Netzwerkantwort und gelesene JSON-Daten sind zwei verschiedene asynchrone Ergebnisse. Beide Schritte benötigen eine bewusste Reihenfolge.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Lade /api/cities in const staedte und zeige die erste Stadt in #output.",
          "code": "typeof staedte!=='undefined' && staedte.length===2 && __text('#output')==='Köln'"
        }
      ],
      "prerequisites": [
        "m14-02"
      ],
      "concept": {
        "example": "const antwort = await fetch(\"/api/weather\"); const daten = await antwort.json();",
        "explanation": "Netzwerkantwort und gelesene JSON-Daten sind zwei verschiedene asynchrone Ergebnisse. Beide Schritte benötigen eine bewusste Reihenfolge.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "staedte. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#output'",
          "expected": "'Köln'",
          "context": "Lade /api/cities in const staedte und zeige die erste Stadt in #output."
        }
      ],
      "solutionNotes": "Netzwerkantwort und gelesene JSON-Daten sind zwei verschiedene asynchrone Ergebnisse. Beide Schritte benötigen eine bewusste Reihenfolge. fetch liefert zunächst die Response. json() ist ebenfalls asynchron. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Prüfst du den Status vor dem Lesen der Erfolgsdaten?",
        "Ein HTTP-Fehler ist zunächst eine gewöhnliche Response. Erst deine Statusprüfung entscheidet, ihn als JavaScript-Fehler weiterzugeben.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "if (!antwort.ok) throw new Error(\"Nicht verfügbar\");",
        "explanation": "Ein HTTP-Fehler ist zunächst eine gewöhnliche Response. Erst deine Statusprüfung entscheidet, ihn als JavaScript-Fehler weiterzugeben.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "lade. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein HTTP-Fehler ist zunächst eine gewöhnliche Response. Erst deine Statusprüfung entscheidet, ihn als JavaScript-Fehler weiterzugeben. fetch wirft bei 404 nicht automatisch. response.ok ist bei 200–299 wahr. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wird der Fehler abgefangen und als verständlicher Text dargestellt?",
        "catch verarbeitet den geworfenen Fehler. Die Meldung ist eine Eigenschaft des Fehlerobjekts; das Objekt selbst ist nicht der gewünschte Anzeigetext.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Fange die 404 von /api/missing ab und zeige Daten fehlen in #output.",
          "code": "__text('#output')==='Daten fehlen'"
        }
      ],
      "prerequisites": [
        "m14-04"
      ],
      "concept": {
        "example": "try { throw new Error(\"Abgebrochen\"); } catch (fehler) { console.log(fehler.message); }",
        "explanation": "catch verarbeitet den geworfenen Fehler. Die Meldung ist eine Eigenschaft des Fehlerobjekts; das Objekt selbst ist nicht der gewünschte Anzeigetext.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#output'",
          "expected": "'Daten fehlen'",
          "context": "Fange die 404 von /api/missing ab und zeige Daten fehlen in #output."
        }
      ],
      "solutionNotes": "catch verarbeitet den geworfenen Fehler. Die Meldung ist eine Eigenschaft des Fehlerobjekts; das Objekt selbst ist nicht der gewünschte Anzeigetext. catch erhält das Fehlerobjekt. message enthält den erklärenden Text. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Startest du beide Arbeiten, bevor du auf ihre Ergebnisse wartest?",
        "Promise.all bündelt unabhängige Arbeiten. Die Ergebnisreihenfolge entspricht den Eingaben, nicht der Reihenfolge ihres Abschlusses.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const werte = await Promise.all([Promise.resolve(\"A\"), Promise.resolve(\"B\")]);",
        "explanation": "Promise.all bündelt unabhängige Arbeiten. Die Ergebnisreihenfolge entspricht den Eingaben, nicht der Reihenfolge ihres Abschlusses.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "ladeBeides. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Promise.all bündelt unabhängige Arbeiten. Die Ergebnisreihenfolge entspricht den Eingaben, nicht der Reihenfolge ihres Abschlusses. Promise.all startet übergebene Promises gemeinsam und liefert Ergebnisse in Eingabereihenfolge. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m14-07",
      "title": "Ein Ladezustand",
      "explanation": "finally wird bei Erfolg und Fehler ausgeführt. Nutze es für Aufräumarbeiten.",
      "task": "Deklariere die gemeinsame Variable loading mit Anfangswert false. Schreibe async laden(): während der Arbeit loading=true setzen, /api/weather laden und dessen JSON-Daten zurückgeben. In finally wird loading wieder false. Eine DOM-Ausgabe ist hier nicht nötig.",
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
        "Wird dein Ladezustand auch im Fehlerfall zurückgesetzt?",
        "finally läuft auch nach Fehlern und Rückgaben. Ein Ladezustand wird dort beendet, damit die Oberfläche nicht dauerhaft beschäftigt bleibt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Deklariere die gemeinsame Variable loading mit Anfangswert false. Schreibe async laden(): während der Arbeit loading=true setzen, /api/weather laden und dessen JSON-Daten zurückgeben. In finally wird loading wieder false. Eine DOM-Ausgabe ist hier nicht nötig.",
          "code": "typeof laden==='function' && (await laden()).temperature===18 && loading===false"
        }
      ],
      "prerequisites": [
        "m14-06"
      ],
      "concept": {
        "example": "try { console.log(\"Arbeit\"); } finally { console.log(\"Aufräumen\"); }",
        "explanation": "finally läuft auch nach Fehlern und Rückgaben. Ein Ladezustand wird dort beendet, damit die Oberfläche nicht dauerhaft beschäftigt bleibt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "laden. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "finally läuft auch nach Fehlern und Rückgaben. Ein Ladezustand wird dort beendet, damit die Oberfläche nicht dauerhaft beschäftigt bleibt. finally wird bei Erfolg und Fehler ausgeführt. Nutze es für Aufräumarbeiten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Erkennst du den Abbruch über den Fehlernamen?",
        "Das Signal beschreibt einen Abbruch. Eine API muss es beachten und einen passenden Fehler liefern. Ein Abbruch ist von einem HTTP-Fehler zu unterscheiden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const controller = new AbortController(); controller.abort();",
        "explanation": "Das Signal beschreibt einen Abbruch. Eine API muss es beachten und einen passenden Fehler liefern. Ein Abbruch ist von einem HTTP-Fehler zu unterscheiden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "abgebrochen. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "abgebrochen()",
          "expected": "true",
          "context": "Schreibe abgebrochen(), das eine Anfrage mit bereits abgebrochenem Signal startet und bei AbortError true liefert."
        }
      ],
      "solutionNotes": "Das Signal beschreibt einen Abbruch. Eine API muss es beachten und einen passenden Fehler liefern. Ein Abbruch ist von einem HTTP-Fehler zu unterscheiden. AbortController besitzt ein signal. abort() markiert das Signal als abgebrochen. Eine kooperative API beachtet es. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Filterst du zuerst nach dem Erfüllungsstatus, bevor du Werte liest?",
        "allSettled liefert Zustandsobjekte. Erfolgreiche Werte liegen in value; fehlgeschlagene Einträge haben stattdessen reason.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const zustand = await Promise.allSettled([Promise.resolve(8)]);",
        "explanation": "allSettled liefert Zustandsobjekte. Erfolgreiche Werte liegen in value; fehlgeschlagene Einträge haben stattdessen reason.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "erfolge. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "allSettled liefert Zustandsobjekte. Erfolgreiche Werte liegen in value; fehlgeschlagene Einträge haben stattdessen reason. Promise.allSettled liefert je Promise {status,value} oder {status,reason}, ohne beim ersten Fehler abzubrechen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ersetzt dein Ergebnis den Ladehinweis an derselben Stelle?",
        "Ein Widget verbindet Ladehinweis, Beschaffung, Statusprüfung und Darstellung. Der sichtbare Endzustand muss nach dem Warten gesetzt werden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe async wetterWidget(): lade /api/weather und zeige Köln: 18 °C; rufe sie auf.",
          "code": "typeof wetterWidget==='function' && __text('#output')==='Köln: 18 °C'"
        }
      ],
      "prerequisites": [
        "m14-09"
      ],
      "concept": {
        "example": "const daten = { temperatur: 21 }; console.log(`Heute: ${daten.temperatur}`);",
        "explanation": "Ein Widget verbindet Ladehinweis, Beschaffung, Statusprüfung und Darstellung. Der sichtbare Endzustand muss nach dem Warten gesetzt werden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "wetterWidget. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#output'",
          "expected": "'Köln: 18 °C'",
          "context": "Schreibe async wetterWidget(): lade /api/weather und zeige Köln: 18 °C; rufe sie auf."
        }
      ],
      "solutionNotes": "Ein Widget verbindet Ladehinweis, Beschaffung, Statusprüfung und Darstellung. Der sichtbare Endzustand muss nach dem Warten gesetzt werden. Trenne Beschaffung und Darstellung. Ersetze den Ladehinweis durch Ergebnis oder Fehlertext. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
