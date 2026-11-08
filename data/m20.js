window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m20",
  "title": "Dein Web-Atelier",
  "city": "München",
  "tag": "builder",
  "level": 5,
  "description": "Zehn Abschlussprojekte: bekannte Bausteine sinnvoll verbinden.",
  "lesson": "Jetzt setzt du bekannte Bausteine zusammen. Jedes Projekt hat einen klar abgegrenzten Kernvertrag und konkrete Prüffälle; Gestaltung und weitere Funktionen kannst du frei ergänzen. Trenne Berechnung, Zustand und DOM. Die lokalen Lern-APIs und der Übungsspeicher bleiben verfügbar. Für produktive Anmeldungen braucht es einen Server mit sicheren Sessions, Passwort-Hashing und serverseitiger Autorisierung; ein Frontend allein kann das nicht leisten. Hier modellieren wir die Schnittstelle, ohne echte Passwörter zu verarbeiten.",
  "exercises": [
    {
      "id": "m20-01",
      "title": "Projekt: Aufgabenboard",
      "explanation": "Verwalte Aufgaben als Datenobjekte, nicht als lose DOM-Texte. IDs bleiben beim Aktualisieren stabil.",
      "task": "Schreibe toggleTask(tasks,id): Liefere eine neue Liste, in der nur die Aufgabe mit dieser id als neues Objekt ein invertiertes done erhält. Original und andere Aufgaben bleiben unverändert. Zeige zum Ausprobieren eine eigene Beispielausgabe; deren Format ist frei.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Aufgabenboard: Verwalte Aufgaben als Datenobjekte, nicht als lose DOM-Texte. IDs bleiben beim Aktualisieren stabil. */\nfunction toggleTask(tasks,id){return tasks.map(task=>task.id===id?{...task,done:!task.done}:task);}\nconst tasks=[{id:1,text:\"Üben\",done:false},{id:2,text:\"Pause\",done:false}];\ndocument.querySelector(\"#output\").textContent=JSON.stringify(toggleTask(tasks,1));"
      },
      "hints": [
        "Bleibt das Original samt seiner Objekte unverändert?",
        "Eine gezielte Aktualisierung erzeugt eine neue Liste und verändert nur das passende Objekt. Nicht passende Daten bleiben erhalten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gezielt ändern",
          "code": "typeof toggleTask==='function' && (()=>{const t=[{id:1,done:false},{id:2,done:false}];const n=toggleTask(t,1);return n[0].done===true && n[1].done===false && t[0].done===false && n!==t})()"
        },
        {
          "label": "Unbekannte ID",
          "code": "toggleTask([{id:1,done:true}],9)[0].done===true"
        }
      ],
      "prerequisites": [
        "m19-10"
      ],
      "concept": {
        "example": "const neu = liste.map(x => x.code === gesucht ? { ...x, offen: !x.offen } : x);",
        "explanation": "Eine gezielte Aktualisierung erzeugt eine neue Liste und verändert nur das passende Objekt. Nicht passende Daten bleiben erhalten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "toggleTask. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine gezielte Aktualisierung erzeugt eine neue Liste und verändert nur das passende Objekt. Nicht passende Daten bleiben erhalten. Verwalte Aufgaben als Datenobjekte, nicht als lose DOM-Texte. IDs bleiben beim Aktualisieren stabil. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-02",
      "title": "Projekt: Eine filterbare Galerie",
      "explanation": "Eine Suchansicht ist eine Datenpipeline plus sichere Renderfunktion.",
      "task": "Schreibe galerie(items,text): filtere title ohne Beachtung der Großschreibung und zeichne passende li in #list; Rückgabe Anzahl.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Eine filterbare Galerie: Eine Suchansicht ist eine Datenpipeline plus sichere Renderfunktion. */\nfunction galerie(items,text){\n  const treffer=items.filter(x=>x.title.toLowerCase().includes(text.toLowerCase()));\n  const list=document.querySelector(\"#list\");list.replaceChildren();\n  for(const item of treffer){const li=document.createElement(\"li\");li.textContent=item.title;list.append(li);}\n  return treffer.length;\n}\ngalerie([{title:\"Berge\"},{title:\"Meer\"}],\"\");"
      },
      "hints": [
        "Wird die vorherige Liste bei einer Suche ohne Treffer geleert?",
        "Eine Galerie verbindet Auswahl, vollständiges Neuzeichnen und Rückgabe der Trefferzahl. Auch kein Treffer ist ein normaler Ansichtsstand.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Suche",
          "code": "typeof galerie==='function' && galerie([{title:'Berge'},{title:'Meer'}],'BER')===1 && __text('#list li')==='Berge'"
        },
        {
          "label": "Leerzustand",
          "code": "galerie([{title:'Meer'}],'Wald')===0 && !document.querySelector('#list li')"
        }
      ],
      "prerequisites": [
        "m20-01"
      ],
      "concept": {
        "example": "const passend = texte.filter(x => x.toLowerCase().includes(suche.toLowerCase()));",
        "explanation": "Eine Galerie verbindet Auswahl, vollständiges Neuzeichnen und Rückgabe der Trefferzahl. Auch kein Treffer ist ein normaler Ansichtsstand.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "galerie. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "galerie([{title:'Berge'},{title:'Meer'}],'BER')",
          "expected": "1",
          "context": "Suche"
        },
        {
          "input": "Text in '#list li'",
          "expected": "'Berge'",
          "context": "Suche"
        },
        {
          "input": "galerie([{title:'Meer'}],'Wald')",
          "expected": "0",
          "context": "Leerzustand"
        }
      ],
      "solutionNotes": "Eine Galerie verbindet Auswahl, vollständiges Neuzeichnen und Rückgabe der Trefferzahl. Auch kein Treffer ist ein normaler Ansichtsstand. Eine Suchansicht ist eine Datenpipeline plus sichere Renderfunktion. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-03",
      "title": "Projekt: Quiz-Auswertung",
      "explanation": "Die Fachlogik eines Quiz sollte unabhängig von Buttons prüfbar sein.",
      "task": "Schreibe auswerten(fragen,antworten), bei denen fragen[i].richtig dem Antwortindex entspricht: {richtig,gesamt,prozent}. Leeres Quiz: 0%.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Quiz-Auswertung: Die Fachlogik eines Quiz sollte unabhängig von Buttons prüfbar sein. */\nfunction auswerten(fragen,antworten){\n  const richtig=fragen.reduce((summe,frage,i)=>summe+(frage.richtig===antworten[i]?1:0),0);\n  return {richtig,gesamt:fragen.length,prozent:fragen.length?Math.round(richtig/fragen.length*100):0};\n}\ndocument.querySelector(\"#output\").textContent=JSON.stringify(auswerten([{richtig:1},{richtig:2}],[1,0]));"
      },
      "hints": [
        "Werden gleiche Indizes miteinander verglichen und leere Quizze abgefangen?",
        "Die Quizlogik vergleicht pro Frage die zugehörige Antwort. Nicht beantwortete Fragen dürfen nicht versehentlich als richtig zählen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Bewerten",
          "code": "typeof auswerten==='function' && (()=>{const x=auswerten([{richtig:1},{richtig:2}],[1,0]);return x.richtig===1 && x.gesamt===2 && x.prozent===50})()"
        },
        {
          "label": "Leeres Quiz",
          "code": "auswerten([],[]).prozent===0"
        }
      ],
      "prerequisites": [
        "m20-02"
      ],
      "concept": {
        "example": "const anteil = gesamt ? Math.round(treffer / gesamt * 100) : 0;",
        "explanation": "Die Quizlogik vergleicht pro Frage die zugehörige Antwort. Nicht beantwortete Fragen dürfen nicht versehentlich als richtig zählen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "auswerten. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "auswerten([],[]).prozent",
          "expected": "0",
          "context": "Leeres Quiz"
        }
      ],
      "solutionNotes": "Die Quizlogik vergleicht pro Frage die zugehörige Antwort. Nicht beantwortete Fragen dürfen nicht versehentlich als richtig zählen. Die Fachlogik eines Quiz sollte unabhängig von Buttons prüfbar sein. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-04",
      "title": "Projekt: Budget-Dashboard",
      "explanation": "Gruppiere Kosten in einem neuen Objekt. Nutze eigene Schlüsselprüfungen, um geerbte Namen nicht versehentlich zu verwenden. Object.create(null) erzeugt ein Objekt ohne Prototyp.",
      "task": "Schreibe kategorien(items): summiere betrag nach kategorie in einem neuen Objekt.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Budget-Dashboard: Gruppiere Kosten in einem neuen Objekt. Nutze eigene Schlüsselprüfungen, um geerbte Namen nicht versehentlich zu verwenden. Object.create(null) erzeugt ein Objekt ohne Prototyp. */\nfunction kategorien(items){\n  const result=Object.create(null);\n  for(const item of items){result[item.kategorie]=(result[item.kategorie]??0)+item.betrag;}\n  return result;\n}\ndocument.querySelector(\"#output\").textContent=JSON.stringify(kategorien([{kategorie:\"Fahrt\",betrag:10},{kategorie:\"Fahrt\",betrag:5}]));"
      },
      "hints": [
        "Funktioniert die Gruppierung auch für Namen vorhandener Objektmethoden?",
        "Ein Gruppierungsobjekt ohne Prototyp besitzt keine geerbten Schlüssel. So können auch ungewöhnliche Kategorien reguläre Datennamen sein.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Gruppieren",
          "code": "typeof kategorien==='function' && kategorien([{kategorie:'A',betrag:2},{kategorie:'A',betrag:3},{kategorie:'B',betrag:4}]).A===5"
        },
        {
          "label": "Sonderschlüssel",
          "code": "kategorien([{kategorie:'toString',betrag:2}]).toString===2"
        }
      ],
      "prerequisites": [
        "m20-03"
      ],
      "concept": {
        "example": "const gruppen = Object.create(null);",
        "explanation": "Ein Gruppierungsobjekt ohne Prototyp besitzt keine geerbten Schlüssel. So können auch ungewöhnliche Kategorien reguläre Datennamen sein.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "kategorien. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "kategorien([{kategorie:'A',betrag:2},{kategorie:'A',betrag:3},{kategorie:'B',betrag:4}]).A",
          "expected": "5",
          "context": "Gruppieren"
        },
        {
          "input": "kategorien([{kategorie:'toString',betrag:2}]).toString",
          "expected": "2",
          "context": "Sonderschlüssel"
        }
      ],
      "solutionNotes": "Ein Gruppierungsobjekt ohne Prototyp besitzt keine geerbten Schlüssel. So können auch ungewöhnliche Kategorien reguläre Datennamen sein. Gruppiere Kosten in einem neuen Objekt. Nutze eigene Schlüsselprüfungen, um geerbte Namen nicht versehentlich zu verwenden. Object.create(null) erzeugt ein Objekt ohne Prototyp. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-05",
      "title": "Projekt: Städte-Dashboard",
      "explanation": "Datenzugriff und Rendern werden in einer async Funktion koordiniert. Prüfe den HTTP-Status.",
      "task": "Schreibe async dashboard(), das /api/cities lädt, sichere li erzeugt und #output auf 2 Städte setzt; rufe es auf.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Städte-Dashboard: Datenzugriff und Rendern werden in einer async Funktion koordiniert. Prüfe den HTTP-Status. */\nasync function dashboard(){\n  const response=await fetch(\"/api/cities\");if(!response.ok)throw Error(\"Daten fehlen\");\n  const items=await response.json();const list=document.querySelector(\"#list\");list.replaceChildren();\n  for(const item of items){const li=document.createElement(\"li\");li.textContent=item.name;list.append(li);}\n  document.querySelector(\"#output\").textContent=`${items.length} Städte`;\n}\nawait dashboard();"
      },
      "hints": [
        "Entstehen Zählanzeige und Liste aus demselben Datenstand?",
        "Ein Dashboard benötigt Statusprüfung vor dem Rendern. Wiederholtes Laden muss dieselbe Ansicht aktualisieren und darf keine Duplikate anhängen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe async dashboard(), das /api/cities lädt, sichere li erzeugt und #output auf 2 Städte setzt; rufe es auf.",
          "code": "typeof dashboard==='function' && document.querySelectorAll('#list li').length===2 && __text('#list li')==='Köln' && __text('#output')==='2 Städte'"
        }
      ],
      "prerequisites": [
        "m20-04"
      ],
      "concept": {
        "example": "const response = await fetch(\"/api/weather\");",
        "explanation": "Ein Dashboard benötigt Statusprüfung vor dem Rendern. Wiederholtes Laden muss dieselbe Ansicht aktualisieren und darf keine Duplikate anhängen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "dashboard. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#list li'",
          "expected": "'Köln'",
          "context": "Schreibe async dashboard(), das /api/cities lädt, sichere li erzeugt und #output auf 2 Städte setzt; rufe es auf."
        },
        {
          "input": "Text in '#output'",
          "expected": "'2 Städte'",
          "context": "Schreibe async dashboard(), das /api/cities lädt, sichere li erzeugt und #output auf 2 Städte setzt; rufe es auf."
        }
      ],
      "solutionNotes": "Ein Dashboard benötigt Statusprüfung vor dem Rendern. Wiederholtes Laden muss dieselbe Ansicht aktualisieren und darf keine Duplikate anhängen. Datenzugriff und Rendern werden in einer async Funktion koordiniert. Prüfe den HTTP-Status. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-06",
      "title": "Projekt: Ein Theme-Controller",
      "explanation": "Ein Theme hat Datenzustand und sichtbare Repräsentation. dataset.theme erlaubt CSS-Selektoren wie [data-theme=\"dark\"].",
      "task": "Schreibe setTheme(theme): nur light/dark akzeptieren, ungültig light; dataset.theme am html und localStorage theme setzen; Rückgabe Theme.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ein Theme-Controller: Ein Theme hat Datenzustand und sichtbare Repräsentation. dataset.theme erlaubt CSS-Selektoren wie [data-theme=\"dark\"]. */\nfunction setTheme(theme){\n  const wert=theme===\"dark\"?\"dark\":\"light\";\n  document.documentElement.dataset.theme=wert;localStorage.setItem(\"theme\",wert);return wert;\n}\nsetTheme(\"dark\");"
      },
      "hints": [
        "Wird ein ungültiger Wert vor dem Speichern auf den Standard zurückgeführt?",
        "Eine Einstellung besitzt einen erlaubten Wertebereich. Die sichtbare Repräsentation und der gespeicherte Wert müssen identisch sein.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Dunkel",
          "code": "typeof setTheme==='function' && setTheme('dark')==='dark' && document.documentElement.dataset.theme==='dark' && localStorage.getItem('theme')==='dark'"
        },
        {
          "label": "Rückfall",
          "code": "setTheme('x')==='light' && document.documentElement.dataset.theme==='light'"
        }
      ],
      "prerequisites": [
        "m20-05"
      ],
      "concept": {
        "example": "document.documentElement.dataset.modus = \"kompakt\";",
        "explanation": "Eine Einstellung besitzt einen erlaubten Wertebereich. Die sichtbare Repräsentation und der gespeicherte Wert müssen identisch sein.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "setTheme. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "setTheme('dark')",
          "expected": "'dark'",
          "context": "Dunkel"
        },
        {
          "input": "setTheme('x')",
          "expected": "'light'",
          "context": "Rückfall"
        }
      ],
      "solutionNotes": "Eine Einstellung besitzt einen erlaubten Wertebereich. Die sichtbare Repräsentation und der gespeicherte Wert müssen identisch sein. Ein Theme hat Datenzustand und sichtbare Repräsentation. dataset.theme erlaubt CSS-Selektoren wie [data-theme=\"dark\"]. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-07",
      "title": "Projekt: Ein Verlauf mit Undo",
      "explanation": "Ein Verlauf hält vergangene Zustände; undo darf den ersten Zustand nicht entfernen.",
      "task": "Schreibe verlauf(initial) mit get(), set(wert), undo(); undo liefert den jetzt aktuellen Zustand.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ein Verlauf mit Undo: Ein Verlauf hält vergangene Zustände; undo darf den ersten Zustand nicht entfernen. */\nfunction verlauf(initial){\n  const states=[initial];\n  return {get:()=>states[states.length-1],set(wert){states.push(wert);},undo(){if(states.length>1)states.pop();return states[states.length-1];}};\n}"
      },
      "hints": [
        "Was passiert, wenn öfter rückgängig gemacht wird als Änderungen existieren?",
        "Undo entfernt den jüngsten Zustand, solange noch ein früherer vorhanden ist. Der erste Zustand bleibt als sichere Untergrenze erhalten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe verlauf(initial) mit get(), set(wert), undo(); undo liefert den jetzt aktuellen Zustand.",
          "code": "typeof verlauf==='function' && (()=>{const h=verlauf(0);h.set(1);h.set(2);return h.get()===2 && h.undo()===1 && h.undo()===0 && h.undo()===0})()"
        }
      ],
      "prerequisites": [
        "m20-06"
      ],
      "concept": {
        "example": "const vergangenheit = [\"Start\", \"Änderung\"]; vergangenheit.pop();",
        "explanation": "Undo entfernt den jüngsten Zustand, solange noch ein früherer vorhanden ist. Der erste Zustand bleibt als sichere Untergrenze erhalten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "verlauf. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Undo entfernt den jüngsten Zustand, solange noch ein früherer vorhanden ist. Der erste Zustand bleibt als sichere Untergrenze erhalten. Ein Verlauf hält vergangene Zustände; undo darf den ersten Zustand nicht entfernen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-08",
      "title": "Projekt: Ein lokaler Konto-Adapter",
      "explanation": "Ein Adapter hält UI-Code unabhängig vom späteren Server. Das hier ist ein Demo-Profil, keine Authentifizierung. Keine Passwörter speichern.",
      "task": "Schreibe demoKonto(): Objekt mit async login(name), current(), logout(). login liefert {name}, current anfangs null, logout setzt null.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ein lokaler Konto-Adapter: Ein Adapter hält UI-Code unabhängig vom späteren Server. Das hier ist ein Demo-Profil, keine Authentifizierung. Keine Passwörter speichern. */\nfunction demoKonto(){\n  let user=null;\n  return {async login(name){user={name};return user;},current:()=>user,logout(){user=null;}};\n}"
      },
      "hints": [
        "Ist der Benutzer vor Anmeldung und nach Abmeldung wieder null?",
        "Ein Demo-Konto modelliert Zustandswechsel, aber authentifiziert niemanden. Anmeldung, Abfrage und Abmeldung müssen denselben privaten Zustand verwenden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe demoKonto(): Objekt mit async login(name), current(), logout(). login liefert {name}, current anfangs null, logout setzt null.",
          "code": "typeof demoKonto==='function' && await (async()=>{const a=demoKonto();if(a.current()!==null)return false;const u=await a.login('Ada');if(u.name!=='Ada'||a.current().name!=='Ada')return false;a.logout();return a.current()===null})()"
        }
      ],
      "prerequisites": [
        "m20-07"
      ],
      "concept": {
        "example": "let demoNutzer = null;",
        "explanation": "Ein Demo-Konto modelliert Zustandswechsel, aber authentifiziert niemanden. Anmeldung, Abfrage und Abmeldung müssen denselben privaten Zustand verwenden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "demoKonto. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Demo-Konto modelliert Zustandswechsel, aber authentifiziert niemanden. Anmeldung, Abfrage und Abmeldung müssen denselben privaten Zustand verwenden. Ein Adapter hält UI-Code unabhängig vom späteren Server. Das hier ist ein Demo-Profil, keine Authentifizierung. Keine Passwörter speichern. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-09",
      "title": "Projekt: Ein Lernplaner",
      "explanation": "Sortiere eine Kopie, filtere nach verfügbarer Zeit. Nutze zur Stabilität bei gleicher Zeit die ursprüngliche Reihenfolge des modernen Array.sort.",
      "task": "Schreibe lernplan(uebungen,minuten): nur dauer<=minuten und !done, kürzeste zuerst; Original unverändert.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Ein Lernplaner: Sortiere eine Kopie, filtere nach verfügbarer Zeit. Nutze zur Stabilität bei gleicher Zeit die ursprüngliche Reihenfolge des modernen Array.sort. */\nfunction lernplan(uebungen,minuten){\n  return uebungen.filter(x=>!x.done && x.dauer<=minuten).sort((a,b)=>a.dauer-b.dauer);\n}"
      },
      "hints": [
        "Werden erledigte und zu lange Aufgaben ausgeschlossen, ohne das Original umzubauen?",
        "Ein Lernplan wählt zuerst passende Aufgaben und sortiert anschließend nur diese Auswahl. Ein eingeschlossener Zeitgrenzwert ist leicht zu übersehen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Auswahl",
          "code": "typeof lernplan==='function' && lernplan([{id:1,dauer:20,done:false},{id:2,dauer:5,done:false},{id:3,dauer:2,done:true}],25).map(x=>x.id).join(',')==='2,1'"
        },
        {
          "label": "Zeitgrenze",
          "code": "lernplan([{dauer:5,done:false}],5).length===1 && lernplan([{dauer:6,done:false}],5).length===0"
        }
      ],
      "prerequisites": [
        "m20-08"
      ],
      "concept": {
        "example": "const reihenfolge = eintraege.filter(x => x.zeit <= budget).sort((a, b) => a.zeit - b.zeit);",
        "explanation": "Ein Lernplan wählt zuerst passende Aufgaben und sortiert anschließend nur diese Auswahl. Ein eingeschlossener Zeitgrenzwert ist leicht zu übersehen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "lernplan. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "lernplan([{dauer:5,done:false}],5).length",
          "expected": "1",
          "context": "Zeitgrenze"
        },
        {
          "input": "lernplan([{dauer:6,done:false}],5).length",
          "expected": "0",
          "context": "Zeitgrenze"
        }
      ],
      "solutionNotes": "Ein Lernplan wählt zuerst passende Aufgaben und sortiert anschließend nur diese Auswahl. Ein eingeschlossener Zeitgrenzwert ist leicht zu übersehen. Sortiere eine Kopie, filtere nach verfügbarer Zeit. Nutze zur Stabilität bei gleicher Zeit die ursprüngliche Reihenfolge des modernen Array.sort. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m20-10",
      "title": "Finale: Deine persönliche Web-App",
      "explanation": "Verbinde das Formular mit einem privaten Store und einer Renderfunktion. Der DOM ist die Ansicht, nicht die Datenbank.",
      "task": "Schreibe app() und starte const meineApp = app(). Intern hält die App ein privates Array von Texten. #form übernimmt beim submit den getrimmten Inhalt von #name, ignoriert leere Texte, fügt gültige Texte hinzu, zeichnet die vollständige Liste in #list und zeigt deren Anzahl als Zahlentext in #output. Danach wird #name geleert. Rückgabe ist ein Objekt mit getItems(), das jeweils eine neue Array-Kopie liefert.",
      "minutes": 35,
      "xp": 115,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Mein Web-Atelier</h1><form id=\"form\"><label for=\"name\">Neuer Eintrag / Suche</label><input id=\"name\" name=\"name\"><button type=\"submit\">Los</button></form><button id=\"action\" type=\"button\">Aktion</button><p id=\"output\" aria-live=\"polite\"></p><ul id=\"list\"></ul></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Finale: Deine persönliche Web-App: Verbinde das Formular mit einem privaten Store und einer Renderfunktion. Der DOM ist die Ansicht, nicht die Datenbank. */\nfunction app(){\n  const items=[];const list=document.querySelector(\"#list\");const output=document.querySelector(\"#output\");\n  function render(){list.replaceChildren();for(const text of items){const li=document.createElement(\"li\");li.textContent=text;list.append(li);}output.textContent=String(items.length);}\n  document.querySelector(\"#form\").addEventListener(\"submit\",event=>{event.preventDefault();const input=document.querySelector(\"#name\");const text=input.value.trim();if(!text)return;items.push(text);input.value=\"\";render();});\n  render();return {getItems:()=>[...items]};\n}\nconst meineApp=app();"
      },
      "hints": [
        "Kann jemand über die zurückgegebene Liste deinen internen Zustand verändern?",
        "Eine kleine App trennt privaten Zustand und DOM. Eine öffentlich zurückgegebene Kopie verhindert, dass fremder Code den internen Zustand direkt verändert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Hinzufügen",
          "code": "typeof meineApp!=='undefined' && (()=>{document.querySelector('#name').value='  Eigene Idee  ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return meineApp.getItems()[0]==='Eigene Idee' && __text('#list li')==='Eigene Idee' && __text('#output')==='1' && document.querySelector('#name').value===''})()"
        },
        {
          "label": "Keine Leerwerte und keine Zustandslecks",
          "code": "(()=>{document.querySelector('#name').value=' ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));const a=meineApp.getItems();a.push('Fremd');return meineApp.getItems().length===1})()"
        }
      ],
      "prerequisites": [
        "m20-09"
      ],
      "concept": {
        "example": "function kopie(liste) { return [...liste]; }",
        "explanation": "Eine kleine App trennt privaten Zustand und DOM. Eine öffentlich zurückgegebene Kopie verhindert, dass fremder Code den internen Zustand direkt verändert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "meineApp. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "Text in '#list li'",
          "expected": "'Eigene Idee'",
          "context": "Hinzufügen"
        },
        {
          "input": "Text in '#output'",
          "expected": "'1'",
          "context": "Hinzufügen"
        }
      ],
      "solutionNotes": "Eine kleine App trennt privaten Zustand und DOM. Eine öffentlich zurückgegebene Kopie verhindert, dass fremder Code den internen Zustand direkt verändert. Verbinde das Formular mit einem privaten Store und einer Renderfunktion. Der DOM ist die Ansicht, nicht die Datenbank. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
