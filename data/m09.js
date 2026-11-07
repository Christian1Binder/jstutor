window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m09",
  "title": "Listen und Schleifen",
  "city": "Leipzig",
  "tag": "arrays",
  "level": 2,
  "description": "Sammlungen durchlaufen, suchen und auswerten.",
  "lesson": "Arrays speichern geordnete Werte: const liste = [1,2,3]. Der erste Index ist 0; length zählt Einträge. push fügt hinten an, pop entfernt hinten. for (let i=0; i<liste.length; i++) zählt Indizes; i++ erhöht um eins. for (const wert of liste) durchläuft Werte. break beendet eine Schleife. Mit [] erzeugst du eine neue Liste. Leere Listen brauchen bewusst definierte Ergebnisse.",
  "exercises": [
    {
      "id": "m09-01",
      "title": "Deine Reiseroute",
      "explanation": "Ein Array-Literal steht in eckigen Klammern, Einträge sind kommasepariert.",
      "task": "Erstelle route mit Berlin, Leipzig und Erfurt.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Deine Reiseroute: Ein Array-Literal steht in eckigen Klammern, Einträge sind kommasepariert. */\nconst route = [\"Berlin\", \"Leipzig\", \"Erfurt\"];\nconsole.log(route);"
      },
      "hints": [
        "Ein Array-Literal steht in eckigen Klammern, Einträge sind kommasepariert.",
        "Orientiere dich an diesem Baustein:\nconst route = [\"Berlin\", \"Leipzig\", \"Erfurt\"];",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconsole.log(route);"
      ],
      "tests": [
        {
          "label": "Erstelle route mit Berlin, Leipzig und Erfurt.",
          "code": "typeof route!=='undefined' && JSON.stringify(route)==='[\"Berlin\",\"Leipzig\",\"Erfurt\"]'"
        }
      ],
      "prerequisites": [
        "m08-10"
      ],
      "solutionNotes": "Ein Array-Literal steht in eckigen Klammern, Einträge sind kommasepariert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-02",
      "title": "Das erste Ziel",
      "explanation": "Index 0 liest das erste Element. length ist eine Eigenschaft, kein Funktionsaufruf.",
      "task": "Setze route=[\"Berlin\",\"Leipzig\"] und erstes=route[0], anzahl=route.length.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Das erste Ziel: Index 0 liest das erste Element. length ist eine Eigenschaft, kein Funktionsaufruf. */\nconst route = [\"Berlin\", \"Leipzig\"];\nconst erstes = route[0];\nconst anzahl = route.length;"
      },
      "hints": [
        "Index 0 liest das erste Element. length ist eine Eigenschaft, kein Funktionsaufruf.",
        "Orientiere dich an diesem Baustein:\nconst route = [\"Berlin\", \"Leipzig\"];",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst anzahl = route.length;"
      ],
      "tests": [
        {
          "label": "Setze route=[\"Berlin\",\"Leipzig\"] und erstes=route[0], anzahl=route.length.",
          "code": "typeof erstes!=='undefined' && erstes==='Berlin' && typeof anzahl!=='undefined' && anzahl===2"
        }
      ],
      "prerequisites": [
        "m09-01"
      ],
      "solutionNotes": "Index 0 liest das erste Element. length ist eine Eigenschaft, kein Funktionsaufruf. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-03",
      "title": "Ein Zwischenstopp",
      "explanation": "push verändert das vorhandene Array. const verhindert keine Änderungen am Array-Inhalt.",
      "task": "Starte route mit Berlin und hänge Leipzig per push an.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Zwischenstopp: push verändert das vorhandene Array. const verhindert keine Änderungen am Array-Inhalt. */\nconst route = [\"Berlin\"];\nroute.push(\"Leipzig\");"
      },
      "hints": [
        "push verändert das vorhandene Array. const verhindert keine Änderungen am Array-Inhalt.",
        "Orientiere dich an diesem Baustein:\nconst route = [\"Berlin\"];",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nroute.push(\"Leipzig\");"
      ],
      "tests": [
        {
          "label": "Starte route mit Berlin und hänge Leipzig per push an.",
          "code": "typeof route!=='undefined' && route.join(',')==='Berlin,Leipzig'"
        }
      ],
      "prerequisites": [
        "m09-02"
      ],
      "solutionNotes": "push verändert das vorhandene Array. const verhindert keine Änderungen am Array-Inhalt. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-04",
      "title": "Das letzte Ziel entfernen",
      "explanation": "pop entfernt den letzten Eintrag und gibt ihn zurück.",
      "task": "Erzeuge route=[\"Berlin\",\"Leipzig\",\"Erfurt\"], speichere route.pop() in entfernt.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Das letzte Ziel entfernen: pop entfernt den letzten Eintrag und gibt ihn zurück. */\nconst route = [\"Berlin\", \"Leipzig\", \"Erfurt\"];\nconst entfernt = route.pop();"
      },
      "hints": [
        "pop entfernt den letzten Eintrag und gibt ihn zurück.",
        "Orientiere dich an diesem Baustein:\nconst route = [\"Berlin\", \"Leipzig\", \"Erfurt\"];",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst entfernt = route.pop();"
      ],
      "tests": [
        {
          "label": "Erzeuge route=[\"Berlin\",\"Leipzig\",\"Erfurt\"], speichere route.pop() in entfernt.",
          "code": "typeof entfernt!=='undefined' && entfernt==='Erfurt' && route.length===2"
        }
      ],
      "prerequisites": [
        "m09-03"
      ],
      "solutionNotes": "pop entfernt den letzten Eintrag und gibt ihn zurück. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-05",
      "title": "Einmal von eins bis fünf",
      "explanation": "Die for-Schleife hat Start, Bedingung und Fortschritt. Ohne Fortschritt kann sie endlos laufen.",
      "task": "Fülle zahlen mit 1 bis 5 über eine for-Schleife.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Einmal von eins bis fünf: Die for-Schleife hat Start, Bedingung und Fortschritt. Ohne Fortschritt kann sie endlos laufen. */\nconst zahlen = [];\nfor (let i = 1; i <= 5; i++) { zahlen.push(i); }"
      },
      "hints": [
        "Die for-Schleife hat Start, Bedingung und Fortschritt. Ohne Fortschritt kann sie endlos laufen.",
        "Orientiere dich an diesem Baustein:\nconst zahlen = [];",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfor (let i = 1; i <= 5; i++) { zahlen.push(i); }"
      ],
      "tests": [
        {
          "label": "Fülle zahlen mit 1 bis 5 über eine for-Schleife.",
          "code": "typeof zahlen!=='undefined' && JSON.stringify(zahlen)==='[1,2,3,4,5]'"
        }
      ],
      "prerequisites": [
        "m09-04"
      ],
      "solutionNotes": "Die for-Schleife hat Start, Bedingung und Fortschritt. Ohne Fortschritt kann sie endlos laufen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-06",
      "title": "Eine Summe bilden",
      "explanation": "Ein Akkumulator sammelt Zwischenergebnisse. Starte für Summen bei 0.",
      "task": "Schreibe summe(liste) mit for...of; eine leere Liste ergibt 0.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Summe bilden: Ein Akkumulator sammelt Zwischenergebnisse. Starte für Summen bei 0. */\nfunction summe(liste) {\n  let gesamt = 0;\n  for (const zahl of liste) { gesamt = gesamt + zahl; }\n  return gesamt;\n}"
      },
      "hints": [
        "Ein Akkumulator sammelt Zwischenergebnisse. Starte für Summen bei 0.",
        "Orientiere dich an diesem Baustein:\nfunction summe(liste) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Mehrere Werte",
          "code": "typeof summe==='function' && summe([2,3,7])===12"
        },
        {
          "label": "Leere Liste",
          "code": "summe([])===0"
        }
      ],
      "prerequisites": [
        "m09-05"
      ],
      "solutionNotes": "Ein Akkumulator sammelt Zwischenergebnisse. Starte für Summen bei 0. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-07",
      "title": "Nur gerade Zahlen",
      "explanation": "Verknüpfe Schleife, Bedingung und eine neue Ergebnisliste.",
      "task": "Schreibe gerade(liste), das nur gerade Zahlen in einem neuen Array zurückgibt.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Nur gerade Zahlen: Verknüpfe Schleife, Bedingung und eine neue Ergebnisliste. */\nfunction gerade(liste) {\n  const ergebnis = [];\n  for (const zahl of liste) { if (zahl % 2 === 0) ergebnis.push(zahl); }\n  return ergebnis;\n}"
      },
      "hints": [
        "Verknüpfe Schleife, Bedingung und eine neue Ergebnisliste.",
        "Orientiere dich an diesem Baustein:\nfunction gerade(liste) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Filtern",
          "code": "typeof gerade==='function' && JSON.stringify(gerade([1,2,3,4]))==='[2,4]'"
        },
        {
          "label": "Leer",
          "code": "gerade([]).length===0"
        }
      ],
      "prerequisites": [
        "m09-06"
      ],
      "solutionNotes": "Verknüpfe Schleife, Bedingung und eine neue Ergebnisliste. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-08",
      "title": "Das größte Element",
      "explanation": "Starte mit dem ersten Wert statt mit 0, damit negative Zahlen korrekt bleiben. Leere Arrays ergeben null.",
      "task": "Schreibe maximum(liste); bei leerer Liste null.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Das größte Element: Starte mit dem ersten Wert statt mit 0, damit negative Zahlen korrekt bleiben. Leere Arrays ergeben null. */\nfunction maximum(liste) {\n  if (liste.length === 0) return null;\n  let groesster = liste[0];\n  for (const zahl of liste) { if (zahl > groesster) groesster = zahl; }\n  return groesster;\n}"
      },
      "hints": [
        "Starte mit dem ersten Wert statt mit 0, damit negative Zahlen korrekt bleiben. Leere Arrays ergeben null.",
        "Orientiere dich an diesem Baustein:\nfunction maximum(liste) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Positive Zahlen",
          "code": "typeof maximum==='function' && maximum([2,9,4])===9"
        },
        {
          "label": "Negative Zahlen",
          "code": "maximum([-5,-2,-8])===-2"
        },
        {
          "label": "Leer",
          "code": "maximum([])===null"
        }
      ],
      "prerequisites": [
        "m09-07"
      ],
      "solutionNotes": "Starte mit dem ersten Wert statt mit 0, damit negative Zahlen korrekt bleiben. Leere Arrays ergeben null. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-09",
      "title": "Früh gefunden",
      "explanation": "return beendet auch eine Schleife innerhalb einer Funktion. -1 ist ein üblicher Wert für nicht gefunden.",
      "task": "Schreibe findeIndex(liste,ziel) ohne indexOf; gib den ersten Index oder -1 zurück.",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Früh gefunden: return beendet auch eine Schleife innerhalb einer Funktion. -1 ist ein üblicher Wert für nicht gefunden. */\nfunction findeIndex(liste, ziel) {\n  for (let i = 0; i < liste.length; i++) { if (liste[i] === ziel) return i; }\n  return -1;\n}"
      },
      "hints": [
        "return beendet auch eine Schleife innerhalb einer Funktion. -1 ist ein üblicher Wert für nicht gefunden.",
        "Orientiere dich an diesem Baustein:\nfunction findeIndex(liste, ziel) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Treffer",
          "code": "typeof findeIndex==='function' && findeIndex(['a','b','b'],'b')===1"
        },
        {
          "label": "Kein Treffer",
          "code": "findeIndex(['a'],'z')===-1"
        }
      ],
      "prerequisites": [
        "m09-08"
      ],
      "solutionNotes": "return beendet auch eine Schleife innerhalb einer Funktion. -1 ist ein üblicher Wert für nicht gefunden. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m09-10",
      "title": "Projekt: Reisebudget",
      "explanation": "Ein Durchschnitt ist Summe geteilt durch Anzahl. Vermeide Division durch 0.",
      "task": "Schreibe durchschnitt(kosten); leere Liste ergibt 0. Zeige den Durchschnitt von [10,20,30].",
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Reisebudget: Ein Durchschnitt ist Summe geteilt durch Anzahl. Vermeide Division durch 0. */\nfunction durchschnitt(kosten) {\n  if (kosten.length === 0) return 0;\n  let summe = 0;\n  for (const wert of kosten) summe += wert; // += addiert zum bisherigen Wert\n  return summe / kosten.length;\n}\ndocument.querySelector(\"#output\").textContent = durchschnitt([10,20,30]);"
      },
      "hints": [
        "Ein Durchschnitt ist Summe geteilt durch Anzahl. Vermeide Division durch 0.",
        "Orientiere dich an diesem Baustein:\nfunction durchschnitt(kosten) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = durchschnitt([10,20,30]);"
      ],
      "tests": [
        {
          "label": "Durchschnitt",
          "code": "typeof durchschnitt==='function' && durchschnitt([4,8])===6"
        },
        {
          "label": "Leer",
          "code": "durchschnitt([])===0"
        },
        {
          "label": "Ausgabe",
          "code": "document.querySelector('#output').textContent==='20'"
        }
      ],
      "prerequisites": [
        "m09-09"
      ],
      "solutionNotes": "Ein Durchschnitt ist Summe geteilt durch Anzahl. Vermeide Division durch 0. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
