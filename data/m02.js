window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m02",
  "title": "Inhalte mit Bedeutung",
  "city": "Kiel",
  "tag": "semantic",
  "level": 1,
  "description": "Semantik, zugängliche Formulare und verständliche Struktur.",
  "lesson": "Semantische Elemente beschreiben Rollen: header ist der Kopf, nav die Navigation, main der Hauptinhalt und footer der Abschluss. Ein label verbindet sichtbaren Text über for mit der id eines Eingabefeldes. Formulare bündeln Eingaben; native Typen wie email übernehmen erste Prüfungen. Attribute wie required und minlength formulieren Regeln. Diese Regeln ersetzen später keine Serverprüfung.",
  "exercises": [
    {
      "id": "m02-01",
      "title": "Das Seitenfundament",
      "explanation": "main soll den zentralen Inhalt genau einmal enthalten. header und footer bilden den Rahmen.",
      "task": "Baue header, main und footer als Geschwister.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Das Seitenfundament: main soll den zentralen Inhalt genau einmal enthalten. header und footer bilden den Rahmen. -->\n<header>Web-Reise</header><main><h1>Willkommen</h1></main><footer>Mit Neugier gebaut</footer>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Liegen die drei Seitenbereiche auf derselben Verschachtelungsebene?",
        "Geschwister haben denselben Elternknoten. Der Hauptinhalt gehört deshalb nicht in den footer. Semantik beschreibt die Rolle eines Bereichs, noch nicht dessen Position oder Farbe.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Baue header, main und footer als Geschwister.",
          "code": "!!document.querySelector('header') && document.querySelectorAll('main').length===1 && !!document.querySelector('footer')"
        }
      ],
      "prerequisites": [
        "m01-10"
      ],
      "concept": {
        "example": "<header>Gartenjournal</header><main>Ein Beitrag</main><footer>Kontakt</footer>",
        "explanation": "Geschwister haben denselben Elternknoten. Der Hauptinhalt gehört deshalb nicht in den footer. Semantik beschreibt die Rolle eines Bereichs, noch nicht dessen Position oder Farbe.",
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
      "solutionNotes": "Geschwister haben denselben Elternknoten. Der Hauptinhalt gehört deshalb nicht in den footer. Semantik beschreibt die Rolle eines Bereichs, noch nicht dessen Position oder Farbe. main soll den zentralen Inhalt genau einmal enthalten. header und footer bilden den Rahmen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-02",
      "title": "Navigation mit Ziel",
      "explanation": "nav enthält zusammengehörige Navigationslinks. Ein verständlicher Linktext nennt das Ziel.",
      "task": "Erstelle eine nav mit zwei internen Links.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Navigation mit Ziel: nav enthält zusammengehörige Navigationslinks. Ein verständlicher Linktext nennt das Ziel. -->\n<nav aria-label=\"Hauptnavigation\"><a href=\"#start\">Start</a> <a href=\"#kontakt\">Kontakt</a></nav><main id=\"start\">Start</main><footer id=\"kontakt\">Kontakt</footer>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Sind es zwei Links innerhalb der Navigation, und besitzen beide ein lokales Sprungziel?",
        "Eine Navigation sammelt Links. Bei internen Links beginnt das href mit einer Raute; ein sinnvoller eigener Zielbereich sorgt dafür, dass der Sprung auch wirklich ein Ziel hat.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle eine nav mit zwei internen Links.",
          "code": "document.querySelectorAll('nav a[href^=\"#\"]').length===2"
        }
      ],
      "prerequisites": [
        "m02-01"
      ],
      "concept": {
        "example": "<nav><a href=\"#beete\">Beete</a></nav><section id=\"beete\">Beete</section>",
        "explanation": "Eine Navigation sammelt Links. Bei internen Links beginnt das href mit einer Raute; ein sinnvoller eigener Zielbereich sorgt dafür, dass der Sprung auch wirklich ein Ziel hat.",
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
      "solutionNotes": "Eine Navigation sammelt Links. Bei internen Links beginnt das href mit einer Raute; ein sinnvoller eigener Zielbereich sorgt dafür, dass der Sprung auch wirklich ein Ziel hat. nav enthält zusammengehörige Navigationslinks. Ein verständlicher Linktext nennt das Ziel. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-03",
      "title": "Ein Artikel für sich",
      "explanation": "article ist ein eigenständig verständlicher Beitrag. Eine Überschrift benennt ihn.",
      "task": "Erstelle einen article mit h2 und p.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Ein Artikel für sich: article ist ein eigenständig verständlicher Beitrag. Eine Überschrift benennt ihn. -->\n<article><h2>Mein Reisetagebuch</h2><p>Heute lerne ich Semantik.</p></article>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Sind sowohl Überschrift als auch Absatz im article verschachtelt?",
        "Ein eigenständiger Beitrag bekommt einen gemeinsamen article-Behälter. Überschrift und Absatz sind Kinder dieses Beitrags, nicht bloß Nachbarelemente außerhalb.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle einen article mit h2 und p.",
          "code": "!!document.querySelector('article h2') && !!document.querySelector('article p')"
        }
      ],
      "prerequisites": [
        "m02-02"
      ],
      "concept": {
        "example": "<article><h2>Neues aus dem Garten</h2><p>Die ersten Pflanzen wachsen.</p></article>",
        "explanation": "Ein eigenständiger Beitrag bekommt einen gemeinsamen article-Behälter. Überschrift und Absatz sind Kinder dieses Beitrags, nicht bloß Nachbarelemente außerhalb.",
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
      "solutionNotes": "Ein eigenständiger Beitrag bekommt einen gemeinsamen article-Behälter. Überschrift und Absatz sind Kinder dieses Beitrags, nicht bloß Nachbarelemente außerhalb. article ist ein eigenständig verständlicher Beitrag. Eine Überschrift benennt ihn. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-04",
      "title": "Ein Name fürs Eingabefeld",
      "explanation": "Ein label bleibt sichtbar und beschreibt ein Feld auch für Hilfstechnologien. for und id müssen identisch sein.",
      "task": "Erstelle einen input mit id=\"name\" und ein label mit dem sichtbaren Text „Name“. Verbinde beide über for=\"name\" am label. Weitere Attribute und die optische Gestaltung sind frei.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Ein Name fürs Eingabefeld: Ein label bleibt sichtbar und beschreibt ein Feld auch für Hilfstechnologien. for und id müssen identisch sein. -->\n<label for=\"name\">Name</label><input id=\"name\" name=\"name\" type=\"text\">",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Passen for und id zusammen, und entspricht der Feldname der Aufgabe?",
        "for stellt über den gleichen Namen eine Verbindung zur id her. Dadurch kann ein Klick auf die Beschriftung das Feld fokussieren. Eine Beschriftung in einem gewöhnlichen Absatz stellt diese Verbindung nicht her.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle einen input mit id=\"name\" und ein label mit dem sichtbaren Text „Name“. Verbinde beide über for=\"name\" am label. Weitere Attribute und die optische Gestaltung sind frei.",
          "code": "__text('label[for=name]')==='Name' && !!document.querySelector('input#name')"
        }
      ],
      "prerequisites": [
        "m02-03"
      ],
      "concept": {
        "example": "<label for=\"pflanze\">Pflanze</label><input id=\"pflanze\">",
        "explanation": "for stellt über den gleichen Namen eine Verbindung zur id her. Dadurch kann ein Klick auf die Beschriftung das Feld fokussieren. Eine Beschriftung in einem gewöhnlichen Absatz stellt diese Verbindung nicht her.",
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
          "input": "Text in 'label[for=name]'",
          "expected": "'Name'",
          "context": "Erstelle einen input mit id=\"name\" und ein label mit dem sichtbaren Text „Name“. Verbinde beide über for=\"name\" am label. Weitere Attribute und die optische Gestaltung sind frei."
        }
      ],
      "solutionNotes": "for stellt über den gleichen Namen eine Verbindung zur id her. Dadurch kann ein Klick auf die Beschriftung das Feld fokussieren. Eine Beschriftung in einem gewöhnlichen Absatz stellt diese Verbindung nicht her. Ein label bleibt sichtbar und beschreibt ein Feld auch für Hilfstechnologien. for und id müssen identisch sein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-05",
      "title": "Ein Formular abschicken",
      "explanation": "form gruppiert Eingaben. Ein button mit type=\"submit\" löst das Absenden aus. In dieser Vorschau bleibt Navigation gesperrt.",
      "task": "Erstelle ein form mit einem input, dessen id und name jeweils „nickname“ lauten. Ergänze ein über for=\"nickname\" verbundenes label und einen button mit type=\"submit“. Beschriftungen sind frei.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Ein Formular abschicken: form gruppiert Eingaben. Ein button mit type=\"submit\" löst das Absenden aus. In dieser Vorschau bleibt Navigation gesperrt. -->\n<form><label for=\"nickname\">Nickname</label><input id=\"nickname\" name=\"nickname\"><button type=\"submit\">Speichern</button></form>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Hast du sowohl die Beschriftungsverknüpfung als auch den technischen Feldnamen beachtet?",
        "id verbindet das Feld mit seiner Beschriftung. name benennt den Wert beim Absenden. Ein Submit-Button gehört in das Formular. Erst später verhindern wir das normale Absenden mit JavaScript.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle ein form mit einem input, dessen id und name jeweils „nickname“ lauten. Ergänze ein über for=\"nickname\" verbundenes label und einen button mit type=\"submit“. Beschriftungen sind frei.",
          "code": "!!document.querySelector('form input[name=nickname]') && !!document.querySelector('form button[type=submit]') && !!document.querySelector('label[for=nickname]')"
        }
      ],
      "prerequisites": [
        "m02-04"
      ],
      "concept": {
        "example": "<form><label for=\"ort\">Ort</label><input id=\"ort\" name=\"ort\"><button type=\"submit\">Suchen</button></form>",
        "explanation": "id verbindet das Feld mit seiner Beschriftung. name benennt den Wert beim Absenden. Ein Submit-Button gehört in das Formular. Erst später verhindern wir das normale Absenden mit JavaScript.",
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
      "solutionNotes": "id verbindet das Feld mit seiner Beschriftung. name benennt den Wert beim Absenden. Ein Submit-Button gehört in das Formular. Erst später verhindern wir das normale Absenden mit JavaScript. form gruppiert Eingaben. Ein button mit type=\"submit\" löst das Absenden aus. In dieser Vorschau bleibt Navigation gesperrt. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-06",
      "title": "Eine E-Mail prüfen",
      "explanation": "type=\"email\" prüft das Format, required verlangt einen Wert. autocomplete unterstützt passende Browser-Vorschläge.",
      "task": "Erstelle ein input mit id=\"email\", type=\"email\" und required. Ergänze ein über for=\"email\" verbundenes label mit frei gewählter Beschriftung. autocomplete ist eine freiwillige Ergänzung.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Eine E-Mail prüfen: type=\"email\" prüft das Format, required verlangt einen Wert. autocomplete unterstützt passende Browser-Vorschläge. -->\n<label for=\"email\">E-Mail</label><input id=\"email\" name=\"email\" type=\"email\" required autocomplete=\"email\">",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Ist das Feld beschriftet, als E-Mail typisiert und als Pflichtfeld markiert?",
        "Typ und Pflichtangabe sind unabhängige Regeln: email prüft einen eingegebenen Text, required verbietet das Leerlassen. Die sichtbare Beschriftung bleibt auch bei ausgefülltem Feld erhalten.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle ein input mit id=\"email\", type=\"email\" und required. Ergänze ein über for=\"email\" verbundenes label mit frei gewählter Beschriftung. autocomplete ist eine freiwillige Ergänzung.",
          "code": "!!document.querySelector('input#email[type=email][required]') && !!document.querySelector('label[for=email]')"
        }
      ],
      "prerequisites": [
        "m02-05"
      ],
      "concept": {
        "example": "<label for=\"kontakt\">Kontakt</label><input id=\"kontakt\" type=\"email\" required>",
        "explanation": "Typ und Pflichtangabe sind unabhängige Regeln: email prüft einen eingegebenen Text, required verbietet das Leerlassen. Die sichtbare Beschriftung bleibt auch bei ausgefülltem Feld erhalten.",
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
      "solutionNotes": "Typ und Pflichtangabe sind unabhängige Regeln: email prüft einen eingegebenen Text, required verbietet das Leerlassen. Die sichtbare Beschriftung bleibt auch bei ausgefülltem Feld erhalten. type=\"email\" prüft das Format, required verlangt einen Wert. autocomplete unterstützt passende Browser-Vorschläge. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-07",
      "title": "Eine bewusste Auswahl",
      "explanation": "select enthält option-Elemente. value ist der maschinenlesbare Wert.",
      "task": "Erstelle ein select mit id=\"level\" und einem verbundenen label. Es enthält genau zwei option-Elemente, zuerst value=\"start\", danach value=\"pro\". Ihre sichtbaren Beschriftungen sind frei.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Eine bewusste Auswahl: select enthält option-Elemente. value ist der maschinenlesbare Wert. -->\n<label for=\"level\">Level</label><select id=\"level\"><option value=\"start\">Start</option><option value=\"pro\">Profi</option></select>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Welche Werte erwartet der Code und welche Texte sieht der Mensch?",
        "Die Anzeige einer Option und ihr value können verschieden sein. Die Anwendung verarbeitet den value. Die Reihenfolge der option-Elemente entspricht zunächst der Reihenfolge im Menü.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle ein select mit id=\"level\" und einem verbundenen label. Es enthält genau zwei option-Elemente, zuerst value=\"start\", danach value=\"pro\". Ihre sichtbaren Beschriftungen sind frei.",
          "code": "!!document.querySelector('label[for=level]') && [...document.querySelectorAll('#level option')].map(x=>x.value).join(',')==='start,pro'"
        }
      ],
      "prerequisites": [
        "m02-06"
      ],
      "concept": {
        "example": "<label for=\"farbe\">Farbe</label><select id=\"farbe\"><option value=\"rot\">Rot</option></select>",
        "explanation": "Die Anzeige einer Option und ihr value können verschieden sein. Die Anwendung verarbeitet den value. Die Reihenfolge der option-Elemente entspricht zunächst der Reihenfolge im Menü.",
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
      "solutionNotes": "Die Anzeige einer Option und ihr value können verschieden sein. Die Anwendung verarbeitet den value. Die Reihenfolge der option-Elemente entspricht zunächst der Reihenfolge im Menü. select enthält option-Elemente. value ist der maschinenlesbare Wert. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-08",
      "title": "Zusammengehörige Felder",
      "explanation": "fieldset gruppiert Felder; legend benennt die Gruppe. Radio-Inputs mit gleichem name erlauben eine Auswahl.",
      "task": "Erstelle ein fieldset mit legend und zwei Radios name=\"tempo\".",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Zusammengehörige Felder: fieldset gruppiert Felder; legend benennt die Gruppe. Radio-Inputs mit gleichem name erlauben eine Auswahl. -->\n<fieldset><legend>Lerntempo</legend><label><input type=\"radio\" name=\"tempo\" value=\"ruhig\">Ruhig</label><label><input type=\"radio\" name=\"tempo\" value=\"schnell\">Schnell</label></fieldset>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Tragen beide Radios denselben Gruppennamen und verschiedene Werte?",
        "Radios bilden über ein gemeinsames name eine Auswahlgruppe. Unterschiedliche values identifizieren die Optionen. Die legend erklärt, welche gemeinsame Frage diese Optionen beantworten.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle ein fieldset mit legend und zwei Radios name=\"tempo\".",
          "code": "!!document.querySelector('fieldset legend') && document.querySelectorAll('fieldset input[type=radio][name=tempo]').length===2"
        }
      ],
      "prerequisites": [
        "m02-07"
      ],
      "concept": {
        "example": "<fieldset><legend>Standort</legend><label><input type=\"radio\" name=\"licht\" value=\"sonne\">Sonne</label></fieldset>",
        "explanation": "Radios bilden über ein gemeinsames name eine Auswahlgruppe. Unterschiedliche values identifizieren die Optionen. Die legend erklärt, welche gemeinsame Frage diese Optionen beantworten.",
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
      "solutionNotes": "Radios bilden über ein gemeinsames name eine Auswahlgruppe. Unterschiedliche values identifizieren die Optionen. Die legend erklärt, welche gemeinsame Frage diese Optionen beantworten. fieldset gruppiert Felder; legend benennt die Gruppe. Radio-Inputs mit gleichem name erlauben eine Auswahl. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-09",
      "title": "Details auf Wunsch",
      "explanation": "details und summary bilden ohne JavaScript einen aufklappbaren Hinweis.",
      "task": "Erstelle details mit summary Tipp und einem erklärenden Absatz.",
      "minutes": 8,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Details auf Wunsch: details und summary bilden ohne JavaScript einen aufklappbaren Hinweis. -->\n<details><summary>Tipp</summary><p>Kleine Schritte führen ans Ziel.</p></details>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Ist die kurze Überschrift im summary und die ausführliche Erklärung innerhalb von details?",
        "summary ist der sichtbare Schalter des details-Elements. Alles weitere darin gehört zum ausklappbaren Inhalt. Der Browser übernimmt Öffnen, Schließen und Tastaturbedienung.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle details mit summary Tipp und einem erklärenden Absatz.",
          "code": "__text('details summary')==='Tipp' && !!document.querySelector('details p')"
        }
      ],
      "prerequisites": [
        "m02-08"
      ],
      "concept": {
        "example": "<details><summary>Hintergrund</summary><p>Weitere Informationen.</p></details>",
        "explanation": "summary ist der sichtbare Schalter des details-Elements. Alles weitere darin gehört zum ausklappbaren Inhalt. Der Browser übernimmt Öffnen, Schließen und Tastaturbedienung.",
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
          "input": "Text in 'details summary'",
          "expected": "'Tipp'",
          "context": "Erstelle details mit summary Tipp und einem erklärenden Absatz."
        }
      ],
      "solutionNotes": "summary ist der sichtbare Schalter des details-Elements. Alles weitere darin gehört zum ausklappbaren Inhalt. Der Browser übernimmt Öffnen, Schließen und Tastaturbedienung. details und summary bilden ohne JavaScript einen aufklappbaren Hinweis. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m02-10",
      "title": "Projekt: Dein Lernprofil",
      "explanation": "Nutze Semantik und native Validierung. minlength legt eine Mindestlänge für Texte fest.",
      "task": "Erstelle ein main mit einem form. Darin: ein input mit id=\"nick\", name=\"nick\", required und minlength=\"3\" samt verbundenem label; ein select mit id=\"level\" samt verbundenem label und mindestens einer option; ein button mit type=\"submit\". Texte und Styling sind frei.",
      "minutes": 15,
      "xp": 25,
      "focus": "html",
      "starter": {
        "html": "<!-- Hier entsteht deine Lösung. -->",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "solution": {
        "html": "<!-- Projekt: Dein Lernprofil: Nutze Semantik und native Validierung. minlength legt eine Mindestlänge für Texte fest. -->\n<main><h1>Lernprofil</h1><form><label for=\"nick\">Nickname</label><input id=\"nick\" name=\"nick\" required minlength=\"3\"><label for=\"level\">Level</label><select id=\"level\"><option>Start</option><option>Fortgeschritten</option></select><button type=\"submit\">Profil anlegen</button></form></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": ""
      },
      "hints": [
        "Hat jedes Feld eine passende Beschriftung, und sind Mindestlänge sowie Pflichtangabe am richtigen Feld?",
        "Baue das Formular zuerst aus vollständig beschrifteten Feldern. Danach ergänze Regeln und Auswahlmöglichkeiten. So lassen sich Strukturprobleme von Validierungsproblemen unterscheiden.",
        "Kontrolliere die Verschachtelung im HTML: Welches Element ist der Behälter, welche sind seine Kinder? Vergleiche danach die ausdrücklich geforderten Texte und Attribute mit dem Ziel. Einrückung und Zeilenumbrüche sind frei."
      ],
      "tests": [
        {
          "label": "Erstelle ein main mit einem form. Darin: ein input mit id=\"nick\", name=\"nick\", required und minlength=\"3\" samt verbundenem label; ein select mit id=\"level\" samt verbundenem label und mindestens einer option; ein button mit type=\"submit\". Texte und Styling sind frei.",
          "code": "!!document.querySelector('main form input[required][minlength=\"3\"]') && !!document.querySelector('label[for=nick]') && !!document.querySelector('label[for=level]') && !!document.querySelector('form select') && !!document.querySelector('button[type=submit]')"
        }
      ],
      "prerequisites": [
        "m02-09"
      ],
      "concept": {
        "example": "<form><label for=\"titel\">Titel</label><input id=\"titel\" name=\"titel\" minlength=\"4\" required></form>",
        "explanation": "Baue das Formular zuerst aus vollständig beschrifteten Feldern. Danach ergänze Regeln und Auswahlmöglichkeiten. So lassen sich Strukturprobleme von Validierungsproblemen unterscheiden.",
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
      "solutionNotes": "Baue das Formular zuerst aus vollständig beschrifteten Feldern. Danach ergänze Regeln und Auswahlmöglichkeiten. So lassen sich Strukturprobleme von Validierungsproblemen unterscheiden. Nutze Semantik und native Validierung. minlength legt eine Mindestlänge für Texte fest. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
