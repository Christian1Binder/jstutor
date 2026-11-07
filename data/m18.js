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
        "Ein Assert ist eine Funktion, die bei falscher Bedingung einen Fehler wirft.",
        "Orientiere dich an diesem Baustein:\nfunction assert(bedingung, text) { if (!bedingung) throw new Error(text); return true; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction assert(bedingung, text) { if (!bedingung) throw new Error(text); return true; }"
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
      "solutionNotes": "Ein Assert ist eine Funktion, die bei falscher Bedingung einen Fehler wirft. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Number.isFinite akzeptiert nur echte endliche Zahlen. TypeError beschreibt einen unpassenden Datentyp.",
        "Orientiere dich an diesem Baustein:\nfunction doppelt(x) { if (!Number.isFinite(x)) throw new TypeError(\"Endliche Zahl erwartet\"); return x*2; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction doppelt(x) { if (!Number.isFinite(x)) throw new TypeError(\"Endliche Zahl erwartet\"); return x*2; }"
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
      "solutionNotes": "Number.isFinite akzeptiert nur echte endliche Zahlen. TypeError beschreibt einen unpassenden Datentyp. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "RangeError beschreibt einen Wert außerhalb des erlaubten Bereichs.",
        "Orientiere dich an diesem Baustein:\nfunction prozent(x) { if (!Number.isFinite(x) || x<0 || x>100) throw new RangeError(\"0 bis 100 erwartet\"); return x; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction prozent(x) { if (!Number.isFinite(x) || x<0 || x>100) throw new RangeError(\"0 bis 100 erwartet\"); return x; }"
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
      "solutionNotes": "RangeError beschreibt einen Wert außerhalb des erlaubten Bereichs. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Prüfe die Struktur, bevor du Daten verwendest. Null braucht eine eigene Prüfung.",
        "Orientiere dich an diesem Baustein:\nfunction gueltig(x) { return x !== null && typeof x === \"object\" && !Array.isArray(x) && typeof x.name === \"string\" && Number.isFinite(x.punkte); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction gueltig(x) { return x !== null && typeof x === \"object\" && !Array.isArray(x) && typeof x.name === \"string\" && Number.isFinite(x.punkte); }"
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
      "solutionNotes": "Prüfe die Struktur, bevor du Daten verwendest. Null braucht eine eigene Prüfung. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "textContent interpretiert keine Tags. Das ist die sichere Voreinstellung für Nutzereingaben.",
        "Orientiere dich an diesem Baustein:\nfunction zeige(text) { document.querySelector(\"#output\").textContent = text; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nzeige(\"<b>Ich bleibe Text</b>\");"
      ],
      "tests": [
        {
          "label": "Schreibe zeige(text), das #output sicher mit Text befüllt.",
          "code": "typeof zeige==='function' && (zeige('<img src=x onerror=alert(1)>'),document.querySelector('#output').textContent==='<img src=x onerror=alert(1)>' && !document.querySelector('#output img'))"
        }
      ],
      "prerequisites": [
        "m18-04"
      ],
      "solutionNotes": "textContent interpretiert keine Tags. Das ist die sichere Voreinstellung für Nutzereingaben. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein gültig geparster URL kann trotzdem ein gefährliches Protokoll besitzen. Erlaube hier ausschließlich https:.",
        "Orientiere dich an diesem Baustein:\nfunction sichererLink(text) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein gültig geparster URL kann trotzdem ein gefährliches Protokoll besitzen. Erlaube hier ausschließlich https:. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "/^[a-z0-9-]+$/ erlaubt ausschließlich kleine ASCII-Buchstaben, Zahlen und Bindestriche, mindestens ein Zeichen.",
        "Orientiere dich an diesem Baustein:\nfunction istSlug(text) { return /^[a-z0-9-]+$/.test(text); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction istSlug(text) { return /^[a-z0-9-]+$/.test(text); }"
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
      "solutionNotes": "/^[a-z0-9-]+$/ erlaubt ausschließlich kleine ASCII-Buchstaben, Zahlen und Bindestriche, mindestens ein Zeichen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m18-08",
      "title": "Viele DOM-Elemente bündeln",
      "explanation": "Ein DocumentFragment ist ein unsichtbarer Container; append überträgt seine Kinder in den Baum.",
      "task": "Schreibe liste(werte), das #output mit einem ul und sicheren li-Einträgen ersetzt; baue zuerst ein Fragment.",
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
        "Ein DocumentFragment ist ein unsichtbarer Container; append überträgt seine Kinder in den Baum.",
        "Orientiere dich an diesem Baustein:\nfunction liste(werte) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe liste(werte), das #output mit einem ul und sicheren li-Einträgen ersetzt; baue zuerst ein Fragment.",
          "code": "typeof liste==='function' && (liste(['A','B']),document.querySelectorAll('#output ul li').length===2)"
        }
      ],
      "prerequisites": [
        "m18-07"
      ],
      "solutionNotes": "Ein DocumentFragment ist ein unsichtbarer Container; append überträgt seine Kinder in den Baum. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Error kann mit {cause} den ursprünglichen Fehler erhalten. Das erleichtert Diagnose ohne Details im UI zu verlieren.",
        "Orientiere dich an diesem Baustein:\nfunction parse(text) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein Error kann mit {cause} den ursprünglichen Fehler erhalten. Das erleichtert Diagnose ohne Details im UI zu verlieren. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Syntax und Datenform sind verschiedene Verträge. Weise beides kontrolliert zurück.",
        "Orientiere dich an diesem Baustein:\nfunction importProfile(text) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Syntax und Datenform sind verschiedene Verträge. Weise beides kontrolliert zurück. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
