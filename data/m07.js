window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m07",
  "title": "Entscheidungen treffen",
  "city": "Potsdam",
  "tag": "logic",
  "level": 2,
  "description": "Bedingungen, Wahrheitswerte und verlässliche Vergleiche.",
  "lesson": "true und false sind Wahrheitswerte. === vergleicht ohne automatische Typumwandlung, !== prüft Ungleichheit. <, >, <= und >= vergleichen Zahlen. if (bedingung) { ... } else { ... } wählt einen Weg. && bedeutet und, || oder, ! nicht. Der ternäre Ausdruck bedingung ? a : b liefert einen von zwei Werten. ?? verwendet rechts nur bei null oder undefined einen Ersatz. switch vergleicht einen Wert gegen mehrere case-Fälle; break beendet den jeweiligen Fall.",
  "exercises": [
    {
      "id": "m07-01",
      "title": "Streng gleich",
      "explanation": "=== unterscheidet Zahl und Zahlentext.",
      "task": "Speichere den Vergleich 5 === \"5\" in const gleich.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Streng gleich: === unterscheidet Zahl und Zahlentext. */\nconst gleich = 5 === \"5\";\nconsole.log(gleich);"
      },
      "hints": [
        "=== unterscheidet Zahl und Zahlentext.",
        "Orientiere dich an diesem Baustein:\nconst gleich = 5 === \"5\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(gleich);"
      ],
      "tests": [
        {
          "label": "Speichere den Vergleich 5 === \"5\" in const gleich.",
          "code": "typeof gleich !== 'undefined' && gleich===false"
        }
      ],
      "prerequisites": [
        "m06-10"
      ],
      "solutionNotes": "=== unterscheidet Zahl und Zahlentext. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-02",
      "title": "Darf ich mitfahren?",
      "explanation": ">= bedeutet größer oder gleich. if führt seinen Block nur bei wahrer Bedingung aus.",
      "task": "Setze alter=16. Setze status auf frei, falls alter>=16, sonst gesperrt.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Darf ich mitfahren?: >= bedeutet größer oder gleich. if führt seinen Block nur bei wahrer Bedingung aus. */\nconst alter = 16;\nlet status;\nif (alter >= 16) { status = \"frei\"; } else { status = \"gesperrt\"; }\nconsole.log(status);"
      },
      "hints": [
        ">= bedeutet größer oder gleich. if führt seinen Block nur bei wahrer Bedingung aus.",
        "Orientiere dich an diesem Baustein:\nconst alter = 16;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(status);"
      ],
      "tests": [
        {
          "label": "Setze alter=16. Setze status auf frei, falls alter>=16, sonst gesperrt.",
          "code": "typeof status !== 'undefined' && status==='frei'"
        }
      ],
      "prerequisites": [
        "m07-01"
      ],
      "solutionNotes": ">= bedeutet größer oder gleich. if führt seinen Block nur bei wahrer Bedingung aus. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-03",
      "title": "Zwei Bedingungen",
      "explanation": "&& ist nur wahr, wenn beide Seiten wahr sind.",
      "task": "Setze zugang auf das Ergebnis von alter>=16 und ticket===true bei alter=18 und ticket=true.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Zwei Bedingungen: && ist nur wahr, wenn beide Seiten wahr sind. */\nconst alter = 18;\nconst ticket = true;\nconst zugang = alter >= 16 && ticket === true;"
      },
      "hints": [
        "&& ist nur wahr, wenn beide Seiten wahr sind.",
        "Orientiere dich an diesem Baustein:\nconst alter = 18;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst zugang = alter >= 16 && ticket === true;"
      ],
      "tests": [
        {
          "label": "Setze zugang auf das Ergebnis von alter>=16 und ticket===true bei alter=18 und ticket=true.",
          "code": "typeof zugang !== 'undefined' && zugang===true"
        }
      ],
      "prerequisites": [
        "m07-02"
      ],
      "solutionNotes": "&& ist nur wahr, wenn beide Seiten wahr sind. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-04",
      "title": "Eine Möglichkeit reicht",
      "explanation": "|| ist wahr, wenn mindestens eine Seite wahr ist.",
      "task": "Setze rabatt auf schueler || student bei schueler=false und student=true.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Möglichkeit reicht: || ist wahr, wenn mindestens eine Seite wahr ist. */\nconst schueler = false;\nconst student = true;\nconst rabatt = schueler || student;"
      },
      "hints": [
        "|| ist wahr, wenn mindestens eine Seite wahr ist.",
        "Orientiere dich an diesem Baustein:\nconst schueler = false;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst rabatt = schueler || student;"
      ],
      "tests": [
        {
          "label": "Setze rabatt auf schueler || student bei schueler=false und student=true.",
          "code": "typeof rabatt !== 'undefined' && rabatt===true"
        }
      ],
      "prerequisites": [
        "m07-03"
      ],
      "solutionNotes": "|| ist wahr, wenn mindestens eine Seite wahr ist. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-05",
      "title": "Das Gegenteil",
      "explanation": "! kehrt einen Wahrheitswert um.",
      "task": "Setze offline=true und online auf das Gegenteil von offline.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Das Gegenteil: ! kehrt einen Wahrheitswert um. */\nconst offline = true;\nconst online = !offline;"
      },
      "hints": [
        "! kehrt einen Wahrheitswert um.",
        "Orientiere dich an diesem Baustein:\nconst offline = true;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst online = !offline;"
      ],
      "tests": [
        {
          "label": "Setze offline=true und online auf das Gegenteil von offline.",
          "code": "typeof offline !== 'undefined' && offline===true && typeof online !== 'undefined' && online===false"
        }
      ],
      "prerequisites": [
        "m07-04"
      ],
      "solutionNotes": "! kehrt einen Wahrheitswert um. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-06",
      "title": "Drei Wege",
      "explanation": "else if prüft eine weitere Bedingung, wenn die erste falsch war.",
      "task": "Bei temperatur=8 soll kleidung Jacke sein; unter 0 Mantel, ab 15 T-Shirt.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Drei Wege: else if prüft eine weitere Bedingung, wenn die erste falsch war. */\nconst temperatur = 8;\nlet kleidung;\nif (temperatur < 0) { kleidung = \"Mantel\"; }\nelse if (temperatur < 15) { kleidung = \"Jacke\"; }\nelse { kleidung = \"T-Shirt\"; }"
      },
      "hints": [
        "else if prüft eine weitere Bedingung, wenn die erste falsch war.",
        "Orientiere dich an diesem Baustein:\nconst temperatur = 8;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nelse { kleidung = \"T-Shirt\"; }"
      ],
      "tests": [
        {
          "label": "Bei temperatur=8 soll kleidung Jacke sein; unter 0 Mantel, ab 15 T-Shirt.",
          "code": "typeof kleidung !== 'undefined' && kleidung==='Jacke'"
        }
      ],
      "prerequisites": [
        "m07-05"
      ],
      "solutionNotes": "else if prüft eine weitere Bedingung, wenn die erste falsch war. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-07",
      "title": "Eine kurze Entscheidung",
      "explanation": "Der ternäre Operator eignet sich für zwei kurze Ergebniswerte.",
      "task": "Setze text bei punkte=80 auf Bestanden, wenn punkte>=50, sonst Weiter üben.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine kurze Entscheidung: Der ternäre Operator eignet sich für zwei kurze Ergebniswerte. */\nconst punkte = 80;\nconst text = punkte >= 50 ? \"Bestanden\" : \"Weiter üben\";"
      },
      "hints": [
        "Der ternäre Operator eignet sich für zwei kurze Ergebniswerte.",
        "Orientiere dich an diesem Baustein:\nconst punkte = 80;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst text = punkte >= 50 ? \"Bestanden\" : \"Weiter üben\";"
      ],
      "tests": [
        {
          "label": "Setze text bei punkte=80 auf Bestanden, wenn punkte>=50, sonst Weiter üben.",
          "code": "typeof text !== 'undefined' && text==='Bestanden'"
        }
      ],
      "prerequisites": [
        "m07-06"
      ],
      "solutionNotes": "Der ternäre Operator eignet sich für zwei kurze Ergebniswerte. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-08",
      "title": "Null ist nicht null Punkte",
      "explanation": "?? ersetzt null oder undefined, erhält aber 0. || würde auch 0 ersetzen.",
      "task": "Setze wert=0 und anzeige auf wert ?? 100.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Null ist nicht null Punkte: ?? ersetzt null oder undefined, erhält aber 0. || würde auch 0 ersetzen. */\nconst wert = 0;\nconst anzeige = wert ?? 100;"
      },
      "hints": [
        "?? ersetzt null oder undefined, erhält aber 0. || würde auch 0 ersetzen.",
        "Orientiere dich an diesem Baustein:\nconst wert = 0;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst anzeige = wert ?? 100;"
      ],
      "tests": [
        {
          "label": "Setze wert=0 und anzeige auf wert ?? 100.",
          "code": "typeof anzeige !== 'undefined' && anzeige===0"
        }
      ],
      "prerequisites": [
        "m07-07"
      ],
      "solutionNotes": "?? ersetzt null oder undefined, erhält aber 0. || würde auch 0 ersetzen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-09",
      "title": "Mehrere feste Fälle",
      "explanation": "switch nutzt case und break; default deckt unbekannte Werte ab.",
      "task": "Ordne code=\"HH\" mit switch dem const/let ort=\"Hamburg\" zu; Standard Unbekannt.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Mehrere feste Fälle: switch nutzt case und break; default deckt unbekannte Werte ab. */\nconst code = \"HH\";\nlet ort;\nswitch (code) {\n  case \"HH\": ort = \"Hamburg\"; break;\n  case \"B\": ort = \"Berlin\"; break;\n  default: ort = \"Unbekannt\";\n}"
      },
      "hints": [
        "switch nutzt case und break; default deckt unbekannte Werte ab.",
        "Orientiere dich an diesem Baustein:\nconst code = \"HH\";",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Ordne code=\"HH\" mit switch dem const/let ort=\"Hamburg\" zu; Standard Unbekannt.",
          "code": "typeof ort !== 'undefined' && ort==='Hamburg'"
        }
      ],
      "prerequisites": [
        "m07-08"
      ],
      "solutionNotes": "switch nutzt case und break; default deckt unbekannte Werte ab. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m07-10",
      "title": "Projekt: Ein Lernhinweis",
      "explanation": "Kombiniere Bedingungen mit einer sichtbaren Ausgabe.",
      "task": "Bei minuten=10 und energie=true zeige Kurz üben, wenn mindestens 5 Minuten und Energie vorhanden sind; sonst Pause.",
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ein Lernhinweis: Kombiniere Bedingungen mit einer sichtbaren Ausgabe. */\nconst minuten = 10;\nconst energie = true;\nconst text = minuten >= 5 && energie ? \"Kurz üben\" : \"Pause\";\ndocument.querySelector(\"#output\").textContent = text;"
      },
      "hints": [
        "Kombiniere Bedingungen mit einer sichtbaren Ausgabe.",
        "Orientiere dich an diesem Baustein:\nconst minuten = 10;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = text;"
      ],
      "tests": [
        {
          "label": "Bei minuten=10 und energie=true zeige Kurz üben, wenn mindestens 5 Minuten und Energie vorhanden sind; sonst Pause.",
          "code": "document.querySelector('#output').textContent==='Kurz üben'"
        }
      ],
      "prerequisites": [
        "m07-09"
      ],
      "solutionNotes": "Kombiniere Bedingungen mit einer sichtbaren Ausgabe. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
