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
        "Trifft dein Selektor die richtige Elementart und änderst du wirklich die Textfarbe?",
        "Vor der geschweiften Klammer steht der Selektor: Er bestimmt, welche Elemente betroffen sind. In den Klammern folgen Eigenschaft, Doppelpunkt, Wert und Semikolon. Die Textfarbe ändert nicht den Hintergrund.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": "p { color: navy; }",
        "explanation": "Vor der geschweiften Klammer steht der Selektor: Er bestimmt, welche Elemente betroffen sind. In den Klammern folgen Eigenschaft, Doppelpunkt, Wert und Semikolon. Die Textfarbe ändert nicht den Hintergrund.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Vor der geschweiften Klammer steht der Selektor: Er bestimmt, welche Elemente betroffen sind. In den Klammern folgen Eigenschaft, Doppelpunkt, Wert und Semikolon. Die Textfarbe ändert nicht den Hintergrund. color setzt die Textfarbe. Ein benannter Farbwert ist ein guter Anfang. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du die vorhandene Klasse mit einem Klassen-Selektor angesprochen?",
        "Der Punkt im CSS bezeichnet eine Klasse aus dem HTML. Schreibe den Punkt nur im Selektor, nicht als Teil des Klassennamens im HTML. Der Hintergrund füllt die Box des Elements.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".notice { background-color: beige; }",
        "explanation": "Der Punkt im CSS bezeichnet eine Klasse aus dem HTML. Schreibe den Punkt nur im Selektor, nicht als Teil des Klassennamens im HTML. Der Hintergrund füllt die Box des Elements.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Der Punkt im CSS bezeichnet eine Klasse aus dem HTML. Schreibe den Punkt nur im Selektor, nicht als Teil des Klassennamens im HTML. Der Hintergrund füllt die Box des Elements. background-color setzt die Hintergrundfarbe. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du die beiden Eigenschaften den jeweils geforderten Elementen zugeordnet?",
        "Eine Schriftgröße braucht eine Einheit. Eine einheitenlose Zeilenhöhe ist ein Faktor: Der Browser multipliziert ihn mit der jeweiligen Schriftgröße. Schriftgröße und Zeilenabstand lösen unterschiedliche Aufgaben.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": "p { font-size: 18px; line-height: 1.6; }",
        "explanation": "Eine Schriftgröße braucht eine Einheit. Eine einheitenlose Zeilenhöhe ist ein Faktor: Der Browser multipliziert ihn mit der jeweiligen Schriftgröße. Schriftgröße und Zeilenabstand lösen unterschiedliche Aufgaben.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Schriftgröße braucht eine Einheit. Eine einheitenlose Zeilenhöhe ist ein Faktor: Der Browser multipliziert ihn mit der jeweiligen Schriftgröße. Schriftgröße und Zeilenabstand lösen unterschiedliche Aufgaben. font-size legt die Schriftgröße fest. line-height kann ein Faktor ohne Einheit sein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Brauchst du Abstand innerhalb der Box oder Abstand zwischen zwei Boxen?",
        "Padding liegt zwischen Inhalt und Rand. Ein einzelner Wert wirkt an allen vier Seiten. Mehr Platz innerhalb eines Elements entsteht nicht durch zusätzliche Leerzeichen im HTML.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".notice { padding: 18px; }",
        "explanation": "Padding liegt zwischen Inhalt und Rand. Ein einzelner Wert wirkt an allen vier Seiten. Mehr Platz innerhalb eines Elements entsteht nicht durch zusätzliche Leerzeichen im HTML.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Padding liegt zwischen Inhalt und Rand. Ein einzelner Wert wirkt an allen vier Seiten. Mehr Platz innerhalb eines Elements entsteht nicht durch zusätzliche Leerzeichen im HTML. padding schafft Raum innerhalb der Box. Die Kurzschreibweise mit einem Wert gilt für alle Seiten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist der Abstand an der unteren Außenseite des richtigen Elements gesetzt?",
        "Margin liegt außerhalb des Randes. Eine gerichtete Eigenschaft wie margin-bottom betrifft nur diese Seite. Der Absatzinhalt bleibt unverändert.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": "p { margin-bottom: 18px; }",
        "explanation": "Margin liegt außerhalb des Randes. Eine gerichtete Eigenschaft wie margin-bottom betrifft nur diese Seite. Der Absatzinhalt bleibt unverändert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Margin liegt außerhalb des Randes. Eine gerichtete Eigenschaft wie margin-bottom betrifft nur diese Seite. Der Absatzinhalt bleibt unverändert. margin trennt eine Box von ihrer Umgebung. margin-bottom wirkt nach unten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du Breite, Randstil und Rundung jeweils berücksichtigt?",
        "Ein sichtbarer Rand benötigt neben seiner Breite auch einen Stil. Die Rundung ist eine separate Eigenschaft. Ein border-radius allein erzeugt noch keinen sichtbaren Rand.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".notice { border: 1px dashed gray; border-radius: 8px; }",
        "explanation": "Ein sichtbarer Rand benötigt neben seiner Breite auch einen Stil. Die Rundung ist eine separate Eigenschaft. Ein border-radius allein erzeugt noch keinen sichtbaren Rand.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein sichtbarer Rand benötigt neben seiner Breite auch einen Stil. Die Rundung ist eine separate Eigenschaft. Ein border-radius allein erzeugt noch keinen sichtbaren Rand. border kombiniert Breite, Stil und Farbe. border-radius rundet Ecken. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Welche Teile sollen in der angegebenen Gesamtbreite enthalten sein?",
        "Im Standard-Boxmodell kommen Innenabstand und Rand zur Inhaltsbreite hinzu. Bei border-box werden sie von der festgelegten Gesamtbreite abgezogen. Das macht eine deklarierte Breite besser vorhersagbar.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".notice { width: 240px; padding: 12px; box-sizing: border-box; }",
        "explanation": "Im Standard-Boxmodell kommen Innenabstand und Rand zur Inhaltsbreite hinzu. Bei border-box werden sie von der festgelegten Gesamtbreite abgezogen. Das macht eine deklarierte Breite besser vorhersagbar.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Im Standard-Boxmodell kommen Innenabstand und Rand zur Inhaltsbreite hinzu. Bei border-box werden sie von der festgelegten Gesamtbreite abgezogen. Das macht eine deklarierte Breite besser vorhersagbar. border-box schließt den Innenabstand in die Breite ein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist die Variable am passenden Geltungsbereich definiert und wird sie tatsächlich verwendet?",
        "Eine Custom Property speichert einen CSS-Wert unter einem Namen. var liest diesen Wert dort, wo eine Eigenschaft ihn benötigt. Deklarieren und Benutzen sind zwei getrennte Schritte.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ":root { --ink: navy; } p { color: var(--ink); }",
        "explanation": "Eine Custom Property speichert einen CSS-Wert unter einem Namen. var liest diesen Wert dort, wo eine Eigenschaft ihn benötigt. Deklarieren und Benutzen sind zwei getrennte Schritte.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Custom Property speichert einen CSS-Wert unter einem Namen. var liest diesen Wert dort, wo eine Eigenschaft ihn benötigt. Deklarieren und Benutzen sind zwei getrennte Schritte. Custom Properties beginnen mit -- und werden über var() gelesen. :root ist das Wurzelelement. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Steht deine Regel am Fokuszustand des Buttons und besitzt die Kontur auch einen Stil?",
        "Eine Pseudoklasse ergänzt den Selektor um einen Zustand. Der Fokus-Ring wird bei Tastaturbedienung sichtbar und darf nicht nur über eine Hintergrundfarbe angedeutet werden. Teste ihn selbst mit Tab.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": "a:focus-visible { outline: 2px solid blue; }",
        "explanation": "Eine Pseudoklasse ergänzt den Selektor um einen Zustand. Der Fokus-Ring wird bei Tastaturbedienung sichtbar und darf nicht nur über eine Hintergrundfarbe angedeutet werden. Teste ihn selbst mit Tab.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Pseudoklasse ergänzt den Selektor um einen Zustand. Der Fokus-Ring wird bei Tastaturbedienung sichtbar und darf nicht nur über eine Hintergrundfarbe angedeutet werden. Teste ihn selbst mit Tab. :focus-visible trifft typischerweise Tastaturfokus. outline nimmt keinen Platz im Layout ein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Welche geforderten Werte werden eventuell von einer späteren Regel überschrieben?",
        "Ein Kartenstil kombiniert mehrere unabhängige Eigenschaften. Prüfe jede einzeln und erst danach den Gesamteindruck. Mehrere Regeln für denselben Selektor sind möglich; spätere Werte können frühere überschreiben.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".notice { background: white; padding: 18px; border-radius: 8px; }",
        "explanation": "Ein Kartenstil kombiniert mehrere unabhängige Eigenschaften. Prüfe jede einzeln und erst danach den Gesamteindruck. Mehrere Regeln für denselben Selektor sind möglich; spätere Werte können frühere überschreiben.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Kartenstil kombiniert mehrere unabhängige Eigenschaften. Prüfe jede einzeln und erst danach den Gesamteindruck. Mehrere Regeln für denselben Selektor sind möglich; spätere Werte können frühere überschreiben. Kombiniere Hintergrund, Raum und Typografie zu einer wiederverwendbaren Karte. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
