window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m10",
  "title": "Objekte und Datenmodelle",
  "city": "Dresden",
  "tag": "objects",
  "level": 2,
  "description": "Zusammengehörige Daten verständlich modellieren.",
  "lesson": "Ein Objekt bündelt benannte Eigenschaften: {name:\"Ada\",punkte:10}. obj.name und obj[\"name\"] lesen sie. Destrukturierung const {name} = obj entpackt Werte. Spread {...obj,punkte:20} erzeugt eine flache Kopie. Optional Chaining obj.adresse?.stadt stoppt bei null/undefined. JSON.stringify wandelt geeignete Daten in Text, JSON.parse zurück. Object.entries liefert Schlüssel-Wert-Paare. Eine Methode ist eine Funktion im Objekt; this verweist bei einem normalen Methodenaufruf auf das Objekt.",
  "exercises": [
    {
      "id": "m10-01",
      "title": "Ein Profil als Objekt",
      "explanation": "Eigenschaften bestehen aus Schlüssel und Wert.",
      "task": "Erstelle profil mit name Ada und punkte 20.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Profil als Objekt: Eigenschaften bestehen aus Schlüssel und Wert. */\nconst profil = { name: \"Ada\", punkte: 20 };"
      },
      "hints": [
        "Eigenschaften bestehen aus Schlüssel und Wert.",
        "Orientiere dich an diesem Baustein:\nconst profil = { name: \"Ada\", punkte: 20 };",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst profil = { name: \"Ada\", punkte: 20 };"
      ],
      "tests": [
        {
          "label": "Erstelle profil mit name Ada und punkte 20.",
          "code": "typeof profil!=='undefined' && profil.name==='Ada' && profil.punkte===20"
        }
      ],
      "prerequisites": [
        "m09-10"
      ],
      "solutionNotes": "Eigenschaften bestehen aus Schlüssel und Wert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-02",
      "title": "Gezielt lesen",
      "explanation": "Punktzugriff liest einen bekannten Eigenschaftsnamen.",
      "task": "Erzeuge ort={name:\"Dresden\",land:\"Sachsen\"}; speichere ort.land in region.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Gezielt lesen: Punktzugriff liest einen bekannten Eigenschaftsnamen. */\nconst ort = { name: \"Dresden\", land: \"Sachsen\" };\nconst region = ort.land;"
      },
      "hints": [
        "Punktzugriff liest einen bekannten Eigenschaftsnamen.",
        "Orientiere dich an diesem Baustein:\nconst ort = { name: \"Dresden\", land: \"Sachsen\" };",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst region = ort.land;"
      ],
      "tests": [
        {
          "label": "Erzeuge ort={name:\"Dresden\",land:\"Sachsen\"}; speichere ort.land in region.",
          "code": "typeof region!=='undefined' && region==='Sachsen'"
        }
      ],
      "prerequisites": [
        "m10-01"
      ],
      "solutionNotes": "Punktzugriff liest einen bekannten Eigenschaftsnamen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-03",
      "title": "Dynamische Schlüssel",
      "explanation": "Eckige Klammern werten eine Variable als Schlüssel aus.",
      "task": "Schreibe lesen(obj,schluessel), das die passende Eigenschaft liefert.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Dynamische Schlüssel: Eckige Klammern werten eine Variable als Schlüssel aus. */\nfunction lesen(obj, schluessel) { return obj[schluessel]; }"
      },
      "hints": [
        "Eckige Klammern werten eine Variable als Schlüssel aus.",
        "Orientiere dich an diesem Baustein:\nfunction lesen(obj, schluessel) { return obj[schluessel]; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction lesen(obj, schluessel) { return obj[schluessel]; }"
      ],
      "tests": [
        {
          "label": "Name",
          "code": "typeof lesen==='function' && lesen({name:'Ada'},'name')==='Ada'"
        },
        {
          "label": "Andere Eigenschaft",
          "code": "lesen({x:7},'x')===7"
        }
      ],
      "prerequisites": [
        "m10-02"
      ],
      "solutionNotes": "Eckige Klammern werten eine Variable als Schlüssel aus. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-04",
      "title": "Bequem entpacken",
      "explanation": "Destrukturierung übernimmt gleichnamige Eigenschaften in lokale Bindungen.",
      "task": "Entpacke name und punkte aus {name:\"Ada\",punkte:30}.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Bequem entpacken: Destrukturierung übernimmt gleichnamige Eigenschaften in lokale Bindungen. */\nconst profil = { name: \"Ada\", punkte: 30 };\nconst { name, punkte } = profil;"
      },
      "hints": [
        "Destrukturierung übernimmt gleichnamige Eigenschaften in lokale Bindungen.",
        "Orientiere dich an diesem Baustein:\nconst profil = { name: \"Ada\", punkte: 30 };",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst { name, punkte } = profil;"
      ],
      "tests": [
        {
          "label": "Entpacke name und punkte aus {name:\"Ada\",punkte:30}.",
          "code": "typeof name!=='undefined' && name==='Ada' && typeof punkte!=='undefined' && punkte===30"
        }
      ],
      "prerequisites": [
        "m10-03"
      ],
      "solutionNotes": "Destrukturierung übernimmt gleichnamige Eigenschaften in lokale Bindungen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-05",
      "title": "Kopieren statt verändern",
      "explanation": "Spread kopiert nur eine Ebene. Nachfolgende Eigenschaften überschreiben frühere.",
      "task": "Schreibe belohnen(profil), das eine neue Kopie mit 10 zusätzlichen Punkten liefert.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Kopieren statt verändern: Spread kopiert nur eine Ebene. Nachfolgende Eigenschaften überschreiben frühere. */\nfunction belohnen(profil) { return { ...profil, punkte: profil.punkte + 10 }; }"
      },
      "hints": [
        "Spread kopiert nur eine Ebene. Nachfolgende Eigenschaften überschreiben frühere.",
        "Orientiere dich an diesem Baustein:\nfunction belohnen(profil) { return { ...profil, punkte: profil.punkte + 10 }; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction belohnen(profil) { return { ...profil, punkte: profil.punkte + 10 }; }"
      ],
      "tests": [
        {
          "label": "Punkte",
          "code": "typeof belohnen==='function' && belohnen({name:'Ada',punkte:5}).punkte===15"
        },
        {
          "label": "Original erhalten",
          "code": "(()=>{const p={name:'Ada',punkte:5};const q=belohnen(p);return q!==p && p.punkte===5 && q.name==='Ada'})()"
        }
      ],
      "prerequisites": [
        "m10-04"
      ],
      "solutionNotes": "Spread kopiert nur eine Ebene. Nachfolgende Eigenschaften überschreiben frühere. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-06",
      "title": "Fehlende Unterdaten",
      "explanation": "?. verhindert Fehler beim Zugriff durch fehlende Zwischenelemente. ?? ergänzt einen Ersatz.",
      "task": "Schreibe stadt(profil), das profil.adresse.stadt oder Unbekannt liefert.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Fehlende Unterdaten: ?. verhindert Fehler beim Zugriff durch fehlende Zwischenelemente. ?? ergänzt einen Ersatz. */\nfunction stadt(profil) { return profil.adresse?.stadt ?? \"Unbekannt\"; }"
      },
      "hints": [
        "?. verhindert Fehler beim Zugriff durch fehlende Zwischenelemente. ?? ergänzt einen Ersatz.",
        "Orientiere dich an diesem Baustein:\nfunction stadt(profil) { return profil.adresse?.stadt ?? \"Unbekannt\"; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction stadt(profil) { return profil.adresse?.stadt ?? \"Unbekannt\"; }"
      ],
      "tests": [
        {
          "label": "Adresse vorhanden",
          "code": "typeof stadt==='function' && stadt({adresse:{stadt:'Kiel'}})==='Kiel'"
        },
        {
          "label": "Fehlend",
          "code": "stadt({})==='Unbekannt'"
        }
      ],
      "prerequisites": [
        "m10-05"
      ],
      "solutionNotes": "?. verhindert Fehler beim Zugriff durch fehlende Zwischenelemente. ?? ergänzt einen Ersatz. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-07",
      "title": "Daten als Text",
      "explanation": "JSON kann Daten transportieren, aber keine Funktionen. Ungültiger JSON-Text löst einen Fehler aus.",
      "task": "Schreibe kopie(daten) mit JSON.stringify und JSON.parse für reine JSON-Daten.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Daten als Text: JSON kann Daten transportieren, aber keine Funktionen. Ungültiger JSON-Text löst einen Fehler aus. */\nfunction kopie(daten) { return JSON.parse(JSON.stringify(daten)); }"
      },
      "hints": [
        "JSON kann Daten transportieren, aber keine Funktionen. Ungültiger JSON-Text löst einen Fehler aus.",
        "Orientiere dich an diesem Baustein:\nfunction kopie(daten) { return JSON.parse(JSON.stringify(daten)); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction kopie(daten) { return JSON.parse(JSON.stringify(daten)); }"
      ],
      "tests": [
        {
          "label": "Inhalt",
          "code": "typeof kopie==='function' && kopie({x:3}).x===3"
        },
        {
          "label": "Tiefe Kopie für JSON",
          "code": "(()=>{const x={a:{b:2}};return kopie(x).a!==x.a})()"
        }
      ],
      "prerequisites": [
        "m10-06"
      ],
      "solutionNotes": "JSON kann Daten transportieren, aber keine Funktionen. Ungültiger JSON-Text löst einen Fehler aus. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-08",
      "title": "Schlüssel zählen",
      "explanation": "Object.keys(obj) liefert ein Array aller eigenen aufzählbaren Schlüssel.",
      "task": "Schreibe anzahlFelder(obj).",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Schlüssel zählen: Object.keys(obj) liefert ein Array aller eigenen aufzählbaren Schlüssel. */\nfunction anzahlFelder(obj) { return Object.keys(obj).length; }"
      },
      "hints": [
        "Object.keys(obj) liefert ein Array aller eigenen aufzählbaren Schlüssel.",
        "Orientiere dich an diesem Baustein:\nfunction anzahlFelder(obj) { return Object.keys(obj).length; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction anzahlFelder(obj) { return Object.keys(obj).length; }"
      ],
      "tests": [
        {
          "label": "Zwei Felder",
          "code": "typeof anzahlFelder==='function' && anzahlFelder({a:1,b:2})===2"
        },
        {
          "label": "Leer",
          "code": "anzahlFelder({})===0"
        }
      ],
      "prerequisites": [
        "m10-07"
      ],
      "solutionNotes": "Object.keys(obj) liefert ein Array aller eigenen aufzählbaren Schlüssel. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-09",
      "title": "Ein Objekt kann handeln",
      "explanation": "Methoden nutzen this für Eigenschaften ihres Aufrufobjekts. Verwende hier eine normale Methode, keinen Arrow.",
      "task": "Erstelle zaehler mit wert:0 und erhoehen(), das wert um 1 erhöht und zurückgibt.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Objekt kann handeln: Methoden nutzen this für Eigenschaften ihres Aufrufobjekts. Verwende hier eine normale Methode, keinen Arrow. */\nconst zaehler = {\n  wert: 0,\n  erhoehen() { this.wert += 1; return this.wert; }\n};"
      },
      "hints": [
        "Methoden nutzen this für Eigenschaften ihres Aufrufobjekts. Verwende hier eine normale Methode, keinen Arrow.",
        "Orientiere dich an diesem Baustein:\nconst zaehler = {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n};"
      ],
      "tests": [
        {
          "label": "Erstelle zaehler mit wert:0 und erhoehen(), das wert um 1 erhöht und zurückgibt.",
          "code": "typeof zaehler!=='undefined' && zaehler.erhoehen()===1 && zaehler.erhoehen()===2"
        }
      ],
      "prerequisites": [
        "m10-08"
      ],
      "solutionNotes": "Methoden nutzen this für Eigenschaften ihres Aufrufobjekts. Verwende hier eine normale Methode, keinen Arrow. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m10-10",
      "title": "Projekt: Eine Buchung",
      "explanation": "Gib berechnete Daten als neues Objekt zurück. Das trennt Daten und Darstellung.",
      "task": "Schreibe buchung(name,naechte,preis) mit Ergebnis {name,gesamt}; Gesamt ist naechte*preis.",
      "minutes": 10,
      "xp": 65,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Eine Buchung: Gib berechnete Daten als neues Objekt zurück. Das trennt Daten und Darstellung. */\nfunction buchung(name, naechte, preis) {\n  return { name, gesamt: naechte * preis };\n}\ndocument.querySelector(\"#output\").textContent = JSON.stringify(buchung(\"Ada\",2,45));"
      },
      "hints": [
        "Gib berechnete Daten als neues Objekt zurück. Das trennt Daten und Darstellung.",
        "Orientiere dich an diesem Baustein:\nfunction buchung(name, naechte, preis) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = JSON.stringify(buchung(\"Ada\",2,45));"
      ],
      "tests": [
        {
          "label": "Berechnung",
          "code": "typeof buchung==='function' && buchung('Ada',2,45).gesamt===90"
        },
        {
          "label": "Name und Null",
          "code": "buchung('Lin',0,45).name==='Lin' && buchung('Lin',0,45).gesamt===0"
        }
      ],
      "prerequisites": [
        "m10-09"
      ],
      "solutionNotes": "Gib berechnete Daten als neues Objekt zurück. Das trennt Daten und Darstellung. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
