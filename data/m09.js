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
        "Sind Anzahl und Reihenfolge deiner Einträge richtig?",
        "Ein Array fasst mehrere Werte in einer geordneten Sammlung zusammen. Die Reihenfolge gehört zu seinen Daten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const material = [\"Holz\", \"Stoff\"];",
        "explanation": "Ein Array fasst mehrere Werte in einer geordneten Sammlung zusammen. Die Reihenfolge gehört zu seinen Daten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "route. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Array fasst mehrere Werte in einer geordneten Sammlung zusammen. Die Reihenfolge gehört zu seinen Daten. Ein Array-Literal steht in eckigen Klammern, Einträge sind kommasepariert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Verwechselst du die Anzahl der Einträge mit dem Index des ersten Eintrags?",
        "Indizes beginnen bei null. Die Länge zählt dagegen alle vorhandenen Einträge. Das letzte Element hat daher Index Länge minus eins.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const material = [\"Holz\", \"Stoff\"]; console.log(material[1]);",
        "explanation": "Indizes beginnen bei null. Die Länge zählt dagegen alle vorhandenen Einträge. Das letzte Element hat daher Index Länge minus eins.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "erstes, anzahl. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "erstes",
          "expected": "'Berlin'",
          "context": "Setze route=[\"Berlin\",\"Leipzig\"] und erstes=route[0], anzahl=route.length."
        },
        {
          "input": "anzahl",
          "expected": "2",
          "context": "Setze route=[\"Berlin\",\"Leipzig\"] und erstes=route[0], anzahl=route.length."
        }
      ],
      "solutionNotes": "Indizes beginnen bei null. Die Länge zählt dagegen alle vorhandenen Einträge. Das letzte Element hat daher Index Länge minus eins. Index 0 liest das erste Element. length ist eine Eigenschaft, kein Funktionsaufruf. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Erweiterst du die Liste oder speicherst du versehentlich nur die neue Länge?",
        "push verändert das vorhandene Array und liefert seine neue Länge. Diese Rückgabe ist nicht das veränderte Array.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const liste = [\"A\"]; liste.push(\"B\");",
        "explanation": "push verändert das vorhandene Array und liefert seine neue Länge. Diese Rückgabe ist nicht das veränderte Array.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "route. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "push verändert das vorhandene Array und liefert seine neue Länge. Diese Rückgabe ist nicht das veränderte Array. push verändert das vorhandene Array. const verhindert keine Änderungen am Array-Inhalt. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Prüfst du sowohl den entfernten Wert als auch die verbleibende Liste?",
        "pop verändert die Liste und liefert den entfernten Wert. Nach dem Aufruf ist die Liste um einen Eintrag kürzer.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const liste = [\"A\", \"B\"]; const letzter = liste.pop();",
        "explanation": "pop verändert die Liste und liefert den entfernten Wert. Nach dem Aufruf ist die Liste um einen Eintrag kürzer.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "entfernt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "entfernt",
          "expected": "'Erfurt'",
          "context": "Erzeuge route=[\"Berlin\",\"Leipzig\",\"Erfurt\"], speichere route.pop() in entfernt."
        }
      ],
      "solutionNotes": "pop verändert die Liste und liefert den entfernten Wert. Nach dem Aufruf ist die Liste um einen Eintrag kürzer. pop entfernt den letzten Eintrag und gibt ihn zurück. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Welche Zahl wird zuerst und welche zuletzt verarbeitet?",
        "Eine Zählschleife hat Start, Fortsetzungsbedingung und Änderung. Prüfe alle drei Teile, um einen Schritt zu viel oder zu wenig zu vermeiden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "for (let schritt = 0; schritt < 3; schritt++) { console.log(schritt); }",
        "explanation": "Eine Zählschleife hat Start, Fortsetzungsbedingung und Änderung. Prüfe alle drei Teile, um einen Schritt zu viel oder zu wenig zu vermeiden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "zahlen. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Zählschleife hat Start, Fortsetzungsbedingung und Änderung. Prüfe alle drei Teile, um einen Schritt zu viel oder zu wenig zu vermeiden. Die for-Schleife hat Start, Bedingung und Fortschritt. Ohne Fortschritt kann sie endlos laufen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist dein Startwert auch für eine leere Liste sinnvoll?",
        "Eine Summe beginnt mit dem neutralen Wert null. Jeder Durchlauf addiert genau einen Eintrag. Eine leere Sammlung lässt den Startwert unverändert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "let gesamt = 0; for (const preis of [4, 6]) { gesamt += preis; }",
        "explanation": "Eine Summe beginnt mit dem neutralen Wert null. Jeder Durchlauf addiert genau einen Eintrag. Eine leere Sammlung lässt den Startwert unverändert.",
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
          "input": "summe([2,3,7])",
          "expected": "12",
          "context": "Mehrere Werte"
        },
        {
          "input": "summe([])",
          "expected": "0",
          "context": "Leere Liste"
        }
      ],
      "solutionNotes": "Eine Summe beginnt mit dem neutralen Wert null. Jeder Durchlauf addiert genau einen Eintrag. Eine leere Sammlung lässt den Startwert unverändert. Ein Akkumulator sammelt Zwischenergebnisse. Starte für Summen bei 0. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Fügst du nur passende Werte in eine neue Liste ein?",
        "Eine Ergebnisliste sammelt nur passende Werte. Die Ausgangsliste kann dabei unverändert bleiben. Die Bedingung wird pro Eintrag neu geprüft.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const klein = []; for (const x of [2, 7]) { if (x < 5) klein.push(x); }",
        "explanation": "Eine Ergebnisliste sammelt nur passende Werte. Die Ausgangsliste kann dabei unverändert bleiben. Die Bedingung wird pro Eintrag neu geprüft.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "gerade. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "gerade([]).length",
          "expected": "0",
          "context": "Leer"
        }
      ],
      "solutionNotes": "Eine Ergebnisliste sammelt nur passende Werte. Die Ausgangsliste kann dabei unverändert bleiben. Die Bedingung wird pro Eintrag neu geprüft. Verknüpfe Schleife, Bedingung und eine neue Ergebnisliste. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Was ergibt deine Funktion bei ausschließlich negativen Zahlen oder einer leeren Liste?",
        "Ein größter Wert darf nicht blind bei null beginnen. Sonst liefert eine ausschließlich negative Liste ein falsches Ergebnis.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const ersterWert = [-8, -3][0];",
        "explanation": "Ein größter Wert darf nicht blind bei null beginnen. Sonst liefert eine ausschließlich negative Liste ein falsches Ergebnis.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "maximum. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "maximum([2,9,4])",
          "expected": "9",
          "context": "Positive Zahlen"
        },
        {
          "input": "maximum([-5,-2,-8])",
          "expected": "-2",
          "context": "Negative Zahlen"
        },
        {
          "input": "maximum([])",
          "expected": "null",
          "context": "Leer"
        }
      ],
      "solutionNotes": "Ein größter Wert darf nicht blind bei null beginnen. Sonst liefert eine ausschließlich negative Liste ein falsches Ergebnis. Starte mit dem ersten Wert statt mit 0, damit negative Zahlen korrekt bleiben. Leere Arrays ergeben null. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Lieferst du die Position des ersten Treffers und einen Rückfall bei fehlendem Treffer?",
        "Bei einer Indexsuche brauchst du die Position und nicht nur den Wert. Ein früher Rücksprung stellt sicher, dass der erste Treffer zählt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "for (let i = 0; i < 2; i++) { if ([\"A\", \"B\"][i] === \"A\") console.log(i); }",
        "explanation": "Bei einer Indexsuche brauchst du die Position und nicht nur den Wert. Ein früher Rücksprung stellt sicher, dass der erste Treffer zählt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "findeIndex. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "findeIndex(['a','b','b'],'b')",
          "expected": "1",
          "context": "Treffer"
        },
        {
          "input": "findeIndex(['a'],'z')",
          "expected": "-1",
          "context": "Kein Treffer"
        }
      ],
      "solutionNotes": "Bei einer Indexsuche brauchst du die Position und nicht nur den Wert. Ein früher Rücksprung stellt sicher, dass der erste Treffer zählt. return beendet auch eine Schleife innerhalb einer Funktion. -1 ist ein üblicher Wert für nicht gefunden. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Behandelst du die leere Liste vor der Division?",
        "Der Durchschnitt benötigt zuerst Summe und Anzahl. Eine leere Liste braucht einen eigenen Fall, weil eine Division durch null kein sinnvoller Durchschnitt ist.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
          "code": "__text('#output')==='20'"
        }
      ],
      "prerequisites": [
        "m09-09"
      ],
      "concept": {
        "example": "const mittelwert = (4 + 8) / 2;",
        "explanation": "Der Durchschnitt benötigt zuerst Summe und Anzahl. Eine leere Liste braucht einen eigenen Fall, weil eine Division durch null kein sinnvoller Durchschnitt ist.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "durchschnitt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "durchschnitt([4,8])",
          "expected": "6",
          "context": "Durchschnitt"
        },
        {
          "input": "durchschnitt([])",
          "expected": "0",
          "context": "Leer"
        },
        {
          "input": "Text in '#output'",
          "expected": "'20'",
          "context": "Ausgabe"
        }
      ],
      "solutionNotes": "Der Durchschnitt benötigt zuerst Summe und Anzahl. Eine leere Liste braucht einen eigenen Fall, weil eine Division durch null kein sinnvoller Durchschnitt ist. Ein Durchschnitt ist Summe geteilt durch Anzahl. Vermeide Division durch 0. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
