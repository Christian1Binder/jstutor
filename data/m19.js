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
        "Jeder Fabrikaufruf erhält seine eigene lokale Variable. Zurückgegebene Methoden behalten darauf Zugriff.",
        "Orientiere dich an diesem Baustein:\nfunction zaehler(start=0) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Jeder Fabrikaufruf erhält seine eigene lokale Variable. Zurückgegebene Methoden behalten darauf Zugriff. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Dependency Injection übergibt einen Dienst von außen. Das macht Fachlogik unabhängig vom konkreten Netzwerk.",
        "Orientiere dich an diesem Baustein:\nfunction namenLader(lade) { return async () => (await lade()).map(x=>x.name); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nfunction namenLader(lade) { return async () => (await lade()).map(x=>x.name); }"
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
      "solutionNotes": "Dependency Injection übergibt einen Dienst von außen. Das macht Fachlogik unabhängig vom konkreten Netzwerk. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Map.has unterscheidet einen gespeicherten undefined-Wert von einem fehlenden Schlüssel.",
        "Orientiere dich an diesem Baustein:\nfunction memo(fn) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Map.has unterscheidet einen gespeicherten undefined-Wert von einem fehlenden Schlüssel. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Set vermeidet doppelte Listener. Gib zur Anmeldung eine Abmeldefunktion zurück.",
        "Orientiere dich an diesem Baustein:\nfunction bus() {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein Set vermeidet doppelte Listener. Gib zur Anmeldung eine Abmeldefunktion zurück. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Der Store hält Zustand privat und informiert nach einem Update seine Abonnenten.",
        "Orientiere dich an diesem Baustein:\nfunction store(initial) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Der Store hält Zustand privat und informiert nach einem Update seine Abonnenten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Debounce startet bei jedem Aufruf den Timer neu. Erst der letzte Aufruf nach der Ruhezeit läuft.",
        "Orientiere dich an diesem Baustein:\nfunction debounce(fn, ms) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Debounce startet bei jedem Aufruf den Timer neu. Erst der letzte Aufruf nach der Ruhezeit läuft. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein führendes Throttle ruft sofort auf und ignoriert weitere Aufrufe bis zum nächsten Zeitfenster. Date.now liefert Millisekunden.",
        "Orientiere dich an diesem Baustein:\nfunction throttle(fn, ms) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein führendes Throttle ruft sofort auf und ignoriert weitere Aufrufe bis zum nächsten Zeitfenster. Date.now liefert Millisekunden. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine fortlaufende Anfrage-ID verhindert, dass alte, langsamere Antworten neue Daten überschreiben.",
        "Orientiere dich an diesem Baustein:\nfunction neueste(lade, zeige) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Eine fortlaufende Anfrage-ID verhindert, dass alte, langsamere Antworten neue Daten überschreiben. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Ein Retry braucht eine feste Obergrenze. Ein Fehler nach allen Versuchen wird weitergegeben.",
        "Orientiere dich an diesem Baustein:\nasync function retry(fn, versuche) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Ein Retry braucht eine feste Obergrenze. Ein Fehler nach allen Versuchen wird weitergegeben. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Kapsle Datenzugriff in einem Objekt. Fachcode kennt nur list() und find(id), nicht fetch.",
        "Orientiere dich an diesem Baustein:\nfunction repository(lade) {",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n}"
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
      "solutionNotes": "Kapsle Datenzugriff in einem Objekt. Fachcode kennt nur list() und find(id), nicht fetch. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
