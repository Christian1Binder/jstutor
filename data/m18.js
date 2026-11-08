window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m18",
  "title": "Qualität und Sicherheit",
  "city": "Stuttgart",
  "tag": "quality",
  "level": 4,
  "description": "Grenzfälle, verständliche Fehler und sichere Oberflächen.",
  "lesson": "Guter Code hat klare Verträge und prüfbare Grenzen. throw meldet ungültige Eingaben; instanceof erkennt Fehlerklassen. Number.isFinite weist NaN und Infinity zurück. Array.isArray prüft Arrays. RegExp.test prüft Textmuster; /^...$/ verankert Anfang und Ende. Fremde Texte niemals per innerHTML ausgeben. URL-Protokolle müssen für Links bewusst zugelassen werden. Performance entsteht oft durch weniger unnötige Arbeit; DocumentFragment sammelt DOM-Kinder vor dem Einfügen. Tests vergleichen erwartetes und tatsächliches Verhalten inklusive Grenzfällen.",
  "exercises": [
    {
      "id": "m18-01",
      "title": "Ein kleiner Assert",
      "explanation": "Ein Assert ist eine Funktion, die bei falscher Bedingung einen Fehler wirft.",
      "task": "Schreibe assert(bedingung,text), das bei false Error(text) wirft, sonst true liefert.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein kleiner Assert: Ein Assert ist eine Funktion, die bei falscher Bedingung einen Fehler wirft. */\nfunction assert(bedingung, text) { if (!bedingung) throw new Error(text); return true; }"
      },
      "hints": [
        "Wirft dein Fehlerfall wirklich eine Ausnahme?",
        "Ein Assert beendet den normalen Weg bei verletzter Annahme. Der Erfolgsfall und die Fehlermeldung sind Teil des Vertrags.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Erfolg",
          "code": "typeof assert==='function' && assert(true,'x')===true"
        },
        {
          "label": "Fehler",
          "code": "(()=>{try{assert(false,'kaputt');return false}catch(e){return e.message==='kaputt'}})()"
        }
      ],
      "prerequisites": [
        "m17-10"
      ],
      "concept": {
        "example": "if (!bedingung) throw new Error(\"Prüfung fehlgeschlagen\");",
        "explanation": "Ein Assert beendet den normalen Weg bei verletzter Annahme. Der Erfolgsfall und die Fehlermeldung sind Teil des Vertrags.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "assert. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "assert(true,'x')",
          "expected": "true",
          "context": "Erfolg"
        }
      ],
      "solutionNotes": "Ein Assert beendet den normalen Weg bei verletzter Annahme. Der Erfolgsfall und die Fehlermeldung sind Teil des Vertrags. Ein Assert ist eine Funktion, die bei falscher Bedingung einen Fehler wirft. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-02",
      "title": "Ungültige Zahlen ablehnen",
      "explanation": "Number.isFinite akzeptiert nur echte endliche Zahlen. TypeError beschreibt einen unpassenden Datentyp.",
      "task": "Schreibe doppelt(x), das für nicht endliche Zahlen TypeError wirft.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ungültige Zahlen ablehnen: Number.isFinite akzeptiert nur echte endliche Zahlen. TypeError beschreibt einen unpassenden Datentyp. */\nfunction doppelt(x) { if (!Number.isFinite(x)) throw new TypeError(\"Endliche Zahl erwartet\"); return x*2; }"
      },
      "hints": [
        "Werden Zahlentext, NaN und Infinity abgelehnt?",
        "Nicht jeder Wert des Typs number ist endlich. Eine belastbare Zahlenprüfung weist auch NaN und unendliche Werte zurück.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gültig",
          "code": "typeof doppelt==='function' && doppelt(3)===6"
        },
        {
          "label": "NaN und Text",
          "code": "[NaN,'3',Infinity].every(x=>{try{doppelt(x);return false}catch(e){return e instanceof TypeError}})"
        }
      ],
      "prerequisites": [
        "m18-01"
      ],
      "concept": {
        "example": "console.log(Number.isFinite(Infinity));",
        "explanation": "Nicht jeder Wert des Typs number ist endlich. Eine belastbare Zahlenprüfung weist auch NaN und unendliche Werte zurück.",
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
          "input": "doppelt(3)",
          "expected": "6",
          "context": "Gültig"
        }
      ],
      "solutionNotes": "Nicht jeder Wert des Typs number ist endlich. Eine belastbare Zahlenprüfung weist auch NaN und unendliche Werte zurück. Number.isFinite akzeptiert nur echte endliche Zahlen. TypeError beschreibt einen unpassenden Datentyp. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-03",
      "title": "Ein sinnvoller Wertebereich",
      "explanation": "RangeError beschreibt einen Wert außerhalb des erlaubten Bereichs.",
      "task": "Schreibe prozent(x): nur 0 bis 100 inklusive und endlich, sonst RangeError.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein sinnvoller Wertebereich: RangeError beschreibt einen Wert außerhalb des erlaubten Bereichs. */\nfunction prozent(x) { if (!Number.isFinite(x) || x<0 || x>100) throw new RangeError(\"0 bis 100 erwartet\"); return x; }"
      },
      "hints": [
        "Sind untere und obere Grenze erlaubt, die Nachbarwerte aber nicht?",
        "Fehlerklassen benennen die Art des Problems. Bei einem Wertebereich müssen beide Grenzen und ihre Inklusivität feststehen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Grenzen",
          "code": "typeof prozent==='function' && prozent(0)===0 && prozent(100)===100"
        },
        {
          "label": "Außerhalb",
          "code": "[-1,101,NaN].every(x=>{try{prozent(x);return false}catch(e){return e instanceof RangeError}})"
        }
      ],
      "prerequisites": [
        "m18-02"
      ],
      "concept": {
        "example": "throw new RangeError(\"Außerhalb des Bereichs\");",
        "explanation": "Fehlerklassen benennen die Art des Problems. Bei einem Wertebereich müssen beide Grenzen und ihre Inklusivität feststehen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "prozent. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "prozent(0)",
          "expected": "0",
          "context": "Grenzen"
        },
        {
          "input": "prozent(100)",
          "expected": "100",
          "context": "Grenzen"
        }
      ],
      "solutionNotes": "Fehlerklassen benennen die Art des Problems. Bei einem Wertebereich müssen beide Grenzen und ihre Inklusivität feststehen. RangeError beschreibt einen Wert außerhalb des erlaubten Bereichs. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-04",
      "title": "Ein Datenvertrag",
      "explanation": "Prüfe die Struktur, bevor du Daten verwendest. Null braucht eine eigene Prüfung.",
      "task": "Schreibe gueltig(x): Objekt mit string name und endlicher number punkte, keine Arrays/null.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Datenvertrag: Prüfe die Struktur, bevor du Daten verwendest. Null braucht eine eigene Prüfung. */\nfunction gueltig(x) { return x !== null && typeof x === \"object\" && !Array.isArray(x) && typeof x.name === \"string\" && Number.isFinite(x.punkte); }"
      },
      "hints": [
        "Unterscheidest du Datensatz, Array und null?",
        "Ein Array ist ebenfalls ein Objekt, aber oft kein gültiger Datensatz. null benötigt ebenso eine ausdrückliche Prüfung.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gültig",
          "code": "typeof gueltig==='function' && gueltig({name:'Ada',punkte:2})===true"
        },
        {
          "label": "Ungültig",
          "code": "gueltig(null)===false && gueltig([])===false && gueltig({name:2,punkte:'4'})===false"
        }
      ],
      "prerequisites": [
        "m18-03"
      ],
      "concept": {
        "example": "console.log(Array.isArray([]));",
        "explanation": "Ein Array ist ebenfalls ein Objekt, aber oft kein gültiger Datensatz. null benötigt ebenso eine ausdrückliche Prüfung.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "gueltig. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "gueltig({name:'Ada',punkte:2})",
          "expected": "true",
          "context": "Gültig"
        },
        {
          "input": "gueltig(null)",
          "expected": "false",
          "context": "Ungültig"
        },
        {
          "input": "gueltig([])",
          "expected": "false",
          "context": "Ungültig"
        },
        {
          "input": "gueltig({name:2,punkte:'4'})",
          "expected": "false",
          "context": "Ungültig"
        }
      ],
      "solutionNotes": "Ein Array ist ebenfalls ein Objekt, aber oft kein gültiger Datensatz. null benötigt ebenso eine ausdrückliche Prüfung. Prüfe die Struktur, bevor du Daten verwendest. Null braucht eine eigene Prüfung. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-05",
      "title": "Text bleibt Text",
      "explanation": "textContent interpretiert keine Tags. Das ist die sichere Voreinstellung für Nutzereingaben.",
      "task": "Schreibe zeige(text), das #output sicher mit Text befüllt.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Text bleibt Text: textContent interpretiert keine Tags. Das ist die sichere Voreinstellung für Nutzereingaben. */\nfunction zeige(text) { document.querySelector(\"#output\").textContent = text; }\nzeige(\"<b>Ich bleibe Text</b>\");"
      },
      "hints": [
        "Werden spitze Klammern als Text sichtbar statt neue Elemente zu erzeugen?",
        "Fremde Inhalte müssen Daten bleiben. Das sichere Einsetzen als Text verhindert, dass ihre Zeichen als HTML interpretiert werden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe zeige(text), das #output sicher mit Text befüllt.",
          "code": "typeof zeige==='function' && (zeige('<img src=x onerror=alert(1)>'),__text('#output')==='<img src=x onerror=alert(1)>' && !document.querySelector('#output img'))"
        }
      ],
      "prerequisites": [
        "m18-04"
      ],
      "concept": {
        "example": "ausgabe.textContent = \"<strong>Wörtlich</strong>\";",
        "explanation": "Fremde Inhalte müssen Daten bleiben. Das sichere Einsetzen als Text verhindert, dass ihre Zeichen als HTML interpretiert werden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "zeige. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#output'",
          "expected": "'<img src=x onerror=alert(1)>'",
          "context": "Schreibe zeige(text), das #output sicher mit Text befüllt."
        }
      ],
      "solutionNotes": "Fremde Inhalte müssen Daten bleiben. Das sichere Einsetzen als Text verhindert, dass ihre Zeichen als HTML interpretiert werden. textContent interpretiert keine Tags. Das ist die sichere Voreinstellung für Nutzereingaben. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-06",
      "title": "Ein sicherer Link",
      "explanation": "Ein gültig geparster URL kann trotzdem ein gefährliches Protokoll besitzen. Erlaube hier ausschließlich https:.",
      "task": "Schreibe sichererLink(text), das nur bei gültiger HTTPS-URL true liefert.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein sicherer Link: Ein gültig geparster URL kann trotzdem ein gefährliches Protokoll besitzen. Erlaube hier ausschließlich https:. */\nfunction sichererLink(text) {\n  try { return new URL(text).protocol === \"https:\"; } catch { return false; }\n}"
      },
      "hints": [
        "Prüfst du das Protokoll auch bei erfolgreich geparsten Adressen?",
        "Eine syntaktisch gültige Adresse ist noch keine erlaubte Adresse. Erst der Protokollvertrag bestimmt, welche Links akzeptiert werden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "HTTPS",
          "code": "typeof sichererLink==='function' && sichererLink('https://example.org/')===true"
        },
        {
          "label": "Andere Protokolle",
          "code": "sichererLink('javascript:alert(1)')===false && sichererLink('http://example.org')===false && sichererLink('kaputt')===false"
        }
      ],
      "prerequisites": [
        "m18-05"
      ],
      "concept": {
        "example": "console.log(new URL(\"https://example.org\").protocol);",
        "explanation": "Eine syntaktisch gültige Adresse ist noch keine erlaubte Adresse. Erst der Protokollvertrag bestimmt, welche Links akzeptiert werden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "sichererLink. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "sichererLink('https://example.org/')",
          "expected": "true",
          "context": "HTTPS"
        },
        {
          "input": "sichererLink('http://example.org')",
          "expected": "false",
          "context": "Andere Protokolle"
        },
        {
          "input": "sichererLink('kaputt')",
          "expected": "false",
          "context": "Andere Protokolle"
        }
      ],
      "solutionNotes": "Eine syntaktisch gültige Adresse ist noch keine erlaubte Adresse. Erst der Protokollvertrag bestimmt, welche Links akzeptiert werden. Ein gültig geparster URL kann trotzdem ein gefährliches Protokoll besitzen. Erlaube hier ausschließlich https:. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-07",
      "title": "Ein einfacher Slug-Vertrag",
      "explanation": "/^[a-z0-9-]+$/ erlaubt ausschließlich kleine ASCII-Buchstaben, Zahlen und Bindestriche, mindestens ein Zeichen.",
      "task": "Schreibe istSlug(text) nach diesem Muster.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein einfacher Slug-Vertrag: /^[a-z0-9-]+$/ erlaubt ausschließlich kleine ASCII-Buchstaben, Zahlen und Bindestriche, mindestens ein Zeichen. */\nfunction istSlug(text) { return /^[a-z0-9-]+$/.test(text); }"
      },
      "hints": [
        "Prüfst du den vollständigen Text und verbietest du eine leere Eingabe?",
        "Die Anker verlangen eine Übereinstimmung mit dem gesamten Text. Ohne Anker könnte ein erlaubter Teil in einem sonst ungültigen Text genügen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Erlaubt",
          "code": "typeof istSlug==='function' && istSlug('web-123')===true"
        },
        {
          "label": "Verboten",
          "code": "istSlug('Web')===false && istSlug('')===false && istSlug('a b')===false"
        }
      ],
      "prerequisites": [
        "m18-06"
      ],
      "concept": {
        "example": "console.log(/^[A-Z]+$/.test(\"ABC\"));",
        "explanation": "Die Anker verlangen eine Übereinstimmung mit dem gesamten Text. Ohne Anker könnte ein erlaubter Teil in einem sonst ungültigen Text genügen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "istSlug. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "istSlug('web-123')",
          "expected": "true",
          "context": "Erlaubt"
        },
        {
          "input": "istSlug('Web')",
          "expected": "false",
          "context": "Verboten"
        },
        {
          "input": "istSlug('')",
          "expected": "false",
          "context": "Verboten"
        },
        {
          "input": "istSlug('a b')",
          "expected": "false",
          "context": "Verboten"
        }
      ],
      "solutionNotes": "Die Anker verlangen eine Übereinstimmung mit dem gesamten Text. Ohne Anker könnte ein erlaubter Teil in einem sonst ungültigen Text genügen. /^[a-z0-9-]+$/ erlaubt ausschließlich kleine ASCII-Buchstaben, Zahlen und Bindestriche, mindestens ein Zeichen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-08",
      "title": "Viele DOM-Elemente bündeln",
      "explanation": "Ein DocumentFragment ist ein unsichtbarer Container; append überträgt seine Kinder in den Baum.",
      "task": "Schreibe liste(werte): Erzeuge pro Wert ein li mit sicherem Text. Sammle die Einträge zuerst in einem DocumentFragment und füge sie in ein ul ein. Ersetze #output durch dieses ul. Wiederholte Aufrufe sollen die alte Liste ersetzen. Die Verwendung eines Fragments kontrollierst du selbst im Code.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Viele DOM-Elemente bündeln: Ein DocumentFragment ist ein unsichtbarer Container; append überträgt seine Kinder in den Baum. */\nfunction liste(werte) {\n  const fragment = document.createDocumentFragment();\n  for (const wert of werte) { const li=document.createElement(\"li\");li.textContent=wert;fragment.append(li); }\n  const ul=document.createElement(\"ul\");ul.append(fragment);document.querySelector(\"#output\").replaceChildren(ul);\n}"
      },
      "hints": [
        "Sind alle erzeugten Einträge sicher befüllt, bevor du sie gemeinsam einfügst?",
        "Ein Fragment sammelt Kinder, bevor sie in den sichtbaren Baum gelangen. Beim Einfügen wandern seine Kinder, der Behälter selbst bleibt unsichtbar.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe liste(werte): Erzeuge pro Wert ein li mit sicherem Text. Sammle die Einträge zuerst in einem DocumentFragment und füge sie in ein ul ein. Ersetze #output durch dieses ul. Wiederholte Aufrufe sollen die alte Liste ersetzen. Die Verwendung eines Fragments kontrollierst du selbst im Code.",
          "code": "typeof liste==='function' && (liste(['A','B']),document.querySelectorAll('#output ul li').length===2)"
        }
      ],
      "prerequisites": [
        "m18-07"
      ],
      "concept": {
        "example": "const teilbaum = document.createDocumentFragment();",
        "explanation": "Ein Fragment sammelt Kinder, bevor sie in den sichtbaren Baum gelangen. Beim Einfügen wandern seine Kinder, der Behälter selbst bleibt unsichtbar.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "liste. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Fragment sammelt Kinder, bevor sie in den sichtbaren Baum gelangen. Beim Einfügen wandern seine Kinder, der Behälter selbst bleibt unsichtbar. Ein DocumentFragment ist ein unsichtbarer Container; append überträgt seine Kinder in den Baum. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-09",
      "title": "Fehler nachvollziehbar machen",
      "explanation": "Ein Error kann mit {cause} den ursprünglichen Fehler erhalten. Das erleichtert Diagnose ohne Details im UI zu verlieren.",
      "task": "Schreibe parse(text), das JSON parst oder Error(\"Ungültige Daten\",{cause}) wirft.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Fehler nachvollziehbar machen: Ein Error kann mit {cause} den ursprünglichen Fehler erhalten. Das erleichtert Diagnose ohne Details im UI zu verlieren. */\nfunction parse(text) {\n  try { return JSON.parse(text); }\n  catch (cause) { throw new Error(\"Ungültige Daten\", { cause }); }\n}"
      },
      "hints": [
        "Enthält der weitergeworfene Fehler die ursprüngliche Ausnahme als cause?",
        "Ein neuer Fehler kann eine verständliche Meldung und die ursprüngliche technische Ursache zugleich behalten. Die Ursache darf nicht versehentlich verloren gehen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gültig",
          "code": "typeof parse==='function' && parse('{\"x\":1}').x===1"
        },
        {
          "label": "Ursache bleibt",
          "code": "(()=>{try{parse('{');return false}catch(e){return e.message==='Ungültige Daten' && e.cause instanceof SyntaxError}})()"
        }
      ],
      "prerequisites": [
        "m18-08"
      ],
      "concept": {
        "example": "throw new Error(\"Daten konnten nicht gelesen werden\", { cause: ursache });",
        "explanation": "Ein neuer Fehler kann eine verständliche Meldung und die ursprüngliche technische Ursache zugleich behalten. Die Ursache darf nicht versehentlich verloren gehen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "parse. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "parse('{\"x\":1}').x",
          "expected": "1",
          "context": "Gültig"
        }
      ],
      "solutionNotes": "Ein neuer Fehler kann eine verständliche Meldung und die ursprüngliche technische Ursache zugleich behalten. Die Ursache darf nicht versehentlich verloren gehen. Ein Error kann mit {cause} den ursprünglichen Fehler erhalten. Das erleichtert Diagnose ohne Details im UI zu verlieren. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m18-10",
      "title": "Projekt: Robuster Datenimport",
      "explanation": "Syntax und Datenform sind verschiedene Verträge. Weise beides kontrolliert zurück.",
      "task": "Schreibe importProfile(text): parse Array mit Objekten {name:string,punkte:endliche Zahl}; bei Fehler null.",
      "minutes": 20,
      "xp": 105,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Robuster Datenimport: Syntax und Datenform sind verschiedene Verträge. Weise beides kontrolliert zurück. */\nfunction importProfile(text) {\n  try {\n    const data=JSON.parse(text);\n    if (!Array.isArray(data)) return null;\n    if (!data.every(x=>x!==null && typeof x===\"object\" && !Array.isArray(x) && typeof x.name===\"string\" && Number.isFinite(x.punkte))) return null;\n    return data;\n  } catch { return null; }\n}"
      },
      "hints": [
        "Prüfst du jeden Eintrag und gibst bei jeder Vertragsverletzung den vereinbarten Rückfall zurück?",
        "Ein Import benötigt Prüfungen für Behälter und Einträge. Ein einzelner ungültiger Eintrag kann den ganzen Import unbrauchbar machen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gültig",
          "code": "typeof importProfile==='function' && importProfile('[{\"name\":\"Ada\",\"punkte\":2}]').length===1"
        },
        {
          "label": "Fehlerfälle",
          "code": "importProfile('{}')===null && importProfile('[null]')===null && importProfile('{')===null && importProfile('[{\"name\":\"Ada\",\"punkte\":\"2\"}]')===null"
        }
      ],
      "prerequisites": [
        "m18-09"
      ],
      "concept": {
        "example": "const korrekt = Array.isArray(daten) && daten.every(pruefeEintrag);",
        "explanation": "Ein Import benötigt Prüfungen für Behälter und Einträge. Ein einzelner ungültiger Eintrag kann den ganzen Import unbrauchbar machen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "importProfile. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "importProfile('[{\"name\":\"Ada\",\"punkte\":2}]').length",
          "expected": "1",
          "context": "Gültig"
        },
        {
          "input": "importProfile('{}')",
          "expected": "null",
          "context": "Fehlerfälle"
        },
        {
          "input": "importProfile('[null]')",
          "expected": "null",
          "context": "Fehlerfälle"
        },
        {
          "input": "importProfile('{')",
          "expected": "null",
          "context": "Fehlerfälle"
        },
        {
          "input": "importProfile('[{\"name\":\"Ada\",\"punkte\":\"2\"}]')",
          "expected": "null",
          "context": "Fehlerfälle"
        }
      ],
      "solutionNotes": "Ein Import benötigt Prüfungen für Behälter und Einträge. Ein einzelner ungültiger Eintrag kann den ganzen Import unbrauchbar machen. Syntax und Datenform sind verschiedene Verträge. Weise beides kontrolliert zurück. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
