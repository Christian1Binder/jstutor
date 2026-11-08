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
        "Gibt jeder Aufruf ein neues Element mit dem richtigen inneren Aufbau zurück?",
        "Eine DOM-Fabrik erzeugt pro Aufruf ein neues Element. Der Aufrufer entscheidet selbst, wo es eingefügt wird.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "function absatz(text) { const p = document.createElement(\"p\"); p.textContent = text; return p; }",
        "explanation": "Eine DOM-Fabrik erzeugt pro Aufruf ein neues Element. Der Aufrufer entscheidet selbst, wo es eingefügt wird.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "karte. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine DOM-Fabrik erzeugt pro Aufruf ein neues Element. Der Aufrufer entscheidet selbst, wo es eingefügt wird. Eine DOM-Fabrik erzeugt bei jedem Aufruf ein frisches Element. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind Klasse, Registrierung und Verhalten beim Einfügen getrennt vorhanden?",
        "Eine Custom-Element-Klasse beschreibt das Verhalten. Erst ihre Registrierung unter einem Namen mit Bindestrich macht sie im Dokument benutzbar.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "class EigenerText extends HTMLElement { connectedCallback() { this.textContent = \"Bereit\"; } }",
        "explanation": "Eine Custom-Element-Klasse beschreibt das Verhalten. Erst ihre Registrierung unter einem Namen mit Bindestrich macht sie im Dokument benutzbar.",
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
      "solutionNotes": "Eine Custom-Element-Klasse beschreibt das Verhalten. Erst ihre Registrierung unter einem Namen mit Bindestrich macht sie im Dokument benutzbar. extends HTMLElement erweitert ein natives Element. Registrieren erfolgt einmal pro Dokument. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Funktioniert deine Komponente auch ohne das Attribut?",
        "Attribute sind Eingaben von außen. Ein Fallback ermöglicht eine sinnvolle Darstellung, wenn ein Attribut fehlt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const wert = element.getAttribute(\"titel\") ?? \"Ohne Titel\";",
        "explanation": "Attribute sind Eingaben von außen. Ein Fallback ermöglicht eine sinnvolle Darstellung, wenn ein Attribut fehlt.",
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
      "solutionNotes": "Attribute sind Eingaben von außen. Ein Fallback ermöglicht eine sinnvolle Darstellung, wenn ein Attribut fehlt. getAttribute liest Konfiguration am Element. connectedCallback sieht bereits gesetzte Attribute. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Vermeidest du ein erneutes Anlegen beim wiederholten Einfügen?",
        "Ein Shadow Root besitzt einen eigenen Elementbaum. Bei offenem Modus kann die Anwendung ihn über shadowRoot lesen. Mehrfaches Anlegen am selben Element ist nicht erlaubt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const root = element.attachShadow({ mode: \"open\" });",
        "explanation": "Ein Shadow Root besitzt einen eigenen Elementbaum. Bei offenem Modus kann die Anwendung ihn über shadowRoot lesen. Mehrfaches Anlegen am selben Element ist nicht erlaubt.",
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
      "solutionNotes": "Ein Shadow Root besitzt einen eigenen Elementbaum. Bei offenem Modus kann die Anwendung ihn über shadowRoot lesen. Mehrfaches Anlegen am selben Element ist nicht erlaubt. shadowRoot ist bei mode:open zugänglich. Eltern-CSS greift nicht direkt in den Shadow-Teilbaum. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Stimmen Ereignisname und Form der übermittelten Daten?",
        "Ein eigenes Ereignis transportiert Daten über detail. Empfangende Listener müssen denselben Ereignisnamen verwenden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "element.dispatchEvent(new CustomEvent(\"auswahl\", { detail: { id: 4 } }));",
        "explanation": "Ein eigenes Ereignis transportiert Daten über detail. Empfangende Listener müssen denselben Ereignisnamen verwenden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "melden. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein eigenes Ereignis transportiert Daten über detail. Empfangende Listener müssen denselben Ereignisnamen verwenden. CustomEvent transportiert Daten in detail. dispatchEvent sendet es am Element ab. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind Sprache und Währung explizit eingestellt?",
        "Eine Formatierungsinstanz beschreibt Sprache und Darstellungsart. Die Zahl bleibt davor ein numerischer Wert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "new Intl.NumberFormat(\"de-DE\", { style: \"currency\", currency: \"CHF\" }).format(8);",
        "explanation": "Eine Formatierungsinstanz beschreibt Sprache und Darstellungsart. Die Zahl bleibt davor ein numerischer Wert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "euro. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Formatierungsinstanz beschreibt Sprache und Darstellungsart. Die Zahl bleibt davor ein numerischer Wert. Intl.NumberFormat berücksichtigt Dezimaltrennzeichen und Währungsdarstellung. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Behandelst du einen fehlenden Queryparameter mit dem vereinbarten Ersatzwert?",
        "URL zerlegt eine Adresse nach festen Regeln. searchParams liest bereits dekodierte Parameterwerte. Ein fehlender Schlüssel liefert null.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const u = new URL(\"https://example.org/?farbe=rot\");",
        "explanation": "URL zerlegt eine Adresse nach festen Regeln. searchParams liest bereits dekodierte Parameterwerte. Ein fehlender Schlüssel liefert null.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "thema. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "thema('https://example.org/?thema=css')",
          "expected": "'css'",
          "context": "Parameter"
        },
        {
          "input": "thema('https://example.org/')",
          "expected": "'start'",
          "context": "Standard"
        }
      ],
      "solutionNotes": "URL zerlegt eine Adresse nach festen Regeln. searchParams liest bereits dekodierte Parameterwerte. Ein fehlender Schlüssel liefert null. new URL verarbeitet eine vollständige URL. searchParams.get liest einen Querywert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Bleiben Sonderzeichen beim anschließenden Lesen als Teil des Werts erhalten?",
        "Querywerte können reservierte Sonderzeichen enthalten. URLSearchParams übernimmt deren Kodierung und verhindert falsche zusätzliche Parameter.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "new URLSearchParams({ suche: \"Brot & Tee\" }).toString();",
        "explanation": "Querywerte können reservierte Sonderzeichen enthalten. URLSearchParams übernimmt deren Kodierung und verhindert falsche zusätzliche Parameter.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "query. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Querywerte können reservierte Sonderzeichen enthalten. URLSearchParams übernimmt deren Kodierung und verhindert falsche zusätzliche Parameter. URLSearchParams kodiert Sonderzeichen automatisch; manuelles Zusammenkleben ist fehleranfällig. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wird der Listener nach dem Aufruf der Stoppfunktion tatsächlich nicht mehr ausgeführt?",
        "Ein Signal kann Listener gemeinsam entfernen. Die Stoppfunktion muss den Controller des registrierten Listeners weiter erreichen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const c = new AbortController(); ziel.addEventListener(\"click\", handler, { signal: c.signal });",
        "explanation": "Ein Signal kann Listener gemeinsam entfernen. Die Stoppfunktion muss den Controller des registrierten Listeners weiter erreichen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "verbinde. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Signal kann Listener gemeinsam entfernen. Die Stoppfunktion muss den Controller des registrierten Listeners weiter erreichen. Listener lassen sich mit AbortSignal registrieren und gemeinsam entfernen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m16-10",
      "title": "Projekt: Eine Profilkomponente",
      "explanation": "Kombiniere Attribute, Lifecycle und sicheren DOM-Aufbau.",
      "task": "Registriere das Custom Element lern-profil. Beim Einfügen enthält es genau einen article mit h2 und p. h2 liest das Attribut name, fehlt es, lautet der Titel „Gast“. Der Absatz lautet „Bereit zum Lernen“. Verwende für Texte textContent. Füge ein Exemplar zum Ausprobieren ein.",
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
        "Stimmen Standardwert, verschachtelte Elemente und sichtbarer Text deiner Komponente?",
        "Eine Komponente kombiniert Lebenszyklus, Konfiguration und DOM-Aufbau. Erneutes Einfügen soll nicht versehentlich doppelte Inhalte erzeugen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Registriere das Custom Element lern-profil. Beim Einfügen enthält es genau einen article mit h2 und p. h2 liest das Attribut name, fehlt es, lautet der Titel „Gast“. Der Absatz lautet „Bereit zum Lernen“. Verwende für Texte textContent. Füge ein Exemplar zum Ausprobieren ein.",
          "code": "!!customElements.get('lern-profil') && (()=>{const x=document.createElement('lern-profil');x.setAttribute('name','Ada');document.body.append(x);return x.querySelector('article h2')?.textContent==='Ada' && x.querySelector('p')?.textContent==='Bereit zum Lernen'})()"
        }
      ],
      "prerequisites": [
        "m16-09"
      ],
      "concept": {
        "example": "const titel = document.createElement(\"h2\"); titel.textContent = \"Gartenprofil\";",
        "explanation": "Eine Komponente kombiniert Lebenszyklus, Konfiguration und DOM-Aufbau. Erneutes Einfügen soll nicht versehentlich doppelte Inhalte erzeugen.",
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
      "solutionNotes": "Eine Komponente kombiniert Lebenszyklus, Konfiguration und DOM-Aufbau. Erneutes Einfügen soll nicht versehentlich doppelte Inhalte erzeugen. Kombiniere Attribute, Lifecycle und sicheren DOM-Aufbau. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
