window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m03",
  "title": "CSS: Dein Designsystem",
  "city": "Hamburg",
  "tag": "style",
  "level": 1,
  "description": "Farben, Schrift, Abstände und die Box hinter jedem Element.",
  "lesson": "CSS-Regeln bestehen aus Selektor und Deklarationen: h1 { color: seagreen; }. Klassen beginnen im Selektor mit einem Punkt. Das Boxmodell besteht aus Inhalt, padding, border und margin. Mit box-sizing: border-box zählen padding und border zur angegebenen Breite. Die Funktion getComputedStyle in unseren Prüfungen liest den tatsächlich berechneten Stil. Farben können dabei als rgb erscheinen.",
  "exercises": [
    {
      "id": "m03-01",
      "title": "Farbe bekennen",
      "explanation": "color setzt die Textfarbe. Ein benannter Farbwert ist ein guter Anfang.",
      "task": "Färbe h1 mit seagreen.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Farbe bekennen: color setzt die Textfarbe. Ein benannter Farbwert ist ein guter Anfang. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nh1 { color: seagreen; }",
        "js": ""
      },
      "hints": [
        "color setzt die Textfarbe. Ein benannter Farbwert ist ein guter Anfang.",
        "Orientiere dich an diesem Baustein:\nh1 { color: seagreen; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nh1 { color: seagreen; }"
      ],
      "tests": [
        {
          "label": "Färbe h1 mit seagreen.",
          "code": "getComputedStyle(document.querySelector('h1')).color==='rgb(46, 139, 87)'"
        }
      ],
      "prerequisites": [
        "m02-10"
      ],
      "solutionNotes": "color setzt die Textfarbe. Ein benannter Farbwert ist ein guter Anfang. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-02",
      "title": "Eine ruhige Fläche",
      "explanation": "background-color setzt die Hintergrundfarbe.",
      "task": "Gib .card den Hintergrund white.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Eine ruhige Fläche: background-color setzt die Hintergrundfarbe. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { background-color: white; }",
        "js": ""
      },
      "hints": [
        "background-color setzt die Hintergrundfarbe.",
        "Orientiere dich an diesem Baustein:\n.card { background-color: white; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.card { background-color: white; }"
      ],
      "tests": [
        {
          "label": "Gib .card den Hintergrund white.",
          "code": "getComputedStyle(document.querySelector('.card')).backgroundColor==='rgb(255, 255, 255)'"
        }
      ],
      "prerequisites": [
        "m03-01"
      ],
      "solutionNotes": "background-color setzt die Hintergrundfarbe. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-03",
      "title": "Typografie mit Haltung",
      "explanation": "font-size legt die Schriftgröße fest. line-height kann ein Faktor ohne Einheit sein.",
      "task": "Setze h1 auf 32px und p auf line-height: 1.5.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Typografie mit Haltung: font-size legt die Schriftgröße fest. line-height kann ein Faktor ohne Einheit sein. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nh1 { font-size: 32px; }\np { line-height: 1.5; }",
        "js": ""
      },
      "hints": [
        "font-size legt die Schriftgröße fest. line-height kann ein Faktor ohne Einheit sein.",
        "Orientiere dich an diesem Baustein:\nh1 { font-size: 32px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\np { line-height: 1.5; }"
      ],
      "tests": [
        {
          "label": "Setze h1 auf 32px und p auf line-height: 1.5.",
          "code": "getComputedStyle(document.querySelector('h1')).fontSize==='32px' && parseFloat(getComputedStyle(document.querySelector('p')).lineHeight)===parseFloat(getComputedStyle(document.querySelector('p')).fontSize)*1.5"
        }
      ],
      "prerequisites": [
        "m03-02"
      ],
      "solutionNotes": "font-size legt die Schriftgröße fest. line-height kann ein Faktor ohne Einheit sein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-04",
      "title": "Luft nach innen",
      "explanation": "padding schafft Raum innerhalb der Box. Die Kurzschreibweise mit einem Wert gilt für alle Seiten.",
      "task": "Setze padding der .card auf 24px.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Luft nach innen: padding schafft Raum innerhalb der Box. Die Kurzschreibweise mit einem Wert gilt für alle Seiten. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { padding: 24px; }",
        "js": ""
      },
      "hints": [
        "padding schafft Raum innerhalb der Box. Die Kurzschreibweise mit einem Wert gilt für alle Seiten.",
        "Orientiere dich an diesem Baustein:\n.card { padding: 24px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.card { padding: 24px; }"
      ],
      "tests": [
        {
          "label": "Setze padding der .card auf 24px.",
          "code": "getComputedStyle(document.querySelector('.card')).paddingTop==='24px' && getComputedStyle(document.querySelector('.card')).paddingLeft==='24px'"
        }
      ],
      "prerequisites": [
        "m03-03"
      ],
      "solutionNotes": "padding schafft Raum innerhalb der Box. Die Kurzschreibweise mit einem Wert gilt für alle Seiten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-05",
      "title": "Abstand nach außen",
      "explanation": "margin trennt eine Box von ihrer Umgebung. margin-bottom wirkt nach unten.",
      "task": "Gib dem Absatz 24px margin-bottom.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Abstand nach außen: margin trennt eine Box von ihrer Umgebung. margin-bottom wirkt nach unten. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\np { margin-bottom: 24px; }",
        "js": ""
      },
      "hints": [
        "margin trennt eine Box von ihrer Umgebung. margin-bottom wirkt nach unten.",
        "Orientiere dich an diesem Baustein:\np { margin-bottom: 24px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\np { margin-bottom: 24px; }"
      ],
      "tests": [
        {
          "label": "Gib dem Absatz 24px margin-bottom.",
          "code": "getComputedStyle(document.querySelector('p')).marginBottom==='24px'"
        }
      ],
      "prerequisites": [
        "m03-04"
      ],
      "solutionNotes": "margin trennt eine Box von ihrer Umgebung. margin-bottom wirkt nach unten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-06",
      "title": "Eine klare Kante",
      "explanation": "border kombiniert Breite, Stil und Farbe. border-radius rundet Ecken.",
      "task": "Gib .box einen 2px solid Rand und 12px Rundung.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Eine klare Kante: border kombiniert Breite, Stil und Farbe. border-radius rundet Ecken. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.box { border: 2px solid seagreen; border-radius: 12px; }",
        "js": ""
      },
      "hints": [
        "border kombiniert Breite, Stil und Farbe. border-radius rundet Ecken.",
        "Orientiere dich an diesem Baustein:\n.box { border: 2px solid seagreen; border-radius: 12px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.box { border: 2px solid seagreen; border-radius: 12px; }"
      ],
      "tests": [
        {
          "label": "Gib .box einen 2px solid Rand und 12px Rundung.",
          "code": "getComputedStyle(document.querySelector('.box')).borderTopWidth==='2px' && getComputedStyle(document.querySelector('.box')).borderTopStyle==='solid' && getComputedStyle(document.querySelector('.box')).borderRadius==='12px'"
        }
      ],
      "prerequisites": [
        "m03-05"
      ],
      "solutionNotes": "border kombiniert Breite, Stil und Farbe. border-radius rundet Ecken. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-07",
      "title": "Berechenbare Breiten",
      "explanation": "border-box schließt den Innenabstand in die Breite ein.",
      "task": "Gib .box width: 200px, padding: 20px und box-sizing: border-box.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Berechenbare Breiten: border-box schließt den Innenabstand in die Breite ein. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.box { box-sizing: border-box; width: 200px; padding: 20px; }",
        "js": ""
      },
      "hints": [
        "border-box schließt den Innenabstand in die Breite ein.",
        "Orientiere dich an diesem Baustein:\n.box { box-sizing: border-box; width: 200px; padding: 20px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.box { box-sizing: border-box; width: 200px; padding: 20px; }"
      ],
      "tests": [
        {
          "label": "Gib .box width: 200px, padding: 20px und box-sizing: border-box.",
          "code": "getComputedStyle(document.querySelector('.box')).boxSizing==='border-box' && Math.round(document.querySelector('.box').getBoundingClientRect().width)===200 && getComputedStyle(document.querySelector('.box')).paddingLeft==='20px'"
        }
      ],
      "prerequisites": [
        "m03-06"
      ],
      "solutionNotes": "border-box schließt den Innenabstand in die Breite ein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-08",
      "title": "Deine erste Variable",
      "explanation": "Custom Properties beginnen mit -- und werden über var() gelesen. :root ist das Wurzelelement.",
      "task": "Definiere --accent als #245c45 und nutze es als Hintergrund des Buttons.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Deine erste Variable: Custom Properties beginnen mit -- und werden über var() gelesen. :root ist das Wurzelelement. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n:root { --accent: #245c45; }\nbutton { background: var(--accent); color: white; }",
        "js": ""
      },
      "hints": [
        "Custom Properties beginnen mit -- und werden über var() gelesen. :root ist das Wurzelelement.",
        "Orientiere dich an diesem Baustein:\n:root { --accent: #245c45; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nbutton { background: var(--accent); color: white; }"
      ],
      "tests": [
        {
          "label": "Definiere --accent als #245c45 und nutze es als Hintergrund des Buttons.",
          "code": "getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()==='#245c45' && getComputedStyle(document.querySelector('button')).backgroundColor==='rgb(36, 92, 69)'"
        }
      ],
      "prerequisites": [
        "m03-07"
      ],
      "solutionNotes": "Custom Properties beginnen mit -- und werden über var() gelesen. :root ist das Wurzelelement. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-09",
      "title": "Fokus sichtbar machen",
      "explanation": ":focus-visible trifft typischerweise Tastaturfokus. outline nimmt keinen Platz im Layout ein.",
      "task": "Definiere button:focus-visible mit 3px solid orange outline.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Fokus sichtbar machen: :focus-visible trifft typischerweise Tastaturfokus. outline nimmt keinen Platz im Layout ein. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nbutton:focus-visible { outline: 3px solid orange; outline-offset: 3px; }",
        "js": ""
      },
      "hints": [
        ":focus-visible trifft typischerweise Tastaturfokus. outline nimmt keinen Platz im Layout ein.",
        "Orientiere dich an diesem Baustein:\nbutton:focus-visible { outline: 3px solid orange; outline-offset: 3px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nbutton:focus-visible { outline: 3px solid orange; outline-offset: 3px; }"
      ],
      "tests": [
        {
          "label": "Definiere button:focus-visible mit 3px solid orange outline.",
          "code": "[...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.selectorText==='button:focus-visible' && r.style.outlineWidth==='3px' && r.style.outlineStyle==='solid' && r.style.outlineColor==='orange'))"
        }
      ],
      "prerequisites": [
        "m03-08"
      ],
      "solutionNotes": ":focus-visible trifft typischerweise Tastaturfokus. outline nimmt keinen Platz im Layout ein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m03-10",
      "title": "Projekt: Eine Einladungskarte",
      "explanation": "Kombiniere Hintergrund, Raum und Typografie zu einer wiederverwendbaren Karte.",
      "task": "Gestalte .card weiß mit 24px padding und 16px Rundung, h1 mit 32px.",
      "minutes": 10,
      "xp": 30,
      "focus": "css",
      "starter": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"card\"><h1>Deine nächste Idee.</h1><p>Ein kleiner Schritt, jeden Tag.</p><button type=\"button\">Loslegen</button><div class=\"box\">Raum für Neues</div></main>",
        "css": "/* Projekt: Eine Einladungskarte: Kombiniere Hintergrund, Raum und Typografie zu einer wiederverwendbaren Karte. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { background: white; padding: 24px; border-radius: 16px; }\nh1 { font-size: 32px; }",
        "js": ""
      },
      "hints": [
        "Kombiniere Hintergrund, Raum und Typografie zu einer wiederverwendbaren Karte.",
        "Orientiere dich an diesem Baustein:\n.card { background: white; padding: 24px; border-radius: 16px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nh1 { font-size: 32px; }"
      ],
      "tests": [
        {
          "label": "Gestalte .card weiß mit 24px padding und 16px Rundung, h1 mit 32px.",
          "code": "getComputedStyle(document.querySelector('.card')).paddingTop==='24px' && getComputedStyle(document.querySelector('.card')).borderRadius==='16px' && getComputedStyle(document.querySelector('.card')).backgroundColor==='rgb(255, 255, 255)' && getComputedStyle(document.querySelector('h1')).fontSize==='32px'"
        }
      ],
      "prerequisites": [
        "m03-09"
      ],
      "solutionNotes": "Kombiniere Hintergrund, Raum und Typografie zu einer wiederverwendbaren Karte. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
