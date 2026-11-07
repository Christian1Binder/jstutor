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
        "Der Parameter ist ein Platzhalter. Bei jedem Aufruf kann er einen anderen Wert erhalten.",
        "Orientiere dich an diesem Baustein:\nfunction begruessen(name) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(begruessen(\"Ada\"));"
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
      "solutionNotes": "Der Parameter ist ein Platzhalter. Bei jedem Aufruf kann er einen anderen Wert erhalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Mehrere Parameter werden durch Kommas getrennt.",
        "Orientiere dich an diesem Baustein:\nfunction addiere(a, b) { return a + b; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(addiere(3, 4));"
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
      "solutionNotes": "Mehrere Parameter werden durch Kommas getrennt. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Standardparameter wird nur bei undefined oder fehlendem Argument verwendet.",
        "Orientiere dich an diesem Baustein:\nfunction gruss(name = \"Gast\") { return `Hallo, ${name}`; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction gruss(name = \"Gast\") { return `Hallo, ${name}`; }"
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
      "solutionNotes": "Ein Standardparameter wird nur bei undefined oder fehlendem Argument verwendet. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Arrow-Ausdruck ohne geschweifte Klammern gibt seinen Ausdruck direkt zurück.",
        "Orientiere dich an diesem Baustein:\nconst doppelt = x => x * 2;",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(doppelt(6));"
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
      "solutionNotes": "Ein Arrow-Ausdruck ohne geschweifte Klammern gibt seinen Ausdruck direkt zurück. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Guard Clause beendet unzulässige Fälle früh. throw kommt später; hier liefern wir 0.",
        "Orientiere dich an diesem Baustein:\nfunction quadrat(x) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein Guard Clause beendet unzulässige Fälle früh. throw kommt später; hier liefern wir 0. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine lokale Variable ist nur im Funktionsblock sichtbar.",
        "Orientiere dich an diesem Baustein:\nfunction brutto(netto) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Eine lokale Variable ist nur im Funktionsblock sichtbar. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine Funktion kann eine andere Funktion aufrufen. Das hält Einzelschritte verständlich.",
        "Orientiere dich an diesem Baustein:\nfunction doppelt(x) { return x * 2; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction vierfach(x) { return doppelt(doppelt(x)); }"
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
      "solutionNotes": "Eine Funktion kann eine andere Funktion aufrufen. Das hält Einzelschritte verständlich. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "% liefert den Divisionsrest. Bei geraden ganzen Zahlen ist x % 2 gleich 0.",
        "Orientiere dich an diesem Baustein:\nfunction istGerade(x) { return x % 2 === 0; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction istGerade(x) { return x % 2 === 0; }"
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
      "solutionNotes": "% liefert den Divisionsrest. Bei geraden ganzen Zahlen ist x % 2 gleich 0. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Math.min(a,b) wählt den kleineren, Math.max(a,b) den größeren Wert.",
        "Orientiere dich an diesem Baustein:\nfunction begrenze(x, min, max) { return Math.min(max, Math.max(min, x)); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction begrenze(x, min, max) { return Math.min(max, Math.max(min, x)); }"
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
      "solutionNotes": "Math.min(a,b) wählt den kleineren, Math.max(a,b) den größeren Wert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Kleine reine Funktionen sind einfach für mehrere Eingaben zu prüfen.",
        "Orientiere dich an diesem Baustein:\nfunction ticketpreis(alter) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = ticketpreis(14);"
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
          "code": "document.querySelector('#output').textContent==='6'"
        }
      ],
      "prerequisites": [
        "m08-09"
      ],
      "solutionNotes": "Kleine reine Funktionen sind einfach für mehrere Eingaben zu prüfen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
