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
        "Verwechselst du Position und Ausdehnung des Rechtecks?",
        "Farbe ist Zustand des Zeichenkontexts; fillRect benutzt den aktuellen Zustand. Die ersten beiden Werte sind Position, danach folgen Breite und Höhe.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "ctx.fillStyle = \"orange\"; ctx.fillRect(30, 40, 15, 25);",
        "explanation": "Farbe ist Zustand des Zeichenkontexts; fillRect benutzt den aktuellen Zustand. Die ersten beiden Werte sind Position, danach folgen Breite und Höhe.",
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
      "solutionNotes": "Farbe ist Zustand des Zeichenkontexts; fillRect benutzt den aktuellen Zustand. Die ersten beiden Werte sind Position, danach folgen Breite und Höhe. fillRect(x,y,breite,hoehe) malt sofort. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wird dein Pfad nach dem Beschreiben auch gefüllt?",
        "Ein Kreis benötigt einen neuen Pfad, einen Vollbogen und eine Fülloperation. Der Mittelpunkt ist nicht die linke obere Ecke.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "ctx.beginPath(); ctx.arc(40, 50, 12, 0, Math.PI * 2); ctx.fill();",
        "explanation": "Ein Kreis benötigt einen neuen Pfad, einen Vollbogen und eine Fülloperation. Der Mittelpunkt ist nicht die linke obere Ecke.",
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
      "solutionNotes": "Ein Kreis benötigt einen neuen Pfad, einen Vollbogen und eine Fülloperation. Der Mittelpunkt ist nicht die linke obere Ecke. arc(x,y,radius,start,end) zeichnet einen Bogen in Radiant. Math.PI*2 ist ein Vollkreis. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m17-03",
      "title": "Text auf der Leinwand",
      "explanation": "font nutzt CSS-Schriftangaben; fillText setzt Text an einen Punkt auf der Grundlinie.",
      "task": "Zeichne mit fillText den Text „WEB“ sichtbar auf das vorgegebene canvas (innerhalb des Bereichs x=20 bis 100 und y=15 bis 50). Setze zusätzlich #output auf „WEB“. Farbe und Schriftgestaltung sind frei. Der Test prüft Zeichenaktivität im genannten Bereich und den Ausgabetext.",
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
        "Liegt die Schrift vollständig auf der Zeichenfläche?",
        "Die y-Koordinate von fillText beschreibt die Grundlinie. Ein zu kleiner y-Wert kann Schrift oben abschneiden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Zeichne mit fillText den Text „WEB“ sichtbar auf das vorgegebene canvas (innerhalb des Bereichs x=20 bis 100 und y=15 bis 50). Setze zusätzlich #output auf „WEB“. Farbe und Schriftgestaltung sind frei. Der Test prüft Zeichenaktivität im genannten Bereich und den Ausgabetext.",
          "code": "__text('#output')==='WEB' && document.querySelector('canvas').getContext('2d').getImageData(20,15,80,35).data.some(x=>x!==0)"
        }
      ],
      "prerequisites": [
        "m17-02"
      ],
      "concept": {
        "example": "ctx.font = \"18px sans-serif\"; ctx.fillText(\"Hallo\", 10, 30);",
        "explanation": "Die y-Koordinate von fillText beschreibt die Grundlinie. Ein zu kleiner y-Wert kann Schrift oben abschneiden.",
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
      "examples": [
        {
          "input": "Text in '#output'",
          "expected": "'WEB'",
          "context": "Zeichne mit fillText den Text „WEB“ sichtbar auf das vorgegebene canvas (innerhalb des Bereichs x=20 bis 100 und y=15 bis 50). Setze zusätzlich #output auf „WEB“. Farbe und Schriftgestaltung sind frei. Der Test prüft Zeichenaktivität im genannten Bereich und den Ausgabetext."
        }
      ],
      "solutionNotes": "Die y-Koordinate von fillText beschreibt die Grundlinie. Ein zu kleiner y-Wert kann Schrift oben abschneiden. font nutzt CSS-Schriftangaben; fillText setzt Text an einen Punkt auf der Grundlinie. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Bleiben beim erneuten Zeichnen Spuren der alten Position zurück?",
        "Canvas speichert Pixel statt einzelner DOM-Objekte. Vor einem neuen Bild musst du den alten Inhalt ausdrücklich löschen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "ctx.clearRect(0, 0, 200, 100);",
        "explanation": "Canvas speichert Pixel statt einzelner DOM-Objekte. Vor einem neuen Bild musst du den alten Inhalt ausdrücklich löschen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "zeichne. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Canvas speichert Pixel statt einzelner DOM-Objekte. Vor einem neuen Bild musst du den alten Inhalt ausdrücklich löschen. clearRect löscht vor dem Neuzeichnen, sonst bleiben Spuren. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Berechnest du die Differenzen in beiden Richtungen?",
        "Die Differenzen der Koordinaten bilden die beiden Katheten. Ihre gemeinsame Länge ist der Abstand der Punkte.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "console.log(Math.hypot(6, 8));",
        "explanation": "Die Differenzen der Koordinaten bilden die beiden Katheten. Ihre gemeinsame Länge ist der Abstand der Punkte.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "distanz. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "distanz({x:0,y:0},{x:3,y:4})",
          "expected": "5",
          "context": "3-4-5"
        },
        {
          "input": "distanz({x:2,y:3},{x:2,y:3})",
          "expected": "0",
          "context": "Gleicher Punkt"
        }
      ],
      "solutionNotes": "Die Differenzen der Koordinaten bilden die beiden Katheten. Ihre gemeinsame Länge ist der Abstand der Punkte. Der Satz des Pythagoras liefert sqrt(dx²+dy²); Math.hypot macht genau das. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Zählt die exakte Berührung laut Aufgabe als Kollision?",
        "Eine Kreisberührung hängt von Abstand und Radiensumme ab. Der Gleichheitsfall entscheidet, ob bloße Berührung schon zählt.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const beruehrung = abstand <= radiusA + radiusB;",
        "explanation": "Eine Kreisberührung hängt von Abstand und Radiensumme ab. Der Gleichheitsfall entscheidet, ob bloße Berührung schon zählt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "kollidiert. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "kollidiert({x:0,y:0,r:2},{x:4,y:0,r:2})",
          "expected": "true",
          "context": "Berührung"
        },
        {
          "input": "kollidiert({x:0,y:0,r:1},{x:5,y:0,r:1})",
          "expected": "false",
          "context": "Getrennt"
        }
      ],
      "solutionNotes": "Eine Kreisberührung hängt von Abstand und Radiensumme ab. Der Gleichheitsfall entscheidet, ob bloße Berührung schon zählt. Zwei Kreise berühren sich, wenn ihr Mittelpunktabstand höchstens die Radiensumme beträgt. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Sind Geschwindigkeit und Zeit in zueinander passenden Einheiten?",
        "Geschwindigkeit pro Sekunde muss mit Sekunden multipliziert werden. Millisekunden sind dazu zuerst umzurechnen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const weg = 12 * (250 / 1000);",
        "explanation": "Geschwindigkeit pro Sekunde muss mit Sekunden multipliziert werden. Millisekunden sind dazu zuerst umzurechnen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "bewege. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "bewege(10,20,500)",
          "expected": "20",
          "context": "Halbe Sekunde"
        },
        {
          "input": "bewege(5,20,0)",
          "expected": "5",
          "context": "Stillstand"
        }
      ],
      "solutionNotes": "Geschwindigkeit pro Sekunde muss mit Sekunden multipliziert werden. Millisekunden sind dazu zuerst umzurechnen. Geschwindigkeit in Pixeln pro Sekunde mal Sekunden ergibt Weg. Zeitintervalle in ms teilst du durch 1000. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wartet dein Promise wirklich auf den Animationscallback?",
        "requestAnimationFrame plant einen späteren Callback. Eine asynchrone Funktion muss auf dessen tatsächliche Ausführung warten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "await new Promise(resolve => requestAnimationFrame(resolve));",
        "explanation": "requestAnimationFrame plant einen späteren Callback. Eine asynchrone Funktion muss auf dessen tatsächliche Ausführung warten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "frame. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "frame()",
          "expected": "'fertig'",
          "context": "Schreibe async frame(), das nach einem Animationsframe fertig liefert."
        }
      ],
      "solutionNotes": "requestAnimationFrame plant einen späteren Callback. Eine asynchrone Funktion muss auf dessen tatsächliche Ausführung warten. requestAnimationFrame führt den Callback vor einem Bildaufbau aus. Warte per Promise auf einen Schritt. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ändern sich am Rand sowohl Position als auch Richtung passend?",
        "Randbehandlung besteht aus zwei Aufgaben: Position im erlaubten Bereich halten und Bewegungsrichtung ändern. Prüfe beide unabhängig.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
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
      "concept": {
        "example": "const innen = Math.max(0, Math.min(100, position));",
        "explanation": "Randbehandlung besteht aus zwei Aufgaben: Position im erlaubten Bereich halten und Bewegungsrichtung ändern. Prüfe beide unabhängig.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "schritt. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [
        {
          "input": "schritt(9,3,10).x",
          "expected": "10",
          "context": "Rand"
        },
        {
          "input": "schritt(9,3,10).v",
          "expected": "-3",
          "context": "Rand"
        },
        {
          "input": "schritt(5,1,10).x",
          "expected": "6",
          "context": "Innen"
        },
        {
          "input": "schritt(5,1,10).v",
          "expected": "1",
          "context": "Innen"
        }
      ],
      "solutionNotes": "Randbehandlung besteht aus zwei Aufgaben: Position im erlaubten Bereich halten und Bewegungsrichtung ändern. Prüfe beide unabhängig. Begrenze den Ort und ändere das Vorzeichen der Geschwindigkeit am Rand. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m17-10",
      "title": "Projekt: Eine animierte Figur",
      "explanation": "Ein Loop zeichnet, plant den nächsten Frame und gibt eine Stoppfunktion zurück.",
      "task": "Schreibe start(): Zeichne fortlaufend ein grünes 20×20-Quadrat auf dem Canvas und bewege es horizontal mit requestAnimationFrame. Gib eine Funktion stop() zurück, die weitere Frames verhindert. Starte eine Demo. Automatisch geprüft wird der Vertrag von start/stop; Bewegung, Farbe und Form vergleichst du selbst in der Vorschau.",
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
        "Kann dein Aufräumcode den zuletzt geplanten Frame erreichen?",
        "Jeder geplante Frame besitzt eine Kennung. Die Stoppfunktion braucht die jeweils aktuelle Kennung, nicht nur die des ersten Frames.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe start(): Zeichne fortlaufend ein grünes 20×20-Quadrat auf dem Canvas und bewege es horizontal mit requestAnimationFrame. Gib eine Funktion stop() zurück, die weitere Frames verhindert. Starte eine Demo. Automatisch geprüft wird der Vertrag von start/stop; Bewegung, Farbe und Form vergleichst du selbst in der Vorschau.",
          "code": "typeof start==='function' && (()=>{const stop=start();const ok=typeof stop==='function';if(ok)stop();return ok})()"
        }
      ],
      "prerequisites": [
        "m17-09"
      ],
      "concept": {
        "example": "let id = requestAnimationFrame(frame); cancelAnimationFrame(id);",
        "explanation": "Jeder geplante Frame besitzt eine Kennung. Die Stoppfunktion braucht die jeweils aktuelle Kennung, nicht nur die des ersten Frames.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "start, stop. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Jeder geplante Frame besitzt eine Kennung. Die Stoppfunktion braucht die jeweils aktuelle Kennung, nicht nur die des ersten Frames. Ein Loop zeichnet, plant den nächsten Frame und gibt eine Stoppfunktion zurück. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
