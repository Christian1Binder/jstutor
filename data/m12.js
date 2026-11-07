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
        "Der Handler wird später ausgeführt; übergib eine Funktion statt ihr Ergebnis.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#action\").addEventListener(\"click\", () => { document.querySelector(\"#output\").textContent = \"Geklickt\"; });",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#action\").addEventListener(\"click\", () => { document.querySelector(\"#output\").textContent = \"Geklickt\"; });"
      ],
      "tests": [
        {
          "label": "Zeige nach Klick auf #action den Text Geklickt.",
          "code": "(document.querySelector('#action').click(),document.querySelector('#output').textContent==='Geklickt')"
        }
      ],
      "prerequisites": [
        "m11-10"
      ],
      "solutionNotes": "Der Handler wird später ausgeführt; übergib eine Funktion statt ihr Ergebnis. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein let außerhalb des Handlers bleibt zwischen Klicks erhalten.",
        "Orientiere dich an diesem Baustein:\nlet zaehler = 0;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#action\").addEventListener(\"click\", () => { zaehler += 1; document.querySelector(\"#output\").textContent = zaehler; });"
      ],
      "tests": [
        {
          "label": "Erhöhe #output bei jedem #action-Klick von 0 aus um 1.",
          "code": "(()=>{document.querySelector('#action').click();document.querySelector('#action').click();return document.querySelector('#output').textContent==='2'})()"
        }
      ],
      "prerequisites": [
        "m12-01"
      ],
      "solutionNotes": "Ein let außerhalb des Handlers bleibt zwischen Klicks erhalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Das input-Ereignis läuft bei einer Werteänderung durch den Benutzer. value enthält den aktuellen Feldtext.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#name\").addEventListener(\"input\", event => { document.querySelector(\"#output\").textContent = event.target.value; });",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#name\").addEventListener(\"input\", event => { document.querySelector(\"#output\").textContent = event.target.value; });"
      ],
      "tests": [
        {
          "label": "Spiegle #name bei input nach #output.",
          "code": "(()=>{const x=document.querySelector('#name');x.value='Ada';x.dispatchEvent(new Event('input',{bubbles:true}));return document.querySelector('#output').textContent==='Ada'})()"
        }
      ],
      "prerequisites": [
        "m12-02"
      ],
      "solutionNotes": "Das input-Ereignis läuft bei einer Werteänderung durch den Benutzer. value enthält den aktuellen Feldtext. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "preventDefault verhindert das normale Absenden. FormData liest den aktuellen Stand.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#form\").addEventListener(\"submit\", event => {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n});"
      ],
      "tests": [
        {
          "label": "Fange #form submit ab und zeige Hallo, NAME in #output.",
          "code": "(()=>{document.querySelector('#name').value='Ada';const e=new Event('submit',{bubbles:true,cancelable:true});document.querySelector('#form').dispatchEvent(e);return e.defaultPrevented && document.querySelector('#output').textContent==='Hallo, Ada'})()"
        }
      ],
      "prerequisites": [
        "m12-03"
      ],
      "solutionNotes": "preventDefault verhindert das normale Absenden. FormData liest den aktuellen Stand. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "trim entfernt Leerzeichen an beiden Enden. Prüfe vor der Ausgabe.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#form\").addEventListener(\"submit\", event => {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n});"
      ],
      "tests": [
        {
          "label": "Leerer Name",
          "code": "(()=>{document.querySelector('#name').value='  ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return document.querySelector('#output').textContent==='Name fehlt'})()"
        },
        {
          "label": "Name trimmen",
          "code": "(()=>{document.querySelector('#name').value=' Ada ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return document.querySelector('#output').textContent==='Hallo, Ada'})()"
        }
      ],
      "prerequisites": [
        "m12-04"
      ],
      "solutionNotes": "trim entfernt Leerzeichen an beiden Enden. Prüfe vor der Ausgabe. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m12-06",
      "title": "Ein Zustand lässt sich zurücksetzen",
      "explanation": "Zwei Handler können dieselbe Zustandsvariable verwenden.",
      "task": "Zähle #action-Klicks; #reset setzt Zähler und Ausgabe auf 0.",
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
        "Zwei Handler können dieselbe Zustandsvariable verwenden.",
        "Orientiere dich an diesem Baustein:\nlet wert = 0;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#reset\").addEventListener(\"click\", () => { wert = 0; render(); });"
      ],
      "tests": [
        {
          "label": "Klicks erhöhen den Zähler",
          "code": "(()=>{document.querySelector('#action').click();document.querySelector('#action').click();return document.querySelector('#output').textContent==='2'})()"
        },
        {
          "label": "Reset setzt zurück",
          "code": "(document.querySelector('#reset').click(),document.querySelector('#output').textContent==='0')"
        }
      ],
      "prerequisites": [
        "m12-05"
      ],
      "solutionNotes": "Zwei Handler können dieselbe Zustandsvariable verwenden. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "KeyboardEvent.key nennt die Taste, etwa Escape.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#name\").addEventListener(\"keydown\", event => { if (event.key === \"Escape\") event.currentTarget.value = \"\"; });",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#name\").addEventListener(\"keydown\", event => { if (event.key === \"Escape\") event.currentTarget.value = \"\"; });"
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
      "solutionNotes": "KeyboardEvent.key nennt die Taste, etwa Escape. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "closest findet den angeklickten Button auch bei verschachtelten Inhalten.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#list\").addEventListener(\"click\", event => {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n});"
      ],
      "tests": [
        {
          "label": "Reagiere am #list auf Klicks auf [data-city] und zeige den Stadtwert in #output.",
          "code": "(document.querySelector('[data-city]').click(),document.querySelector('#output').textContent==='Kassel')"
        }
      ],
      "prerequisites": [
        "m12-07"
      ],
      "solutionNotes": "closest findet den angeklickten Button auch bei verschachtelten Inhalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "aria-pressed beschreibt den Zustand eines Toggle-Buttons. getAttribute liefert Text oder null.",
        "Orientiere dich an diesem Baustein:\nconst button = document.querySelector(\"#action\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nbutton.addEventListener(\"click\", () => { button.setAttribute(\"aria-pressed\", String(button.getAttribute(\"aria-pressed\") !== \"true\")); });"
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
      "solutionNotes": "aria-pressed beschreibt den Zustand eines Toggle-Buttons. getAttribute liefert Text oder null. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Kombiniere Formulareingabe, Validierung und sichere DOM-Erzeugung.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#form\").addEventListener(\"submit\", event => {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n});"
      ],
      "tests": [
        {
          "label": "Füge beim Submit einen getrimmten, nicht leeren Namen als li zu #list hinzu und leere #name.",
          "code": "(()=>{const x=document.querySelector('#name');x.value='  Lesen  ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return document.querySelector('#list li:last-child').textContent==='Lesen' && x.value===''})()"
        }
      ],
      "prerequisites": [
        "m12-09"
      ],
      "solutionNotes": "Kombiniere Formulareingabe, Validierung und sichere DOM-Erzeugung. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
