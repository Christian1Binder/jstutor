window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m08",
  "title": "Funktionen als Werkzeuge",
  "city": "Magdeburg",
  "tag": "functions",
  "level": 2,
  "description": "Wiederverwendung, Parameter und kleine verlässliche Bausteine.",
  "lesson": "function name(parameter) { return ergebnis; } kapselt eine Berechnung. Ein Aufruf name(wert) setzt ein Argument ein. return gibt den Wert zurück und beendet den Aufruf. Parameter sind lokal. Standardparameter wie name=\"Gast\" gelten bei fehlendem Argument oder undefined. Arrow Functions schreiben wir als const doppelt = x => x * 2; oder mit Block und return. Eine reine Funktion verändert keine Daten außerhalb ihres Aufrufs.",
  "exercises": [
    {
      "id": "m08-01",
      "title": "Eine Begrüßungsmaschine",
      "explanation": "Der Parameter ist ein Platzhalter. Bei jedem Aufruf kann er einen anderen Wert erhalten.",
      "task": "Schreibe begruessen(name), das Hallo, NAME! zurückgibt.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Begrüßungsmaschine: Der Parameter ist ein Platzhalter. Bei jedem Aufruf kann er einen anderen Wert erhalten. */\nfunction begruessen(name) {\n  return `Hallo, ${name}!`;\n}\nconsole.log(begruessen(\"Ada\"));"
      },
      "hints": [
        "Gibt deine Funktion den Text zurück, statt ihn lediglich auszugeben?",
        "Ein Parameter benennt die Eingabe innerhalb der Funktion. return liefert das Ergebnis an den Aufrufer zurück. Eine Ausgabe mit console.log ersetzt keine Rückgabe.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Ada wird begrüßt",
          "code": "typeof begruessen==='function' && begruessen('Ada')==='Hallo, Ada!'"
        },
        {
          "label": "Andere Namen funktionieren",
          "code": "begruessen('Lin')==='Hallo, Lin!'"
        }
      ],
      "prerequisites": [
        "m07-10"
      ],
      "concept": {
        "example": "function winken(person) { return `Hi ${person}`; }",
        "explanation": "Ein Parameter benennt die Eingabe innerhalb der Funktion. return liefert das Ergebnis an den Aufrufer zurück. Eine Ausgabe mit console.log ersetzt keine Rückgabe.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "begruessen. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "begruessen('Ada')",
          "expected": "'Hallo, Ada!'",
          "context": "Ada wird begrüßt"
        },
        {
          "input": "begruessen('Lin')",
          "expected": "'Hallo, Lin!'",
          "context": "Andere Namen funktionieren"
        }
      ],
      "solutionNotes": "Ein Parameter benennt die Eingabe innerhalb der Funktion. return liefert das Ergebnis an den Aufrufer zurück. Eine Ausgabe mit console.log ersetzt keine Rückgabe. Der Parameter ist ein Platzhalter. Bei jedem Aufruf kann er einen anderen Wert erhalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-02",
      "title": "Zwei Zahlen, ein Ergebnis",
      "explanation": "Mehrere Parameter werden durch Kommas getrennt.",
      "task": "Schreibe addiere(a,b), das ihre Summe zurückgibt.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Zwei Zahlen, ein Ergebnis: Mehrere Parameter werden durch Kommas getrennt. */\nfunction addiere(a, b) { return a + b; }\nconsole.log(addiere(3, 4));"
      },
      "hints": [
        "Funktioniert deine Berechnung auch mit anderen als den Beispielwerten?",
        "Jeder Aufruf kann andere Argumente übergeben. Eine allgemeine Funktion verwendet ihre Parameter statt fest eingebauter Beispielzahlen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "3+4=7",
          "code": "typeof addiere==='function' && addiere(3,4)===7"
        },
        {
          "label": "Negative Zahlen",
          "code": "addiere(-5,2)===-3"
        }
      ],
      "prerequisites": [
        "m08-01"
      ],
      "concept": {
        "example": "function produkt(x, y) { return x * y; }",
        "explanation": "Jeder Aufruf kann andere Argumente übergeben. Eine allgemeine Funktion verwendet ihre Parameter statt fest eingebauter Beispielzahlen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "addiere. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "addiere(3,4)",
          "expected": "7",
          "context": "3+4=7"
        },
        {
          "input": "addiere(-5,2)",
          "expected": "-3",
          "context": "Negative Zahlen"
        }
      ],
      "solutionNotes": "Jeder Aufruf kann andere Argumente übergeben. Eine allgemeine Funktion verwendet ihre Parameter statt fest eingebauter Beispielzahlen. Mehrere Parameter werden durch Kommas getrennt. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-03",
      "title": "Ein sinnvoller Standard",
      "explanation": "Ein Standardparameter wird nur bei undefined oder fehlendem Argument verwendet.",
      "task": "Schreibe gruss(name=\"Gast\"), Ergebnis Hallo, NAME.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein sinnvoller Standard: Ein Standardparameter wird nur bei undefined oder fehlendem Argument verwendet. */\nfunction gruss(name = \"Gast\") { return `Hallo, ${name}`; }"
      },
      "hints": [
        "Was liefert dein Aufruf ohne Argument?",
        "Ein Standardwert gehört in die Parameterliste. Er wird bei fehlendem Argument oder undefined eingesetzt, nicht bei jedem falsy Wert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Ohne Argument",
          "code": "typeof gruss==='function' && gruss()==='Hallo, Gast'"
        },
        {
          "label": "Mit Namen",
          "code": "gruss('Ada')==='Hallo, Ada'"
        }
      ],
      "prerequisites": [
        "m08-02"
      ],
      "concept": {
        "example": "function farbe(wert = \"grün\") { return wert; }",
        "explanation": "Ein Standardwert gehört in die Parameterliste. Er wird bei fehlendem Argument oder undefined eingesetzt, nicht bei jedem falsy Wert.",
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
          "input": "gruss()",
          "expected": "'Hallo, Gast'",
          "context": "Ohne Argument"
        },
        {
          "input": "gruss('Ada')",
          "expected": "'Hallo, Ada'",
          "context": "Mit Namen"
        }
      ],
      "solutionNotes": "Ein Standardwert gehört in die Parameterliste. Er wird bei fehlendem Argument oder undefined eingesetzt, nicht bei jedem falsy Wert. Ein Standardparameter wird nur bei undefined oder fehlendem Argument verwendet. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-04",
      "title": "Die kurze Schreibweise",
      "explanation": "Ein Arrow-Ausdruck ohne geschweifte Klammern gibt seinen Ausdruck direkt zurück.",
      "task": "Definiere doppelt als Arrow Function.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Die kurze Schreibweise: Ein Arrow-Ausdruck ohne geschweifte Klammern gibt seinen Ausdruck direkt zurück. */\nconst doppelt = x => x * 2;\nconsole.log(doppelt(6));"
      },
      "hints": [
        "Hat dein Arrow einen Ausdruck oder einen Block, und passt dazu die Rückgabe?",
        "Ein Arrow-Ausdruck ohne Block gibt das Ausdrucksergebnis automatisch zurück. Mit geschweiften Klammern benötigst du ein ausdrückliches return.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "6 wird 12",
          "code": "typeof doppelt==='function' && doppelt(6)===12"
        },
        {
          "label": "0 bleibt 0",
          "code": "doppelt(0)===0"
        }
      ],
      "prerequisites": [
        "m08-03"
      ],
      "concept": {
        "example": "const dreifach = zahl => zahl * 3;",
        "explanation": "Ein Arrow-Ausdruck ohne Block gibt das Ausdrucksergebnis automatisch zurück. Mit geschweiften Klammern benötigst du ein ausdrückliches return.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "doppelt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "doppelt(6)",
          "expected": "12",
          "context": "6 wird 12"
        },
        {
          "input": "doppelt(0)",
          "expected": "0",
          "context": "0 bleibt 0"
        }
      ],
      "solutionNotes": "Ein Arrow-Ausdruck ohne Block gibt das Ausdrucksergebnis automatisch zurück. Mit geschweiften Klammern benötigst du ein ausdrückliches return. Ein Arrow-Ausdruck ohne geschweifte Klammern gibt seinen Ausdruck direkt zurück. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-05",
      "title": "Früh zurückkehren",
      "explanation": "Ein Guard Clause beendet unzulässige Fälle früh. throw kommt später; hier liefern wir 0.",
      "task": "Schreibe quadrat(x): für negative x 0, sonst x*x.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Früh zurückkehren: Ein Guard Clause beendet unzulässige Fälle früh. throw kommt später; hier liefern wir 0. */\nfunction quadrat(x) {\n  if (x < 0) return 0;\n  return x * x;\n}"
      },
      "hints": [
        "Wird der Sonderfall vor der normalen Berechnung abgefangen?",
        "Ein früher Rücksprung beendet die Funktion sofort. Nachfolgende Anweisungen laufen in diesem Fall nicht mehr. Das hält Sonderfälle vom normalen Rechenweg getrennt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Positiver Wert",
          "code": "typeof quadrat==='function' && quadrat(4)===16"
        },
        {
          "label": "Negativer Wert",
          "code": "quadrat(-2)===0"
        }
      ],
      "prerequisites": [
        "m08-04"
      ],
      "concept": {
        "example": "function positiv(x) { if (x <= 0) return false; return true; }",
        "explanation": "Ein früher Rücksprung beendet die Funktion sofort. Nachfolgende Anweisungen laufen in diesem Fall nicht mehr. Das hält Sonderfälle vom normalen Rechenweg getrennt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "quadrat. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "quadrat(4)",
          "expected": "16",
          "context": "Positiver Wert"
        },
        {
          "input": "quadrat(-2)",
          "expected": "0",
          "context": "Negativer Wert"
        }
      ],
      "solutionNotes": "Ein früher Rücksprung beendet die Funktion sofort. Nachfolgende Anweisungen laufen in diesem Fall nicht mehr. Das hält Sonderfälle vom normalen Rechenweg getrennt. Ein Guard Clause beendet unzulässige Fälle früh. throw kommt später; hier liefern wir 0. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-06",
      "title": "Ein Wert bleibt lokal",
      "explanation": "Eine lokale Variable ist nur im Funktionsblock sichtbar.",
      "task": "Schreibe brutto(netto), das mit einem lokalen faktor=1.19 den Bruttopreis liefert.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Wert bleibt lokal: Eine lokale Variable ist nur im Funktionsblock sichtbar. */\nfunction brutto(netto) {\n  const faktor = 1.19;\n  return netto * faktor;\n}"
      },
      "hints": [
        "Liegen Hilfswert und Berechnung innerhalb der Funktion?",
        "Eine lokale Konstante ist nur im Funktionsbereich sichtbar. Sie macht einen Rechenschritt benennbar, ohne globalen Zustand einzuführen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "100 netto",
          "code": "typeof brutto==='function' && Math.abs(brutto(100)-119)<0.001"
        },
        {
          "label": "0 netto",
          "code": "brutto(0)===0"
        }
      ],
      "prerequisites": [
        "m08-05"
      ],
      "concept": {
        "example": "function rabatt(preis) { const faktor = .9; return preis * faktor; }",
        "explanation": "Eine lokale Konstante ist nur im Funktionsbereich sichtbar. Sie macht einen Rechenschritt benennbar, ohne globalen Zustand einzuführen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "brutto. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "brutto(0)",
          "expected": "0",
          "context": "0 netto"
        }
      ],
      "solutionNotes": "Eine lokale Konstante ist nur im Funktionsbereich sichtbar. Sie macht einen Rechenschritt benennbar, ohne globalen Zustand einzuführen. Eine lokale Variable ist nur im Funktionsblock sichtbar. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-07",
      "title": "Werkzeuge kombinieren",
      "explanation": "Eine Funktion kann eine andere Funktion aufrufen. Das hält Einzelschritte verständlich.",
      "task": "Definiere doppelt(x) und dann vierfach(x), das doppelt zweimal nutzt.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Werkzeuge kombinieren: Eine Funktion kann eine andere Funktion aufrufen. Das hält Einzelschritte verständlich. */\nfunction doppelt(x) { return x * 2; }\nfunction vierfach(x) { return doppelt(doppelt(x)); }"
      },
      "hints": [
        "Welcher Zwischenwert wird an den zweiten Aufruf übergeben?",
        "Der innere Aufruf wird zuerst ausgewertet. Sein Ergebnis ist das Argument des äußeren Aufrufs. Jeder Baustein behält seine eigene kleine Aufgabe.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Vierfach",
          "code": "typeof vierfach==='function' && vierfach(3)===12"
        },
        {
          "label": "Negativ",
          "code": "vierfach(-2)===-8"
        }
      ],
      "prerequisites": [
        "m08-06"
      ],
      "concept": {
        "example": "function plusEins(x) { return x + 1; } function plusZwei(x) { return plusEins(plusEins(x)); }",
        "explanation": "Der innere Aufruf wird zuerst ausgewertet. Sein Ergebnis ist das Argument des äußeren Aufrufs. Jeder Baustein behält seine eigene kleine Aufgabe.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "vierfach. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "vierfach(3)",
          "expected": "12",
          "context": "Vierfach"
        },
        {
          "input": "vierfach(-2)",
          "expected": "-8",
          "context": "Negativ"
        }
      ],
      "solutionNotes": "Der innere Aufruf wird zuerst ausgewertet. Sein Ergebnis ist das Argument des äußeren Aufrufs. Jeder Baustein behält seine eigene kleine Aufgabe. Eine Funktion kann eine andere Funktion aufrufen. Das hält Einzelschritte verständlich. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-08",
      "title": "Gerade oder ungerade?",
      "explanation": "% liefert den Divisionsrest. Bei geraden ganzen Zahlen ist x % 2 gleich 0.",
      "task": "Schreibe istGerade(x), das einen Wahrheitswert liefert.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Gerade oder ungerade?: % liefert den Divisionsrest. Bei geraden ganzen Zahlen ist x % 2 gleich 0. */\nfunction istGerade(x) { return x % 2 === 0; }"
      },
      "hints": [
        "Welchen Divisionsrest hat eine gerade ganze Zahl?",
        "Der Restoperator liefert den Rest einer Division. Ein Vergleich dieses Rests kann eine Eigenschaft einer ganzen Zahl ausdrücken.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gerade",
          "code": "typeof istGerade==='function' && istGerade(8)===true"
        },
        {
          "label": "Ungerade",
          "code": "istGerade(7)===false"
        },
        {
          "label": "Null",
          "code": "istGerade(0)===true"
        }
      ],
      "prerequisites": [
        "m08-07"
      ],
      "concept": {
        "example": "console.log(11 % 3);",
        "explanation": "Der Restoperator liefert den Rest einer Division. Ein Vergleich dieses Rests kann eine Eigenschaft einer ganzen Zahl ausdrücken.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "istGerade. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "istGerade(8)",
          "expected": "true",
          "context": "Gerade"
        },
        {
          "input": "istGerade(7)",
          "expected": "false",
          "context": "Ungerade"
        },
        {
          "input": "istGerade(0)",
          "expected": "true",
          "context": "Null"
        }
      ],
      "solutionNotes": "Der Restoperator liefert den Rest einer Division. Ein Vergleich dieses Rests kann eine Eigenschaft einer ganzen Zahl ausdrücken. % liefert den Divisionsrest. Bei geraden ganzen Zahlen ist x % 2 gleich 0. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-09",
      "title": "Werte begrenzen",
      "explanation": "Math.min(a,b) wählt den kleineren, Math.max(a,b) den größeren Wert.",
      "task": "Schreibe begrenze(x,min,max), das x auf das inklusive Intervall begrenzt.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Werte begrenzen: Math.min(a,b) wählt den kleineren, Math.max(a,b) den größeren Wert. */\nfunction begrenze(x, min, max) { return Math.min(max, Math.max(min, x)); }"
      },
      "hints": [
        "Hast du sowohl die Untergrenze als auch die Obergrenze berücksichtigt?",
        "Math.min und Math.max wählen Werte aus. Durch Verschachteln kannst du zuerst eine untere und danach eine obere Grenze durchsetzen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Innen",
          "code": "typeof begrenze==='function' && begrenze(5,0,10)===5"
        },
        {
          "label": "Unterhalb",
          "code": "begrenze(-2,0,10)===0"
        },
        {
          "label": "Oberhalb",
          "code": "begrenze(12,0,10)===10"
        }
      ],
      "prerequisites": [
        "m08-08"
      ],
      "concept": {
        "example": "console.log(Math.min(7, 12), Math.max(7, 12));",
        "explanation": "Math.min und Math.max wählen Werte aus. Durch Verschachteln kannst du zuerst eine untere und danach eine obere Grenze durchsetzen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "begrenze. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "begrenze(5,0,10)",
          "expected": "5",
          "context": "Innen"
        },
        {
          "input": "begrenze(-2,0,10)",
          "expected": "0",
          "context": "Unterhalb"
        },
        {
          "input": "begrenze(12,0,10)",
          "expected": "10",
          "context": "Oberhalb"
        }
      ],
      "solutionNotes": "Math.min und Math.max wählen Werte aus. Durch Verschachteln kannst du zuerst eine untere und danach eine obere Grenze durchsetzen. Math.min(a,b) wählt den kleineren, Math.max(a,b) den größeren Wert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m08-10",
      "title": "Projekt: Ticketrechner",
      "explanation": "Kleine reine Funktionen sind einfach für mehrere Eingaben zu prüfen.",
      "task": "Schreibe ticketpreis(alter): unter 6 kostenlos, unter 18 sechs Euro, sonst zwölf. Zeige ticketpreis(14) in #output.",
      "minutes": 12,
      "xp": 55,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ticketrechner: Kleine reine Funktionen sind einfach für mehrere Eingaben zu prüfen. */\nfunction ticketpreis(alter) {\n  if (alter < 6) return 0;\n  if (alter < 18) return 6;\n  return 12;\n}\ndocument.querySelector(\"#output\").textContent = ticketpreis(14);"
      },
      "hints": [
        "Welche Preise gelten genau an den beiden Altersgrenzen?",
        "Ein Preisrechner braucht klare Intervalle. Prüfe die Zahlen direkt unter, auf und über jeder Grenze. Ein Test nur mitten im Bereich findet Grenzfehler nicht.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Kind",
          "code": "typeof ticketpreis==='function' && ticketpreis(5)===0"
        },
        {
          "label": "Jugendlich",
          "code": "ticketpreis(6)===6 && ticketpreis(17)===6"
        },
        {
          "label": "Erwachsen",
          "code": "ticketpreis(18)===12"
        },
        {
          "label": "Sichtbar",
          "code": "__text('#output')==='6'"
        }
      ],
      "prerequisites": [
        "m08-09"
      ],
      "concept": {
        "example": "function versand(summe) { if (summe >= 50) return 0; return 4; }",
        "explanation": "Ein Preisrechner braucht klare Intervalle. Prüfe die Zahlen direkt unter, auf und über jeder Grenze. Ein Test nur mitten im Bereich findet Grenzfehler nicht.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "ticketpreis. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "ticketpreis(5)",
          "expected": "0",
          "context": "Kind"
        },
        {
          "input": "ticketpreis(6)",
          "expected": "6",
          "context": "Jugendlich"
        },
        {
          "input": "ticketpreis(17)",
          "expected": "6",
          "context": "Jugendlich"
        },
        {
          "input": "ticketpreis(18)",
          "expected": "12",
          "context": "Erwachsen"
        },
        {
          "input": "Text in '#output'",
          "expected": "'6'",
          "context": "Sichtbar"
        }
      ],
      "solutionNotes": "Ein Preisrechner braucht klare Intervalle. Prüfe die Zahlen direkt unter, auf und über jeder Grenze. Ein Test nur mitten im Bereich findet Grenzfehler nicht. Kleine reine Funktionen sind einfach für mehrere Eingaben zu prüfen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
