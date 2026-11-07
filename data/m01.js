window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m01",
  "title": "Hallo, Web!",
  "city": "Flensburg",
  "tag": "hello",
  "level": 1,
  "description": "Deine erste Seite. Vom leeren Blatt zur eigenen kleinen Webpräsenz.",
  "lesson": "HTML beschreibt die Bedeutung von Inhalten. Ein Element besteht meist aus öffnendem Tag, Inhalt und schließendem Tag: <p>Hallo</p>. Attribute stehen im öffnenden Tag. Der Browser ergänzt in dieser Werkstatt das Dokumentgerüst. HTML kommt ins HTML-Feld, Gestaltung ins CSS-Feld, Verhalten ins JavaScript-Feld. Ausführen übernimmt deinen aktuellen Code. Prüfen kontrolliert konkrete Ziele. Alle Felder sind editierbar; vorgegebener Code ist dein Werkzeug, kein Vorwissen.",
  "exercises": [
    {
      "id": "m01-01",
      "title": "Dein erstes Hallo",
      "explanation": "<h1> ist die Hauptüberschrift. Der Text steht zwischen <h1> und </h1>.",
      "task": "Erstelle eine h1 mit dem Text Hallo, Web!",
      "minutes": 5,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Dein erstes Hallo: <h1> ist die Hauptüberschrift. Der Text steht zwischen <h1> und </h1>. -->\n<h1>Hallo, Web!</h1>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "<h1> ist die Hauptüberschrift. Der Text steht zwischen <h1> und </h1>.",
        "Orientiere dich an diesem Baustein:\n<h1>Hallo, Web!</h1>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<h1>Hallo, Web!</h1>"
      ],
      "tests": [
        {
          "label": "Erstelle eine h1 mit dem Text Hallo, Web!",
          "code": "document.querySelector('h1')?.textContent === 'Hallo, Web!'"
        }
      ],
      "prerequisites": [],
      "solutionNotes": "<h1> ist die Hauptüberschrift. Der Text steht zwischen <h1> und </h1>. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-02",
      "title": "Ein Gedanke als Absatz",
      "explanation": "<p> zeichnet einen Absatz aus. Überschriften benennen, Absätze erklären.",
      "task": "Schreibe eine h1 und darunter einen p mit Ich lerne Webentwicklung.",
      "minutes": 5,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Ein Gedanke als Absatz: <p> zeichnet einen Absatz aus. Überschriften benennen, Absätze erklären. -->\n<h1>Meine Reise</h1>\n<p>Ich lerne Webentwicklung.</p>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "<p> zeichnet einen Absatz aus. Überschriften benennen, Absätze erklären.",
        "Orientiere dich an diesem Baustein:\n<h1>Meine Reise</h1>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<p>Ich lerne Webentwicklung.</p>"
      ],
      "tests": [
        {
          "label": "Schreibe eine h1 und darunter einen p mit Ich lerne Webentwicklung.",
          "code": "!!document.querySelector('h1') && document.querySelector('p')?.textContent === 'Ich lerne Webentwicklung.'"
        }
      ],
      "prerequisites": [
        "m01-01"
      ],
      "solutionNotes": "<p> zeichnet einen Absatz aus. Überschriften benennen, Absätze erklären. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-03",
      "title": "Eine klare Hierarchie",
      "explanation": "h1 benennt die Seite, h2 einen Abschnitt. Wähle die Ebene nach Bedeutung, nicht nach Schriftgröße.",
      "task": "Ergänze nach der h1 eine h2 mit Mein erstes Ziel.",
      "minutes": 5,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Eine klare Hierarchie: h1 benennt die Seite, h2 einen Abschnitt. Wähle die Ebene nach Bedeutung, nicht nach Schriftgröße. -->\n<h1>Meine Reise</h1>\n<h2>Mein erstes Ziel</h2>\n<p>Eine eigene Webseite bauen.</p>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "h1 benennt die Seite, h2 einen Abschnitt. Wähle die Ebene nach Bedeutung, nicht nach Schriftgröße.",
        "Orientiere dich an diesem Baustein:\n<h1>Meine Reise</h1>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<p>Eine eigene Webseite bauen.</p>"
      ],
      "tests": [
        {
          "label": "Ergänze nach der h1 eine h2 mit Mein erstes Ziel.",
          "code": "document.querySelector('h1 + h2')?.textContent === 'Mein erstes Ziel'"
        }
      ],
      "prerequisites": [
        "m01-02"
      ],
      "solutionNotes": "h1 benennt die Seite, h2 einen Abschnitt. Wähle die Ebene nach Bedeutung, nicht nach Schriftgröße. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-04",
      "title": "Wichtige Worte",
      "explanation": "<strong> markiert Wichtigkeit; <em> markiert sprachliche Betonung. Elemente lassen sich verschachteln.",
      "task": "Markiere im Absatz das Wort übe mit strong.",
      "minutes": 5,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Wichtige Worte: <strong> markiert Wichtigkeit; <em> markiert sprachliche Betonung. Elemente lassen sich verschachteln. -->\n<p>Ich <strong>übe</strong> jeden Tag.</p>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "<strong> markiert Wichtigkeit; <em> markiert sprachliche Betonung. Elemente lassen sich verschachteln.",
        "Orientiere dich an diesem Baustein:\n<p>Ich <strong>übe</strong> jeden Tag.</p>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<p>Ich <strong>übe</strong> jeden Tag.</p>"
      ],
      "tests": [
        {
          "label": "Markiere im Absatz das Wort übe mit strong.",
          "code": "document.querySelector('p strong')?.textContent === 'übe'"
        }
      ],
      "prerequisites": [
        "m01-03"
      ],
      "solutionNotes": "<strong> markiert Wichtigkeit; <em> markiert sprachliche Betonung. Elemente lassen sich verschachteln. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-05",
      "title": "Deine Packliste",
      "explanation": "<ul> ist eine ungeordnete Liste. Jedes Kind <li> ist ein Eintrag.",
      "task": "Erstelle eine ul mit drei li: HTML, CSS und JavaScript.",
      "minutes": 5,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Deine Packliste: <ul> ist eine ungeordnete Liste. Jedes Kind <li> ist ein Eintrag. -->\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "<ul> ist eine ungeordnete Liste. Jedes Kind <li> ist ein Eintrag.",
        "Orientiere dich an diesem Baustein:\n<ul>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n</ul>"
      ],
      "tests": [
        {
          "label": "Erstelle eine ul mit drei li: HTML, CSS und JavaScript.",
          "code": "JSON.stringify([...document.querySelectorAll('ul > li')].map(x=>x.textContent)) === JSON.stringify(['HTML','CSS','JavaScript'])"
        }
      ],
      "prerequisites": [
        "m01-04"
      ],
      "solutionNotes": "<ul> ist eine ungeordnete Liste. Jedes Kind <li> ist ein Eintrag. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-06",
      "title": "Eine Reihenfolge",
      "explanation": "<ol> nummeriert seine li-Einträge. Nutze sie für Abläufe.",
      "task": "Erstelle eine ol mit den Schritten Lesen, Schreiben, Testen.",
      "minutes": 5,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Eine Reihenfolge: <ol> nummeriert seine li-Einträge. Nutze sie für Abläufe. -->\n<ol><li>Lesen</li><li>Schreiben</li><li>Testen</li></ol>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "<ol> nummeriert seine li-Einträge. Nutze sie für Abläufe.",
        "Orientiere dich an diesem Baustein:\n<ol><li>Lesen</li><li>Schreiben</li><li>Testen</li></ol>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<ol><li>Lesen</li><li>Schreiben</li><li>Testen</li></ol>"
      ],
      "tests": [
        {
          "label": "Erstelle eine ol mit den Schritten Lesen, Schreiben, Testen.",
          "code": "[...document.querySelectorAll('ol > li')].map(x=>x.textContent).join(',') === 'Lesen,Schreiben,Testen'"
        }
      ],
      "prerequisites": [
        "m01-05"
      ],
      "solutionNotes": "<ol> nummeriert seine li-Einträge. Nutze sie für Abläufe. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-07",
      "title": "Der erste Link",
      "explanation": "<a href=\"#ziel\"> führt zu einem Element mit id=\"ziel\" auf derselben Seite. IDs müssen eindeutig sein.",
      "task": "Verlinke mit href=\"#ziel\" auf eine h2 mit id=\"ziel\".",
      "minutes": 10,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Der erste Link: <a href=\"#ziel\"> führt zu einem Element mit id=\"ziel\" auf derselben Seite. IDs müssen eindeutig sein. -->\n<a href=\"#ziel\">Zum Ziel</a>\n<h2 id=\"ziel\">Angekommen</h2>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "<a href=\"#ziel\"> führt zu einem Element mit id=\"ziel\" auf derselben Seite. IDs müssen eindeutig sein.",
        "Orientiere dich an diesem Baustein:\n<a href=\"#ziel\">Zum Ziel</a>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<h2 id=\"ziel\">Angekommen</h2>"
      ],
      "tests": [
        {
          "label": "Verlinke mit href=\"#ziel\" auf eine h2 mit id=\"ziel\".",
          "code": "!!document.querySelector('a[href=\"#ziel\"]') && !!document.querySelector('h2#ziel')"
        }
      ],
      "prerequisites": [
        "m01-06"
      ],
      "solutionNotes": "<a href=\"#ziel\"> führt zu einem Element mit id=\"ziel\" auf derselben Seite. IDs müssen eindeutig sein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-08",
      "title": "Ein Bild ohne Internet",
      "explanation": "img hat kein schließendes Tag. src enthält die Bildadresse, alt beschreibt den Inhalt. Ein data-URI kann ein Bild direkt enthalten.",
      "task": "Füge ein img mit alt=\"Grüner Kreis\" und dem vorgegebenen lokalen Bild ein.",
      "minutes": 10,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='35' fill='seagreen'/%3E%3C/svg%3E\">",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Ein Bild ohne Internet: img hat kein schließendes Tag. src enthält die Bildadresse, alt beschreibt den Inhalt. Ein data-URI kann ein Bild direkt enthalten. -->\n<img alt=\"Grüner Kreis\" width=\"80\" height=\"80\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='35' fill='seagreen'/%3E%3C/svg%3E\">",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "img hat kein schließendes Tag. src enthält die Bildadresse, alt beschreibt den Inhalt. Ein data-URI kann ein Bild direkt enthalten.",
        "Orientiere dich an diesem Baustein:\n<img alt=\"Grüner Kreis\" width=\"80\" height=\"80\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='35' fill='seagreen'/%3E%3C/svg%3E\">",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<img alt=\"Grüner Kreis\" width=\"80\" height=\"80\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='35' fill='seagreen'/%3E%3C/svg%3E\">"
      ],
      "tests": [
        {
          "label": "Füge ein img mit alt=\"Grüner Kreis\" und dem vorgegebenen lokalen Bild ein.",
          "code": "document.querySelector('img')?.alt === 'Grüner Kreis' && document.querySelector('img')?.getAttribute('src').startsWith('data:')"
        }
      ],
      "prerequisites": [
        "m01-07"
      ],
      "solutionNotes": "img hat kein schließendes Tag. src enthält die Bildadresse, alt beschreibt den Inhalt. Ein data-URI kann ein Bild direkt enthalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-09",
      "title": "Ein echtes Bedienelement",
      "explanation": "button ist per Tastatur bedienbar. type=\"button\" vermeidet später unbeabsichtigtes Absenden von Formularen.",
      "task": "Erstelle einen button mit type=\"button\" und Text Los geht’s.",
      "minutes": 10,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Ein echtes Bedienelement: button ist per Tastatur bedienbar. type=\"button\" vermeidet später unbeabsichtigtes Absenden von Formularen. -->\n<button type=\"button\">Los geht’s</button>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "button ist per Tastatur bedienbar. type=\"button\" vermeidet später unbeabsichtigtes Absenden von Formularen.",
        "Orientiere dich an diesem Baustein:\n<button type=\"button\">Los geht’s</button>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<button type=\"button\">Los geht’s</button>"
      ],
      "tests": [
        {
          "label": "Erstelle einen button mit type=\"button\" und Text Los geht’s.",
          "code": "document.querySelector('button[type=button]')?.textContent === 'Los geht’s'"
        }
      ],
      "prerequisites": [
        "m01-08"
      ],
      "solutionNotes": "button ist per Tastatur bedienbar. type=\"button\" vermeidet später unbeabsichtigtes Absenden von Formularen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m01-10",
      "title": "Projekt: Deine Reisekarte",
      "explanation": "Kombiniere die bekannten Elemente. Ein guter Inhalt besitzt eine klare Überschrift, Beschreibung und passende Liste.",
      "task": "Baue eine h1, einen Absatz, eine ul mit mindestens drei li und einen Button.",
      "minutes": 15,
      "xp": 20,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Projekt: Deine Reisekarte: Kombiniere die bekannten Elemente. Ein guter Inhalt besitzt eine klare Überschrift, Beschreibung und passende Liste. -->\n<h1>Meine Web-Reise</h1>\n<p>Heute starte ich in Flensburg.</p>\n<ul><li>Neugier</li><li>Zeit</li><li>Ideen</li></ul>\n<button type=\"button\">Aufbrechen</button>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Kombiniere die bekannten Elemente. Ein guter Inhalt besitzt eine klare Überschrift, Beschreibung und passende Liste.",
        "Orientiere dich an diesem Baustein:\n<h1>Meine Web-Reise</h1>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<button type=\"button\">Aufbrechen</button>"
      ],
      "tests": [
        {
          "label": "Baue eine h1, einen Absatz, eine ul mit mindestens drei li und einen Button.",
          "code": "!!document.querySelector('h1') && !!document.querySelector('p') && document.querySelectorAll('ul li').length >= 3 && !!document.querySelector('button')"
        }
      ],
      "prerequisites": [
        "m01-09"
      ],
      "solutionNotes": "Kombiniere die bekannten Elemente. Ein guter Inhalt besitzt eine klare Überschrift, Beschreibung und passende Liste. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
