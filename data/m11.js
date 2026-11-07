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
        "querySelector nutzt bekannte CSS-Selektoren. textContent ersetzt den Text.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#title\").textContent = \"Willkommen in Erfurt\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#title\").textContent = \"Willkommen in Erfurt\";"
      ],
      "tests": [
        {
          "label": "Setze #title auf Willkommen in Erfurt.",
          "code": "document.querySelector('#title').textContent==='Willkommen in Erfurt'"
        }
      ],
      "prerequisites": [
        "m10-10"
      ],
      "solutionNotes": "querySelector nutzt bekannte CSS-Selektoren. textContent ersetzt den Text. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "classList.add erhält vorhandene Klassen.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#action\").classList.add(\"active\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#action\").classList.add(\"active\");"
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
      "solutionNotes": "classList.add erhält vorhandene Klassen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "querySelectorAll liefert eine durchlaufbare Liste.",
        "Orientiere dich an diesem Baustein:\nfor (const card of document.querySelectorAll(\".card\")) { card.classList.add(\"visited\"); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfor (const card of document.querySelectorAll(\".card\")) { card.classList.add(\"visited\"); }"
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
      "solutionNotes": "querySelectorAll liefert eine durchlaufbare Liste. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m11-04",
      "title": "Ein neues Ziel",
      "explanation": "createElement erzeugt ein noch nicht eingefügtes Element. append fügt es in den Baum ein.",
      "task": "Hänge ein li mit Text Weimar an #list an.",
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
        "createElement erzeugt ein noch nicht eingefügtes Element. append fügt es in den Baum ein.",
        "Orientiere dich an diesem Baustein:\nconst li = document.createElement(\"li\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#list\").append(li);"
      ],
      "tests": [
        {
          "label": "Hänge ein li mit Text Weimar an #list an.",
          "code": "document.querySelector('#list li:last-child')?.textContent==='Weimar'"
        }
      ],
      "prerequisites": [
        "m11-03"
      ],
      "solutionNotes": "createElement erzeugt ein noch nicht eingefügtes Element. append fügt es in den Baum ein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "replaceChildren leert oder ersetzt den Inhalt, ohne HTML-Text zu parsen.",
        "Orientiere dich an diesem Baustein:\nconst li = document.createElement(\"li\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#list\").replaceChildren(li);"
      ],
      "tests": [
        {
          "label": "Ersetze #list durch genau ein li mit Text Neustart.",
          "code": "document.querySelectorAll('#list li').length===1 && document.querySelector('#list li').textContent==='Neustart'"
        }
      ],
      "prerequisites": [
        "m11-04"
      ],
      "solutionNotes": "replaceChildren leert oder ersetzt den Inhalt, ohne HTML-Text zu parsen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "setAttribute(name,wert) setzt ein HTML-Attribut.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#action\").setAttribute(\"aria-label\", \"Nächste Station\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#action\").setAttribute(\"aria-label\", \"Nächste Station\");"
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
      "solutionNotes": "setAttribute(name,wert) setzt ein HTML-Attribut. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "data-city wird über element.dataset.city als Text lesbar.",
        "Orientiere dich an diesem Baustein:\nconst city = document.querySelector(\"li\").dataset.city;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = city;"
      ],
      "tests": [
        {
          "label": "Lies data-city des li und zeige es in #output.",
          "code": "document.querySelector('#output').textContent==='Erfurt'"
        }
      ],
      "prerequisites": [
        "m11-06"
      ],
      "solutionNotes": "data-city wird über element.dataset.city als Text lesbar. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m11-08",
      "title": "Gezielt entfernen",
      "explanation": "remove entfernt das gewählte Element aus seinem Elternteil.",
      "task": "Entferne den ersten .card-Eintrag, sodass eine Karte bleibt.",
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
        "remove entfernt das gewählte Element aus seinem Elternteil.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\".card\").remove();",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\".card\").remove();"
      ],
      "tests": [
        {
          "label": "Entferne den ersten .card-Eintrag, sodass eine Karte bleibt.",
          "code": "document.querySelectorAll('.card').length===1"
        }
      ],
      "prerequisites": [
        "m11-07"
      ],
      "solutionNotes": "remove entfernt das gewählte Element aus seinem Elternteil. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Übernimm Text mit textContent, auch wenn er spitze Klammern enthält.",
        "Orientiere dich an diesem Baustein:\nfunction renderListe(werte) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nrenderListe([\"Erfurt\", \"Weimar\"]);"
      ],
      "tests": [
        {
          "label": "Zwei Elemente",
          "code": "typeof renderListe==='function' && (renderListe(['A','B']),document.querySelectorAll('#list li').length===2)"
        },
        {
          "label": "Sicherer Text",
          "code": "(renderListe(['<b>Text</b>']),document.querySelector('#list li').textContent==='<b>Text</b>' && !document.querySelector('#list b'))"
        }
      ],
      "prerequisites": [
        "m11-08"
      ],
      "solutionNotes": "Übernimm Text mit textContent, auch wenn er spitze Klammern enthält. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine Renderfunktion übersetzt ein Datenmodell in DOM-Elemente.",
        "Orientiere dich an diesem Baustein:\nfunction renderRoute(staedte) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nrenderRoute([\"Erfurt\", \"Weimar\", \"Jena\"]);"
      ],
      "tests": [
        {
          "label": "Daten zeichnen",
          "code": "typeof renderRoute==='function' && (renderRoute(['A','B']),document.querySelectorAll('#list li').length===2 && document.querySelector('#output').textContent==='2 Stationen')"
        },
        {
          "label": "Leere Route",
          "code": "(renderRoute([]),document.querySelectorAll('#list li').length===0 && document.querySelector('#output').textContent==='0 Stationen')"
        }
      ],
      "prerequisites": [
        "m11-09"
      ],
      "solutionNotes": "Eine Renderfunktion übersetzt ein Datenmodell in DOM-Elemente. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
