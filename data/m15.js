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
        "Eine zentrale Datenstruktur verhindert widersprüchliche Einzelwerte im DOM.",
        "Orientiere dich an diesem Baustein:\nconst state = { name: \"Ada\", punkte: 0, theme: \"light\" };",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst state = { name: \"Ada\", punkte: 0, theme: \"light\" };"
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
      "solutionNotes": "Eine zentrale Datenstruktur verhindert widersprüchliche Einzelwerte im DOM. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein unveränderlicher Übergang liefert ein neues Objekt statt das alte zu ändern.",
        "Orientiere dich an diesem Baustein:\nfunction punkteDazu(state, n) { return { ...state, punkte: state.punkte + n }; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction punkteDazu(state, n) { return { ...state, punkte: state.punkte + n }; }"
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
      "solutionNotes": "Ein unveränderlicher Übergang liefert ein neues Objekt statt das alte zu ändern. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Berechnete Werte brauchen oft keinen eigenen Speicher.",
        "Orientiere dich an diesem Baustein:\nfunction fortschritt(erledigt, gesamt) { return gesamt === 0 ? 0 : Math.round(erledigt / gesamt * 100); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction fortschritt(erledigt, gesamt) { return gesamt === 0 ? 0 : Math.round(erledigt / gesamt * 100); }"
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
      "solutionNotes": "Berechnete Werte brauchen oft keinen eigenen Speicher. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "setItem wandelt Werte in Text; explizite Textwerte sind am klarsten.",
        "Orientiere dich an diesem Baustein:\nlocalStorage.setItem(\"theme\", \"dark\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nlocalStorage.setItem(\"theme\", \"dark\");"
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
      "solutionNotes": "setItem wandelt Werte in Text; explizite Textwerte sind am klarsten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "getItem liefert null, wenn ein Schlüssel fehlt. ?? ergänzt den Default.",
        "Orientiere dich an diesem Baustein:\nfunction leseTheme() { return localStorage.getItem(\"theme\") ?? \"light\"; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction leseTheme() { return localStorage.getItem(\"theme\") ?? \"light\"; }"
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
      "solutionNotes": "getItem liefert null, wenn ein Schlüssel fehlt. ?? ergänzt den Default. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Serialisiere Daten vor dem Speichern und parse sie beim Lesen.",
        "Orientiere dich an diesem Baustein:\nfunction speichern(profil) { localStorage.setItem(\"profil\", JSON.stringify(profil)); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction speichern(profil) { localStorage.setItem(\"profil\", JSON.stringify(profil)); }"
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
      "solutionNotes": "Serialisiere Daten vor dem Speichern und parse sie beim Lesen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Fremde oder ältere Speicherstände können ungültig sein. try/catch deckt Syntaxfehler ab.",
        "Orientiere dich an diesem Baustein:\nfunction laden() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Fremde oder ältere Speicherstände können ungültig sein. try/catch deckt Syntaxfehler ab. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Actions sind beschreibende Objekte. Unbekannte Typen lassen den Zustand unverändert.",
        "Orientiere dich an diesem Baustein:\nfunction reducer(state, action) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Actions sind beschreibende Objekte. Unbekannte Typen lassen den Zustand unverändert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine Versionsnummer erlaubt später gezielte Migration statt blindem Übernehmen alter Daten.",
        "Orientiere dich an diesem Baustein:\nfunction exportiere(state) { return JSON.stringify({ version: 1, state }); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction exportiere(state) { return JSON.stringify({ version: 1, state }); }"
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
      "solutionNotes": "Eine Versionsnummer erlaubt später gezielte Migration statt blindem Übernehmen alter Daten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Prüfe nicht nur JSON-Syntax, sondern die Struktur. typeof null ist object; prüfe null zuerst.",
        "Orientiere dich an diesem Baustein:\nfunction importiere(text) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Prüfe nicht nur JSON-Syntax, sondern die Struktur. typeof null ist object; prüfe null zuerst. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
