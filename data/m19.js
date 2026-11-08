window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m19",
  "title": "Architektur und Nebenläufigkeit",
  "city": "Nürnberg",
  "tag": "architect",
  "level": 5,
  "description": "Closures, Stores, Caches und kontrolliertes Timing.",
  "lesson": "Eine Closure hält Zugriff auf den lokalen Zustand ihres Erzeugungsaufrufs. Damit entstehen private Stores und Caches. Map speichert Schlüssel-Wert-Paare mit has/get/set/delete. Set sammelt eindeutige Listener. Restparameter ...args bündeln Argumente; fn(...args) verteilt sie beim Aufruf. Debounce wartet auf Ruhe, Throttle begrenzt die Aufruffrequenz. clearTimeout entfernt Timer. Für echte Projektmodule wäre export/import die native Grenze zwischen Dateien; die Übungen isolieren diese Bausteine hier als Funktionen. Ein Repository kapselt den Datenzugriff hinter einem austauschbaren Vertrag.",
  "exercises": [
    {
      "id": "m19-01",
      "title": "Privater Zustand per Closure",
      "explanation": "Jeder Fabrikaufruf erhält seine eigene lokale Variable. Zurückgegebene Methoden behalten darauf Zugriff.",
      "task": "Schreibe zaehler(start=0), Ergebnis {next()}, dessen next den nächsten Wert liefert.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Privater Zustand per Closure: Jeder Fabrikaufruf erhält seine eigene lokale Variable. Zurückgegebene Methoden behalten darauf Zugriff. */\nfunction zaehler(start=0) {\n  let wert=start;\n  return { next() { wert+=1;return wert; } };\n}"
      },
      "hints": [
        "Teilen zwei Instanzen versehentlich dieselbe globale Variable?",
        "Eine Closure behält ihren eigenen lokalen Bereich nach dem äußeren Aufruf. Zwei Fabrikaufrufe müssen voneinander unabhängige Zustände besitzen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe zaehler(start=0), Ergebnis {next()}, dessen next den nächsten Wert liefert.",
          "code": "typeof zaehler==='function' && (()=>{const a=zaehler(3),b=zaehler();return a.next()===4 && a.next()===5 && b.next()===1})()"
        }
      ],
      "prerequisites": [
        "m18-10"
      ],
      "concept": {
        "example": "function merken() { let wert = 3; return () => wert++; }",
        "explanation": "Eine Closure behält ihren eigenen lokalen Bereich nach dem äußeren Aufruf. Zwei Fabrikaufrufe müssen voneinander unabhängige Zustände besitzen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "zaehler. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Closure behält ihren eigenen lokalen Bereich nach dem äußeren Aufruf. Zwei Fabrikaufrufe müssen voneinander unabhängige Zustände besitzen. Jeder Fabrikaufruf erhält seine eigene lokale Variable. Zurückgegebene Methoden behalten darauf Zugriff. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-02",
      "title": "Eine Funktion als Abhängigkeit",
      "explanation": "Dependency Injection übergibt einen Dienst von außen. Das macht Fachlogik unabhängig vom konkreten Netzwerk.",
      "task": "Schreibe namenLader(lade), das eine async Funktion zurückgibt: await lade(), dann nur die Namen liefern.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine Funktion als Abhängigkeit: Dependency Injection übergibt einen Dienst von außen. Das macht Fachlogik unabhängig vom konkreten Netzwerk. */\nfunction namenLader(lade) { return async () => (await lade()).map(x=>x.name); }"
      },
      "hints": [
        "Verwendest du die übergebene Funktion statt eine eigene feste Quelle?",
        "Eine Abhängigkeit wird übergeben statt fest eingebaut. Damit kann derselbe Fachcode mit einer echten und einer simulierten Datenquelle arbeiten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe namenLader(lade), das eine async Funktion zurückgibt: await lade(), dann nur die Namen liefern.",
          "code": "typeof namenLader==='function' && (await namenLader(async()=>[{name:'Ada'},{name:'Lin'}])()).join(',')==='Ada,Lin'"
        }
      ],
      "prerequisites": [
        "m19-01"
      ],
      "concept": {
        "example": "function verwende(laden) { return async () => await laden(); }",
        "explanation": "Eine Abhängigkeit wird übergeben statt fest eingebaut. Damit kann derselbe Fachcode mit einer echten und einer simulierten Datenquelle arbeiten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "namenLader. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Abhängigkeit wird übergeben statt fest eingebaut. Damit kann derselbe Fachcode mit einer echten und einer simulierten Datenquelle arbeiten. Dependency Injection übergibt einen Dienst von außen. Das macht Fachlogik unabhängig vom konkreten Netzwerk. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-03",
      "title": "Eine teure Berechnung merken",
      "explanation": "Map.has unterscheidet einen gespeicherten undefined-Wert von einem fehlenden Schlüssel.",
      "task": "Schreibe memo(fn) für genau ein primitives Argument; gleiche Argumente berechnen nur einmal.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eine teure Berechnung merken: Map.has unterscheidet einen gespeicherten undefined-Wert von einem fehlenden Schlüssel. */\nfunction memo(fn) {\n  const cache=new Map();\n  return x=>{if(!cache.has(x))cache.set(x,fn(x));return cache.get(x);};\n}"
      },
      "hints": [
        "Prüfst du mit has auf Vorhandensein, statt nur den Wahrheitswert eines Ergebnisses zu prüfen?",
        "Ein Cache unterscheidet vorhandene Schlüssel von noch nicht berechneten. Gleiches Argument soll keine erneute Berechnung auslösen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe memo(fn) für genau ein primitives Argument; gleiche Argumente berechnen nur einmal.",
          "code": "typeof memo==='function' && (()=>{let n=0;const f=memo(x=>{n++;return x*2});return f(3)===6 && f(3)===6 && n===1 && f(4)===8 && n===2})()"
        }
      ],
      "prerequisites": [
        "m19-02"
      ],
      "concept": {
        "example": "const cache = new Map(); cache.set(\"a\", 4);",
        "explanation": "Ein Cache unterscheidet vorhandene Schlüssel von noch nicht berechneten. Gleiches Argument soll keine erneute Berechnung auslösen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "memo. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Cache unterscheidet vorhandene Schlüssel von noch nicht berechneten. Gleiches Argument soll keine erneute Berechnung auslösen. Map.has unterscheidet einen gespeicherten undefined-Wert von einem fehlenden Schlüssel. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-04",
      "title": "Ein kleiner Eventbus",
      "explanation": "Ein Set vermeidet doppelte Listener. Gib zur Anmeldung eine Abmeldefunktion zurück.",
      "task": "Schreibe bus() mit on(fn) und emit(wert); on liefert unsubscribe().",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein kleiner Eventbus: Ein Set vermeidet doppelte Listener. Gib zur Anmeldung eine Abmeldefunktion zurück. */\nfunction bus() {\n  const listeners=new Set();\n  return {on(fn){listeners.add(fn);return ()=>listeners.delete(fn);},emit(wert){for(const fn of listeners)fn(wert);}};\n}"
      },
      "hints": [
        "Kann ein abgemeldeter Listener noch Ereignisse empfangen?",
        "Ein Eventbus speichert aktive Listener. Eine Abmeldung muss genau den registrierten Listener entfernen und andere erhalten.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe bus() mit on(fn) und emit(wert); on liefert unsubscribe().",
          "code": "typeof bus==='function' && (()=>{const b=bus();let n=0;const off=b.on(x=>n+=x);b.emit(2);off();b.emit(5);return n===2})()"
        }
      ],
      "prerequisites": [
        "m19-03"
      ],
      "concept": {
        "example": "const empfaenger = new Set(); empfaenger.add(handler);",
        "explanation": "Ein Eventbus speichert aktive Listener. Eine Abmeldung muss genau den registrierten Listener entfernen und andere erhalten.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "bus. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Eventbus speichert aktive Listener. Eine Abmeldung muss genau den registrierten Listener entfernen und andere erhalten. Ein Set vermeidet doppelte Listener. Gib zur Anmeldung eine Abmeldefunktion zurück. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-05",
      "title": "Ein Store mit Abonnements",
      "explanation": "Der Store hält Zustand privat und informiert nach einem Update seine Abonnenten.",
      "task": "Schreibe store(initial) mit get(), set(wert), subscribe(fn); subscribe liefert unsubscribe.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Ein Store mit Abonnements: Der Store hält Zustand privat und informiert nach einem Update seine Abonnenten. */\nfunction store(initial) {\n  let state=initial;const listeners=new Set();\n  return {get:()=>state,set(wert){state=wert;for(const fn of listeners)fn(state);},subscribe(fn){listeners.add(fn);return ()=>listeners.delete(fn);}};\n}"
      },
      "hints": [
        "Werden Änderungen vor dem Benachrichtigen gespeichert?",
        "Ein Store hält Daten und Abonnements privat. Nach einer Änderung erhalten die noch aktiven Abonnenten den neuen Wert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe store(initial) mit get(), set(wert), subscribe(fn); subscribe liefert unsubscribe.",
          "code": "typeof store==='function' && (()=>{const s=store(0);let x=0;const off=s.subscribe(v=>x=v);s.set(3);off();s.set(8);return x===3 && s.get()===8})()"
        }
      ],
      "prerequisites": [
        "m19-04"
      ],
      "concept": {
        "example": "let wert = 3; const lesen = () => wert;",
        "explanation": "Ein Store hält Daten und Abonnements privat. Nach einer Änderung erhalten die noch aktiven Abonnenten den neuen Wert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "store. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Store hält Daten und Abonnements privat. Nach einer Änderung erhalten die noch aktiven Abonnenten den neuen Wert. Der Store hält Zustand privat und informiert nach einem Update seine Abonnenten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-06",
      "title": "Eingaben entprellen",
      "explanation": "Debounce startet bei jedem Aufruf den Timer neu. Erst der letzte Aufruf nach der Ruhezeit läuft.",
      "task": "Schreibe debounce(fn,ms), das Argumente des letzten Aufrufs an fn weitergibt.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Eingaben entprellen: Debounce startet bei jedem Aufruf den Timer neu. Erst der letzte Aufruf nach der Ruhezeit läuft. */\nfunction debounce(fn, ms) {\n  let timer;\n  return (...args)=>{clearTimeout(timer);timer=setTimeout(()=>fn(...args),ms);};\n}"
      },
      "hints": [
        "Bleibt nach mehreren schnellen Aufrufen nur der letzte geplant?",
        "Debounce verwirft die bisher geplante Ausführung zugunsten eines neuen Ruhefensters. Die Argumente des jüngsten Aufrufs müssen dabei erhalten bleiben.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe debounce(fn,ms), das Argumente des letzten Aufrufs an fn weitergibt.",
          "code": "typeof debounce==='function' && await (async()=>{const a=[];const f=debounce(x=>a.push(x),5);f(1);f(2);await new Promise(r=>setTimeout(r,25));return a.length===1 && a[0]===2})()"
        }
      ],
      "prerequisites": [
        "m19-05"
      ],
      "concept": {
        "example": "clearTimeout(timer); timer = setTimeout(aktion, 100);",
        "explanation": "Debounce verwirft die bisher geplante Ausführung zugunsten eines neuen Ruhefensters. Die Argumente des jüngsten Aufrufs müssen dabei erhalten bleiben.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "debounce. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Debounce verwirft die bisher geplante Ausführung zugunsten eines neuen Ruhefensters. Die Argumente des jüngsten Aufrufs müssen dabei erhalten bleiben. Debounce startet bei jedem Aufruf den Timer neu. Erst der letzte Aufruf nach der Ruhezeit läuft. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-07",
      "title": "Höchstens einmal pro Intervall",
      "explanation": "Ein führendes Throttle ruft sofort auf und ignoriert weitere Aufrufe bis zum nächsten Zeitfenster. Date.now liefert Millisekunden.",
      "task": "Schreibe throttle(fn,ms) mit führendem Aufruf und Argumentweitergabe.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Höchstens einmal pro Intervall: Ein führendes Throttle ruft sofort auf und ignoriert weitere Aufrufe bis zum nächsten Zeitfenster. Date.now liefert Millisekunden. */\nfunction throttle(fn, ms) {\n  let letztes=-Infinity;\n  return (...args)=>{const jetzt=Date.now();if(jetzt-letztes>=ms){letztes=jetzt;fn(...args);}};\n}"
      },
      "hints": [
        "Ist der allererste Aufruf sofort möglich?",
        "Throttle begrenzt die Häufigkeit innerhalb eines Zeitfensters. Ein führender Aufruf läuft sofort; weitere zu frühe Aufrufe werden ignoriert.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe throttle(fn,ms) mit führendem Aufruf und Argumentweitergabe.",
          "code": "typeof throttle==='function' && await (async()=>{const a=[];const f=throttle(x=>a.push(x),15);f(1);f(2);await new Promise(r=>setTimeout(r,25));f(3);return a.join(',')==='1,3'})()"
        }
      ],
      "prerequisites": [
        "m19-06"
      ],
      "concept": {
        "example": "const zeitpunkt = Date.now();",
        "explanation": "Throttle begrenzt die Häufigkeit innerhalb eines Zeitfensters. Ein führender Aufruf läuft sofort; weitere zu frühe Aufrufe werden ignoriert.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "throttle. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Throttle begrenzt die Häufigkeit innerhalb eines Zeitfensters. Ein führender Aufruf läuft sofort; weitere zu frühe Aufrufe werden ignoriert. Ein führendes Throttle ruft sofort auf und ignoriert weitere Aufrufe bis zum nächsten Zeitfenster. Date.now liefert Millisekunden. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-08",
      "title": "Die neueste Antwort gewinnt",
      "explanation": "Eine fortlaufende Anfrage-ID verhindert, dass alte, langsamere Antworten neue Daten überschreiben.",
      "task": "Schreibe neueste(lade,zeige): zurückgegebene async Funktion lädt mit Argument und zeigt nur das Ergebnis des jüngsten Aufrufs.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Die neueste Antwort gewinnt: Eine fortlaufende Anfrage-ID verhindert, dass alte, langsamere Antworten neue Daten überschreiben. */\nfunction neueste(lade, zeige) {\n  let id=0;\n  return async (...args)=>{const aktuell=++id;const wert=await lade(...args);if(aktuell===id)zeige(wert);};\n}"
      },
      "hints": [
        "Vergleichst du die Anfragekennung erst nach dem Warten mit dem neuesten Stand?",
        "Eine laufende Nummer ordnet Ergebnisse ihrer Anfrage zu. Ein älteres Ergebnis darf einen neueren Stand nicht überholen, selbst wenn es später fertig wird.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe neueste(lade,zeige): zurückgegebene async Funktion lädt mit Argument und zeigt nur das Ergebnis des jüngsten Aufrufs.",
          "code": "typeof neueste==='function' && await (async()=>{const seen=[];const f=neueste(async x=>{await new Promise(r=>setTimeout(r,x===1?20:1));return x},x=>seen.push(x));await Promise.all([f(1),f(2)]);return seen.join(',')==='2'})()"
        }
      ],
      "prerequisites": [
        "m19-07"
      ],
      "concept": {
        "example": "let generation = 0; const diese = ++generation;",
        "explanation": "Eine laufende Nummer ordnet Ergebnisse ihrer Anfrage zu. Ein älteres Ergebnis darf einen neueren Stand nicht überholen, selbst wenn es später fertig wird.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "neueste. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine laufende Nummer ordnet Ergebnisse ihrer Anfrage zu. Ein älteres Ergebnis darf einen neueren Stand nicht überholen, selbst wenn es später fertig wird. Eine fortlaufende Anfrage-ID verhindert, dass alte, langsamere Antworten neue Daten überschreiben. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-09",
      "title": "Fehlgeschlagen? Begrenzt neu versuchen",
      "explanation": "Ein Retry braucht eine feste Obergrenze. Ein Fehler nach allen Versuchen wird weitergegeben.",
      "task": "Schreibe async retry(fn,versuche): höchstens versuche Aufrufe, bei Erfolg Rückgabe; sonst letzten Fehler werfen. versuche>=1 vorausgesetzt.",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Fehlgeschlagen? Begrenzt neu versuchen: Ein Retry braucht eine feste Obergrenze. Ein Fehler nach allen Versuchen wird weitergegeben. */\nasync function retry(fn, versuche) {\n  for(let i=0;i<versuche;i++){try{return await fn();}catch(error){if(i===versuche-1)throw error;}}\n}"
      },
      "hints": [
        "Wird höchstens so oft aufgerufen wie erlaubt und nach Erfolg sofort beendet?",
        "Ein Retry braucht eine feste Versuchsgrenze. Nach Erfolg muss sofort Schluss sein, nach dem letzten Fehler muss dieser weitergegeben werden.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Erholt sich",
          "code": "typeof retry==='function' && await (async()=>{let n=0;const x=await retry(async()=>{if(++n<2)throw Error('x');return 7},3);return x===7 && n===2})()"
        },
        {
          "label": "Begrenzung",
          "code": "await (async()=>{let n=0;try{await retry(async()=>{n++;throw Error('Ende')},2);return false}catch(e){return n===2 && e.message==='Ende'}})()"
        }
      ],
      "prerequisites": [
        "m19-08"
      ],
      "concept": {
        "example": "for (let versuch = 0; versuch < 2; versuch++) { console.log(versuch); }",
        "explanation": "Ein Retry braucht eine feste Versuchsgrenze. Nach Erfolg muss sofort Schluss sein, nach dem letzten Fehler muss dieser weitergegeben werden.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "retry. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Retry braucht eine feste Versuchsgrenze. Nach Erfolg muss sofort Schluss sein, nach dem letzten Fehler muss dieser weitergegeben werden. Ein Retry braucht eine feste Obergrenze. Ein Fehler nach allen Versuchen wird weitergegeben. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m19-10",
      "title": "Projekt: Austauschbares Repository",
      "explanation": "Kapsle Datenzugriff in einem Objekt. Fachcode kennt nur list() und find(id), nicht fetch.",
      "task": "Schreibe repository(lade) mit async list() und async find(id), basierend auf lade().",
      "minutes": 25,
      "xp": 110,
      "focus": "js",
      "starter": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "// Schreibe deine Lösung hier.\n"
      },
      "solution": {
        "html": "<main>\n  <h1>Deine Web-Werkstatt</h1>\n  <div id=\"output\" aria-live=\"polite\"></div>\n</main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n",
        "js": "/* Projekt: Austauschbares Repository: Kapsle Datenzugriff in einem Objekt. Fachcode kennt nur list() und find(id), nicht fetch. */\nfunction repository(lade) {\n  return { async list(){return lade();}, async find(id){const items=await lade();return items.find(x=>x.id===id);} };\n}"
      },
      "hints": [
        "Bleibt die Datenquelle austauschbar und sind beide Repository-Methoden asynchron?",
        "Ein Repository bietet fachliche Methoden, die ihre Daten intern beziehen. Der Nutzer des Repositorys braucht die konkrete Quelle nicht zu kennen.",
        "Rufe deinen Baustein mit einem anderen Wert oder einem Grenzfall auf. Bei einer Funktion kannst du ihren Rückgabewert mit console.log untersuchen; bei Interaktionen löse das Ereignis mehrfach aus. So trennst du Rechen-, Zustands- und Darstellungsfehler."
      ],
      "tests": [
        {
          "label": "Schreibe repository(lade) mit async list() und async find(id), basierend auf lade().",
          "code": "typeof repository==='function' && await (async()=>{const repo=repository(async()=>[{id:1,name:'Ada'}]);return (await repo.list()).length===1 && (await repo.find(1)).name==='Ada' && await repo.find(9)===undefined})()"
        }
      ],
      "prerequisites": [
        "m19-09"
      ],
      "concept": {
        "example": "function quelle(laden) { return { async alle() { return laden(); } }; }",
        "explanation": "Ein Repository bietet fachliche Methoden, die ihre Daten intern beziehen. Der Nutzer des Repositorys braucht die konkrete Quelle nicht zu kennen.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Schreibe deinen Code im JavaScript-Editor. Die vorgegebene HTML-Struktur dient als Eingabe und Ausgabe."
        },
        {
          "label": "Verbindliche Namen",
          "text": "repository. Die Prüfung greift auf diese Namen zu; andere Hilfsvariablen darfst du frei wählen."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ein Repository bietet fachliche Methoden, die ihre Daten intern beziehen. Der Nutzer des Repositorys braucht die konkrete Quelle nicht zu kennen. Kapsle Datenzugriff in einem Objekt. Fachcode kennt nur list() und find(id), nicht fetch. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
