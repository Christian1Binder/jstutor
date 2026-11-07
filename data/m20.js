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
      "task": "Schreibe toggleTask(tasks,id): neue Liste, nur das Objekt mit id erhält invertiertes done; andere bleiben unverändert. Zeige eine Beispielausgabe.",
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
        "Verwalte Aufgaben als Datenobjekte, nicht als lose DOM-Texte. IDs bleiben beim Aktualisieren stabil.",
        "Orientiere dich an diesem Baustein:\nfunction toggleTask(tasks,id){return tasks.map(task=>task.id===id?{...task,done:!task.done}:task);}",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent=JSON.stringify(toggleTask(tasks,1));"
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
      "solutionNotes": "Verwalte Aufgaben als Datenobjekte, nicht als lose DOM-Texte. IDs bleiben beim Aktualisieren stabil. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine Suchansicht ist eine Datenpipeline plus sichere Renderfunktion.",
        "Orientiere dich an diesem Baustein:\nfunction galerie(items,text){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ngalerie([{title:\"Berge\"},{title:\"Meer\"}],\"\");"
      ],
      "tests": [
        {
          "label": "Suche",
          "code": "typeof galerie==='function' && galerie([{title:'Berge'},{title:'Meer'}],'BER')===1 && document.querySelector('#list li').textContent==='Berge'"
        },
        {
          "label": "Leerzustand",
          "code": "galerie([{title:'Meer'}],'Wald')===0 && !document.querySelector('#list li')"
        }
      ],
      "prerequisites": [
        "m20-01"
      ],
      "solutionNotes": "Eine Suchansicht ist eine Datenpipeline plus sichere Renderfunktion. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Die Fachlogik eines Quiz sollte unabhängig von Buttons prüfbar sein.",
        "Orientiere dich an diesem Baustein:\nfunction auswerten(fragen,antworten){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent=JSON.stringify(auswerten([{richtig:1},{richtig:2}],[1,0]));"
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
      "solutionNotes": "Die Fachlogik eines Quiz sollte unabhängig von Buttons prüfbar sein. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Gruppiere Kosten in einem neuen Objekt. Nutze eigene Schlüsselprüfungen, um geerbte Namen nicht versehentlich zu verwenden. Object.create(null) erzeugt ein Objekt ohne Prototyp.",
        "Orientiere dich an diesem Baustein:\nfunction kategorien(items){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent=JSON.stringify(kategorien([{kategorie:\"Fahrt\",betrag:10},{kategorie:\"Fahrt\",betrag:5}]));"
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
      "solutionNotes": "Gruppiere Kosten in einem neuen Objekt. Nutze eigene Schlüsselprüfungen, um geerbte Namen nicht versehentlich zu verwenden. Object.create(null) erzeugt ein Objekt ohne Prototyp. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Datenzugriff und Rendern werden in einer async Funktion koordiniert. Prüfe den HTTP-Status.",
        "Orientiere dich an diesem Baustein:\nasync function dashboard(){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nawait dashboard();"
      ],
      "tests": [
        {
          "label": "Schreibe async dashboard(), das /api/cities lädt, sichere li erzeugt und #output auf 2 Städte setzt; rufe es auf.",
          "code": "typeof dashboard==='function' && document.querySelectorAll('#list li').length===2 && document.querySelector('#list li').textContent==='Köln' && document.querySelector('#output').textContent==='2 Städte'"
        }
      ],
      "prerequisites": [
        "m20-04"
      ],
      "solutionNotes": "Datenzugriff und Rendern werden in einer async Funktion koordiniert. Prüfe den HTTP-Status. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Theme hat Datenzustand und sichtbare Repräsentation. dataset.theme erlaubt CSS-Selektoren wie [data-theme=\"dark\"].",
        "Orientiere dich an diesem Baustein:\nfunction setTheme(theme){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nsetTheme(\"dark\");"
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
      "solutionNotes": "Ein Theme hat Datenzustand und sichtbare Repräsentation. dataset.theme erlaubt CSS-Selektoren wie [data-theme=\"dark\"]. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Verlauf hält vergangene Zustände; undo darf den ersten Zustand nicht entfernen.",
        "Orientiere dich an diesem Baustein:\nfunction verlauf(initial){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein Verlauf hält vergangene Zustände; undo darf den ersten Zustand nicht entfernen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Adapter hält UI-Code unabhängig vom späteren Server. Das hier ist ein Demo-Profil, keine Authentifizierung. Keine Passwörter speichern.",
        "Orientiere dich an diesem Baustein:\nfunction demoKonto(){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein Adapter hält UI-Code unabhängig vom späteren Server. Das hier ist ein Demo-Profil, keine Authentifizierung. Keine Passwörter speichern. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Sortiere eine Kopie, filtere nach verfügbarer Zeit. Nutze zur Stabilität bei gleicher Zeit die ursprüngliche Reihenfolge des modernen Array.sort.",
        "Orientiere dich an diesem Baustein:\nfunction lernplan(uebungen,minuten){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Sortiere eine Kopie, filtere nach verfügbarer Zeit. Nutze zur Stabilität bei gleicher Zeit die ursprüngliche Reihenfolge des modernen Array.sort. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m20-10",
      "title": "Finale: Deine persönliche Web-App",
      "explanation": "Verbinde das Formular mit einem privaten Store und einer Renderfunktion. Der DOM ist die Ansicht, nicht die Datenbank.",
      "task": "Baue app(): Formular #form fügt nichtleere getrimmte Texte zum privaten Array hinzu; zeichne li in #list, Anzahl in #output und leere das Feld. Gib {getItems()} mit einer Kopie der Daten zurück. Starte const meineApp=app().",
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
        "Verbinde das Formular mit einem privaten Store und einer Renderfunktion. Der DOM ist die Ansicht, nicht die Datenbank.",
        "Orientiere dich an diesem Baustein:\nfunction app(){",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst meineApp=app();"
      ],
      "tests": [
        {
          "label": "Hinzufügen",
          "code": "typeof meineApp!=='undefined' && (()=>{document.querySelector('#name').value='  Eigene Idee  ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));return meineApp.getItems()[0]==='Eigene Idee' && document.querySelector('#list li').textContent==='Eigene Idee' && document.querySelector('#output').textContent==='1' && document.querySelector('#name').value===''})()"
        },
        {
          "label": "Keine Leerwerte und keine Zustandslecks",
          "code": "(()=>{document.querySelector('#name').value=' ';document.querySelector('#form').dispatchEvent(new Event('submit',{cancelable:true}));const a=meineApp.getItems();a.push('Fremd');return meineApp.getItems().length===1})()"
        }
      ],
      "prerequisites": [
        "m20-09"
      ],
      "solutionNotes": "Verbinde das Formular mit einem privaten Store und einer Renderfunktion. Der DOM ist die Ansicht, nicht die Datenbank. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
