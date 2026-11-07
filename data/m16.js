window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m16",
  "title": "Komponenten und Browser-APIs",
  "city": "Frankfurt",
  "tag": "components",
  "level": 4,
  "description": "Wiederverwendbare Oberflächen ohne Framework.",
  "lesson": "Eine Komponente bündelt DOM und Verhalten. Funktionen können Elemente zurückgeben. Custom Elements registrierst du mit customElements.define(\"reise-karte\",Klasse); der Name braucht einen Bindestrich. class X extends HTMLElement erbt Elementverhalten. connectedCallback läuft beim Einfügen, disconnectedCallback beim Entfernen. attachShadow({mode:\"open\"}) erzeugt einen abgeschirmten Teilbaum. Klassenmethoden verwenden this. Intl formatiert Daten passend zur Sprache, URL verarbeitet Adressen, URLSearchParams Querywerte. Externe Navigation und Netzwerke bleiben in der Vorschau gesperrt.",
  "exercises": [
    {
      "id": "m16-01",
      "title": "Eine Kartenfabrik",
      "explanation": "Eine DOM-Fabrik erzeugt bei jedem Aufruf ein frisches Element.",
      "task": "Schreibe karte(titel), die einen article mit h2 und dem Titel zurückgibt.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Kartenfabrik: Eine DOM-Fabrik erzeugt bei jedem Aufruf ein frisches Element. */\nfunction karte(titel) {\n  const article = document.createElement(\"article\");\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = titel; article.append(h2); return article;\n}\ndocument.querySelector(\"#output\").append(karte(\"Frankfurt\"));"
      },
      "hints": [
        "Eine DOM-Fabrik erzeugt bei jedem Aufruf ein frisches Element.",
        "Orientiere dich an diesem Baustein:\nfunction karte(titel) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").append(karte(\"Frankfurt\"));"
      ],
      "tests": [
        {
          "label": "Schreibe karte(titel), die einen article mit h2 und dem Titel zurückgibt.",
          "code": "typeof karte==='function' && karte('Ada').querySelector('h2').textContent==='Ada' && karte('A')!==karte('A')"
        }
      ],
      "prerequisites": [
        "m15-10"
      ],
      "solutionNotes": "Eine DOM-Fabrik erzeugt bei jedem Aufruf ein frisches Element. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-02",
      "title": "Eine eigene Elementklasse",
      "explanation": "extends HTMLElement erweitert ein natives Element. Registrieren erfolgt einmal pro Dokument.",
      "task": "Registriere reise-gruss mit einer Klasse, die in connectedCallback Hallo setzt.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine eigene Elementklasse: extends HTMLElement erweitert ein natives Element. Registrieren erfolgt einmal pro Dokument. */\nclass ReiseGruss extends HTMLElement {\n  connectedCallback() { this.textContent = \"Hallo\"; }\n}\ncustomElements.define(\"reise-gruss\", ReiseGruss);\ndocument.querySelector(\"#output\").append(document.createElement(\"reise-gruss\"));"
      },
      "hints": [
        "extends HTMLElement erweitert ein natives Element. Registrieren erfolgt einmal pro Dokument.",
        "Orientiere dich an diesem Baustein:\nclass ReiseGruss extends HTMLElement {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").append(document.createElement(\"reise-gruss\"));"
      ],
      "tests": [
        {
          "label": "Registriere reise-gruss mit einer Klasse, die in connectedCallback Hallo setzt.",
          "code": "!!customElements.get('reise-gruss') && (()=>{const x=document.createElement('reise-gruss');document.body.append(x);return x.textContent==='Hallo'})()"
        }
      ],
      "prerequisites": [
        "m16-01"
      ],
      "solutionNotes": "extends HTMLElement erweitert ein natives Element. Registrieren erfolgt einmal pro Dokument. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-03",
      "title": "Attribute als Eingabe",
      "explanation": "getAttribute liest Konfiguration am Element. connectedCallback sieht bereits gesetzte Attribute.",
      "task": "Registriere stadt-karte: Text ist das Attribut name oder Unbekannt.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Attribute als Eingabe: getAttribute liest Konfiguration am Element. connectedCallback sieht bereits gesetzte Attribute. */\nclass StadtKarte extends HTMLElement {\n  connectedCallback() { this.textContent = this.getAttribute(\"name\") ?? \"Unbekannt\"; }\n}\ncustomElements.define(\"stadt-karte\", StadtKarte);"
      },
      "hints": [
        "getAttribute liest Konfiguration am Element. connectedCallback sieht bereits gesetzte Attribute.",
        "Orientiere dich an diesem Baustein:\nclass StadtKarte extends HTMLElement {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ncustomElements.define(\"stadt-karte\", StadtKarte);"
      ],
      "tests": [
        {
          "label": "Registriere stadt-karte: Text ist das Attribut name oder Unbekannt.",
          "code": "!!customElements.get('stadt-karte') && (()=>{const x=document.createElement('stadt-karte');x.setAttribute('name','Mainz');document.body.append(x);return x.textContent==='Mainz'})()"
        }
      ],
      "prerequisites": [
        "m16-02"
      ],
      "solutionNotes": "getAttribute liest Konfiguration am Element. connectedCallback sieht bereits gesetzte Attribute. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-04",
      "title": "Ein eigener kleiner DOM",
      "explanation": "shadowRoot ist bei mode:open zugänglich. Eltern-CSS greift nicht direkt in den Shadow-Teilbaum.",
      "task": "Registriere web-badge mit offenem Shadow DOM, darin ein span mit Text WEB.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein eigener kleiner DOM: shadowRoot ist bei mode:open zugänglich. Eltern-CSS greift nicht direkt in den Shadow-Teilbaum. */\nclass WebBadge extends HTMLElement {\n  connectedCallback() {\n    if (this.shadowRoot) return;\n    const root = this.attachShadow({ mode: \"open\" });\n    const span = document.createElement(\"span\"); span.textContent = \"WEB\"; root.append(span);\n  }\n}\ncustomElements.define(\"web-badge\", WebBadge);\ndocument.querySelector(\"#output\").append(document.createElement(\"web-badge\"));"
      },
      "hints": [
        "shadowRoot ist bei mode:open zugänglich. Eltern-CSS greift nicht direkt in den Shadow-Teilbaum.",
        "Orientiere dich an diesem Baustein:\nclass WebBadge extends HTMLElement {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").append(document.createElement(\"web-badge\"));"
      ],
      "tests": [
        {
          "label": "Registriere web-badge mit offenem Shadow DOM, darin ein span mit Text WEB.",
          "code": "!!customElements.get('web-badge') && (()=>{const x=document.createElement('web-badge');document.body.append(x);return x.shadowRoot?.querySelector('span')?.textContent==='WEB'})()"
        }
      ],
      "prerequisites": [
        "m16-03"
      ],
      "solutionNotes": "shadowRoot ist bei mode:open zugänglich. Eltern-CSS greift nicht direkt in den Shadow-Teilbaum. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-05",
      "title": "Eigene Ereignisse",
      "explanation": "CustomEvent transportiert Daten in detail. dispatchEvent sendet es am Element ab.",
      "task": "Schreibe melden(element,punkte), das ein CustomEvent belohnung mit detail:{punkte} auslöst.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eigene Ereignisse: CustomEvent transportiert Daten in detail. dispatchEvent sendet es am Element ab. */\nfunction melden(element, punkte) { element.dispatchEvent(new CustomEvent(\"belohnung\", { detail: { punkte } })); }"
      },
      "hints": [
        "CustomEvent transportiert Daten in detail. dispatchEvent sendet es am Element ab.",
        "Orientiere dich an diesem Baustein:\nfunction melden(element, punkte) { element.dispatchEvent(new CustomEvent(\"belohnung\", { detail: { punkte } })); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction melden(element, punkte) { element.dispatchEvent(new CustomEvent(\"belohnung\", { detail: { punkte } })); }"
      ],
      "tests": [
        {
          "label": "Schreibe melden(element,punkte), das ein CustomEvent belohnung mit detail:{punkte} auslöst.",
          "code": "typeof melden==='function' && (()=>{let wert;const e=document.createElement('div');e.addEventListener('belohnung',x=>wert=x.detail.punkte);melden(e,12);return wert===12})()"
        }
      ],
      "prerequisites": [
        "m16-04"
      ],
      "solutionNotes": "CustomEvent transportiert Daten in detail. dispatchEvent sendet es am Element ab. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-06",
      "title": "Preise richtig formatieren",
      "explanation": "Intl.NumberFormat berücksichtigt Dezimaltrennzeichen und Währungsdarstellung.",
      "task": "Schreibe euro(wert) mit Intl.NumberFormat für de-DE und EUR.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Preise richtig formatieren: Intl.NumberFormat berücksichtigt Dezimaltrennzeichen und Währungsdarstellung. */\nfunction euro(wert) { return new Intl.NumberFormat(\"de-DE\", { style: \"currency\", currency: \"EUR\" }).format(wert); }\ndocument.querySelector(\"#output\").textContent = euro(12.5);"
      },
      "hints": [
        "Intl.NumberFormat berücksichtigt Dezimaltrennzeichen und Währungsdarstellung.",
        "Orientiere dich an diesem Baustein:\nfunction euro(wert) { return new Intl.NumberFormat(\"de-DE\", { style: \"currency\", currency: \"EUR\" }).format(wert); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = euro(12.5);"
      ],
      "tests": [
        {
          "label": "Schreibe euro(wert) mit Intl.NumberFormat für de-DE und EUR.",
          "code": "typeof euro==='function' && euro(12.5).replace(/\\s/g,'')==='12,50€'"
        }
      ],
      "prerequisites": [
        "m16-05"
      ],
      "solutionNotes": "Intl.NumberFormat berücksichtigt Dezimaltrennzeichen und Währungsdarstellung. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-07",
      "title": "Adressen zerlegen",
      "explanation": "new URL verarbeitet eine vollständige URL. searchParams.get liest einen Querywert.",
      "task": "Schreibe thema(url), das den Queryparameter thema oder start liefert.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Adressen zerlegen: new URL verarbeitet eine vollständige URL. searchParams.get liest einen Querywert. */\nfunction thema(url) { return new URL(url).searchParams.get(\"thema\") ?? \"start\"; }"
      },
      "hints": [
        "new URL verarbeitet eine vollständige URL. searchParams.get liest einen Querywert.",
        "Orientiere dich an diesem Baustein:\nfunction thema(url) { return new URL(url).searchParams.get(\"thema\") ?? \"start\"; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction thema(url) { return new URL(url).searchParams.get(\"thema\") ?? \"start\"; }"
      ],
      "tests": [
        {
          "label": "Parameter",
          "code": "typeof thema==='function' && thema('https://example.org/?thema=css')==='css'"
        },
        {
          "label": "Standard",
          "code": "thema('https://example.org/')==='start'"
        }
      ],
      "prerequisites": [
        "m16-06"
      ],
      "solutionNotes": "new URL verarbeitet eine vollständige URL. searchParams.get liest einen Querywert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-08",
      "title": "Querywerte sicher erzeugen",
      "explanation": "URLSearchParams kodiert Sonderzeichen automatisch; manuelles Zusammenkleben ist fehleranfällig.",
      "task": "Schreibe query(name), das den Querytext für {name} zurückgibt.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Querywerte sicher erzeugen: URLSearchParams kodiert Sonderzeichen automatisch; manuelles Zusammenkleben ist fehleranfällig. */\nfunction query(name) { return new URLSearchParams({ name }).toString(); }"
      },
      "hints": [
        "URLSearchParams kodiert Sonderzeichen automatisch; manuelles Zusammenkleben ist fehleranfällig.",
        "Orientiere dich an diesem Baustein:\nfunction query(name) { return new URLSearchParams({ name }).toString(); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction query(name) { return new URLSearchParams({ name }).toString(); }"
      ],
      "tests": [
        {
          "label": "Schreibe query(name), das den Querytext für {name} zurückgibt.",
          "code": "typeof query==='function' && new URLSearchParams(query('Ada & Lin')).get('name')==='Ada & Lin'"
        }
      ],
      "prerequisites": [
        "m16-07"
      ],
      "solutionNotes": "URLSearchParams kodiert Sonderzeichen automatisch; manuelles Zusammenkleben ist fehleranfällig. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-09",
      "title": "Eine Ressource wieder freigeben",
      "explanation": "Listener lassen sich mit AbortSignal registrieren und gemeinsam entfernen.",
      "task": "Schreibe verbinde(button,handler): registriere click mit Signal und gib eine Funktion zum Abbrechen zurück.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Ressource wieder freigeben: Listener lassen sich mit AbortSignal registrieren und gemeinsam entfernen. */\nfunction verbinde(button, handler) {\n  const controller = new AbortController();\n  button.addEventListener(\"click\", handler, { signal: controller.signal });\n  return () => controller.abort();\n}"
      },
      "hints": [
        "Listener lassen sich mit AbortSignal registrieren und gemeinsam entfernen.",
        "Orientiere dich an diesem Baustein:\nfunction verbinde(button, handler) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe verbinde(button,handler): registriere click mit Signal und gib eine Funktion zum Abbrechen zurück.",
          "code": "typeof verbinde==='function' && (()=>{const b=document.createElement('button');let n=0;const stop=verbinde(b,()=>n++);b.click();stop();b.click();return n===1})()"
        }
      ],
      "prerequisites": [
        "m16-08"
      ],
      "solutionNotes": "Listener lassen sich mit AbortSignal registrieren und gemeinsam entfernen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m16-10",
      "title": "Projekt: Eine Profilkomponente",
      "explanation": "Kombiniere Attribute, Lifecycle und sicheren DOM-Aufbau.",
      "task": "Registriere lern-profil: article mit h2 aus Attribut name (Default Gast) und p mit Bereit zum Lernen.",
      "minutes": 20,
      "xp": 95,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Eine Profilkomponente: Kombiniere Attribute, Lifecycle und sicheren DOM-Aufbau. */\nclass LernProfil extends HTMLElement {\n  connectedCallback() {\n    const article = document.createElement(\"article\");\n    const title = document.createElement(\"h2\"); title.textContent = this.getAttribute(\"name\") ?? \"Gast\";\n    const text = document.createElement(\"p\"); text.textContent = \"Bereit zum Lernen\";\n    article.append(title, text); this.replaceChildren(article);\n  }\n}\ncustomElements.define(\"lern-profil\", LernProfil);\ndocument.querySelector(\"#output\").append(document.createElement(\"lern-profil\"));"
      },
      "hints": [
        "Kombiniere Attribute, Lifecycle und sicheren DOM-Aufbau.",
        "Orientiere dich an diesem Baustein:\nclass LernProfil extends HTMLElement {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").append(document.createElement(\"lern-profil\"));"
      ],
      "tests": [
        {
          "label": "Registriere lern-profil: article mit h2 aus Attribut name (Default Gast) und p mit Bereit zum Lernen.",
          "code": "!!customElements.get('lern-profil') && (()=>{const x=document.createElement('lern-profil');x.setAttribute('name','Ada');document.body.append(x);return x.querySelector('article h2')?.textContent==='Ada' && x.querySelector('p')?.textContent==='Bereit zum Lernen'})()"
        }
      ],
      "prerequisites": [
        "m16-09"
      ],
      "solutionNotes": "Kombiniere Attribute, Lifecycle und sicheren DOM-Aufbau. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
