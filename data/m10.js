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
        "Stimmen Eigenschaftsnamen und Datentypen mit dem Vertrag überein?",
        "Ein Objekt ordnet Werten benannte Schlüssel zu. Anders als bei einem Array greifen wir meist über Bedeutung statt Position zu.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const buch = { titel: \"Wald\", seiten: 80 };",
        "explanation": "Ein Objekt ordnet Werten benannte Schlüssel zu. Anders als bei einem Array greifen wir meist über Bedeutung statt Position zu.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "profil. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Objekt ordnet Werten benannte Schlüssel zu. Anders als bei einem Array greifen wir meist über Bedeutung statt Position zu. Eigenschaften bestehen aus Schlüssel und Wert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Liest du die geforderte Eigenschaft statt das ganze Objekt?",
        "Punktzugriff liest einen wörtlich bekannten Eigenschaftsnamen. Der Objektname selbst ist noch nicht der gewünschte Eigenschaftswert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const buch = { titel: \"Wald\" }; console.log(buch.titel);",
        "explanation": "Punktzugriff liest einen wörtlich bekannten Eigenschaftsnamen. Der Objektname selbst ist noch nicht der gewünschte Eigenschaftswert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "region. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "region",
          "expected": "'Sachsen'",
          "context": "Erzeuge ort={name:\"Dresden\",land:\"Sachsen\"}; speichere ort.land in region."
        }
      ],
      "solutionNotes": "Punktzugriff liest einen wörtlich bekannten Eigenschaftsnamen. Der Objektname selbst ist noch nicht der gewünschte Eigenschaftswert. Punktzugriff liest einen bekannten Eigenschaftsnamen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wird dein Parameter als Schlüssel ausgewertet?",
        "Eckige Klammern werten einen Ausdruck als Schlüssel aus. Punktzugriff würde hingegen den geschriebenen Namen wörtlich verwenden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "function feld(objekt, name) { return objekt[name]; }",
        "explanation": "Eckige Klammern werten einen Ausdruck als Schlüssel aus. Punktzugriff würde hingegen den geschriebenen Namen wörtlich verwenden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "lesen. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "lesen({name:'Ada'},'name')",
          "expected": "'Ada'",
          "context": "Name"
        },
        {
          "input": "lesen({x:7},'x')",
          "expected": "7",
          "context": "Andere Eigenschaft"
        }
      ],
      "solutionNotes": "Eckige Klammern werten einen Ausdruck als Schlüssel aus. Punktzugriff würde hingegen den geschriebenen Namen wörtlich verwenden. Eckige Klammern werten eine Variable als Schlüssel aus. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Entpackst du beide geforderten Eigenschaften unter ihren vereinbarten Namen?",
        "Destrukturierung übernimmt Eigenschaften in gleichnamige lokale Bindungen. Die Namen links müssen zu den vorhandenen Schlüsseln passen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const { titel } = { titel: \"Wald\" };",
        "explanation": "Destrukturierung übernimmt Eigenschaften in gleichnamige lokale Bindungen. Die Namen links müssen zu den vorhandenen Schlüsseln passen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "name, punkte. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
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
          "context": "Entpacke name und punkte aus {name:\"Ada\",punkte:30}."
        },
        {
          "input": "punkte",
          "expected": "30",
          "context": "Entpacke name und punkte aus {name:\"Ada\",punkte:30}."
        }
      ],
      "solutionNotes": "Destrukturierung übernimmt Eigenschaften in gleichnamige lokale Bindungen. Die Namen links müssen zu den vorhandenen Schlüsseln passen. Destrukturierung übernimmt gleichnamige Eigenschaften in lokale Bindungen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Bleibt das ursprüngliche Objekt nach deinem Funktionsaufruf unverändert?",
        "Spread erzeugt eine flache Kopie. Später angegebene Eigenschaften überschreiben frühere. Verschachtelte Objekte werden dabei nicht automatisch tief kopiert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const neu = { ...alt, aktiv: true };",
        "explanation": "Spread erzeugt eine flache Kopie. Später angegebene Eigenschaften überschreiben frühere. Verschachtelte Objekte werden dabei nicht automatisch tief kopiert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "belohnen. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "belohnen({name:'Ada',punkte:5}).punkte",
          "expected": "15",
          "context": "Punkte"
        }
      ],
      "solutionNotes": "Spread erzeugt eine flache Kopie. Später angegebene Eigenschaften überschreiben frühere. Verschachtelte Objekte werden dabei nicht automatisch tief kopiert. Spread kopiert nur eine Ebene. Nachfolgende Eigenschaften überschreiben frühere. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist genau der möglicherweise fehlende Zwischenschritt abgesichert?",
        "Optional Chaining beendet einen Zugriff bei fehlenden Zwischendaten. Der Ersatzwert wird anschließend getrennt mit dem Nullish-Operator bestimmt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const land = reise.ziel?.land ?? \"Offen\";",
        "explanation": "Optional Chaining beendet einen Zugriff bei fehlenden Zwischendaten. Der Ersatzwert wird anschließend getrennt mit dem Nullish-Operator bestimmt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "stadt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "stadt({adresse:{stadt:'Kiel'}})",
          "expected": "'Kiel'",
          "context": "Adresse vorhanden"
        },
        {
          "input": "stadt({})",
          "expected": "'Unbekannt'",
          "context": "Fehlend"
        }
      ],
      "solutionNotes": "Optional Chaining beendet einen Zugriff bei fehlenden Zwischendaten. Der Ersatzwert wird anschließend getrennt mit dem Nullish-Operator bestimmt. ?. verhindert Fehler beim Zugriff durch fehlende Zwischenelemente. ?? ergänzt einen Ersatz. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Lieferst du wieder ein Datenobjekt statt nur einen JSON-Text?",
        "JSON ist ein Textformat. stringify erzeugt Text, parse liest ihn wieder als Daten. Das Kopieren auf diesem Weg ist auf JSON-geeignete Daten beschränkt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const text = JSON.stringify({ fertig: true });",
        "explanation": "JSON ist ein Textformat. stringify erzeugt Text, parse liest ihn wieder als Daten. Das Kopieren auf diesem Weg ist auf JSON-geeignete Daten beschränkt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "kopie. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "kopie({x:3}).x",
          "expected": "3",
          "context": "Inhalt"
        }
      ],
      "solutionNotes": "JSON ist ein Textformat. stringify erzeugt Text, parse liest ihn wieder als Daten. Das Kopieren auf diesem Weg ist auf JSON-geeignete Daten beschränkt. JSON kann Daten transportieren, aber keine Funktionen. Ungültiger JSON-Text löst einen Fehler aus. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Zählst du die Felder des Objekts oder seine Werte?",
        "Object.keys liefert ein Array der eigenen aufzählbaren Schlüssel. Seine Länge entspricht der Anzahl dieser Felder.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "console.log(Object.keys({ links: 1, rechts: 2 }));",
        "explanation": "Object.keys liefert ein Array der eigenen aufzählbaren Schlüssel. Seine Länge entspricht der Anzahl dieser Felder.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "anzahlFelder. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "anzahlFelder({a:1,b:2})",
          "expected": "2",
          "context": "Zwei Felder"
        },
        {
          "input": "anzahlFelder({})",
          "expected": "0",
          "context": "Leer"
        }
      ],
      "solutionNotes": "Object.keys liefert ein Array der eigenen aufzählbaren Schlüssel. Seine Länge entspricht der Anzahl dieser Felder. Object.keys(obj) liefert ein Array aller eigenen aufzählbaren Schlüssel. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Verweist this auf das Objekt und bleibt die Änderung für den nächsten Aufruf erhalten?",
        "Eine normale Methode erhält ihr this aus dem aufrufenden Objekt. Das ist bei Arrow Functions anders. Ein veränderter Zustand muss im Objekt gespeichert werden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const schalter = { an: false, wechseln() { this.an = !this.an; } };",
        "explanation": "Eine normale Methode erhält ihr this aus dem aufrufenden Objekt. Das ist bei Arrow Functions anders. Ein veränderter Zustand muss im Objekt gespeichert werden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "zaehler. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine normale Methode erhält ihr this aus dem aufrufenden Objekt. Das ist bei Arrow Functions anders. Ein veränderter Zustand muss im Objekt gespeichert werden. Methoden nutzen this für Eigenschaften ihres Aufrufobjekts. Verwende hier eine normale Methode, keinen Arrow. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind die geforderten Daten als Eigenschaften eines neuen Objekts enthalten?",
        "Eine Funktion kann ein neues Objekt mit Eingaben und abgeleiteten Werten zurückgeben. Der Vertrag bestimmt dessen Schlüssel.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "function rechteck(breite, hoehe) { return { flaeche: breite * hoehe }; }",
        "explanation": "Eine Funktion kann ein neues Objekt mit Eingaben und abgeleiteten Werten zurückgeben. Der Vertrag bestimmt dessen Schlüssel.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "buchung. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "buchung('Ada',2,45).gesamt",
          "expected": "90",
          "context": "Berechnung"
        },
        {
          "input": "buchung('Lin',0,45).name",
          "expected": "'Lin'",
          "context": "Name und Null"
        },
        {
          "input": "buchung('Lin',0,45).gesamt",
          "expected": "0",
          "context": "Name und Null"
        }
      ],
      "solutionNotes": "Eine Funktion kann ein neues Objekt mit Eingaben und abgeleiteten Werten zurückgeben. Der Vertrag bestimmt dessen Schlüssel. Gib berechnete Daten als neues Objekt zurück. Das trennt Daten und Darstellung. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
