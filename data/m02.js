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
        "main soll den zentralen Inhalt genau einmal enthalten. header und footer bilden den Rahmen.",
        "Orientiere dich an diesem Baustein:\n<header>Web-Reise</header><main><h1>Willkommen</h1></main><footer>Mit Neugier gebaut</footer>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<header>Web-Reise</header><main><h1>Willkommen</h1></main><footer>Mit Neugier gebaut</footer>"
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
      "solutionNotes": "main soll den zentralen Inhalt genau einmal enthalten. header und footer bilden den Rahmen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "nav enthält zusammengehörige Navigationslinks. Ein verständlicher Linktext nennt das Ziel.",
        "Orientiere dich an diesem Baustein:\n<nav aria-label=\"Hauptnavigation\"><a href=\"#start\">Start</a> <a href=\"#kontakt\">Kontakt</a></nav><main id=\"start\">Start</main><footer id=\"kontakt\">Kontakt</footer>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<nav aria-label=\"Hauptnavigation\"><a href=\"#start\">Start</a> <a href=\"#kontakt\">Kontakt</a></nav><main id=\"start\">Start</main><footer id=\"kontakt\">Kontakt</footer>"
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
      "solutionNotes": "nav enthält zusammengehörige Navigationslinks. Ein verständlicher Linktext nennt das Ziel. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "article ist ein eigenständig verständlicher Beitrag. Eine Überschrift benennt ihn.",
        "Orientiere dich an diesem Baustein:\n<article><h2>Mein Reisetagebuch</h2><p>Heute lerne ich Semantik.</p></article>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<article><h2>Mein Reisetagebuch</h2><p>Heute lerne ich Semantik.</p></article>"
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
      "solutionNotes": "article ist ein eigenständig verständlicher Beitrag. Eine Überschrift benennt ihn. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m02-04",
      "title": "Ein Name fürs Eingabefeld",
      "explanation": "Ein label bleibt sichtbar und beschreibt ein Feld auch für Hilfstechnologien. for und id müssen identisch sein.",
      "task": "Verbinde das label Name mit dem input id=\"name\".",
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
        "Ein label bleibt sichtbar und beschreibt ein Feld auch für Hilfstechnologien. for und id müssen identisch sein.",
        "Orientiere dich an diesem Baustein:\n<label for=\"name\">Name</label><input id=\"name\" name=\"name\" type=\"text\">",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<label for=\"name\">Name</label><input id=\"name\" name=\"name\" type=\"text\">"
      ],
      "tests": [
        {
          "label": "Verbinde das label Name mit dem input id=\"name\".",
          "code": "document.querySelector('label[for=name]')?.textContent==='Name' && !!document.querySelector('input#name')"
        }
      ],
      "prerequisites": [
        "m02-03"
      ],
      "solutionNotes": "Ein label bleibt sichtbar und beschreibt ein Feld auch für Hilfstechnologien. for und id müssen identisch sein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m02-05",
      "title": "Ein Formular abschicken",
      "explanation": "form gruppiert Eingaben. Ein button mit type=\"submit\" löst das Absenden aus. In dieser Vorschau bleibt Navigation gesperrt.",
      "task": "Erstelle ein form mit beschriftetem input und Submit-Button.",
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
        "form gruppiert Eingaben. Ein button mit type=\"submit\" löst das Absenden aus. In dieser Vorschau bleibt Navigation gesperrt.",
        "Orientiere dich an diesem Baustein:\n<form><label for=\"nickname\">Nickname</label><input id=\"nickname\" name=\"nickname\"><button type=\"submit\">Speichern</button></form>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<form><label for=\"nickname\">Nickname</label><input id=\"nickname\" name=\"nickname\"><button type=\"submit\">Speichern</button></form>"
      ],
      "tests": [
        {
          "label": "Erstelle ein form mit beschriftetem input und Submit-Button.",
          "code": "!!document.querySelector('form input[name=nickname]') && !!document.querySelector('form button[type=submit]') && !!document.querySelector('label[for=nickname]')"
        }
      ],
      "prerequisites": [
        "m02-04"
      ],
      "solutionNotes": "form gruppiert Eingaben. Ein button mit type=\"submit\" löst das Absenden aus. In dieser Vorschau bleibt Navigation gesperrt. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m02-06",
      "title": "Eine E-Mail prüfen",
      "explanation": "type=\"email\" prüft das Format, required verlangt einen Wert. autocomplete unterstützt passende Browser-Vorschläge.",
      "task": "Erstelle ein beschriftetes Pflichtfeld mit type=\"email\".",
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
        "type=\"email\" prüft das Format, required verlangt einen Wert. autocomplete unterstützt passende Browser-Vorschläge.",
        "Orientiere dich an diesem Baustein:\n<label for=\"email\">E-Mail</label><input id=\"email\" name=\"email\" type=\"email\" required autocomplete=\"email\">",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<label for=\"email\">E-Mail</label><input id=\"email\" name=\"email\" type=\"email\" required autocomplete=\"email\">"
      ],
      "tests": [
        {
          "label": "Erstelle ein beschriftetes Pflichtfeld mit type=\"email\".",
          "code": "!!document.querySelector('input#email[type=email][required]') && !!document.querySelector('label[for=email]')"
        }
      ],
      "prerequisites": [
        "m02-05"
      ],
      "solutionNotes": "type=\"email\" prüft das Format, required verlangt einen Wert. autocomplete unterstützt passende Browser-Vorschläge. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m02-07",
      "title": "Eine bewusste Auswahl",
      "explanation": "select enthält option-Elemente. value ist der maschinenlesbare Wert.",
      "task": "Baue ein beschriftetes select id=\"level\" mit den Werten start und pro.",
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
        "select enthält option-Elemente. value ist der maschinenlesbare Wert.",
        "Orientiere dich an diesem Baustein:\n<label for=\"level\">Level</label><select id=\"level\"><option value=\"start\">Start</option><option value=\"pro\">Profi</option></select>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<label for=\"level\">Level</label><select id=\"level\"><option value=\"start\">Start</option><option value=\"pro\">Profi</option></select>"
      ],
      "tests": [
        {
          "label": "Baue ein beschriftetes select id=\"level\" mit den Werten start und pro.",
          "code": "!!document.querySelector('label[for=level]') && [...document.querySelectorAll('#level option')].map(x=>x.value).join(',')==='start,pro'"
        }
      ],
      "prerequisites": [
        "m02-06"
      ],
      "solutionNotes": "select enthält option-Elemente. value ist der maschinenlesbare Wert. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "fieldset gruppiert Felder; legend benennt die Gruppe. Radio-Inputs mit gleichem name erlauben eine Auswahl.",
        "Orientiere dich an diesem Baustein:\n<fieldset><legend>Lerntempo</legend><label><input type=\"radio\" name=\"tempo\" value=\"ruhig\">Ruhig</label><label><input type=\"radio\" name=\"tempo\" value=\"schnell\">Schnell</label></fieldset>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<fieldset><legend>Lerntempo</legend><label><input type=\"radio\" name=\"tempo\" value=\"ruhig\">Ruhig</label><label><input type=\"radio\" name=\"tempo\" value=\"schnell\">Schnell</label></fieldset>"
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
      "solutionNotes": "fieldset gruppiert Felder; legend benennt die Gruppe. Radio-Inputs mit gleichem name erlauben eine Auswahl. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "details und summary bilden ohne JavaScript einen aufklappbaren Hinweis.",
        "Orientiere dich an diesem Baustein:\n<details><summary>Tipp</summary><p>Kleine Schritte führen ans Ziel.</p></details>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<details><summary>Tipp</summary><p>Kleine Schritte führen ans Ziel.</p></details>"
      ],
      "tests": [
        {
          "label": "Erstelle details mit summary Tipp und einem erklärenden Absatz.",
          "code": "document.querySelector('details summary')?.textContent==='Tipp' && !!document.querySelector('details p')"
        }
      ],
      "prerequisites": [
        "m02-08"
      ],
      "solutionNotes": "details und summary bilden ohne JavaScript einen aufklappbaren Hinweis. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m02-10",
      "title": "Projekt: Dein Lernprofil",
      "explanation": "Nutze Semantik und native Validierung. minlength legt eine Mindestlänge für Texte fest.",
      "task": "Baue ein main mit form: beschrifteter Nickname (required, minlength=3), Level-Auswahl und Submit-Button.",
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
        "Nutze Semantik und native Validierung. minlength legt eine Mindestlänge für Texte fest.",
        "Orientiere dich an diesem Baustein:\n<main><h1>Lernprofil</h1><form><label for=\"nick\">Nickname</label><input id=\"nick\" name=\"nick\" required minlength=\"3\"><label for=\"level\">Level</label><select id=\"level\"><option>Start</option><option>Fortgeschritten</option></select><button type=\"submit\">Profil anlegen</button></form></main>",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n<main><h1>Lernprofil</h1><form><label for=\"nick\">Nickname</label><input id=\"nick\" name=\"nick\" required minlength=\"3\"><label for=\"level\">Level</label><select id=\"level\"><option>Start</option><option>Fortgeschritten</option></select><button type=\"submit\">Profil anlegen</button></form></main>"
      ],
      "tests": [
        {
          "label": "Baue ein main mit form: beschrifteter Nickname (required, minlength=3), Level-Auswahl und Submit-Button.",
          "code": "!!document.querySelector('main form input[required][minlength=\"3\"]') && !!document.querySelector('label[for=nick]') && !!document.querySelector('label[for=level]') && !!document.querySelector('form select') && !!document.querySelector('button[type=submit]')"
        }
      ],
      "prerequisites": [
        "m02-09"
      ],
      "solutionNotes": "Nutze Semantik und native Validierung. minlength legt eine Mindestlänge für Texte fest. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
