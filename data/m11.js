window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m11",
  "title": "Das DOM gestalten",
  "city": "Erfurt",
  "tag": "dom",
  "level": 3,
  "description": "Dein Code baut und verändert die sichtbare Oberfläche.",
  "lesson": "Das DOM ist der Elementbaum der Seite. querySelector findet ein Element, querySelectorAll eine Liste. textContent setzt reinen Text. createElement erzeugt ein Element, append hängt es an; replaceChildren ersetzt Kinder. classList.add/remove/toggle verändert Klassen. setAttribute setzt Attribute. dataset liest data-Attribute. Nutze textContent für fremde Texte; innerHTML wäre HTML-Auswertung und kommt später im Sicherheitskapitel zur Sprache.",
  "exercises": [
    {
      "id": "m11-01",
      "title": "Eine Überschrift ändern",
      "explanation": "querySelector nutzt bekannte CSS-Selektoren. textContent ersetzt den Text.",
      "task": "Setze #title auf Willkommen in Erfurt.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Überschrift ändern: querySelector nutzt bekannte CSS-Selektoren. textContent ersetzt den Text. */\ndocument.querySelector(\"#title\").textContent = \"Willkommen in Erfurt\";"
      },
      "hints": [
        "Existiert das gewählte Zielelement im HTML?",
        "Ein Selektor sucht ein Element im aktuellen Dokument. Erst am gefundenen Element wird der Text geändert. Fehlende Treffer sind null.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Setze #title auf Willkommen in Erfurt.",
          "code": "__text('#title')==='Willkommen in Erfurt'"
        }
      ],
      "prerequisites": [
        "m10-10"
      ],
      "concept": {
        "example": "document.querySelector(\"h2\").textContent = \"Neuigkeiten\";",
        "explanation": "Ein Selektor sucht ein Element im aktuellen Dokument. Erst am gefundenen Element wird der Text geändert. Fehlende Treffer sind null.",
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
          "input": "Text in '#title'",
          "expected": "'Willkommen in Erfurt'",
          "context": "Setze #title auf Willkommen in Erfurt."
        }
      ],
      "solutionNotes": "Ein Selektor sucht ein Element im aktuellen Dokument. Erst am gefundenen Element wird der Text geändert. Fehlende Treffer sind null. querySelector nutzt bekannte CSS-Selektoren. textContent ersetzt den Text. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-02",
      "title": "Eine Klasse hinzufügen",
      "explanation": "classList.add erhält vorhandene Klassen.",
      "task": "Füge #action die Klasse active hinzu.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Klasse hinzufügen: classList.add erhält vorhandene Klassen. */\ndocument.querySelector(\"#action\").classList.add(\"active\");"
      },
      "hints": [
        "Fügst du einen Klassennamen hinzu, ohne die übrigen Klassen zu überschreiben?",
        "classList verwaltet einzelne Klassennamen, ohne andere Klassen zu löschen. Der Methodenparameter enthält keinen CSS-Punkt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Füge #action die Klasse active hinzu.",
          "code": "document.querySelector('#action').classList.contains('active')"
        }
      ],
      "prerequisites": [
        "m11-01"
      ],
      "concept": {
        "example": "document.querySelector(\"h2\").classList.add(\"hervorheben\");",
        "explanation": "classList verwaltet einzelne Klassennamen, ohne andere Klassen zu löschen. Der Methodenparameter enthält keinen CSS-Punkt.",
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
      "solutionNotes": "classList verwaltet einzelne Klassennamen, ohne andere Klassen zu löschen. Der Methodenparameter enthält keinen CSS-Punkt. classList.add erhält vorhandene Klassen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-03",
      "title": "Alle Karten markieren",
      "explanation": "querySelectorAll liefert eine durchlaufbare Liste.",
      "task": "Füge allen .card-Elementen die Klasse visited hinzu.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Alle Karten markieren: querySelectorAll liefert eine durchlaufbare Liste. */\nfor (const card of document.querySelectorAll(\".card\")) { card.classList.add(\"visited\"); }"
      },
      "hints": [
        "Durchläufst du alle passenden Elemente statt nur den ersten Treffer?",
        "querySelectorAll liefert eine Sammlung. Jede Änderung muss an ihren Elementen erfolgen, nicht an der Sammlung selbst.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Füge allen .card-Elementen die Klasse visited hinzu.",
          "code": "[...document.querySelectorAll('.card')].every(x=>x.classList.contains('visited'))"
        }
      ],
      "prerequisites": [
        "m11-02"
      ],
      "concept": {
        "example": "for (const element of document.querySelectorAll(\"p\")) { element.classList.add(\"lesbar\"); }",
        "explanation": "querySelectorAll liefert eine Sammlung. Jede Änderung muss an ihren Elementen erfolgen, nicht an der Sammlung selbst.",
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
      "solutionNotes": "querySelectorAll liefert eine Sammlung. Jede Änderung muss an ihren Elementen erfolgen, nicht an der Sammlung selbst. querySelectorAll liefert eine durchlaufbare Liste. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-04",
      "title": "Ein neues Ziel",
      "explanation": "createElement erzeugt ein noch nicht eingefügtes Element. append fügt es in den Baum ein.",
      "task": "Erzeuge per JavaScript ein neues li mit dem Text „Weimar“. Hänge es als letztes Kind an die vorhandene Liste #list an. Der vorhandene Eintrag bleibt erhalten.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein neues Ziel: createElement erzeugt ein noch nicht eingefügtes Element. append fügt es in den Baum ein. */\nconst li = document.createElement(\"li\");\nli.textContent = \"Weimar\";\ndocument.querySelector(\"#list\").append(li);"
      },
      "hints": [
        "Hast du das neue Element nach dem Befüllen auch angehängt?",
        "Erzeugen und Einfügen sind zwei getrennte Schritte. Ein neu erzeugtes Element erscheint erst nach dem Anhängen im sichtbaren Baum.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Erzeuge per JavaScript ein neues li mit dem Text „Weimar“. Hänge es als letztes Kind an die vorhandene Liste #list an. Der vorhandene Eintrag bleibt erhalten.",
          "code": "__text('#list li:last-child')==='Weimar'"
        }
      ],
      "prerequisites": [
        "m11-03"
      ],
      "concept": {
        "example": "const p = document.createElement(\"p\"); p.textContent = \"Neu\"; document.body.append(p);",
        "explanation": "Erzeugen und Einfügen sind zwei getrennte Schritte. Ein neu erzeugtes Element erscheint erst nach dem Anhängen im sichtbaren Baum.",
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
          "expected": "'Weimar'",
          "context": "Erzeuge per JavaScript ein neues li mit dem Text „Weimar“. Hänge es als letztes Kind an die vorhandene Liste #list an. Der vorhandene Eintrag bleibt erhalten."
        }
      ],
      "solutionNotes": "Erzeugen und Einfügen sind zwei getrennte Schritte. Ein neu erzeugtes Element erscheint erst nach dem Anhängen im sichtbaren Baum. createElement erzeugt ein noch nicht eingefügtes Element. append fügt es in den Baum ein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-05",
      "title": "Alles neu zeichnen",
      "explanation": "replaceChildren leert oder ersetzt den Inhalt, ohne HTML-Text zu parsen.",
      "task": "Ersetze #list durch genau ein li mit Text Neustart.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Alles neu zeichnen: replaceChildren leert oder ersetzt den Inhalt, ohne HTML-Text zu parsen. */\nconst li = document.createElement(\"li\");\nli.textContent = \"Neustart\";\ndocument.querySelector(\"#list\").replaceChildren(li);"
      },
      "hints": [
        "Bleiben nach dem erneuten Zeichnen noch alte Einträge übrig?",
        "replaceChildren ersetzt den gesamten bisherigen Inhalt des Zielelements. Ohne diese Bereinigung können bei wiederholtem Rendern doppelte Einträge entstehen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Ersetze #list durch genau ein li mit Text Neustart.",
          "code": "document.querySelectorAll('#list li').length===1 && __text('#list li')==='Neustart'"
        }
      ],
      "prerequisites": [
        "m11-04"
      ],
      "concept": {
        "example": "const p = document.createElement(\"p\"); document.body.replaceChildren(p);",
        "explanation": "replaceChildren ersetzt den gesamten bisherigen Inhalt des Zielelements. Ohne diese Bereinigung können bei wiederholtem Rendern doppelte Einträge entstehen.",
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
          "input": "Text in '#list li'",
          "expected": "'Neustart'",
          "context": "Ersetze #list durch genau ein li mit Text Neustart."
        }
      ],
      "solutionNotes": "replaceChildren ersetzt den gesamten bisherigen Inhalt des Zielelements. Ohne diese Bereinigung können bei wiederholtem Rendern doppelte Einträge entstehen. replaceChildren leert oder ersetzt den Inhalt, ohne HTML-Text zu parsen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-06",
      "title": "Ein Attribut setzen",
      "explanation": "setAttribute(name,wert) setzt ein HTML-Attribut.",
      "task": "Setze aria-label von #action auf Nächste Station.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Attribut setzen: setAttribute(name,wert) setzt ein HTML-Attribut. */\ndocument.querySelector(\"#action\").setAttribute(\"aria-label\", \"Nächste Station\");"
      },
      "hints": [
        "Setzt du das Attribut am richtigen Element und mit genau dem vereinbarten Namen?",
        "Attributnamen und Attributwerte sind Texte. Ein Attribut ist nicht automatisch eine gleichnamige JavaScript-Variable.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Setze aria-label von #action auf Nächste Station.",
          "code": "document.querySelector('#action').getAttribute('aria-label')==='Nächste Station'"
        }
      ],
      "prerequisites": [
        "m11-05"
      ],
      "concept": {
        "example": "document.querySelector(\"button\").setAttribute(\"title\", \"Mehr erfahren\");",
        "explanation": "Attributnamen und Attributwerte sind Texte. Ein Attribut ist nicht automatisch eine gleichnamige JavaScript-Variable.",
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
      "solutionNotes": "Attributnamen und Attributwerte sind Texte. Ein Attribut ist nicht automatisch eine gleichnamige JavaScript-Variable. setAttribute(name,wert) setzt ein HTML-Attribut. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-07",
      "title": "Daten am Element",
      "explanation": "data-city wird über element.dataset.city als Text lesbar.",
      "task": "Lies data-city des li und zeige es in #output.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Daten am Element: data-city wird über element.dataset.city als Text lesbar. */\nconst city = document.querySelector(\"li\").dataset.city;\ndocument.querySelector(\"#output\").textContent = city;"
      },
      "hints": [
        "Liest du den Attributwert statt den sichtbaren Elementtext?",
        "dataset bildet data-Attribute auf Eigenschaften ab. Die Werte bleiben Texte, auch wenn sie wie Zahlen aussehen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Lies data-city des li und zeige es in #output.",
          "code": "__text('#output')==='Erfurt'"
        }
      ],
      "prerequisites": [
        "m11-06"
      ],
      "concept": {
        "example": "console.log(document.querySelector(\"[data-kind]\").dataset.kind);",
        "explanation": "dataset bildet data-Attribute auf Eigenschaften ab. Die Werte bleiben Texte, auch wenn sie wie Zahlen aussehen.",
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
          "expected": "'Erfurt'",
          "context": "Lies data-city des li und zeige es in #output."
        }
      ],
      "solutionNotes": "dataset bildet data-Attribute auf Eigenschaften ab. Die Werte bleiben Texte, auch wenn sie wie Zahlen aussehen. data-city wird über element.dataset.city als Text lesbar. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-08",
      "title": "Gezielt entfernen",
      "explanation": "remove entfernt das gewählte Element aus seinem Elternteil.",
      "task": "Entferne per JavaScript nur das erste Element mit Klasse card aus dem DOM. Danach bleibt genau eine .card im Dokument.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Gezielt entfernen: remove entfernt das gewählte Element aus seinem Elternteil. */\ndocument.querySelector(\".card\").remove();"
      },
      "hints": [
        "Wird genau ein Element tatsächlich aus dem DOM entfernt?",
        "remove trennt das Element vom Baum. Ein nur verstecktes Element wäre weiterhin im DOM vorhanden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Entferne per JavaScript nur das erste Element mit Klasse card aus dem DOM. Danach bleibt genau eine .card im Dokument.",
          "code": "document.querySelectorAll('.card').length===1"
        }
      ],
      "prerequisites": [
        "m11-07"
      ],
      "concept": {
        "example": "document.querySelector(\"aside\").remove();",
        "explanation": "remove trennt das Element vom Baum. Ein nur verstecktes Element wäre weiterhin im DOM vorhanden.",
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
      "solutionNotes": "remove trennt das Element vom Baum. Ein nur verstecktes Element wäre weiterhin im DOM vorhanden. remove entfernt das gewählte Element aus seinem Elternteil. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-09",
      "title": "Eine sichere Liste",
      "explanation": "Übernimm Text mit textContent, auch wenn er spitze Klammern enthält.",
      "task": "Schreibe renderListe(werte), das #list leert und pro Wert ein li anlegt.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine sichere Liste: Übernimm Text mit textContent, auch wenn er spitze Klammern enthält. */\nfunction renderListe(werte) {\n  const list = document.querySelector(\"#list\");\n  list.replaceChildren();\n  for (const wert of werte) { const li = document.createElement(\"li\"); li.textContent = wert; list.append(li); }\n}\nrenderListe([\"Erfurt\", \"Weimar\"]);"
      },
      "hints": [
        "Bleiben eingegebene Tags Text, oder erzeugst du ungewollt HTML-Elemente?",
        "Nutzereingaben gehören in textContent. Dadurch bleiben spitze Klammern gewöhnlicher Text. Dieselbe Darstellung über innerHTML würde HTML interpretieren.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Zwei Elemente",
          "code": "typeof renderListe==='function' && (renderListe(['A','B']),document.querySelectorAll('#list li').length===2)"
        },
        {
          "label": "Sicherer Text",
          "code": "(renderListe(['<b>Text</b>']),__text('#list li')==='<b>Text</b>' && !document.querySelector('#list b'))"
        }
      ],
      "prerequisites": [
        "m11-08"
      ],
      "concept": {
        "example": "const li = document.createElement(\"li\"); li.textContent = \"<em>Text</em>\";",
        "explanation": "Nutzereingaben gehören in textContent. Dadurch bleiben spitze Klammern gewöhnlicher Text. Dieselbe Darstellung über innerHTML würde HTML interpretieren.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "renderListe. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#list li'",
          "expected": "'<b>Text</b>'",
          "context": "Sicherer Text"
        }
      ],
      "solutionNotes": "Nutzereingaben gehören in textContent. Dadurch bleiben spitze Klammern gewöhnlicher Text. Dieselbe Darstellung über innerHTML würde HTML interpretieren. Übernimm Text mit textContent, auch wenn er spitze Klammern enthält. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m11-10",
      "title": "Projekt: Stationen anzeigen",
      "explanation": "Eine Renderfunktion übersetzt ein Datenmodell in DOM-Elemente.",
      "task": "Schreibe renderRoute(staedte), das #list neu aufbaut und #output auf N Stationen setzt.",
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "starter": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1 id=\"title\">Reise</h1><p id=\"output\"></p><ul id=\"list\"><li data-city=\"Erfurt\">Ein Stopp</li></ul><button id=\"action\" type=\"button\">Weiter</button><div class=\"card\">Karte</div><div class=\"card\">Karte</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Stationen anzeigen: Eine Renderfunktion übersetzt ein Datenmodell in DOM-Elemente. */\nfunction renderRoute(staedte) {\n  const list = document.querySelector(\"#list\");\n  list.replaceChildren();\n  for (const stadt of staedte) { const li = document.createElement(\"li\"); li.textContent = stadt; list.append(li); }\n  document.querySelector(\"#output\").textContent = `${staedte.length} Stationen`;\n}\nrenderRoute([\"Erfurt\", \"Weimar\", \"Jena\"]);"
      },
      "hints": [
        "Stimmen Liste und Zähltext nach einem zweiten Aufruf noch überein?",
        "Eine Renderfunktion baut die Ansicht aus ihren aktuellen Eingaben neu auf. Die Zählanzeige muss aus derselben Liste entstehen wie die Listenelemente.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Daten zeichnen",
          "code": "typeof renderRoute==='function' && (renderRoute(['A','B']),document.querySelectorAll('#list li').length===2 && __text('#output')==='2 Stationen')"
        },
        {
          "label": "Leere Route",
          "code": "(renderRoute([]),document.querySelectorAll('#list li').length===0 && __text('#output')==='0 Stationen')"
        }
      ],
      "prerequisites": [
        "m11-09"
      ],
      "concept": {
        "example": "const anzahl = 4; document.querySelector(\"h2\").textContent = `${anzahl} Ziele`;",
        "explanation": "Eine Renderfunktion baut die Ansicht aus ihren aktuellen Eingaben neu auf. Die Zählanzeige muss aus derselben Liste entstehen wie die Listenelemente.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "renderRoute. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#output'",
          "expected": "'2 Stationen'",
          "context": "Daten zeichnen"
        },
        {
          "input": "Text in '#output'",
          "expected": "'0 Stationen'",
          "context": "Leere Route"
        }
      ],
      "solutionNotes": "Eine Renderfunktion baut die Ansicht aus ihren aktuellen Eingaben neu auf. Die Zählanzeige muss aus derselben Liste entstehen wie die Listenelemente. Eine Renderfunktion übersetzt ein Datenmodell in DOM-Elemente. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
