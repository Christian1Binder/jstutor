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
        "Vergleichst du mit dem strengen Vergleichsoperator und speicherst einen echten Wahrheitswert?",
        "Ein strenger Vergleich berücksichtigt auch den Datentyp. Sein Ergebnis ist ein Wahrheitswert ohne Anführungszeichen. Eine Zuweisung mit einem einzelnen Gleichheitszeichen wäre eine andere Operation.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "console.log(9 === \"9\");",
        "explanation": "Ein strenger Vergleich berücksichtigt auch den Datentyp. Sein Ergebnis ist ein Wahrheitswert ohne Anführungszeichen. Eine Zuweisung mit einem einzelnen Gleichheitszeichen wäre eine andere Operation.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "gleich. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "gleich",
          "expected": "false",
          "context": "Speichere den Vergleich 5 === \"5\" in const gleich."
        }
      ],
      "solutionNotes": "Ein strenger Vergleich berücksichtigt auch den Datentyp. Sein Ergebnis ist ein Wahrheitswert ohne Anführungszeichen. Eine Zuweisung mit einem einzelnen Gleichheitszeichen wäre eine andere Operation. === unterscheidet Zahl und Zahlentext. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m07-02",
      "title": "Darf ich mitfahren?",
      "explanation": ">= bedeutet größer oder gleich. if führt seinen Block nur bei wahrer Bedingung aus.",
      "task": "Deklariere alter mit dem Zahlenwert 16. Schreibe eine if-else-Entscheidung: ab einschließlich 16 lautet der Wert der Variablen status „frei“, sonst „gesperrt“. Eine Ausgabe auf der Seite ist nicht nötig.",
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
        "Ist der Grenzwert selbst noch erlaubt oder schon ausgeschlossen?",
        "Die Bedingung in runden Klammern wird zu wahr oder falsch ausgewertet. Genau einer der beiden Zweige einer if-else-Anweisung wird ausgeführt. Achte auf eingeschlossene Grenzwerte.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Deklariere alter mit dem Zahlenwert 16. Schreibe eine if-else-Entscheidung: ab einschließlich 16 lautet der Wert der Variablen status „frei“, sonst „gesperrt“. Eine Ausgabe auf der Seite ist nicht nötig.",
          "code": "typeof status !== 'undefined' && status==='frei'"
        }
      ],
      "prerequisites": [
        "m07-01"
      ],
      "concept": {
        "example": "if (hoehe >= 120) { console.log(\"groß genug\"); }",
        "explanation": "Die Bedingung in runden Klammern wird zu wahr oder falsch ausgewertet. Genau einer der beiden Zweige einer if-else-Anweisung wird ausgeführt. Achte auf eingeschlossene Grenzwerte.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "status. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "status",
          "expected": "'frei'",
          "context": "Deklariere alter mit dem Zahlenwert 16. Schreibe eine if-else-Entscheidung: ab einschließlich 16 lautet der Wert der Variablen status „frei“, sonst „gesperrt“. Eine Ausgabe auf der Seite ist nicht nötig."
        }
      ],
      "solutionNotes": "Die Bedingung in runden Klammern wird zu wahr oder falsch ausgewertet. Genau einer der beiden Zweige einer if-else-Anweisung wird ausgeführt. Achte auf eingeschlossene Grenzwerte. >= bedeutet größer oder gleich. if führt seinen Block nur bei wahrer Bedingung aus. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Müssen beide Voraussetzungen erfüllt sein oder genügt bereits eine?",
        "Eine Und-Verknüpfung verlangt, dass beide Teilbedingungen zutreffen. Klammern können längere Ausdrücke übersichtlich gruppieren. Teste auch einen Fall, in dem nur eine Seite zutrifft.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const bereit = wasser && erde;",
        "explanation": "Eine Und-Verknüpfung verlangt, dass beide Teilbedingungen zutreffen. Klammern können längere Ausdrücke übersichtlich gruppieren. Teste auch einen Fall, in dem nur eine Seite zutrifft.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "zugang. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "zugang",
          "expected": "true",
          "context": "Setze zugang auf das Ergebnis von alter>=16 und ticket===true bei alter=18 und ticket=true."
        }
      ],
      "solutionNotes": "Eine Und-Verknüpfung verlangt, dass beide Teilbedingungen zutreffen. Klammern können längere Ausdrücke übersichtlich gruppieren. Teste auch einen Fall, in dem nur eine Seite zutrifft. && ist nur wahr, wenn beide Seiten wahr sind. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Was passiert in deinem Ausdruck, wenn genau eine der beiden Bedingungen wahr ist?",
        "Eine Oder-Verknüpfung ist schon erfüllt, wenn eine Seite zutrifft. Sie bleibt auch dann wahr, wenn beide Seiten zutreffen. Das unterscheidet sie von einem exklusiven Oder.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const frei = ferien || wochenende;",
        "explanation": "Eine Oder-Verknüpfung ist schon erfüllt, wenn eine Seite zutrifft. Sie bleibt auch dann wahr, wenn beide Seiten zutreffen. Das unterscheidet sie von einem exklusiven Oder.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "rabatt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "rabatt",
          "expected": "true",
          "context": "Setze rabatt auf schueler || student bei schueler=false und student=true."
        }
      ],
      "solutionNotes": "Eine Oder-Verknüpfung ist schon erfüllt, wenn eine Seite zutrifft. Sie bleibt auch dann wahr, wenn beide Seiten zutreffen. Das unterscheidet sie von einem exklusiven Oder. || ist wahr, wenn mindestens eine Seite wahr ist. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Leitest du einen neuen gegenteiligen Wert ab, ohne den Ausgangswert zu überschreiben?",
        "Das Ausrufezeichen kehrt einen Wahrheitswert um. Der ursprüngliche Wert muss dabei nicht verändert werden. Verwechsle die Negation nicht mit einer Ungleichheitsprüfung.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const unsichtbar = !sichtbar;",
        "explanation": "Das Ausrufezeichen kehrt einen Wahrheitswert um. Der ursprüngliche Wert muss dabei nicht verändert werden. Verwechsle die Negation nicht mit einer Ungleichheitsprüfung.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "offline, online. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "offline",
          "expected": "true",
          "context": "Setze offline=true und online auf das Gegenteil von offline."
        },
        {
          "input": "online",
          "expected": "false",
          "context": "Setze offline=true und online auf das Gegenteil von offline."
        }
      ],
      "solutionNotes": "Das Ausrufezeichen kehrt einen Wahrheitswert um. Der ursprüngliche Wert muss dabei nicht verändert werden. Verwechsle die Negation nicht mit einer Ungleichheitsprüfung. ! kehrt einen Wahrheitswert um. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist die speziellere Bedingung vor der allgemeineren angeordnet?",
        "Bei mehreren Zweigen entscheidet deren Reihenfolge. Sobald eine Bedingung zutrifft, werden spätere Zweige nicht mehr ausgewertet. Prüfe benachbarte Werte an jeder Grenze.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "if (wert < 10) { console.log(\"klein\"); } else if (wert < 30) { console.log(\"mittel\"); }",
        "explanation": "Bei mehreren Zweigen entscheidet deren Reihenfolge. Sobald eine Bedingung zutrifft, werden spätere Zweige nicht mehr ausgewertet. Prüfe benachbarte Werte an jeder Grenze.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "kleidung. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "kleidung",
          "expected": "'Jacke'",
          "context": "Bei temperatur=8 soll kleidung Jacke sein; unter 0 Mantel, ab 15 T-Shirt."
        }
      ],
      "solutionNotes": "Bei mehreren Zweigen entscheidet deren Reihenfolge. Sobald eine Bedingung zutrifft, werden spätere Zweige nicht mehr ausgewertet. Prüfe benachbarte Werte an jeder Grenze. else if prüft eine weitere Bedingung, wenn die erste falsch war. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind die beiden Ergebniswerte dem richtigen Wahrheitsfall zugeordnet?",
        "Der ternäre Operator ist ein Ausdruck mit einem Ergebniswert. Vor dem Fragezeichen steht die Bedingung, zwischen Fragezeichen und Doppelpunkt der wahre Fall, danach der falsche Fall.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const symbol = aktiv ? \"an\" : \"aus\";",
        "explanation": "Der ternäre Operator ist ein Ausdruck mit einem Ergebniswert. Vor dem Fragezeichen steht die Bedingung, zwischen Fragezeichen und Doppelpunkt der wahre Fall, danach der falsche Fall.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "text. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "text",
          "expected": "'Bestanden'",
          "context": "Setze text bei punkte=80 auf Bestanden, wenn punkte>=50, sonst Weiter üben."
        }
      ],
      "solutionNotes": "Der ternäre Operator ist ein Ausdruck mit einem Ergebniswert. Vor dem Fragezeichen steht die Bedingung, zwischen Fragezeichen und Doppelpunkt der wahre Fall, danach der falsche Fall. Der ternäre Operator eignet sich für zwei kurze Ergebniswerte. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Soll dein Ersatzwert auch bei 0 greifen oder nur bei einem fehlenden Wert?",
        "Der Nullish-Operator prüft ausschließlich null oder undefined. Andere Werte wie 0, false und ein leerer Text bleiben erhalten. Das ist bei gespeicherten Einstellungen oft entscheidend.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const titel = eingabe ?? \"Ohne Titel\";",
        "explanation": "Der Nullish-Operator prüft ausschließlich null oder undefined. Andere Werte wie 0, false und ein leerer Text bleiben erhalten. Das ist bei gespeicherten Einstellungen oft entscheidend.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "anzeige. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "anzeige",
          "expected": "0",
          "context": "Setze wert=0 und anzeige auf wert ?? 100."
        }
      ],
      "solutionNotes": "Der Nullish-Operator prüft ausschließlich null oder undefined. Andere Werte wie 0, false und ein leerer Text bleiben erhalten. Das ist bei gespeicherten Einstellungen oft entscheidend. ?? ersetzt null oder undefined, erhält aber 0. || würde auch 0 ersetzen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Beendet dein passender Fall die Auswahl, und gibt es einen Standardfall?",
        "Ein case vergleicht den untersuchten Wert mit einem festen Fall. Ohne break würde die Ausführung in den folgenden Fall weiterlaufen. default beschreibt den Rückfall.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "switch (farbe) { case \"rot\": console.log(\"Stopp\"); break; default: console.log(\"Weiter\"); }",
        "explanation": "Ein case vergleicht den untersuchten Wert mit einem festen Fall. Ohne break würde die Ausführung in den folgenden Fall weiterlaufen. default beschreibt den Rückfall.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "ort. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "ort",
          "expected": "'Hamburg'",
          "context": "Ordne code=\"HH\" mit switch dem const/let ort=\"Hamburg\" zu; Standard Unbekannt."
        }
      ],
      "solutionNotes": "Ein case vergleicht den untersuchten Wert mit einem festen Fall. Ohne break würde die Ausführung in den folgenden Fall weiterlaufen. default beschreibt den Rückfall. switch nutzt case und break; default deckt unbekannte Werte ab. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist jede geforderte Voraussetzung in deiner Entscheidung enthalten?",
        "Schreibe die Voraussetzungen zuerst als Wahrheitsausdruck auf. Leite erst daraus den Ausgabetext ab. So vermischst du Fachentscheidung und Darstellung nicht unnötig.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Bei minuten=10 und energie=true zeige Kurz üben, wenn mindestens 5 Minuten und Energie vorhanden sind; sonst Pause.",
          "code": "__text('#output')==='Kurz üben'"
        }
      ],
      "prerequisites": [
        "m07-09"
      ],
      "concept": {
        "example": "const hinweis = zeit >= 15 && lust ? \"Start\" : \"Später\";",
        "explanation": "Schreibe die Voraussetzungen zuerst als Wahrheitsausdruck auf. Leite erst daraus den Ausgabetext ab. So vermischst du Fachentscheidung und Darstellung nicht unnötig.",
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
          "expected": "'Kurz üben'",
          "context": "Bei minuten=10 und energie=true zeige Kurz üben, wenn mindestens 5 Minuten und Energie vorhanden sind; sonst Pause."
        }
      ],
      "solutionNotes": "Schreibe die Voraussetzungen zuerst als Wahrheitsausdruck auf. Leite erst daraus den Ausgabetext ab. So vermischst du Fachentscheidung und Darstellung nicht unnötig. Kombiniere Bedingungen mit einer sichtbaren Ausgabe. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
