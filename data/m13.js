window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m13",
  "title": "Daten elegant verarbeiten",
  "city": "Dortmund",
  "tag": "pipeline",
  "level": 3,
  "description": "map, filter, reduce und immutables Arbeiten.",
  "lesson": "Array-Methoden erhalten Callback-Funktionen. map wandelt jeden Eintrag um, filter behält passende Einträge, find liefert den ersten Treffer oder undefined. some prüft mindestens einen, every alle. reduce sammelt mit Startwert ein Ergebnis. sort verändert das Array; kopiere mit [...liste] vorher. Numerisch sortiert (a,b)=>a-b, Texte mit localeCompare. Set entfernt Duplikate; Spread wandelt ihn zurück in ein Array.",
  "exercises": [
    {
      "id": "m13-01",
      "title": "Alles verdoppeln",
      "explanation": "map erzeugt ein neues Array mit den Rückgabewerten des Callbacks.",
      "task": "Schreibe verdoppeln(liste) mit map.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Alles verdoppeln: map erzeugt ein neues Array mit den Rückgabewerten des Callbacks. */\nfunction verdoppeln(liste) { return liste.map(x => x * 2); }"
      },
      "hints": [
        "Gibt dein Callback für jeden Eintrag einen Wert zurück?",
        "map erzeugt genau einen Ergebniswert pro Eintrag. Der Callback muss diesen Wert zurückgeben.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Werte",
          "code": "typeof verdoppeln==='function' && JSON.stringify(verdoppeln([1,3]))==='[2,6]'"
        },
        {
          "label": "Leer",
          "code": "verdoppeln([]).length===0"
        }
      ],
      "prerequisites": [
        "m12-10"
      ],
      "concept": {
        "example": "const namen = [\"Mia\", \"Leo\"].map(name => name.length);",
        "explanation": "map erzeugt genau einen Ergebniswert pro Eintrag. Der Callback muss diesen Wert zurückgeben.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "verdoppeln. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "verdoppeln([]).length",
          "expected": "0",
          "context": "Leer"
        }
      ],
      "solutionNotes": "map erzeugt genau einen Ergebniswert pro Eintrag. Der Callback muss diesen Wert zurückgeben. map erzeugt ein neues Array mit den Rückgabewerten des Callbacks. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-02",
      "title": "Nur bezahlbare Ziele",
      "explanation": "filter behält Einträge, deren Callback true liefert.",
      "task": "Schreibe bezahlbar(preise,max) mit filter; Grenzwert inklusive.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Nur bezahlbare Ziele: filter behält Einträge, deren Callback true liefert. */\nfunction bezahlbar(preise, max) { return preise.filter(preis => preis <= max); }"
      },
      "hints": [
        "Ist die obere Grenze eingeschlossen, wie es die Aufgabe verlangt?",
        "filter erwartet im Callback eine Bedingung. Die passenden ursprünglichen Werte bilden das Ergebnisarray.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Grenze inklusive",
          "code": "typeof bezahlbar==='function' && JSON.stringify(bezahlbar([10,20,30],20))==='[10,20]'"
        },
        {
          "label": "Keine Treffer",
          "code": "bezahlbar([30],20).length===0"
        }
      ],
      "prerequisites": [
        "m13-01"
      ],
      "concept": {
        "example": "const warm = [12, 24, 7].filter(grad => grad > 20);",
        "explanation": "filter erwartet im Callback eine Bedingung. Die passenden ursprünglichen Werte bilden das Ergebnisarray.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "bezahlbar. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "bezahlbar([30],20).length",
          "expected": "0",
          "context": "Keine Treffer"
        }
      ],
      "solutionNotes": "filter erwartet im Callback eine Bedingung. Die passenden ursprünglichen Werte bilden das Ergebnisarray. filter behält Einträge, deren Callback true liefert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-03",
      "title": "Ein Profil finden",
      "explanation": "find liefert das erste passende Objekt, ohne die Liste zu verändern.",
      "task": "Schreibe nachId(liste,id); Rückgabe passendes Objekt oder undefined.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Profil finden: find liefert das erste passende Objekt, ohne die Liste zu verändern. */\nfunction nachId(liste, id) { return liste.find(item => item.id === id); }"
      },
      "hints": [
        "Entspricht der Rückgabetyp einem einzelnen Treffer?",
        "find liefert ein einzelnes Element oder undefined. Es liefert keine Liste aller Treffer.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Treffer",
          "code": "typeof nachId==='function' && nachId([{id:2,name:'Ada'}],2).name==='Ada'"
        },
        {
          "label": "Fehlend",
          "code": "nachId([],2)===undefined"
        }
      ],
      "prerequisites": [
        "m13-02"
      ],
      "concept": {
        "example": "const item = [{ code: \"x\" }].find(x => x.code === \"x\");",
        "explanation": "find liefert ein einzelnes Element oder undefined. Es liefert keine Liste aller Treffer.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "nachId. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "nachId([{id:2,name:'Ada'}],2).name",
          "expected": "'Ada'",
          "context": "Treffer"
        },
        {
          "input": "nachId([],2)",
          "expected": "undefined",
          "context": "Fehlend"
        }
      ],
      "solutionNotes": "find liefert ein einzelnes Element oder undefined. Es liefert keine Liste aller Treffer. find liefert das erste passende Objekt, ohne die Liste zu verändern. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-04",
      "title": "Ist noch etwas offen?",
      "explanation": "some stoppt beim ersten wahren Callback-Ergebnis.",
      "task": "Schreibe hatOffene(aufgaben), wenn mindestens ein Objekt done:false hat.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ist noch etwas offen?: some stoppt beim ersten wahren Callback-Ergebnis. */\nfunction hatOffene(aufgaben) { return aufgaben.some(item => item.done === false); }"
      },
      "hints": [
        "Reicht ein offener Eintrag aus und ist der leere Fall korrekt?",
        "some sucht mindestens einen passenden Eintrag und liefert einen Wahrheitswert. Bei leerer Liste gibt es keinen Treffer.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Offen",
          "code": "typeof hatOffene==='function' && hatOffene([{done:true},{done:false}])===true"
        },
        {
          "label": "Leer",
          "code": "hatOffene([])===false"
        }
      ],
      "prerequisites": [
        "m13-03"
      ],
      "concept": {
        "example": "console.log([false, true].some(x => x));",
        "explanation": "some sucht mindestens einen passenden Eintrag und liefert einen Wahrheitswert. Bei leerer Liste gibt es keinen Treffer.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "hatOffene. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "hatOffene([{done:true},{done:false}])",
          "expected": "true",
          "context": "Offen"
        },
        {
          "input": "hatOffene([])",
          "expected": "false",
          "context": "Leer"
        }
      ],
      "solutionNotes": "some sucht mindestens einen passenden Eintrag und liefert einen Wahrheitswert. Bei leerer Liste gibt es keinen Treffer. some stoppt beim ersten wahren Callback-Ergebnis. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-05",
      "title": "Sind alle bereit?",
      "explanation": "every ist für eine leere Liste wahr; es gibt dort keinen Gegenbeleg.",
      "task": "Schreibe alleBereit(liste), das ready bei allen Objekten auf true prüft.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Sind alle bereit?: every ist für eine leere Liste wahr; es gibt dort keinen Gegenbeleg. */\nfunction alleBereit(liste) { return liste.every(item => item.ready === true); }"
      },
      "hints": [
        "Ist dein Ergebnis bei einer leeren Liste bewusst gewählt?",
        "every sucht nach einem Gegenbeispiel. Eine leere Liste enthält keines und erfüllt die Aussage daher ebenfalls.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Alle",
          "code": "typeof alleBereit==='function' && alleBereit([{ready:true}])===true"
        },
        {
          "label": "Nicht alle",
          "code": "alleBereit([{ready:true},{ready:false}])===false"
        },
        {
          "label": "Leer",
          "code": "alleBereit([])===true"
        }
      ],
      "prerequisites": [
        "m13-04"
      ],
      "concept": {
        "example": "console.log([true, true].every(x => x));",
        "explanation": "every sucht nach einem Gegenbeispiel. Eine leere Liste enthält keines und erfüllt die Aussage daher ebenfalls.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "alleBereit. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "alleBereit([{ready:true}])",
          "expected": "true",
          "context": "Alle"
        },
        {
          "input": "alleBereit([{ready:true},{ready:false}])",
          "expected": "false",
          "context": "Nicht alle"
        },
        {
          "input": "alleBereit([])",
          "expected": "true",
          "context": "Leer"
        }
      ],
      "solutionNotes": "every sucht nach einem Gegenbeispiel. Eine leere Liste enthält keines und erfüllt die Aussage daher ebenfalls. every ist für eine leere Liste wahr; es gibt dort keinen Gegenbeleg. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-06",
      "title": "Eine Summe mit reduce",
      "explanation": "reduce((summe,x)=>summe+x,0) beginnt beim Startwert 0.",
      "task": "Schreibe summe(liste) mit reduce und Startwert 0.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Summe mit reduce: reduce((summe,x)=>summe+x,0) beginnt beim Startwert 0. */\nfunction summe(liste) { return liste.reduce((gesamt, x) => gesamt + x, 0); }"
      },
      "hints": [
        "Passt dein Startwert zu einer Summe?",
        "Ein reduce-Startwert bestimmt auch das Ergebnis einer leeren Liste. Der Callback liefert den neuen Zwischenstand.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Werte",
          "code": "typeof summe==='function' && summe([1,2,3])===6"
        },
        {
          "label": "Leer",
          "code": "summe([])===0"
        }
      ],
      "prerequisites": [
        "m13-05"
      ],
      "concept": {
        "example": "const produkt = [2, 3].reduce((bisher, x) => bisher * x, 1);",
        "explanation": "Ein reduce-Startwert bestimmt auch das Ergebnis einer leeren Liste. Der Callback liefert den neuen Zwischenstand.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "summe. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "summe([1,2,3])",
          "expected": "6",
          "context": "Werte"
        },
        {
          "input": "summe([])",
          "expected": "0",
          "context": "Leer"
        }
      ],
      "solutionNotes": "Ein reduce-Startwert bestimmt auch das Ergebnis einer leeren Liste. Der Callback liefert den neuen Zwischenstand. reduce((summe,x)=>summe+x,0) beginnt beim Startwert 0. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-07",
      "title": "Sortieren ohne Nebenwirkung",
      "explanation": "sort vergleicht standardmäßig Texte. (a,b)=>a-b sortiert Zahlen aufsteigend.",
      "task": "Schreibe sortiert(liste): Rückgabe ist eine neue, numerisch aufsteigend sortierte Liste. Das übergebene Array bleibt unverändert; auch ein schon sortiertes Array wird kopiert.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Sortieren ohne Nebenwirkung: sort vergleicht standardmäßig Texte. (a,b)=>a-b sortiert Zahlen aufsteigend. */\nfunction sortiert(liste) { return [...liste].sort((a, b) => a - b); }"
      },
      "hints": [
        "Wird das Originalarray beim Sortieren verändert?",
        "sort verändert seinen Empfänger. Eine vorherige flache Kopie verhindert diese Änderung am Original. Der Vergleich muss Zahlen numerisch behandeln.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Numerisch",
          "code": "typeof sortiert==='function' && JSON.stringify(sortiert([10,2,1]))==='[1,2,10]'"
        },
        {
          "label": "Original",
          "code": "(()=>{const x=[3,1];return sortiert(x)!==x && x[0]===3})()"
        }
      ],
      "prerequisites": [
        "m13-06"
      ],
      "concept": {
        "example": "const kopie = [...werte].sort((a, b) => b - a);",
        "explanation": "sort verändert seinen Empfänger. Eine vorherige flache Kopie verhindert diese Änderung am Original. Der Vergleich muss Zahlen numerisch behandeln.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "sortiert. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "sort verändert seinen Empfänger. Eine vorherige flache Kopie verhindert diese Änderung am Original. Der Vergleich muss Zahlen numerisch behandeln. sort vergleicht standardmäßig Texte. (a,b)=>a-b sortiert Zahlen aufsteigend. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-08",
      "title": "Jede Stadt nur einmal",
      "explanation": "Set speichert eindeutige Werte in Einfügereihenfolge.",
      "task": "Schreibe eindeutig(liste) mit Set und Spread.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Jede Stadt nur einmal: Set speichert eindeutige Werte in Einfügereihenfolge. */\nfunction eindeutig(liste) { return [...new Set(liste)]; }"
      },
      "hints": [
        "Behältst du die ursprüngliche Reihenfolge der ersten Vorkommen?",
        "Set speichert gleiche primitive Werte nur einmal. Die erste Einfügereihenfolge bleibt erhalten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Duplikate",
          "code": "typeof eindeutig==='function' && eindeutig(['B','A','B']).join(',')==='B,A'"
        },
        {
          "label": "Leer",
          "code": "eindeutig([]).length===0"
        }
      ],
      "prerequisites": [
        "m13-07"
      ],
      "concept": {
        "example": "const farben = [...new Set([\"rot\", \"blau\", \"rot\"])];",
        "explanation": "Set speichert gleiche primitive Werte nur einmal. Die erste Einfügereihenfolge bleibt erhalten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "eindeutig. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "eindeutig([]).length",
          "expected": "0",
          "context": "Leer"
        }
      ],
      "solutionNotes": "Set speichert gleiche primitive Werte nur einmal. Die erste Einfügereihenfolge bleibt erhalten. Set speichert eindeutige Werte in Einfügereihenfolge. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-09",
      "title": "Eine Suchpipeline",
      "explanation": "toLowerCase vereinheitlicht Großschreibung; includes prüft Teiltexte.",
      "task": "Schreibe suche(liste,text), das Stadttexte unabhängig von Großschreibung filtert.",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Suchpipeline: toLowerCase vereinheitlicht Großschreibung; includes prüft Teiltexte. */\nfunction suche(liste, text) {\n  return liste.filter(stadt => stadt.toLowerCase().includes(text.toLowerCase()));\n}"
      },
      "hints": [
        "Normalisierst du beide Seiten der Suche?",
        "Für eine Suche ohne Großschreibung müssen Suchtext und Kandidat dieselbe Normalisierung erhalten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Suche",
          "code": "typeof suche==='function' && suche(['Berlin','Bremen','Kiel'],'BER').join(',')==='Berlin'"
        },
        {
          "label": "Leertext",
          "code": "suche(['Kiel'],'').length===1"
        }
      ],
      "prerequisites": [
        "m13-08"
      ],
      "concept": {
        "example": "console.log(\"Sommer\".toLowerCase().includes(\"som\"));",
        "explanation": "Für eine Suche ohne Großschreibung müssen Suchtext und Kandidat dieselbe Normalisierung erhalten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "suche. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "suche(['Kiel'],'').length",
          "expected": "1",
          "context": "Leertext"
        }
      ],
      "solutionNotes": "Für eine Suche ohne Großschreibung müssen Suchtext und Kandidat dieselbe Normalisierung erhalten. toLowerCase vereinheitlicht Großschreibung; includes prüft Teiltexte. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m13-10",
      "title": "Projekt: Warenkorb auswerten",
      "explanation": "Kombiniere filter und reduce. Rechne pro Artikel Menge mal Preis.",
      "task": "Schreibe warenkorb(items), das nur aktive Artikel summiert (aktiv,preis,menge).",
      "minutes": 15,
      "xp": 80,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Warenkorb auswerten: Kombiniere filter und reduce. Rechne pro Artikel Menge mal Preis. */\nfunction warenkorb(items) {\n  return items.filter(item => item.aktiv).reduce((summe, item) => summe + item.preis * item.menge, 0);\n}"
      },
      "hints": [
        "Berücksichtigst du die Menge und schließt inaktive Positionen aus?",
        "Eine Pipeline erledigt Auswahl und Berechnung in getrennten Schritten. Ein Gesamtpreis pro Position entsteht aus Stückpreis und Menge.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Nur aktive",
          "code": "typeof warenkorb==='function' && warenkorb([{aktiv:true,preis:5,menge:2},{aktiv:false,preis:100,menge:1}])===10"
        },
        {
          "label": "Leer",
          "code": "warenkorb([])===0"
        }
      ],
      "prerequisites": [
        "m13-09"
      ],
      "concept": {
        "example": "const aktiv = items.filter(x => x.aktiv);",
        "explanation": "Eine Pipeline erledigt Auswahl und Berechnung in getrennten Schritten. Ein Gesamtpreis pro Position entsteht aus Stückpreis und Menge.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "warenkorb. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "warenkorb([{aktiv:true,preis:5,menge:2},{aktiv:false,preis:100,menge:1}])",
          "expected": "10",
          "context": "Nur aktive"
        },
        {
          "input": "warenkorb([])",
          "expected": "0",
          "context": "Leer"
        }
      ],
      "solutionNotes": "Eine Pipeline erledigt Auswahl und Berechnung in getrennten Schritten. Ein Gesamtpreis pro Position entsteht aus Stückpreis und Menge. Kombiniere filter und reduce. Rechne pro Artikel Menge mal Preis. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
