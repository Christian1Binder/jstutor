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
        "Suchst du dein Ergebnis an der richtigen Stelle, nämlich in der Konsole?",
        "console bezeichnet das Ausgabewerkzeug, log die aufgerufene Funktion. Runde Klammern enthalten den übergebenen Wert. Texte brauchen Anführungszeichen; die Ausgabe erscheint in der Konsole und nicht automatisch auf der Seite.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "console.log(\"Guten Morgen\");",
        "explanation": "console bezeichnet das Ausgabewerkzeug, log die aufgerufene Funktion. Runde Klammern enthalten den übergebenen Wert. Texte brauchen Anführungszeichen; die Ausgabe erscheint in der Konsole und nicht automatisch auf der Seite.",
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
      "solutionNotes": "console bezeichnet das Ausgabewerkzeug, log die aufgerufene Funktion. Runde Klammern enthalten den übergebenen Wert. Texte brauchen Anführungszeichen; die Ausgabe erscheint in der Konsole und nicht automatisch auf der Seite. console.log(wert) schreibt eine Nachricht in die Konsole. Texte stehen in Anführungszeichen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m06-02",
      "title": "Ein Name bleibt",
      "explanation": "const deklariert eine Bindung, die du nicht neu zuweisen kannst.",
      "task": "Deklariere im JavaScript-Editor eine Konstante namens name mit dem Text „Ada“. Gib anschließend ihren Wert mit console.log in der Konsole aus.",
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
        "Verwendest du den verlangten Variablennamen und speicherst du darin einen Text?",
        "Links vom Gleichheitszeichen steht ein selbst gewählter Name, rechts der gespeicherte Wert. Ein späterer Zugriff auf den Namen liest diesen Wert. Die Prüfung kann nur den in der Aufgabe vereinbarten Namen finden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Deklariere im JavaScript-Editor eine Konstante namens name mit dem Text „Ada“. Gib anschließend ihren Wert mit console.log in der Konsole aus.",
          "code": "typeof name !== 'undefined' && name === 'Ada' && logs.some(x=>x.text==='Ada')"
        }
      ],
      "prerequisites": [
        "m06-01"
      ],
      "concept": {
        "example": "const lieblingsfarbe = \"blau\";",
        "explanation": "Links vom Gleichheitszeichen steht ein selbst gewählter Name, rechts der gespeicherte Wert. Ein späterer Zugriff auf den Namen liest diesen Wert. Die Prüfung kann nur den in der Aufgabe vereinbarten Namen finden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "name. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "name",
          "expected": "'Ada'",
          "context": "Deklariere im JavaScript-Editor eine Konstante namens name mit dem Text „Ada“. Gib anschließend ihren Wert mit console.log in der Konsole aus."
        }
      ],
      "solutionNotes": "Links vom Gleichheitszeichen steht ein selbst gewählter Name, rechts der gespeicherte Wert. Ein späterer Zugriff auf den Namen liest diesen Wert. Die Prüfung kann nur den in der Aufgabe vereinbarten Namen finden. const deklariert eine Bindung, die du nicht neu zuweisen kannst. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Änderst du die vorhandene Variable oder legst du versehentlich eine zweite an?",
        "Die rechte Seite einer Zuweisung wird zuerst berechnet. Anschließend wird das Ergebnis unter demselben Namen gespeichert. Eine zweite Deklaration mit let wäre im selben Bereich ein Fehler.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "let runden = 2; runden = runden + 1;",
        "explanation": "Die rechte Seite einer Zuweisung wird zuerst berechnet. Anschließend wird das Ergebnis unter demselben Namen gespeichert. Eine zweite Deklaration mit let wäre im selben Bereich ein Fehler.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "punkte. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "punkte",
          "expected": "15",
          "context": "Starte punkte mit 10 und erhöhe anschließend um 5."
        }
      ],
      "solutionNotes": "Die rechte Seite einer Zuweisung wird zuerst berechnet. Anschließend wird das Ergebnis unter demselben Namen gespeichert. Eine zweite Deklaration mit let wäre im selben Bereich ein Fehler. let erlaubt eine neue Zuweisung mit =. Das ist kein mathematisches Gleichheitszeichen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind deine Teilwerte Zahlen und passt die Reihenfolge der Rechenschritte?",
        "Multiplikation wird vor Addition ausgeführt. Klammern ändern diese Reihenfolge ausdrücklich. Zahlenwerte stehen ohne Anführungszeichen im Code.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const kosten = 4 * 7 + 2;",
        "explanation": "Multiplikation wird vor Addition ausgeführt. Klammern ändern diese Reihenfolge ausdrücklich. Zahlenwerte stehen ohne Anführungszeichen im Code.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "gesamt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "gesamt",
          "expected": "40",
          "context": "Berechne in const gesamt den Preis von 3 Tickets zu je 12 Euro plus 4 Euro Gebühr."
        }
      ],
      "solutionNotes": "Multiplikation wird vor Addition ausgeführt. Klammern ändern diese Reihenfolge ausdrücklich. Zahlenwerte stehen ohne Anführungszeichen im Code. + addiert, * multipliziert. Klammern steuern die Reihenfolge. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Fehlt zwischen deinen verbundenen Textstücken ein Leerzeichen?",
        "Bei Texten verbindet das Pluszeichen die Zeichenketten. Der Browser ergänzt keine Leerzeichen. Benötigte Zwischenräume gehören daher in mindestens einen Teiltext.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const titel = \"Guten \" + \"Morgen\";",
        "explanation": "Bei Texten verbindet das Pluszeichen die Zeichenketten. Der Browser ergänzt keine Leerzeichen. Benötigte Zwischenräume gehören daher in mindestens einen Teiltext.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "gruss. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "gruss",
          "expected": "'Hallo, Ada'",
          "context": "Verbinde in const gruss die Texte Hallo, und Ada zu Hallo, Ada."
        }
      ],
      "solutionNotes": "Bei Texten verbindet das Pluszeichen die Zeichenketten. Der Browser ergänzt keine Leerzeichen. Benötigte Zwischenräume gehören daher in mindestens einen Teiltext. Das Pluszeichen verbindet Zeichenketten. Leerzeichen gehören zum Text. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Verwendest du Backticks und die Platzhalterschreibweise an der richtigen Stelle?",
        "Ein Template Literal verwendet Backticks statt gewöhnlicher Anführungszeichen. Innerhalb von Dollarzeichen und geschweiften Klammern wird ein Ausdruck ausgewertet und als Text eingesetzt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const anzahl = 4; console.log(`Noch ${anzahl} Seiten`);",
        "explanation": "Ein Template Literal verwendet Backticks statt gewöhnlicher Anführungszeichen. Innerhalb von Dollarzeichen und geschweiften Klammern wird ein Ausdruck ausgewertet und als Text eingesetzt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "stadt, nachricht. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "stadt",
          "expected": "'Berlin'",
          "context": "Setze const stadt=\"Berlin\" und const nachricht auf Ich lerne in Berlin."
        },
        {
          "input": "nachricht",
          "expected": "'Ich lerne in Berlin.'",
          "context": "Setze const stadt=\"Berlin\" und const nachricht auf Ich lerne in Berlin."
        }
      ],
      "solutionNotes": "Ein Template Literal verwendet Backticks statt gewöhnlicher Anführungszeichen. Innerhalb von Dollarzeichen und geschweiften Klammern wird ein Ausdruck ausgewertet und als Text eingesetzt. Template Literals stehen zwischen Backticks. ${ausdruck} setzt einen Wert ein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wird der gelesene Text vor der Addition wirklich in eine Zahl umgewandelt?",
        "Ein Text aus Ziffern bleibt zunächst ein Text. Number erzeugt daraus eine Zahl, mit der die Addition rechnen kann. Die Umwandlung muss vor dem Addieren erfolgen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const stuecke = Number(\"8\");",
        "explanation": "Ein Text aus Ziffern bleibt zunächst ein Text. Number erzeugt daraus eine Zahl, mit der die Addition rechnen kann. Die Umwandlung muss vor dem Addieren erfolgen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "ergebnis. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "ergebnis",
          "expected": "15",
          "context": "Wandle \"12\" mit Number um und addiere 3 in const ergebnis."
        }
      ],
      "solutionNotes": "Ein Text aus Ziffern bleibt zunächst ein Text. Number erzeugt daraus eine Zahl, mit der die Addition rechnen kann. Die Umwandlung muss vor dem Addieren erfolgen. Number(\"12\") wandelt Zahlentext in eine Zahl um. Ohne Umwandlung verbindet + zwei Texte. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Untersuchst du den Wert oder versehentlich bereits einen Text mit seinem Typnamen?",
        "typeof ist ein Operator und liefert einen Typnamen als Text. Unterscheide den Typ eines Wertes von seinem Inhalt: Der Text 42 und die Zahl 42 besitzen unterschiedliche Typen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "console.log(typeof \"Sonne\");",
        "explanation": "typeof ist ein Operator und liefert einen Typnamen als Text. Unterscheide den Typ eines Wertes von seinem Inhalt: Der Text 42 und die Zahl 42 besitzen unterschiedliche Typen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "typ. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "typ",
          "expected": "'number'",
          "context": "Speichere typeof 42 in const typ."
        }
      ],
      "solutionNotes": "typeof ist ein Operator und liefert einen Typnamen als Text. Unterscheide den Typ eines Wertes von seinem Inhalt: Der Text 42 und die Zahl 42 besitzen unterschiedliche Typen. typeof wert liefert einen Typnamen als Text, etwa number oder string. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Schreibst du in das vereinbarte Ausgabeelement statt nur in die Konsole?",
        "Die Suche liefert ein DOM-Element. Über dessen Eigenschaft textContent ersetzt du den sichtbaren Text. Eine Konsolenausgabe ändert dieses Element nicht.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Zeige Web-Reise gestartet! im Element #output.",
          "code": "__text('#output')==='Web-Reise gestartet!'"
        }
      ],
      "prerequisites": [
        "m06-08"
      ],
      "concept": {
        "example": "document.querySelector(\"h1\").textContent = \"Neuer Titel\";",
        "explanation": "Die Suche liefert ein DOM-Element. Über dessen Eigenschaft textContent ersetzt du den sichtbaren Text. Eine Konsolenausgabe ändert dieses Element nicht.",
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
          "expected": "'Web-Reise gestartet!'",
          "context": "Zeige Web-Reise gestartet! im Element #output."
        }
      ],
      "solutionNotes": "Die Suche liefert ein DOM-Element. Über dessen Eigenschaft textContent ersetzt du den sichtbaren Text. Eine Konsolenausgabe ändert dieses Element nicht. textContent setzt sicheren Text im gewählten Element. #output ist im HTML bereits vorhanden. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Stimmt zuerst das Zahlenergebnis und danach auch die geforderte sichtbare Ausgabe?",
        "Trenne Berechnung und Darstellung: Erst entsteht eine Zahl, anschließend ein lesbarer Text. So kannst du einen Rechenfehler unabhängig von einem falsch formatierten Ausgabetext suchen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Berechne 2 Nächte zu 45 Euro plus 18 Euro Fahrt als gesamt und zeige Gesamt: 108 € in #output.",
          "code": "typeof gesamt !== 'undefined' && gesamt===108 && __text('#output')==='Gesamt: 108 €'"
        }
      ],
      "prerequisites": [
        "m06-09"
      ],
      "concept": {
        "example": "const gesamtpreis = 4 * 25; console.log(`Preis: ${gesamtpreis}`);",
        "explanation": "Trenne Berechnung und Darstellung: Erst entsteht eine Zahl, anschließend ein lesbarer Text. So kannst du einen Rechenfehler unabhängig von einem falsch formatierten Ausgabetext suchen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "gesamt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "gesamt",
          "expected": "108",
          "context": "Berechne 2 Nächte zu 45 Euro plus 18 Euro Fahrt als gesamt und zeige Gesamt: 108 € in #output."
        },
        {
          "input": "Text in '#output'",
          "expected": "'Gesamt: 108 €'",
          "context": "Berechne 2 Nächte zu 45 Euro plus 18 Euro Fahrt als gesamt und zeige Gesamt: 108 € in #output."
        }
      ],
      "solutionNotes": "Trenne Berechnung und Darstellung: Erst entsteht eine Zahl, anschließend ein lesbarer Text. So kannst du einen Rechenfehler unabhängig von einem falsch formatierten Ausgabetext suchen. Speichere Teilwerte in benannten Konstanten. Berechne zuerst, formatiere danach. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
