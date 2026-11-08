window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m15",
  "title": "Zustand und Speichern",
  "city": "Bonn",
  "tag": "state",
  "level": 3,
  "description": "Daten als Wahrheit, robuste Speicherung und Import.",
  "lesson": "Zustand ist das aktuelle Datenmodell deiner Anwendung. Die Oberfläche wird daraus abgeleitet. localStorage speichert nur Texte über setItem und getItem; fehlende Schlüssel ergeben null. In unserer isolierten Vorschau ist localStorage ein lokaler Übungsspeicher: pro Ausführung leer, keine echten Nutzerdaten. Die Plattform selbst speichert deine Lösungen dauerhaft im Browser. JSON.parse kann fehlschlagen: catch gibt dann einen sicheren Standard. Reducer sind reine Funktionen (state,action)=>nextState. Zustand niemals als Quellcode ausführen.",
  "exercises": [
    {
      "id": "m15-01",
      "title": "Ein Zustand als Modell",
      "explanation": "Eine zentrale Datenstruktur verhindert widersprüchliche Einzelwerte im DOM.",
      "task": "Erstelle state={name:\"Ada\",punkte:0,theme:\"light\"}.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Zustand als Modell: Eine zentrale Datenstruktur verhindert widersprüchliche Einzelwerte im DOM. */\nconst state = { name: \"Ada\", punkte: 0, theme: \"light\" };"
      },
      "hints": [
        "Sind alle verlangten Zustandseigenschaften vorhanden?",
        "Zustand beschreibt Daten, aus denen eine Oberfläche abgeleitet werden kann. Vereinbarte Eigenschaftsnamen bilden die Schnittstelle.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Erstelle state={name:\"Ada\",punkte:0,theme:\"light\"}.",
          "code": "typeof state!=='undefined' && state.name==='Ada' && state.punkte===0 && state.theme==='light'"
        }
      ],
      "prerequisites": [
        "m14-10"
      ],
      "concept": {
        "example": "const state = { offen: true, anzahl: 3 };",
        "explanation": "Zustand beschreibt Daten, aus denen eine Oberfläche abgeleitet werden kann. Vereinbarte Eigenschaftsnamen bilden die Schnittstelle.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "state. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Zustand beschreibt Daten, aus denen eine Oberfläche abgeleitet werden kann. Vereinbarte Eigenschaftsnamen bilden die Schnittstelle. Eine zentrale Datenstruktur verhindert widersprüchliche Einzelwerte im DOM. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-02",
      "title": "Ein neuer Zustand",
      "explanation": "Ein unveränderlicher Übergang liefert ein neues Objekt statt das alte zu ändern.",
      "task": "Schreibe punkteDazu(state,n), ohne state zu verändern.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein neuer Zustand: Ein unveränderlicher Übergang liefert ein neues Objekt statt das alte zu ändern. */\nfunction punkteDazu(state, n) { return { ...state, punkte: state.punkte + n }; }"
      },
      "hints": [
        "Bleiben andere Eigenschaften und das ursprüngliche Objekt erhalten?",
        "Ein Zustandsübergang liefert eine neue Identität und erhält nicht geänderte Felder. Das Original bleibt für Vergleiche nutzbar.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Neuer Punktestand",
          "code": "typeof punkteDazu==='function' && punkteDazu({punkte:2},3).punkte===5"
        },
        {
          "label": "Keine Mutation",
          "code": "(()=>{const s={punkte:1,name:'Ada'};const n=punkteDazu(s,2);return s.punkte===1 && n!==s && n.name==='Ada'})()"
        }
      ],
      "prerequisites": [
        "m15-01"
      ],
      "concept": {
        "example": "const neuerStand = { ...stand, anzahl: stand.anzahl + 2 };",
        "explanation": "Ein Zustandsübergang liefert eine neue Identität und erhält nicht geänderte Felder. Das Original bleibt für Vergleiche nutzbar.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "punkteDazu. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "punkteDazu({punkte:2},3).punkte",
          "expected": "5",
          "context": "Neuer Punktestand"
        }
      ],
      "solutionNotes": "Ein Zustandsübergang liefert eine neue Identität und erhält nicht geänderte Felder. Das Original bleibt für Vergleiche nutzbar. Ein unveränderlicher Übergang liefert ein neues Objekt statt das alte zu ändern. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-03",
      "title": "Ableiten statt doppelt halten",
      "explanation": "Berechnete Werte brauchen oft keinen eigenen Speicher.",
      "task": "Schreibe fortschritt(erledigt,gesamt): gerundete Prozent; bei gesamt=0 Ergebnis 0.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ableiten statt doppelt halten: Berechnete Werte brauchen oft keinen eigenen Speicher. */\nfunction fortschritt(erledigt, gesamt) { return gesamt === 0 ? 0 : Math.round(erledigt / gesamt * 100); }"
      },
      "hints": [
        "Prüfst du den leeren Fall vor dem Rechnen?",
        "Ein Verhältnis wird erst berechnet und danach gerundet. Fehlende Gesamtmenge braucht eine eigene Regel vor der Division.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Runden",
          "code": "typeof fortschritt==='function' && fortschritt(1,3)===33"
        },
        {
          "label": "Keine Aufgaben",
          "code": "fortschritt(0,0)===0"
        }
      ],
      "prerequisites": [
        "m15-02"
      ],
      "concept": {
        "example": "console.log(Math.round(2 / 7 * 100));",
        "explanation": "Ein Verhältnis wird erst berechnet und danach gerundet. Fehlende Gesamtmenge braucht eine eigene Regel vor der Division.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "fortschritt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "fortschritt(1,3)",
          "expected": "33",
          "context": "Runden"
        },
        {
          "input": "fortschritt(0,0)",
          "expected": "0",
          "context": "Keine Aufgaben"
        }
      ],
      "solutionNotes": "Ein Verhältnis wird erst berechnet und danach gerundet. Fehlende Gesamtmenge braucht eine eigene Regel vor der Division. Berechnete Werte brauchen oft keinen eigenen Speicher. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-04",
      "title": "Text speichern",
      "explanation": "setItem wandelt Werte in Text; explizite Textwerte sind am klarsten.",
      "task": "Speichere unter theme den Text dark.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Text speichern: setItem wandelt Werte in Text; explizite Textwerte sind am klarsten. */\nlocalStorage.setItem(\"theme\", \"dark\");"
      },
      "hints": [
        "Speicherst du unter dem exakt vereinbarten Schlüssel?",
        "Webspeicher besitzt Textschlüssel und Textwerte. In dieser Vorschau ist er pro Ausführung flüchtig; die Lernplattform speichert separat.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Speichere unter theme den Text dark.",
          "code": "localStorage.getItem('theme')==='dark'"
        }
      ],
      "prerequisites": [
        "m15-03"
      ],
      "concept": {
        "example": "localStorage.setItem(\"sprache\", \"de\");",
        "explanation": "Webspeicher besitzt Textschlüssel und Textwerte. In dieser Vorschau ist er pro Ausführung flüchtig; die Lernplattform speichert separat.",
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
      "solutionNotes": "Webspeicher besitzt Textschlüssel und Textwerte. In dieser Vorschau ist er pro Ausführung flüchtig; die Lernplattform speichert separat. setItem wandelt Werte in Text; explizite Textwerte sind am klarsten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-05",
      "title": "Ein sicherer Standard",
      "explanation": "getItem liefert null, wenn ein Schlüssel fehlt. ?? ergänzt den Default.",
      "task": "Schreibe leseTheme(), das den gespeicherten theme-Wert oder light liefert.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein sicherer Standard: getItem liefert null, wenn ein Schlüssel fehlt. ?? ergänzt den Default. */\nfunction leseTheme() { return localStorage.getItem(\"theme\") ?? \"light\"; }"
      },
      "hints": [
        "Funktioniert das Lesen auch ohne vorheriges Speichern?",
        "Ein fehlender Speichereintrag liefert null. Ein Standardwert gehört zum Lesen, nicht nur zur erstmaligen Einrichtung.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Standard",
          "code": "typeof leseTheme==='function' && (localStorage.removeItem('theme'),leseTheme()==='light')"
        },
        {
          "label": "Gespeichert",
          "code": "(localStorage.setItem('theme','dark'),leseTheme()==='dark')"
        }
      ],
      "prerequisites": [
        "m15-04"
      ],
      "concept": {
        "example": "const sprache = localStorage.getItem(\"sprache\") ?? \"en\";",
        "explanation": "Ein fehlender Speichereintrag liefert null. Ein Standardwert gehört zum Lesen, nicht nur zur erstmaligen Einrichtung.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "leseTheme. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "leseTheme()",
          "expected": "'light'",
          "context": "Standard"
        },
        {
          "input": "leseTheme()",
          "expected": "'dark'",
          "context": "Gespeichert"
        }
      ],
      "solutionNotes": "Ein fehlender Speichereintrag liefert null. Ein Standardwert gehört zum Lesen, nicht nur zur erstmaligen Einrichtung. getItem liefert null, wenn ein Schlüssel fehlt. ?? ergänzt den Default. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-06",
      "title": "Ein Objekt ablegen",
      "explanation": "Serialisiere Daten vor dem Speichern und parse sie beim Lesen.",
      "task": "Schreibe speichern(profil), das profil als JSON unter profil ablegt.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Objekt ablegen: Serialisiere Daten vor dem Speichern und parse sie beim Lesen. */\nfunction speichern(profil) { localStorage.setItem(\"profil\", JSON.stringify(profil)); }"
      },
      "hints": [
        "Wird dein Objekt tatsächlich als JSON abgelegt?",
        "Ein Objekt muss vor dem Speichern serialisiert werden. Sonst entsteht nicht automatisch wieder lesbares JSON.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe speichern(profil), das profil als JSON unter profil ablegt.",
          "code": "typeof speichern==='function' && (speichern({name:'Ada'}),JSON.parse(localStorage.getItem('profil')).name==='Ada')"
        }
      ],
      "prerequisites": [
        "m15-05"
      ],
      "concept": {
        "example": "localStorage.setItem(\"einstellung\", JSON.stringify({ ton: false }));",
        "explanation": "Ein Objekt muss vor dem Speichern serialisiert werden. Sonst entsteht nicht automatisch wieder lesbares JSON.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "speichern. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Objekt muss vor dem Speichern serialisiert werden. Sonst entsteht nicht automatisch wieder lesbares JSON. Serialisiere Daten vor dem Speichern und parse sie beim Lesen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-07",
      "title": "Beschädigte Daten überleben",
      "explanation": "Fremde oder ältere Speicherstände können ungültig sein. try/catch deckt Syntaxfehler ab.",
      "task": "Schreibe laden(): parse profil, bei fehlenden oder kaputten Daten null.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Beschädigte Daten überleben: Fremde oder ältere Speicherstände können ungültig sein. try/catch deckt Syntaxfehler ab. */\nfunction laden() {\n  try { return JSON.parse(localStorage.getItem(\"profil\") ?? \"null\"); }\n  catch { return null; }\n}"
      },
      "hints": [
        "Hast du fehlende und beschädigte Einträge berücksichtigt?",
        "Syntaktisch ungültiger Speicherinhalt kann eine Ausnahme auslösen. Der definierte Rückfall hält die Anwendung benutzbar.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Kaputt",
          "code": "typeof laden==='function' && (localStorage.setItem('profil','{kaputt'),laden()===null)"
        },
        {
          "label": "Gültig",
          "code": "(localStorage.setItem('profil','{\"name\":\"Ada\"}'),laden().name==='Ada')"
        }
      ],
      "prerequisites": [
        "m15-06"
      ],
      "concept": {
        "example": "try { JSON.parse(\"kein JSON\"); } catch { console.log(\"Rückfall\"); }",
        "explanation": "Syntaktisch ungültiger Speicherinhalt kann eine Ausnahme auslösen. Der definierte Rückfall hält die Anwendung benutzbar.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "laden. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "laden()",
          "expected": "null",
          "context": "Kaputt"
        },
        {
          "input": "laden().name",
          "expected": "'Ada'",
          "context": "Gültig"
        }
      ],
      "solutionNotes": "Syntaktisch ungültiger Speicherinhalt kann eine Ausnahme auslösen. Der definierte Rückfall hält die Anwendung benutzbar. Fremde oder ältere Speicherstände können ungültig sein. try/catch deckt Syntaxfehler ab. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-08",
      "title": "Ein Reducer für Punkte",
      "explanation": "Actions sind beschreibende Objekte. Unbekannte Typen lassen den Zustand unverändert.",
      "task": "Schreibe reducer(state,action): add erhöht punkte um action.wert, sonst unverändertes state.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Reducer für Punkte: Actions sind beschreibende Objekte. Unbekannte Typen lassen den Zustand unverändert. */\nfunction reducer(state, action) {\n  if (action.type === \"add\") return { ...state, punkte: state.punkte + action.wert };\n  return state;\n}"
      },
      "hints": [
        "Was liefert dein Reducer bei einem unbekannten Aktionstyp?",
        "Ein Reducer entscheidet anhand einer beschreibenden Action. Unbekannte Actions sollen den bisherigen Zustand unverändert lassen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Add",
          "code": "typeof reducer==='function' && reducer({punkte:5},{type:'add',wert:3}).punkte===8"
        },
        {
          "label": "Unbekannt",
          "code": "(()=>{const s={punkte:4};return reducer(s,{type:'x'})===s})()"
        }
      ],
      "prerequisites": [
        "m15-07"
      ],
      "concept": {
        "example": "function wechseln(state, action) { return action.type === \"reset\" ? 0 : state; }",
        "explanation": "Ein Reducer entscheidet anhand einer beschreibenden Action. Unbekannte Actions sollen den bisherigen Zustand unverändert lassen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "reducer. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "reducer({punkte:5},{type:'add',wert:3}).punkte",
          "expected": "8",
          "context": "Add"
        }
      ],
      "solutionNotes": "Ein Reducer entscheidet anhand einer beschreibenden Action. Unbekannte Actions sollen den bisherigen Zustand unverändert lassen. Actions sind beschreibende Objekte. Unbekannte Typen lassen den Zustand unverändert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-09",
      "title": "Eine Version für morgen",
      "explanation": "Eine Versionsnummer erlaubt später gezielte Migration statt blindem Übernehmen alter Daten.",
      "task": "Schreibe exportiere(state), das JSON mit {version:1,state} zurückgibt.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Version für morgen: Eine Versionsnummer erlaubt später gezielte Migration statt blindem Übernehmen alter Daten. */\nfunction exportiere(state) { return JSON.stringify({ version: 1, state }); }"
      },
      "hints": [
        "Liegen Version und Zustandsobjekt auf der richtigen Ebene?",
        "Eine Versionsnummer beschreibt die Form der exportierten Daten. Sie gehört auf eine feste Ebene im Paket, damit spätere Migrationen sie lesen können.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe exportiere(state), das JSON mit {version:1,state} zurückgibt.",
          "code": "typeof exportiere==='function' && JSON.parse(exportiere({punkte:4})).version===1 && JSON.parse(exportiere({punkte:4})).state.punkte===4"
        }
      ],
      "prerequisites": [
        "m15-08"
      ],
      "concept": {
        "example": "const paket = JSON.stringify({ version: 3, inhalt: { ton: false } });",
        "explanation": "Eine Versionsnummer beschreibt die Form der exportierten Daten. Sie gehört auf eine feste Ebene im Paket, damit spätere Migrationen sie lesen können.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "exportiere. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Versionsnummer beschreibt die Form der exportierten Daten. Sie gehört auf eine feste Ebene im Paket, damit spätere Migrationen sie lesen können. Eine Versionsnummer erlaubt später gezielte Migration statt blindem Übernehmen alter Daten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m15-10",
      "title": "Projekt: Eine sichere Migration",
      "explanation": "Prüfe nicht nur JSON-Syntax, sondern die Struktur. typeof null ist object; prüfe null zuerst.",
      "task": "Schreibe importiere(text): akzeptiere nur version===1 mit state und numerischem state.punkte; sonst null.",
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Eine sichere Migration: Prüfe nicht nur JSON-Syntax, sondern die Struktur. typeof null ist object; prüfe null zuerst. */\nfunction importiere(text) {\n  try {\n    const data = JSON.parse(text);\n    if (!data || data.version !== 1 || !data.state || typeof data.state.punkte !== \"number\") return null;\n    return data.state;\n  } catch { return null; }\n}"
      },
      "hints": [
        "Validierst du Datenform und Version zusätzlich zur JSON-Syntax?",
        "Erfolgreiches JSON-Parsen sagt noch nichts über die Datenstruktur aus. Prüfe danach Version, Pflichtfelder und Datentypen. Auch null ist gültiger JSON-Text.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gültig",
          "code": "typeof importiere==='function' && importiere('{\"version\":1,\"state\":{\"punkte\":2}}').punkte===2"
        },
        {
          "label": "Falsche Version",
          "code": "importiere('{\"version\":2,\"state\":{\"punkte\":2}}')===null"
        },
        {
          "label": "Defekt und null",
          "code": "importiere('{')===null && importiere('null')===null"
        },
        {
          "label": "Falscher Typ",
          "code": "importiere('{\"version\":1,\"state\":{\"punkte\":\"2\"}}')===null"
        }
      ],
      "prerequisites": [
        "m15-09"
      ],
      "concept": {
        "example": "const istZahl = typeof wert === \"number\";",
        "explanation": "Erfolgreiches JSON-Parsen sagt noch nichts über die Datenstruktur aus. Prüfe danach Version, Pflichtfelder und Datentypen. Auch null ist gültiger JSON-Text.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "importiere. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "importiere('{\"version\":1,\"state\":{\"punkte\":2}}').punkte",
          "expected": "2",
          "context": "Gültig"
        },
        {
          "input": "importiere('{\"version\":2,\"state\":{\"punkte\":2}}')",
          "expected": "null",
          "context": "Falsche Version"
        },
        {
          "input": "importiere('{')",
          "expected": "null",
          "context": "Defekt und null"
        },
        {
          "input": "importiere('null')",
          "expected": "null",
          "context": "Defekt und null"
        },
        {
          "input": "importiere('{\"version\":1,\"state\":{\"punkte\":\"2\"}}')",
          "expected": "null",
          "context": "Falscher Typ"
        }
      ],
      "solutionNotes": "Erfolgreiches JSON-Parsen sagt noch nichts über die Datenstruktur aus. Prüfe danach Version, Pflichtfelder und Datentypen. Auch null ist gültiger JSON-Text. Prüfe nicht nur JSON-Syntax, sondern die Struktur. typeof null ist object; prüfe null zuerst. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
