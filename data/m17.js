window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m17",
  "title": "Canvas, Zeit und Bewegung",
  "city": "Mainz",
  "tag": "canvas",
  "level": 4,
  "description": "Zeichnen, Koordinaten und zeitbasierte Animation.",
  "lesson": "canvas ist eine Zeichenfläche. getContext(\"2d\") liefert Zeichenwerkzeuge. Der Ursprung liegt oben links; x wächst nach rechts, y nach unten. fillStyle setzt die Füllfarbe, fillRect malt ein Rechteck. beginPath startet einen Pfad, arc zeichnet Kreisbögen, fill füllt sie. clearRect löscht Pixel. requestAnimationFrame plant den nächsten Bildschritt; sein Zeitstempel ermöglicht bildratenunabhängige Bewegung. cancelAnimationFrame stoppt geplante Schritte. Die Zeichenfläche ist 320×180 Pixel groß; CSS-Größe und Pixelgröße sind verschiedene Dinge.",
  "exercises": [
    {
      "id": "m17-01",
      "title": "Die erste Fläche",
      "explanation": "fillRect(x,y,breite,hoehe) malt sofort.",
      "task": "Male ein rotes 40×30 Rechteck ab (10,10).",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Die erste Fläche: fillRect(x,y,breite,hoehe) malt sofort. */\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");\nctx.fillStyle = \"red\";\nctx.fillRect(10, 10, 40, 30);"
      },
      "hints": [
        "fillRect(x,y,breite,hoehe) malt sofort.",
        "Orientiere dich an diesem Baustein:\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nctx.fillRect(10, 10, 40, 30);"
      ],
      "tests": [
        {
          "label": "Male ein rotes 40×30 Rechteck ab (10,10).",
          "code": "(()=>{const p=document.querySelector('canvas').getContext('2d').getImageData(20,20,1,1).data;return p[0]===255 && p[1]===0 && p[3]===255})()"
        }
      ],
      "prerequisites": [
        "m16-10"
      ],
      "solutionNotes": "fillRect(x,y,breite,hoehe) malt sofort. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-02",
      "title": "Ein Kreis als Spielfigur",
      "explanation": "arc(x,y,radius,start,end) zeichnet einen Bogen in Radiant. Math.PI*2 ist ein Vollkreis.",
      "task": "Male einen blauen Kreis mit Mittelpunkt (80,60) und Radius 20.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Kreis als Spielfigur: arc(x,y,radius,start,end) zeichnet einen Bogen in Radiant. Math.PI*2 ist ein Vollkreis. */\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");\nctx.fillStyle = \"blue\"; ctx.beginPath(); ctx.arc(80,60,20,0,Math.PI*2); ctx.fill();"
      },
      "hints": [
        "arc(x,y,radius,start,end) zeichnet einen Bogen in Radiant. Math.PI*2 ist ein Vollkreis.",
        "Orientiere dich an diesem Baustein:\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nctx.fillStyle = \"blue\"; ctx.beginPath(); ctx.arc(80,60,20,0,Math.PI*2); ctx.fill();"
      ],
      "tests": [
        {
          "label": "Male einen blauen Kreis mit Mittelpunkt (80,60) und Radius 20.",
          "code": "(()=>{const p=document.querySelector('canvas').getContext('2d').getImageData(80,60,1,1).data;return p[2]===255 && p[3]===255})()"
        }
      ],
      "prerequisites": [
        "m17-01"
      ],
      "solutionNotes": "arc(x,y,radius,start,end) zeichnet einen Bogen in Radiant. Math.PI*2 ist ein Vollkreis. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-03",
      "title": "Text auf der Leinwand",
      "explanation": "font nutzt CSS-Schriftangaben; fillText setzt Text an einen Punkt auf der Grundlinie.",
      "task": "Zeichne WEB mit fillText und setze #output auf WEB.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Text auf der Leinwand: font nutzt CSS-Schriftangaben; fillText setzt Text an einen Punkt auf der Grundlinie. */\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");\nctx.font = \"24px sans-serif\"; ctx.fillText(\"WEB\",20,40);\ndocument.querySelector(\"#output\").textContent = \"WEB\";"
      },
      "hints": [
        "font nutzt CSS-Schriftangaben; fillText setzt Text an einen Punkt auf der Grundlinie.",
        "Orientiere dich an diesem Baustein:\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\ndocument.querySelector(\"#output\").textContent = \"WEB\";"
      ],
      "tests": [
        {
          "label": "Zeichne WEB mit fillText und setze #output auf WEB.",
          "code": "document.querySelector('#output').textContent==='WEB' && document.querySelector('canvas').getContext('2d').getImageData(20,15,80,35).data.some(x=>x!==0)"
        }
      ],
      "prerequisites": [
        "m17-02"
      ],
      "solutionNotes": "font nutzt CSS-Schriftangaben; fillText setzt Text an einen Punkt auf der Grundlinie. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-04",
      "title": "Ein frischer Frame",
      "explanation": "clearRect löscht vor dem Neuzeichnen, sonst bleiben Spuren.",
      "task": "Schreibe zeichne(x), das die Fläche leert und ein grünes 20×20 Rechteck bei (x,20) malt.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein frischer Frame: clearRect löscht vor dem Neuzeichnen, sonst bleiben Spuren. */\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");\nfunction zeichne(x) { ctx.clearRect(0,0,320,180); ctx.fillStyle=\"green\"; ctx.fillRect(x,20,20,20); }\nzeichne(30);"
      },
      "hints": [
        "clearRect löscht vor dem Neuzeichnen, sonst bleiben Spuren.",
        "Orientiere dich an diesem Baustein:\nconst ctx = document.querySelector(\"#canvas\").getContext(\"2d\");",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nzeichne(30);"
      ],
      "tests": [
        {
          "label": "Schreibe zeichne(x), das die Fläche leert und ein grünes 20×20 Rechteck bei (x,20) malt.",
          "code": "typeof zeichne==='function' && (()=>{zeichne(0);zeichne(100);return ctx.getImageData(5,25,1,1).data[3]===0 && ctx.getImageData(105,25,1,1).data[3]===255})()"
        }
      ],
      "prerequisites": [
        "m17-03"
      ],
      "solutionNotes": "clearRect löscht vor dem Neuzeichnen, sonst bleiben Spuren. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-05",
      "title": "Entfernung messen",
      "explanation": "Der Satz des Pythagoras liefert sqrt(dx²+dy²); Math.hypot macht genau das.",
      "task": "Schreibe distanz(a,b) für Punkte mit x und y.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Entfernung messen: Der Satz des Pythagoras liefert sqrt(dx²+dy²); Math.hypot macht genau das. */\nfunction distanz(a, b) { return Math.hypot(a.x-b.x, a.y-b.y); }"
      },
      "hints": [
        "Der Satz des Pythagoras liefert sqrt(dx²+dy²); Math.hypot macht genau das.",
        "Orientiere dich an diesem Baustein:\nfunction distanz(a, b) { return Math.hypot(a.x-b.x, a.y-b.y); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction distanz(a, b) { return Math.hypot(a.x-b.x, a.y-b.y); }"
      ],
      "tests": [
        {
          "label": "3-4-5",
          "code": "typeof distanz==='function' && distanz({x:0,y:0},{x:3,y:4})===5"
        },
        {
          "label": "Gleicher Punkt",
          "code": "distanz({x:2,y:3},{x:2,y:3})===0"
        }
      ],
      "prerequisites": [
        "m17-04"
      ],
      "solutionNotes": "Der Satz des Pythagoras liefert sqrt(dx²+dy²); Math.hypot macht genau das. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-06",
      "title": "Kollision zweier Kreise",
      "explanation": "Zwei Kreise berühren sich, wenn ihr Mittelpunktabstand höchstens die Radiensumme beträgt.",
      "task": "Schreibe kollidiert(a,b) mit x,y,r; Berührung zählt als Kollision.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Kollision zweier Kreise: Zwei Kreise berühren sich, wenn ihr Mittelpunktabstand höchstens die Radiensumme beträgt. */\nfunction kollidiert(a, b) { return Math.hypot(a.x-b.x,a.y-b.y) <= a.r+b.r; }"
      },
      "hints": [
        "Zwei Kreise berühren sich, wenn ihr Mittelpunktabstand höchstens die Radiensumme beträgt.",
        "Orientiere dich an diesem Baustein:\nfunction kollidiert(a, b) { return Math.hypot(a.x-b.x,a.y-b.y) <= a.r+b.r; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction kollidiert(a, b) { return Math.hypot(a.x-b.x,a.y-b.y) <= a.r+b.r; }"
      ],
      "tests": [
        {
          "label": "Berührung",
          "code": "typeof kollidiert==='function' && kollidiert({x:0,y:0,r:2},{x:4,y:0,r:2})===true"
        },
        {
          "label": "Getrennt",
          "code": "kollidiert({x:0,y:0,r:1},{x:5,y:0,r:1})===false"
        }
      ],
      "prerequisites": [
        "m17-05"
      ],
      "solutionNotes": "Zwei Kreise berühren sich, wenn ihr Mittelpunktabstand höchstens die Radiensumme beträgt. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-07",
      "title": "Bewegung nach Zeit",
      "explanation": "Geschwindigkeit in Pixeln pro Sekunde mal Sekunden ergibt Weg. Zeitintervalle in ms teilst du durch 1000.",
      "task": "Schreibe bewege(x,tempo,deltaMs).",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Bewegung nach Zeit: Geschwindigkeit in Pixeln pro Sekunde mal Sekunden ergibt Weg. Zeitintervalle in ms teilst du durch 1000. */\nfunction bewege(x, tempo, deltaMs) { return x + tempo * deltaMs / 1000; }"
      },
      "hints": [
        "Geschwindigkeit in Pixeln pro Sekunde mal Sekunden ergibt Weg. Zeitintervalle in ms teilst du durch 1000.",
        "Orientiere dich an diesem Baustein:\nfunction bewege(x, tempo, deltaMs) { return x + tempo * deltaMs / 1000; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction bewege(x, tempo, deltaMs) { return x + tempo * deltaMs / 1000; }"
      ],
      "tests": [
        {
          "label": "Halbe Sekunde",
          "code": "typeof bewege==='function' && bewege(10,20,500)===20"
        },
        {
          "label": "Stillstand",
          "code": "bewege(5,20,0)===5"
        }
      ],
      "prerequisites": [
        "m17-06"
      ],
      "solutionNotes": "Geschwindigkeit in Pixeln pro Sekunde mal Sekunden ergibt Weg. Zeitintervalle in ms teilst du durch 1000. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-08",
      "title": "Ein Animationsschritt",
      "explanation": "requestAnimationFrame führt den Callback vor einem Bildaufbau aus. Warte per Promise auf einen Schritt.",
      "task": "Schreibe async frame(), das nach einem Animationsframe fertig liefert.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Animationsschritt: requestAnimationFrame führt den Callback vor einem Bildaufbau aus. Warte per Promise auf einen Schritt. */\nasync function frame() {\n  await new Promise(resolve => requestAnimationFrame(resolve));\n  return \"fertig\";\n}"
      },
      "hints": [
        "requestAnimationFrame führt den Callback vor einem Bildaufbau aus. Warte per Promise auf einen Schritt.",
        "Orientiere dich an diesem Baustein:\nasync function frame() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Schreibe async frame(), das nach einem Animationsframe fertig liefert.",
          "code": "typeof frame==='function' && await frame()==='fertig'"
        }
      ],
      "prerequisites": [
        "m17-07"
      ],
      "solutionNotes": "requestAnimationFrame führt den Callback vor einem Bildaufbau aus. Warte per Promise auf einen Schritt. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-09",
      "title": "Am Rand umkehren",
      "explanation": "Begrenze den Ort und ändere das Vorzeichen der Geschwindigkeit am Rand.",
      "task": "Schreibe schritt(x,v,max): next=x+v; bei next>max oder next<0 negiere v und begrenze next. Ergebnis {x,v}.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Am Rand umkehren: Begrenze den Ort und ändere das Vorzeichen der Geschwindigkeit am Rand. */\nfunction schritt(x, v, max) {\n  let next = x + v;\n  if (next > max || next < 0) v = -v;\n  return { x: Math.min(max,Math.max(0,next)), v };\n}"
      },
      "hints": [
        "Begrenze den Ort und ändere das Vorzeichen der Geschwindigkeit am Rand.",
        "Orientiere dich an diesem Baustein:\nfunction schritt(x, v, max) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
      ],
      "tests": [
        {
          "label": "Rand",
          "code": "typeof schritt==='function' && schritt(9,3,10).x===10 && schritt(9,3,10).v===-3"
        },
        {
          "label": "Innen",
          "code": "schritt(5,1,10).x===6 && schritt(5,1,10).v===1"
        }
      ],
      "prerequisites": [
        "m17-08"
      ],
      "solutionNotes": "Begrenze den Ort und ändere das Vorzeichen der Geschwindigkeit am Rand. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m17-10",
      "title": "Projekt: Eine animierte Figur",
      "explanation": "Ein Loop zeichnet, plant den nächsten Frame und gibt eine Stoppfunktion zurück.",
      "task": "Schreibe start(): animiere ein grünes 20×20 Quadrat horizontal und gib stop() zurück, das cancelAnimationFrame aufruft.",
      "minutes": 20,
      "xp": 100,
      "focus": "js",
      "starter": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main><h1>Dein Spielfeld</h1><canvas id=\"canvas\" width=\"320\" height=\"180\" aria-label=\"Zeichenfläche\"></canvas><p id=\"output\"></p></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Eine animierte Figur: Ein Loop zeichnet, plant den nächsten Frame und gibt eine Stoppfunktion zurück. */\nfunction start() {\n  const ctx = document.querySelector(\"#canvas\").getContext(\"2d\");\n  let id; let anfang; let aktiv = true;\n  function frame(zeit) {\n    if (!aktiv) return;\n    anfang ??= zeit;\n    const x = ((zeit - anfang) / 10) % 300;\n    ctx.clearRect(0,0,320,180); ctx.fillStyle=\"green\"; ctx.fillRect(x,60,20,20);\n    id = requestAnimationFrame(frame);\n  }\n  id = requestAnimationFrame(frame);\n  return () => { aktiv = false; cancelAnimationFrame(id); };\n}\nconst stopDemo = start();"
      },
      "hints": [
        "Ein Loop zeichnet, plant den nächsten Frame und gibt eine Stoppfunktion zurück.",
        "Orientiere dich an diesem Baustein:\nfunction start() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nconst stopDemo = start();"
      ],
      "tests": [
        {
          "label": "Schreibe start(): animiere ein grünes 20×20 Quadrat horizontal und gib stop() zurück, das cancelAnimationFrame aufruft.",
          "code": "typeof start==='function' && (()=>{const stop=start();const ok=typeof stop==='function';if(ok)stop();return ok})()"
        }
      ],
      "prerequisites": [
        "m17-09"
      ],
      "solutionNotes": "Ein Loop zeichnet, plant den nächsten Frame und gibt eine Stoppfunktion zurück. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
