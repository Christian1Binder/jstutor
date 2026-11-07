window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m06",
  "title": "JavaScript erwacht",
  "city": "Berlin",
  "tag": "variables",
  "level": 1,
  "description": "Werte, Variablen, Zeichenketten und die erste sichtbare Ausgabe.",
  "lesson": "JavaScript führt Anweisungen aus. const name = \"Ada\"; bindet einen Namen an einen Wert, let erlaubt spätere Zuweisung. Texte stehen in Anführungszeichen, Zahlen nicht. console.log zeigt Werte in der Werkstatt-Konsole. Für sichtbare Ausgabe verwenden wir document.querySelector(\"#output\").textContent = wert;: querySelector sucht das HTML-Element, textContent setzt seinen Text. Diesen Ausgabebaustein darfst du zunächst übernehmen. Kommentare beginnen mit // und laufen bis zum Zeilenende. Jede Ausführung startet eine frische Vorschau.",
  "exercises": [
    {
      "id": "m06-01",
      "title": "Hallo, Konsole!",
      "explanation": "console.log(wert) schreibt eine Nachricht in die Konsole. Texte stehen in Anführungszeichen.",
      "task": "Gib Hallo, JavaScript! mit console.log aus.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Hallo, Konsole!: console.log(wert) schreibt eine Nachricht in die Konsole. Texte stehen in Anführungszeichen. */\nconsole.log(\"Hallo, JavaScript!\");"
      },
      "hints": [
        "console.log(wert) schreibt eine Nachricht in die Konsole. Texte stehen in Anführungszeichen.",
        "Orientiere dich an diesem Baustein:\nconsole.log(\"Hallo, JavaScript!\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(\"Hallo, JavaScript!\");"
      ],
      "tests": [
        {
          "label": "Gib Hallo, JavaScript! mit console.log aus.",
          "code": "logs.some(x=>x.text==='Hallo, JavaScript!')"
        }
      ],
      "prerequisites": [
        "m05-10"
      ],
      "solutionNotes": "console.log(wert) schreibt eine Nachricht in die Konsole. Texte stehen in Anführungszeichen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-02",
      "title": "Ein Name bleibt",
      "explanation": "const deklariert eine Bindung, die du nicht neu zuweisen kannst.",
      "task": "Deklariere const name mit dem Text Ada und gib name aus.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Name bleibt: const deklariert eine Bindung, die du nicht neu zuweisen kannst. */\nconst name = \"Ada\";\nconsole.log(name);"
      },
      "hints": [
        "const deklariert eine Bindung, die du nicht neu zuweisen kannst.",
        "Orientiere dich an diesem Baustein:\nconst name = \"Ada\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(name);"
      ],
      "tests": [
        {
          "label": "Deklariere const name mit dem Text Ada und gib name aus.",
          "code": "typeof name !== 'undefined' && name === 'Ada' && logs.some(x=>x.text==='Ada')"
        }
      ],
      "prerequisites": [
        "m06-01"
      ],
      "solutionNotes": "const deklariert eine Bindung, die du nicht neu zuweisen kannst. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-03",
      "title": "Ein Wert verändert sich",
      "explanation": "let erlaubt eine neue Zuweisung mit =. Das ist kein mathematisches Gleichheitszeichen.",
      "task": "Starte punkte mit 10 und erhöhe anschließend um 5.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Wert verändert sich: let erlaubt eine neue Zuweisung mit =. Das ist kein mathematisches Gleichheitszeichen. */\nlet punkte = 10;\npunkte = punkte + 5;\nconsole.log(punkte);"
      },
      "hints": [
        "let erlaubt eine neue Zuweisung mit =. Das ist kein mathematisches Gleichheitszeichen.",
        "Orientiere dich an diesem Baustein:\nlet punkte = 10;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(punkte);"
      ],
      "tests": [
        {
          "label": "Starte punkte mit 10 und erhöhe anschließend um 5.",
          "code": "typeof punkte !== 'undefined' && punkte===15"
        }
      ],
      "prerequisites": [
        "m06-02"
      ],
      "solutionNotes": "let erlaubt eine neue Zuweisung mit =. Das ist kein mathematisches Gleichheitszeichen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-04",
      "title": "Rechnen im Browser",
      "explanation": "+ addiert, * multipliziert. Klammern steuern die Reihenfolge.",
      "task": "Berechne in const gesamt den Preis von 3 Tickets zu je 12 Euro plus 4 Euro Gebühr.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Rechnen im Browser: + addiert, * multipliziert. Klammern steuern die Reihenfolge. */\nconst gesamt = 3 * 12 + 4;\nconsole.log(gesamt);"
      },
      "hints": [
        "+ addiert, * multipliziert. Klammern steuern die Reihenfolge.",
        "Orientiere dich an diesem Baustein:\nconst gesamt = 3 * 12 + 4;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(gesamt);"
      ],
      "tests": [
        {
          "label": "Berechne in const gesamt den Preis von 3 Tickets zu je 12 Euro plus 4 Euro Gebühr.",
          "code": "typeof gesamt !== 'undefined' && gesamt===40"
        }
      ],
      "prerequisites": [
        "m06-03"
      ],
      "solutionNotes": "+ addiert, * multipliziert. Klammern steuern die Reihenfolge. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-05",
      "title": "Text zusammensetzen",
      "explanation": "Das Pluszeichen verbindet Zeichenketten. Leerzeichen gehören zum Text.",
      "task": "Verbinde in const gruss die Texte Hallo, und Ada zu Hallo, Ada.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Text zusammensetzen: Das Pluszeichen verbindet Zeichenketten. Leerzeichen gehören zum Text. */\nconst gruss = \"Hallo, \" + \"Ada\";\nconsole.log(gruss);"
      },
      "hints": [
        "Das Pluszeichen verbindet Zeichenketten. Leerzeichen gehören zum Text.",
        "Orientiere dich an diesem Baustein:\nconst gruss = \"Hallo, \" + \"Ada\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(gruss);"
      ],
      "tests": [
        {
          "label": "Verbinde in const gruss die Texte Hallo, und Ada zu Hallo, Ada.",
          "code": "typeof gruss !== 'undefined' && gruss==='Hallo, Ada'"
        }
      ],
      "prerequisites": [
        "m06-04"
      ],
      "solutionNotes": "Das Pluszeichen verbindet Zeichenketten. Leerzeichen gehören zum Text. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-06",
      "title": "Platzhalter im Text",
      "explanation": "Template Literals stehen zwischen Backticks. ${ausdruck} setzt einen Wert ein.",
      "task": "Setze const stadt=\"Berlin\" und const nachricht auf Ich lerne in Berlin.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Platzhalter im Text: Template Literals stehen zwischen Backticks. ${ausdruck} setzt einen Wert ein. */\nconst stadt = \"Berlin\";\nconst nachricht = `Ich lerne in ${stadt}.`;\nconsole.log(nachricht);"
      },
      "hints": [
        "Template Literals stehen zwischen Backticks. ${ausdruck} setzt einen Wert ein.",
        "Orientiere dich an diesem Baustein:\nconst stadt = \"Berlin\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(nachricht);"
      ],
      "tests": [
        {
          "label": "Setze const stadt=\"Berlin\" und const nachricht auf Ich lerne in Berlin.",
          "code": "typeof stadt !== 'undefined' && stadt==='Berlin' && typeof nachricht !== 'undefined' && nachricht==='Ich lerne in Berlin.'"
        }
      ],
      "prerequisites": [
        "m06-05"
      ],
      "solutionNotes": "Template Literals stehen zwischen Backticks. ${ausdruck} setzt einen Wert ein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-07",
      "title": "Text ist keine Zahl",
      "explanation": "Number(\"12\") wandelt Zahlentext in eine Zahl um. Ohne Umwandlung verbindet + zwei Texte.",
      "task": "Wandle \"12\" mit Number um und addiere 3 in const ergebnis.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Text ist keine Zahl: Number(\"12\") wandelt Zahlentext in eine Zahl um. Ohne Umwandlung verbindet + zwei Texte. */\nconst ergebnis = Number(\"12\") + 3;\nconsole.log(ergebnis);"
      },
      "hints": [
        "Number(\"12\") wandelt Zahlentext in eine Zahl um. Ohne Umwandlung verbindet + zwei Texte.",
        "Orientiere dich an diesem Baustein:\nconst ergebnis = Number(\"12\") + 3;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(ergebnis);"
      ],
      "tests": [
        {
          "label": "Wandle \"12\" mit Number um und addiere 3 in const ergebnis.",
          "code": "typeof ergebnis !== 'undefined' && ergebnis===15"
        }
      ],
      "prerequisites": [
        "m06-06"
      ],
      "solutionNotes": "Number(\"12\") wandelt Zahlentext in eine Zahl um. Ohne Umwandlung verbindet + zwei Texte. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-08",
      "title": "Welcher Typ ist das?",
      "explanation": "typeof wert liefert einen Typnamen als Text, etwa number oder string.",
      "task": "Speichere typeof 42 in const typ.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Welcher Typ ist das?: typeof wert liefert einen Typnamen als Text, etwa number oder string. */\nconst typ = typeof 42;\nconsole.log(typ);"
      },
      "hints": [
        "typeof wert liefert einen Typnamen als Text, etwa number oder string.",
        "Orientiere dich an diesem Baustein:\nconst typ = typeof 42;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(typ);"
      ],
      "tests": [
        {
          "label": "Speichere typeof 42 in const typ.",
          "code": "typeof typ !== 'undefined' && typ==='number'"
        }
      ],
      "prerequisites": [
        "m06-07"
      ],
      "solutionNotes": "typeof wert liefert einen Typnamen als Text, etwa number oder string. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-09",
      "title": "Endlich auf der Seite",
      "explanation": "textContent setzt sicheren Text im gewählten Element. #output ist im HTML bereits vorhanden.",
      "task": "Zeige Web-Reise gestartet! im Element #output.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Endlich auf der Seite: textContent setzt sicheren Text im gewählten Element. #output ist im HTML bereits vorhanden. */\ndocument.querySelector(\"#output\").textContent = \"Web-Reise gestartet!\";"
      },
      "hints": [
        "textContent setzt sicheren Text im gewählten Element. #output ist im HTML bereits vorhanden.",
        "Orientiere dich an diesem Baustein:\ndocument.querySelector(\"#output\").textContent = \"Web-Reise gestartet!\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = \"Web-Reise gestartet!\";"
      ],
      "tests": [
        {
          "label": "Zeige Web-Reise gestartet! im Element #output.",
          "code": "document.querySelector('#output').textContent==='Web-Reise gestartet!'"
        }
      ],
      "prerequisites": [
        "m06-08"
      ],
      "solutionNotes": "textContent setzt sicheren Text im gewählten Element. #output ist im HTML bereits vorhanden. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m06-10",
      "title": "Projekt: Dein Reisepreis",
      "explanation": "Speichere Teilwerte in benannten Konstanten. Berechne zuerst, formatiere danach.",
      "task": "Berechne 2 Nächte zu 45 Euro plus 18 Euro Fahrt als gesamt und zeige Gesamt: 108 € in #output.",
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Dein Reisepreis: Speichere Teilwerte in benannten Konstanten. Berechne zuerst, formatiere danach. */\nconst naechte = 2;\nconst preis = 45;\nconst fahrt = 18;\nconst gesamt = naechte * preis + fahrt;\ndocument.querySelector(\"#output\").textContent = `Gesamt: ${gesamt} €`;"
      },
      "hints": [
        "Speichere Teilwerte in benannten Konstanten. Berechne zuerst, formatiere danach.",
        "Orientiere dich an diesem Baustein:\nconst naechte = 2;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = `Gesamt: ${gesamt} €`;"
      ],
      "tests": [
        {
          "label": "Berechne 2 Nächte zu 45 Euro plus 18 Euro Fahrt als gesamt und zeige Gesamt: 108 € in #output.",
          "code": "typeof gesamt !== 'undefined' && gesamt===108 && document.querySelector('#output').textContent==='Gesamt: 108 €'"
        }
      ],
      "prerequisites": [
        "m06-09"
      ],
      "solutionNotes": "Speichere Teilwerte in benannten Konstanten. Berechne zuerst, formatiere danach. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
