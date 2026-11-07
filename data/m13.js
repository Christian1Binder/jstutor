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
        "map erzeugt ein neues Array mit den Rückgabewerten des Callbacks.",
        "Orientiere dich an diesem Baustein:\nfunction verdoppeln(liste) { return liste.map(x => x * 2); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction verdoppeln(liste) { return liste.map(x => x * 2); }"
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
      "solutionNotes": "map erzeugt ein neues Array mit den Rückgabewerten des Callbacks. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "filter behält Einträge, deren Callback true liefert.",
        "Orientiere dich an diesem Baustein:\nfunction bezahlbar(preise, max) { return preise.filter(preis => preis <= max); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction bezahlbar(preise, max) { return preise.filter(preis => preis <= max); }"
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
      "solutionNotes": "filter behält Einträge, deren Callback true liefert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "find liefert das erste passende Objekt, ohne die Liste zu verändern.",
        "Orientiere dich an diesem Baustein:\nfunction nachId(liste, id) { return liste.find(item => item.id === id); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction nachId(liste, id) { return liste.find(item => item.id === id); }"
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
      "solutionNotes": "find liefert das erste passende Objekt, ohne die Liste zu verändern. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "some stoppt beim ersten wahren Callback-Ergebnis.",
        "Orientiere dich an diesem Baustein:\nfunction hatOffene(aufgaben) { return aufgaben.some(item => item.done === false); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction hatOffene(aufgaben) { return aufgaben.some(item => item.done === false); }"
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
      "solutionNotes": "some stoppt beim ersten wahren Callback-Ergebnis. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "every ist für eine leere Liste wahr; es gibt dort keinen Gegenbeleg.",
        "Orientiere dich an diesem Baustein:\nfunction alleBereit(liste) { return liste.every(item => item.ready === true); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction alleBereit(liste) { return liste.every(item => item.ready === true); }"
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
      "solutionNotes": "every ist für eine leere Liste wahr; es gibt dort keinen Gegenbeleg. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "reduce((summe,x)=>summe+x,0) beginnt beim Startwert 0.",
        "Orientiere dich an diesem Baustein:\nfunction summe(liste) { return liste.reduce((gesamt, x) => gesamt + x, 0); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction summe(liste) { return liste.reduce((gesamt, x) => gesamt + x, 0); }"
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
      "solutionNotes": "reduce((summe,x)=>summe+x,0) beginnt beim Startwert 0. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m13-07",
      "title": "Sortieren ohne Nebenwirkung",
      "explanation": "sort vergleicht standardmäßig Texte. (a,b)=>a-b sortiert Zahlen aufsteigend.",
      "task": "Schreibe sortiert(liste), das eine numerisch sortierte Kopie liefert.",
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
        "sort vergleicht standardmäßig Texte. (a,b)=>a-b sortiert Zahlen aufsteigend.",
        "Orientiere dich an diesem Baustein:\nfunction sortiert(liste) { return [...liste].sort((a, b) => a - b); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction sortiert(liste) { return [...liste].sort((a, b) => a - b); }"
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
      "solutionNotes": "sort vergleicht standardmäßig Texte. (a,b)=>a-b sortiert Zahlen aufsteigend. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Set speichert eindeutige Werte in Einfügereihenfolge.",
        "Orientiere dich an diesem Baustein:\nfunction eindeutig(liste) { return [...new Set(liste)]; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction eindeutig(liste) { return [...new Set(liste)]; }"
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
      "solutionNotes": "Set speichert eindeutige Werte in Einfügereihenfolge. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "toLowerCase vereinheitlicht Großschreibung; includes prüft Teiltexte.",
        "Orientiere dich an diesem Baustein:\nfunction suche(liste, text) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "toLowerCase vereinheitlicht Großschreibung; includes prüft Teiltexte. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Kombiniere filter und reduce. Rechne pro Artikel Menge mal Preis.",
        "Orientiere dich an diesem Baustein:\nfunction warenkorb(items) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Kombiniere filter und reduce. Rechne pro Artikel Menge mal Preis. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
