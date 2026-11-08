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
        "Steht dein Text zwischen einem öffnenden und einem passenden schließenden Tag?",
        "Ein Tag benennt die Art des Inhalts. Der Schrägstrich im zweiten Tag beendet das Element. Der Text dazwischen wird angezeigt; die Tag-Namen selbst werden nicht angezeigt.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle eine h1 mit dem Text Hallo, Web!",
          "code": "__text('h1') === 'Hallo, Web!'"
        }
      ],
      "prerequisites": [],
      "concept": {
        "example": "<h2>Unser Garten</h2>",
        "explanation": "Ein Tag benennt die Art des Inhalts. Der Schrägstrich im zweiten Tag beendet das Element. Der Text dazwischen wird angezeigt; die Tag-Namen selbst werden nicht angezeigt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in 'h1'",
          "expected": "'Hallo, Web!'",
          "context": "Erstelle eine h1 mit dem Text Hallo, Web!"
        }
      ],
      "solutionNotes": "Ein Tag benennt die Art des Inhalts. Der Schrägstrich im zweiten Tag beendet das Element. Der Text dazwischen wird angezeigt; die Tag-Namen selbst werden nicht angezeigt. <h1> ist die Hauptüberschrift. Der Text steht zwischen <h1> und </h1>. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m01-02",
      "title": "Ein Gedanke als Absatz",
      "explanation": "<p> zeichnet einen Absatz aus. Überschriften benennen, Absätze erklären.",
      "task": "Erstelle im HTML-Editor eine h1 mit frei gewähltem Titel. Darunter folgt ein p mit genau diesem Satz (einschließlich Punkt): „Ich lerne Webentwicklung.“",
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
        "Hast du Überschrift und Absatz als zwei getrennte Elemente geschrieben?",
        "Ein Absatz ist ein eigenes Element. Schreibe mehrere Elemente hintereinander, wenn sie untereinander erscheinen sollen. Die Reihenfolge im HTML bestimmt zunächst auch die Lesereihenfolge.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle im HTML-Editor eine h1 mit frei gewähltem Titel. Darunter folgt ein p mit genau diesem Satz (einschließlich Punkt): „Ich lerne Webentwicklung.“",
          "code": "!!document.querySelector('h1') && __text('p') === 'Ich lerne Webentwicklung.'"
        }
      ],
      "prerequisites": [
        "m01-01"
      ],
      "concept": {
        "example": "<p>Heute scheint die Sonne.</p>",
        "explanation": "Ein Absatz ist ein eigenes Element. Schreibe mehrere Elemente hintereinander, wenn sie untereinander erscheinen sollen. Die Reihenfolge im HTML bestimmt zunächst auch die Lesereihenfolge.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in 'p'",
          "expected": "'Ich lerne Webentwicklung.'",
          "context": "Erstelle im HTML-Editor eine h1 mit frei gewähltem Titel. Darunter folgt ein p mit genau diesem Satz (einschließlich Punkt): „Ich lerne Webentwicklung.“"
        }
      ],
      "solutionNotes": "Ein Absatz ist ein eigenes Element. Schreibe mehrere Elemente hintereinander, wenn sie untereinander erscheinen sollen. Die Reihenfolge im HTML bestimmt zunächst auch die Lesereihenfolge. <p> zeichnet einen Absatz aus. Überschriften benennen, Absätze erklären. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m01-03",
      "title": "Eine klare Hierarchie",
      "explanation": "h1 benennt die Seite, h2 einen Abschnitt. Wähle die Ebene nach Bedeutung, nicht nach Schriftgröße.",
      "task": "Erstelle eine h1 mit frei gewähltem Titel. Direkt danach, auf derselben Verschachtelungsebene und ohne anderes Element dazwischen, folgt eine h2 mit dem Text „Mein erstes Ziel“. Weitere Inhalte sind frei.",
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
        "Welche beiden Überschriftenebenen verlangt die Aufgabe, und in welcher Reihenfolge?",
        "Überschriften bilden eine Gliederung. Eine niedrigere Zahl bedeutet eine höhere Ebene. Ein neuer Abschnitt steht als eigenes Element nach der vorherigen Überschrift, nicht in ihr.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle eine h1 mit frei gewähltem Titel. Direkt danach, auf derselben Verschachtelungsebene und ohne anderes Element dazwischen, folgt eine h2 mit dem Text „Mein erstes Ziel“. Weitere Inhalte sind frei.",
          "code": "__text('h1 + h2') === 'Mein erstes Ziel'"
        }
      ],
      "prerequisites": [
        "m01-02"
      ],
      "concept": {
        "example": "<h2>Rezepte</h2> <h3>Ein einfaches Brot</h3>",
        "explanation": "Überschriften bilden eine Gliederung. Eine niedrigere Zahl bedeutet eine höhere Ebene. Ein neuer Abschnitt steht als eigenes Element nach der vorherigen Überschrift, nicht in ihr.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in 'h1 + h2'",
          "expected": "'Mein erstes Ziel'",
          "context": "Erstelle eine h1 mit frei gewähltem Titel. Direkt danach, auf derselben Verschachtelungsebene und ohne anderes Element dazwischen, folgt eine h2 mit dem Text „Mein erstes Ziel“. Weitere Inhalte sind frei."
        }
      ],
      "solutionNotes": "Überschriften bilden eine Gliederung. Eine niedrigere Zahl bedeutet eine höhere Ebene. Ein neuer Abschnitt steht als eigenes Element nach der vorherigen Überschrift, nicht in ihr. h1 benennt die Seite, h2 einen Abschnitt. Wähle die Ebene nach Bedeutung, nicht nach Schriftgröße. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist nur das geforderte Wort ausgezeichnet oder versehentlich der ganze Satz?",
        "Ein Inline-Element kann nur einen Teil eines Absatzes umschließen. Der übrige Satz bleibt außerhalb der inneren Tags, aber innerhalb des Absatzes. Verschachtelte Elemente werden von innen nach außen geschlossen.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Markiere im Absatz das Wort übe mit strong.",
          "code": "__text('p strong') === 'übe'"
        }
      ],
      "prerequisites": [
        "m01-03"
      ],
      "concept": {
        "example": "<p>Bitte <em>langsam</em> lesen.</p>",
        "explanation": "Ein Inline-Element kann nur einen Teil eines Absatzes umschließen. Der übrige Satz bleibt außerhalb der inneren Tags, aber innerhalb des Absatzes. Verschachtelte Elemente werden von innen nach außen geschlossen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in 'p strong'",
          "expected": "'übe'",
          "context": "Markiere im Absatz das Wort übe mit strong."
        }
      ],
      "solutionNotes": "Ein Inline-Element kann nur einen Teil eines Absatzes umschließen. Der übrige Satz bleibt außerhalb der inneren Tags, aber innerhalb des Absatzes. Verschachtelte Elemente werden von innen nach außen geschlossen. <strong> markiert Wichtigkeit; <em> markiert sprachliche Betonung. Elemente lassen sich verschachteln. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wie viele tatsächliche Listenelemente enthält dein Listenbehälter?",
        "Die Liste ist der gemeinsame Behälter; jeder Listenpunkt braucht ein eigenes li-Element. Ein Text mit Kommas ist für den Browser noch keine Liste.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle eine ul mit drei li: HTML, CSS und JavaScript.",
          "code": "JSON.stringify([...document.querySelectorAll('ul > li')].map(x=>__normalize(x.textContent))) === JSON.stringify(['HTML','CSS','JavaScript'])"
        }
      ],
      "prerequisites": [
        "m01-04"
      ],
      "concept": {
        "example": "<ul><li>Apfel</li><li>Birne</li></ul>",
        "explanation": "Die Liste ist der gemeinsame Behälter; jeder Listenpunkt braucht ein eigenes li-Element. Ein Text mit Kommas ist für den Browser noch keine Liste.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Die Liste ist der gemeinsame Behälter; jeder Listenpunkt braucht ein eigenes li-Element. Ein Text mit Kommas ist für den Browser noch keine Liste. <ul> ist eine ungeordnete Liste. Jedes Kind <li> ist ein Eintrag. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du eine nummerierte Liste gewählt und die Schritte in der verlangten Reihenfolge angeordnet?",
        "Eine geordnete Liste zählt selbstständig. Du schreibst keine Nummern in die Texte. Reihenfolge und Anzahl ergeben sich aus den li-Elementen.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle eine ol mit den Schritten Lesen, Schreiben, Testen.",
          "code": "[...document.querySelectorAll('ol > li')].map(x=>__normalize(x.textContent)).join(',') === 'Lesen,Schreiben,Testen'"
        }
      ],
      "prerequisites": [
        "m01-05"
      ],
      "concept": {
        "example": "<ol><li>Wasser holen</li><li>Gießen</li></ol>",
        "explanation": "Eine geordnete Liste zählt selbstständig. Du schreibst keine Nummern in die Texte. Reihenfolge und Anzahl ergeben sich aus den li-Elementen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine geordnete Liste zählt selbstständig. Du schreibst keine Nummern in die Texte. Reihenfolge und Anzahl ergeben sich aus den li-Elementen. <ol> nummeriert seine li-Einträge. Nutze sie für Abläufe. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Stimmen Zielname im Link und id des Zielelements Zeichen für Zeichen überein?",
        "Der Link enthält im href einen Verweis. Das Ziel trägt denselben Namen als id, dort ohne Raute. Der sichtbare Linktext darf unabhängig davon verständlich formuliert werden.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
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
      "concept": {
        "example": "<a href=\"#rezepte\">Rezepte lesen</a> <h2 id=\"rezepte\">Rezepte</h2>",
        "explanation": "Der Link enthält im href einen Verweis. Das Ziel trägt denselben Namen als id, dort ohne Raute. Der sichtbare Linktext darf unabhängig davon verständlich formuliert werden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Der Link enthält im href einen Verweis. Das Ziel trägt denselben Namen als id, dort ohne Raute. Der sichtbare Linktext darf unabhängig davon verständlich formuliert werden. <a href=\"#ziel\"> führt zu einem Element mit id=\"ziel\" auf derselben Seite. IDs müssen eindeutig sein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du die vorhandene Bildquelle erhalten und nur das fehlende Beschreibungsattribut ergänzt?",
        "Bei img sind src und alt zwei verschiedene Attribute. src legt die Quelle fest; alt beschreibt den Bildinhalt. In deiner Aufgabe ist die Quelle schon vorhanden, damit kein Bild aus dem Internet nötig ist.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
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
      "concept": {
        "example": "<img src=\"blume.svg\" alt=\"Rote Blüte\">",
        "explanation": "Bei img sind src und alt zwei verschiedene Attribute. src legt die Quelle fest; alt beschreibt den Bildinhalt. In deiner Aufgabe ist die Quelle schon vorhanden, damit kein Bild aus dem Internet nötig ist.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Bei img sind src und alt zwei verschiedene Attribute. src legt die Quelle fest; alt beschreibt den Bildinhalt. In deiner Aufgabe ist die Quelle schon vorhanden, damit kein Bild aus dem Internet nötig ist. img hat kein schließendes Tag. src enthält die Bildadresse, alt beschreibt den Inhalt. Ein data-URI kann ein Bild direkt enthalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m01-09",
      "title": "Ein echtes Bedienelement",
      "explanation": "button ist per Tastatur bedienbar. type=\"button\" vermeidet später unbeabsichtigtes Absenden von Formularen.",
      "task": "Erstelle im HTML-Editor einen button mit type=\"button\". Seine sichtbare Beschriftung lautet „Los geht’s“ (ohne abschließenden Punkt). Ein gerades oder typografisches Apostroph ist erlaubt.",
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
        "Stimmen sowohl die sichtbare Beschriftung als auch der verlangte Button-Typ?",
        "Der Text zwischen den Tags beschriftet die Schaltfläche. Das type-Attribut beschreibt ihre Rolle. Ohne JavaScript hat dieser Button noch keine eigene Aktion; das ist hier beabsichtigt.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle im HTML-Editor einen button mit type=\"button\". Seine sichtbare Beschriftung lautet „Los geht’s“ (ohne abschließenden Punkt). Ein gerades oder typografisches Apostroph ist erlaubt.",
          "code": "__text('button[type=button]') === \"Los geht's\""
        }
      ],
      "prerequisites": [
        "m01-08"
      ],
      "concept": {
        "example": "<button type=\"button\">Mehr erfahren</button>",
        "explanation": "Der Text zwischen den Tags beschriftet die Schaltfläche. Das type-Attribut beschreibt ihre Rolle. Ohne JavaScript hat dieser Button noch keine eigene Aktion; das ist hier beabsichtigt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in 'button[type=button]'",
          "expected": "\"Los geht's\"",
          "context": "Erstelle im HTML-Editor einen button mit type=\"button\". Seine sichtbare Beschriftung lautet „Los geht’s“ (ohne abschließenden Punkt). Ein gerades oder typografisches Apostroph ist erlaubt."
        }
      ],
      "solutionNotes": "Der Text zwischen den Tags beschriftet die Schaltfläche. Das type-Attribut beschreibt ihre Rolle. Ohne JavaScript hat dieser Button noch keine eigene Aktion; das ist hier beabsichtigt. button ist per Tastatur bedienbar. type=\"button\" vermeidet später unbeabsichtigtes Absenden von Formularen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind alle geforderten Bausteine vorhanden, bevor du an der Gestaltung arbeitest?",
        "Ein kleines Dokument entsteht durch die Kombination bekannter Elemente. Plane zuerst die Struktur und fülle sie dann mit eigenen Inhalten. Die Prüfung bewertet hier die geforderten Elementarten und Mindestanzahl.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
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
      "concept": {
        "example": "<h2>Mein Hobby</h2><p>Ich gärtnere.</p>",
        "explanation": "Ein kleines Dokument entsteht durch die Kombination bekannter Elemente. Plane zuerst die Struktur und fülle sie dann mit eigenen Inhalten. Die Prüfung bewertet hier die geforderten Elementarten und Mindestanzahl.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze den HTML-Editor. CSS und JavaScript können für diese Aufgabe unverändert bleiben."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein kleines Dokument entsteht durch die Kombination bekannter Elemente. Plane zuerst die Struktur und fülle sie dann mit eigenen Inhalten. Die Prüfung bewertet hier die geforderten Elementarten und Mindestanzahl. Kombiniere die bekannten Elemente. Ein guter Inhalt besitzt eine klare Überschrift, Beschreibung und passende Liste. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
