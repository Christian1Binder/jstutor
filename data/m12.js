window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m12",
  "title": "Interaktion und Formulare",
  "city": "Kassel",
  "tag": "events",
  "level": 3,
  "description": "Klicks, Eingaben und Tastaturbedienung verbinden.",
  "lesson": "addEventListener(\"click\",handler) registriert eine Funktion für ein Ereignis. event.target ist der Ursprung, event.currentTarget das Element des Listeners. input reagiert auf Eingaben, submit auf Formularabsenden. event.preventDefault verhindert die Standardaktion. FormData(form).get(\"name\") liest ein benanntes Feld. closest(selector) sucht am Element und seinen Eltern. Delegation registriert einen Listener am gemeinsamen Elternteil. Die Prüfungen lösen dieselben Ereignisse programmatisch aus.",
  "exercises": [
    {
      "id": "m12-01",
      "title": "Ein Klick antwortet",
      "explanation": "Der Handler wird später ausgeführt; übergib eine Funktion statt ihr Ergebnis.",
      "task": "Zeige nach Klick auf #action den Text Geklickt.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Klick antwortet: Der Handler wird später ausgeführt; übergib eine Funktion statt ihr Ergebnis. */\ndocument.querySelector(\"#action\").addEventListener(\"click\", () => { document.querySelector(\"#output\").textContent = \"Geklickt\"; });"
      },
      "hints": [
        "Läuft deine Aktion erst beim Klick?",
        "Ein Listener erhält eine Funktion, die erst beim Ereignis aufgerufen wird. Ein sofortiger Funktionsaufruf bei der Registrierung wäre zu früh.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Zeige nach Klick auf #action den Text Geklickt.",
          "code": "(document.querySelector('#action').click(),__text('#output')==='Geklickt')"
        }
      ],
      "prerequisites": [
        "m11-10"
      ],
      "concept": {
        "example": "document.querySelector(\"button\").addEventListener(\"click\", () => console.log(\"Hallo\"));",
        "explanation": "Ein Listener erhält eine Funktion, die erst beim Ereignis aufgerufen wird. Ein sofortiger Funktionsaufruf bei der Registrierung wäre zu früh.",
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
          "expected": "'Geklickt'",
          "context": "Zeige nach Klick auf #action den Text Geklickt."
        }
      ],
      "solutionNotes": "Ein Listener erhält eine Funktion, die erst beim Ereignis aufgerufen wird. Ein sofortiger Funktionsaufruf bei der Registrierung wäre zu früh. Der Handler wird später ausgeführt; übergib eine Funktion statt ihr Ergebnis. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-02",
      "title": "Ein echter Zähler",
      "explanation": "Ein let außerhalb des Handlers bleibt zwischen Klicks erhalten.",
      "task": "Erhöhe #output bei jedem #action-Klick von 0 aus um 1.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein echter Zähler: Ein let außerhalb des Handlers bleibt zwischen Klicks erhalten. */\nlet zaehler = 0;\ndocument.querySelector(\"#action\").addEventListener(\"click\", () => { zaehler += 1; document.querySelector(\"#output\").textContent = zaehler; });"
      },
      "hints": [
        "Wird dein Zählwert nur einmal initialisiert?",
        "Zustand außerhalb des Handlers bleibt zwischen Ereignissen erhalten. Ein Zähler innerhalb des Handlers würde bei jedem Klick neu beginnen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Erhöhe #output bei jedem #action-Klick von 0 aus um 1.",
          "code": "(()=>{document.querySelector('#action').click();document.querySelector('#action').click();return __text('#output')==='2'})()"
        }
      ],
      "prerequisites": [
        "m12-01"
      ],
      "concept": {
        "example": "let anzahl = 0; function erhoehen() { anzahl += 1; }",
        "explanation": "Zustand außerhalb des Handlers bleibt zwischen Ereignissen erhalten. Ein Zähler innerhalb des Handlers würde bei jedem Klick neu beginnen.",
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
          "expected": "'2'",
          "context": "Erhöhe #output bei jedem #action-Klick von 0 aus um 1."
        }
      ],
      "solutionNotes": "Zustand außerhalb des Handlers bleibt zwischen Ereignissen erhalten. Ein Zähler innerhalb des Handlers würde bei jedem Klick neu beginnen. Ein let außerhalb des Handlers bleibt zwischen Klicks erhalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-03",
      "title": "Direkt auf Eingaben reagieren",
      "explanation": "Das input-Ereignis läuft bei einer Werteänderung durch den Benutzer. value enthält den aktuellen Feldtext.",
      "task": "Spiegle #name bei input nach #output.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Direkt auf Eingaben reagieren: Das input-Ereignis läuft bei einer Werteänderung durch den Benutzer. value enthält den aktuellen Feldtext. */\ndocument.querySelector(\"#name\").addEventListener(\"input\", event => { document.querySelector(\"#output\").textContent = event.target.value; });"
      },
      "hints": [
        "Liest du den aktuellen Wert bei jedem Eingabeereignis neu?",
        "Ein Eingabeereignis enthält das auslösende Element. Dessen value zeigt den aktuellen Feldwert. Der ursprüngliche HTML-Wert kann davon abweichen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Spiegle #name bei input nach #output.",
          "code": "(()=>{const x=document.querySelector('#name');x.value='Ada';x.dispatchEvent(new Event('input',{bubbles:true}));return __text('#output')==='Ada'})()"
        }
      ],
      "prerequisites": [
        "m12-02"
      ],
      "concept": {
        "example": "feld.addEventListener(\"input\", event => console.log(event.target.value));",
        "explanation": "Ein Eingabeereignis enthält das auslösende Element. Dessen value zeigt den aktuellen Feldwert. Der ursprüngliche HTML-Wert kann davon abweichen.",
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
          "expected": "'Ada'",
          "context": "Spiegle #name bei input nach #output."
        }
      ],
      "solutionNotes": "Ein Eingabeereignis enthält das auslösende Element. Dessen value zeigt den aktuellen Feldwert. Der ursprüngliche HTML-Wert kann davon abweichen. Das input-Ereignis läuft bei einer Werteänderung durch den Benutzer. value enthält den aktuellen Feldtext. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-04",
      "title": "Absenden ohne Seitenwechsel",
      "explanation": "preventDefault verhindert das normale Absenden. FormData liest den aktuellen Stand.",
      "task": "Fange #form submit ab und zeige Hallo, NAME in #output.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Absenden ohne Seitenwechsel: preventDefault verhindert das normale Absenden. FormData liest den aktuellen Stand. */\ndocument.querySelector(\"#form\").addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const name = new FormData(event.currentTarget).get(\"name\");\n  document.querySelector(\"#output\").textContent = `Hallo, ${name}`;\n});"
      },
      "hints": [
        "Ist das Ereignis am Formular registriert und wird die Standardaktion verhindert?",
        "Ein Formular hat eine eigene Standardaktion. preventDefault verhindert den Seitenwechsel, sodass deine Anwendung das Ergebnis selbst darstellen kann.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Fange #form submit ab und zeige Hallo, NAME in #output.",
          "code": "(()=>{document.querySelector('#name').value='Ada';const e=new Event('submit',{bubbles:true,cancelable:true});document.querySelector('#form').dispatchEvent(e);return e.defaultPrevented && __text('#output')==='Hallo, Ada'})()"
        }
      ],
      "prerequisites": [
        "m12-03"
      ],
      "concept": {
        "example": "formular.addEventListener(\"submit\", event => { event.preventDefault(); });",
        "explanation": "Ein Formular hat eine eigene Standardaktion. preventDefault verhindert den Seitenwechsel, sodass deine Anwendung das Ergebnis selbst darstellen kann.",
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
          "expected": "'Hallo, Ada'",
          "context": "Fange #form submit ab und zeige Hallo, NAME in #output."
        }
      ],
      "solutionNotes": "Ein Formular hat eine eigene Standardaktion. preventDefault verhindert den Seitenwechsel, sodass deine Anwendung das Ergebnis selbst darstellen kann. preventDefault verhindert das normale Absenden. FormData liest den aktuellen Stand. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-05",
      "title": "Leerzeichen sind kein Name",
      "explanation": "trim entfernt Leerzeichen an beiden Enden. Prüfe vor der Ausgabe.",
      "task": "Zeige bei leerem getrimmtem Namen Name fehlt, sonst Hallo, NAME beim Absenden.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Leerzeichen sind kein Name: trim entfernt Leerzeichen an beiden Enden. Prüfe vor der Ausgabe. */\ndocument.querySelector(\"#form\").addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const name = document.querySelector(\"#name\").value.trim();\n  document.querySelector(\"#output\").textContent = name ? `Hallo, ${name}` : \"Name fehlt\";\n});"
      },
      "hints": [
        "Entscheidest du anhand der getrimmten Eingabe?",
        "Die bereinigte Eingabe muss vor der Entscheidung entstehen. Ein nur aus Leerzeichen bestehender Text ist vorher nicht leer.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Leerer Name",
          "code": "(()=>{document.querySelector('#name').value='  ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return __text('#output')==='Name fehlt'})()"
        },
        {
          "label": "Name trimmen",
          "code": "(()=>{document.querySelector('#name').value=' Ada ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return __text('#output')==='Hallo, Ada'})()"
        }
      ],
      "prerequisites": [
        "m12-04"
      ],
      "concept": {
        "example": "const sauber = \"  Hallo  \".trim();",
        "explanation": "Die bereinigte Eingabe muss vor der Entscheidung entstehen. Ein nur aus Leerzeichen bestehender Text ist vorher nicht leer.",
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
          "expected": "'Name fehlt'",
          "context": "Leerer Name"
        },
        {
          "input": "Text in '#output'",
          "expected": "'Hallo, Ada'",
          "context": "Name trimmen"
        }
      ],
      "solutionNotes": "Die bereinigte Eingabe muss vor der Entscheidung entstehen. Ein nur aus Leerzeichen bestehender Text ist vorher nicht leer. trim entfernt Leerzeichen an beiden Enden. Prüfe vor der Ausgabe. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-06",
      "title": "Ein Zustand lässt sich zurücksetzen",
      "explanation": "Zwei Handler können dieselbe Zustandsvariable verwenden.",
      "task": "Registriere einen Klick-Handler auf #action, der einen gemeinsamen Zähler pro Klick um 1 erhöht und ihn in #output anzeigt. Anfangswert ist 0. Ein Klick auf #reset setzt denselben Zähler und #output auf 0; spätere Klicks müssen wieder bei 1 beginnen.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Zustand lässt sich zurücksetzen: Zwei Handler können dieselbe Zustandsvariable verwenden. */\nlet wert = 0;\nfunction render() { document.querySelector(\"#output\").textContent = wert; }\ndocument.querySelector(\"#action\").addEventListener(\"click\", () => { wert += 1; render(); });\ndocument.querySelector(\"#reset\").addEventListener(\"click\", () => { wert = 0; render(); });"
      },
      "hints": [
        "Ändert der Reset sowohl den Zustand als auch die sichtbare Anzeige?",
        "Mehrere Ereignisse können denselben Zustand verändern. Eine gemeinsame Renderfunktion hält die Anzeige nach jeder Änderung konsistent.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Klicks erhöhen den Zähler",
          "code": "(()=>{document.querySelector('#action').click();document.querySelector('#action').click();return __text('#output')==='2'})()"
        },
        {
          "label": "Reset setzt zurück",
          "code": "(document.querySelector('#reset').click(),__text('#output')==='0')"
        }
      ],
      "prerequisites": [
        "m12-05"
      ],
      "concept": {
        "example": "let zustand = 0; function anzeigen() { ausgabe.textContent = zustand; }",
        "explanation": "Mehrere Ereignisse können denselben Zustand verändern. Eine gemeinsame Renderfunktion hält die Anzeige nach jeder Änderung konsistent.",
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
          "expected": "'2'",
          "context": "Klicks erhöhen den Zähler"
        },
        {
          "input": "Text in '#output'",
          "expected": "'0'",
          "context": "Reset setzt zurück"
        }
      ],
      "solutionNotes": "Mehrere Ereignisse können denselben Zustand verändern. Eine gemeinsame Renderfunktion hält die Anzeige nach jeder Änderung konsistent. Zwei Handler können dieselbe Zustandsvariable verwenden. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-07",
      "title": "Tastatur als Erstklassbürger",
      "explanation": "KeyboardEvent.key nennt die Taste, etwa Escape.",
      "task": "Leere #name bei keydown mit Taste Escape.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Tastatur als Erstklassbürger: KeyboardEvent.key nennt die Taste, etwa Escape. */\ndocument.querySelector(\"#name\").addEventListener(\"keydown\", event => { if (event.key === \"Escape\") event.currentTarget.value = \"\"; });"
      },
      "hints": [
        "Prüfst du auf die gewünschte Taste und nicht auf jeden Tastendruck?",
        "key benennt die tatsächlich betätigte Taste. Reagiere nur auf den vereinbarten Tastennamen, damit gewöhnliches Schreiben unverändert funktioniert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Leere #name bei keydown mit Taste Escape.",
          "code": "(()=>{const x=document.querySelector('#name');x.value='Ada';x.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}));return x.value===''})()"
        }
      ],
      "prerequisites": [
        "m12-06"
      ],
      "concept": {
        "example": "feld.addEventListener(\"keydown\", event => console.log(event.key));",
        "explanation": "key benennt die tatsächlich betätigte Taste. Reagiere nur auf den vereinbarten Tastennamen, damit gewöhnliches Schreiben unverändert funktioniert.",
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
      "examples": [],
      "solutionNotes": "key benennt die tatsächlich betätigte Taste. Reagiere nur auf den vereinbarten Tastennamen, damit gewöhnliches Schreiben unverändert funktioniert. KeyboardEvent.key nennt die Taste, etwa Escape. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-08",
      "title": "Ein Listener für viele Ziele",
      "explanation": "closest findet den angeklickten Button auch bei verschachtelten Inhalten.",
      "task": "Reagiere am #list auf Klicks auf [data-city] und zeige den Stadtwert in #output.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Listener für viele Ziele: closest findet den angeklickten Button auch bei verschachtelten Inhalten. */\ndocument.querySelector(\"#list\").addEventListener(\"click\", event => {\n  const button = event.target.closest(\"[data-city]\");\n  if (button) document.querySelector(\"#output\").textContent = button.dataset.city;\n});"
      },
      "hints": [
        "Suchst du vom Ursprung des Ereignisses aus den passenden Button?",
        "Ereignisse wandern zu Eltern weiter. Ein Listener am gemeinsamen Container kann deshalb auch später eingefügte Kinder behandeln. closest findet die passende Bedienstelle.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Reagiere am #list auf Klicks auf [data-city] und zeige den Stadtwert in #output.",
          "code": "(document.querySelector('[data-city]').click(),__text('#output')==='Kassel')"
        }
      ],
      "prerequisites": [
        "m12-07"
      ],
      "concept": {
        "example": "const ziel = event.target.closest(\"button\");",
        "explanation": "Ereignisse wandern zu Eltern weiter. Ein Listener am gemeinsamen Container kann deshalb auch später eingefügte Kinder behandeln. closest findet die passende Bedienstelle.",
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
          "expected": "'Kassel'",
          "context": "Reagiere am #list auf Klicks auf [data-city] und zeige den Stadtwert in #output."
        }
      ],
      "solutionNotes": "Ereignisse wandern zu Eltern weiter. Ein Listener am gemeinsamen Container kann deshalb auch später eingefügte Kinder behandeln. closest findet die passende Bedienstelle. closest findet den angeklickten Button auch bei verschachtelten Inhalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-09",
      "title": "Ein Schalter mit Bedeutung",
      "explanation": "aria-pressed beschreibt den Zustand eines Toggle-Buttons. getAttribute liefert Text oder null.",
      "task": "Schalte aria-pressed an #action bei jedem Klick zwischen true und false; initial false.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Schalter mit Bedeutung: aria-pressed beschreibt den Zustand eines Toggle-Buttons. getAttribute liefert Text oder null. */\nconst button = document.querySelector(\"#action\");\nbutton.setAttribute(\"aria-pressed\", \"false\");\nbutton.addEventListener(\"click\", () => { button.setAttribute(\"aria-pressed\", String(button.getAttribute(\"aria-pressed\") !== \"true\")); });"
      },
      "hints": [
        "Was passiert beim zweiten Klick, und stimmt der Anfangszustand?",
        "ARIA-Attribute enthalten Textwerte. Ein Toggle muss zwischen seinen Zuständen wechseln, statt bei jedem Klick denselben Wert zu setzen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schalte aria-pressed an #action bei jedem Klick zwischen true und false; initial false.",
          "code": "(()=>{const b=document.querySelector('#action');b.click();const a=b.getAttribute('aria-pressed');b.click();return a==='true' && b.getAttribute('aria-pressed')==='false'})()"
        }
      ],
      "prerequisites": [
        "m12-08"
      ],
      "concept": {
        "example": "button.setAttribute(\"aria-pressed\", \"false\");",
        "explanation": "ARIA-Attribute enthalten Textwerte. Ein Toggle muss zwischen seinen Zuständen wechseln, statt bei jedem Klick denselben Wert zu setzen.",
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
      "examples": [],
      "solutionNotes": "ARIA-Attribute enthalten Textwerte. Ein Toggle muss zwischen seinen Zuständen wechseln, statt bei jedem Klick denselben Wert zu setzen. aria-pressed beschreibt den Zustand eines Toggle-Buttons. getAttribute liefert Text oder null. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m12-10",
      "title": "Projekt: Deine erste Wunschliste",
      "explanation": "Kombiniere Formulareingabe, Validierung und sichere DOM-Erzeugung.",
      "task": "Füge beim Submit einen getrimmten, nicht leeren Namen als li zu #list hinzu und leere #name.",
      "minutes": 15,
      "xp": 75,
      "focus": "js",
      "starter": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><form id=\"form\"><label for=\"name\">Name</label><input id=\"name\" name=\"name\"><button type=\"submit\">Begrüßen</button></form><button type=\"button\" id=\"action\">Klick</button><button type=\"button\" id=\"reset\">Zurücksetzen</button><p id=\"output\" aria-live=\"polite\">0</p><ul id=\"list\"><li><button type=\"button\" data-city=\"Kassel\">Kassel</button></li></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Deine erste Wunschliste: Kombiniere Formulareingabe, Validierung und sichere DOM-Erzeugung. */\ndocument.querySelector(\"#form\").addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const input = document.querySelector(\"#name\");\n  const text = input.value.trim();\n  if (!text) return;\n  const li = document.createElement(\"li\");\n  li.textContent = text;\n  document.querySelector(\"#list\").append(li);\n  input.value = \"\";\n});"
      },
      "hints": [
        "Behandelst du leere Eingaben, sichere Darstellung und das Leeren des Felds getrennt?",
        "Beim Absenden greifen Validierung und DOM-Aufbau zusammen. Leere Eingaben beenden den Handler früh. Nach erfolgreichem Einfügen wird das Feld für den nächsten Eintrag geleert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Füge beim Submit einen getrimmten, nicht leeren Namen als li zu #list hinzu und leere #name.",
          "code": "(()=>{const x=document.querySelector('#name');x.value='  Lesen  ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return __text('#list li:last-child')==='Lesen' && x.value===''})()"
        }
      ],
      "prerequisites": [
        "m12-09"
      ],
      "concept": {
        "example": "const eintrag = document.createElement(\"li\"); eintrag.textContent = text;",
        "explanation": "Beim Absenden greifen Validierung und DOM-Aufbau zusammen. Leere Eingaben beenden den Handler früh. Nach erfolgreichem Einfügen wird das Feld für den nächsten Eintrag geleert.",
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
          "input": "Text in '#list li:last-child'",
          "expected": "'Lesen'",
          "context": "Füge beim Submit einen getrimmten, nicht leeren Namen als li zu #list hinzu und leere #name."
        }
      ],
      "solutionNotes": "Beim Absenden greifen Validierung und DOM-Aufbau zusammen. Leere Eingaben beenden den Handler früh. Nach erfolgreichem Einfügen wird das Feld für den nächsten Eintrag geleert. Kombiniere Formulareingabe, Validierung und sichere DOM-Erzeugung. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
