window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m04",
  "title": "Layouts, die mitdenken",
  "city": "Bremen",
  "tag": "layout",
  "level": 2,
  "description": "Flexbox und Grid für echte Oberflächen.",
  "lesson": "display: flex verteilt Elemente auf einer Hauptachse. justify-content ordnet entlang dieser Achse, align-items quer dazu. gap schafft Zwischenräume; flex-wrap erlaubt Umbrüche. Grid ist ein Raster: grid-template-columns definiert Spalten, fr verteilt freien Platz, repeat wiederholt Muster. minmax setzt Unter- und Obergrenzen. Im HTML dieser Aufgaben ist das Layout bereits vorbereitet.",
  "exercises": [
    {
      "id": "m04-01",
      "title": "Alles in einer Reihe",
      "explanation": "Flexbox aktiviert man am Elternteil. Seine direkten Kinder werden Flex-Items.",
      "task": "Setze nav auf display: flex.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Alles in einer Reihe: Flexbox aktiviert man am Elternteil. Seine direkten Kinder werden Flex-Items. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nnav { display: flex; }",
        "js": ""
      },
      "hints": [
        "Flexbox aktiviert man am Elternteil. Seine direkten Kinder werden Flex-Items.",
        "Orientiere dich an diesem Baustein:\nnav { display: flex; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nnav { display: flex; }"
      ],
      "tests": [
        {
          "label": "Setze nav auf display: flex.",
          "code": "getComputedStyle(document.querySelector('nav')).display==='flex'"
        }
      ],
      "prerequisites": [
        "m03-10"
      ],
      "solutionNotes": "Flexbox aktiviert man am Elternteil. Seine direkten Kinder werden Flex-Items. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-02",
      "title": "Platz dazwischen",
      "explanation": "gap verteilt einen gleichmäßigen Abstand zwischen Flex-Items.",
      "task": "Gib nav display:flex und gap:16px.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Platz dazwischen: gap verteilt einen gleichmäßigen Abstand zwischen Flex-Items. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nnav { display: flex; gap: 16px; }",
        "js": ""
      },
      "hints": [
        "gap verteilt einen gleichmäßigen Abstand zwischen Flex-Items.",
        "Orientiere dich an diesem Baustein:\nnav { display: flex; gap: 16px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nnav { display: flex; gap: 16px; }"
      ],
      "tests": [
        {
          "label": "Gib nav display:flex und gap:16px.",
          "code": "getComputedStyle(document.querySelector('nav')).display==='flex' && getComputedStyle(document.querySelector('nav')).gap==='16px'"
        }
      ],
      "prerequisites": [
        "m04-01"
      ],
      "solutionNotes": "gap verteilt einen gleichmäßigen Abstand zwischen Flex-Items. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-03",
      "title": "An die beiden Ränder",
      "explanation": "justify-content: space-between verteilt freien Platz zwischen den Items.",
      "task": "Verteile die nav-Items mit space-between.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* An die beiden Ränder: justify-content: space-between verteilt freien Platz zwischen den Items. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nnav { display: flex; justify-content: space-between; }",
        "js": ""
      },
      "hints": [
        "justify-content: space-between verteilt freien Platz zwischen den Items.",
        "Orientiere dich an diesem Baustein:\nnav { display: flex; justify-content: space-between; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nnav { display: flex; justify-content: space-between; }"
      ],
      "tests": [
        {
          "label": "Verteile die nav-Items mit space-between.",
          "code": "getComputedStyle(document.querySelector('nav')).display==='flex' && getComputedStyle(document.querySelector('nav')).justifyContent==='space-between'"
        }
      ],
      "prerequisites": [
        "m04-02"
      ],
      "solutionNotes": "justify-content: space-between verteilt freien Platz zwischen den Items. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-04",
      "title": "Auf einer Linie",
      "explanation": "align-items:center richtet die Kinder quer zur Hauptachse mittig aus.",
      "task": "Zentriere die nav-Items mit align-items:center im Flexlayout.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Auf einer Linie: align-items:center richtet die Kinder quer zur Hauptachse mittig aus. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nnav { display: flex; align-items: center; min-height: 80px; }",
        "js": ""
      },
      "hints": [
        "align-items:center richtet die Kinder quer zur Hauptachse mittig aus.",
        "Orientiere dich an diesem Baustein:\nnav { display: flex; align-items: center; min-height: 80px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nnav { display: flex; align-items: center; min-height: 80px; }"
      ],
      "tests": [
        {
          "label": "Zentriere die nav-Items mit align-items:center im Flexlayout.",
          "code": "getComputedStyle(document.querySelector('nav')).display==='flex' && getComputedStyle(document.querySelector('nav')).alignItems==='center'"
        }
      ],
      "prerequisites": [
        "m04-03"
      ],
      "solutionNotes": "align-items:center richtet die Kinder quer zur Hauptachse mittig aus. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-05",
      "title": "Ein Umbruch ist erlaubt",
      "explanation": "flex-wrap:wrap erlaubt neue Zeilen statt immer engerer Items.",
      "task": "Erlaube nav als Flexlayout den Umbruch.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Ein Umbruch ist erlaubt: flex-wrap:wrap erlaubt neue Zeilen statt immer engerer Items. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nnav { display: flex; flex-wrap: wrap; gap: 16px; }",
        "js": ""
      },
      "hints": [
        "flex-wrap:wrap erlaubt neue Zeilen statt immer engerer Items.",
        "Orientiere dich an diesem Baustein:\nnav { display: flex; flex-wrap: wrap; gap: 16px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nnav { display: flex; flex-wrap: wrap; gap: 16px; }"
      ],
      "tests": [
        {
          "label": "Erlaube nav als Flexlayout den Umbruch.",
          "code": "getComputedStyle(document.querySelector('nav')).display==='flex' && getComputedStyle(document.querySelector('nav')).flexWrap==='wrap'"
        }
      ],
      "prerequisites": [
        "m04-04"
      ],
      "solutionNotes": "flex-wrap:wrap erlaubt neue Zeilen statt immer engerer Items. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-06",
      "title": "Dein erstes Raster",
      "explanation": "1fr 1fr verteilt den verfügbaren Platz auf zwei gleiche Spalten.",
      "task": "Gib .grid zwei gleich große Grid-Spalten.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Dein erstes Raster: 1fr 1fr verteilt den verfügbaren Platz auf zwei gleiche Spalten. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.grid { display: grid; grid-template-columns: 1fr 1fr; }",
        "js": ""
      },
      "hints": [
        "1fr 1fr verteilt den verfügbaren Platz auf zwei gleiche Spalten.",
        "Orientiere dich an diesem Baustein:\n.grid { display: grid; grid-template-columns: 1fr 1fr; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.grid { display: grid; grid-template-columns: 1fr 1fr; }"
      ],
      "tests": [
        {
          "label": "Gib .grid zwei gleich große Grid-Spalten.",
          "code": "getComputedStyle(document.querySelector('.grid')).display==='grid' && getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length===2"
        }
      ],
      "prerequisites": [
        "m04-05"
      ],
      "solutionNotes": "1fr 1fr verteilt den verfügbaren Platz auf zwei gleiche Spalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-07",
      "title": "Drei auf einen Streich",
      "explanation": "repeat(3,1fr) ist eine lesbare Kurzschreibweise für drei gleiche Spalten.",
      "task": "Erstelle drei gleich breite Spalten mit 12px gap.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Drei auf einen Streich: repeat(3,1fr) ist eine lesbare Kurzschreibweise für drei gleiche Spalten. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }",
        "js": ""
      },
      "hints": [
        "repeat(3,1fr) ist eine lesbare Kurzschreibweise für drei gleiche Spalten.",
        "Orientiere dich an diesem Baustein:\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }"
      ],
      "tests": [
        {
          "label": "Erstelle drei gleich breite Spalten mit 12px gap.",
          "code": "getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length===3 && getComputedStyle(document.querySelector('.grid')).gap==='12px'"
        }
      ],
      "prerequisites": [
        "m04-06"
      ],
      "solutionNotes": "repeat(3,1fr) ist eine lesbare Kurzschreibweise für drei gleiche Spalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-08",
      "title": "Eine Karte darf größer sein",
      "explanation": "grid-column:span 2 überspannt zwei Rasterspalten. :first-child wählt das erste Geschwisterelement.",
      "task": "Lass den ersten article im zweispaltigen Raster beide Spalten belegen.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Eine Karte darf größer sein: grid-column:span 2 überspannt zwei Rasterspalten. :first-child wählt das erste Geschwisterelement. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.grid { display: grid; grid-template-columns: 1fr 1fr; }\narticle:first-child { grid-column: span 2; }",
        "js": ""
      },
      "hints": [
        "grid-column:span 2 überspannt zwei Rasterspalten. :first-child wählt das erste Geschwisterelement.",
        "Orientiere dich an diesem Baustein:\n.grid { display: grid; grid-template-columns: 1fr 1fr; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\narticle:first-child { grid-column: span 2; }"
      ],
      "tests": [
        {
          "label": "Lass den ersten article im zweispaltigen Raster beide Spalten belegen.",
          "code": "getComputedStyle(document.querySelector('.grid')).display==='grid' && getComputedStyle(document.querySelector('article')).gridColumnStart==='span 2'"
        }
      ],
      "prerequisites": [
        "m04-07"
      ],
      "solutionNotes": "grid-column:span 2 überspannt zwei Rasterspalten. :first-child wählt das erste Geschwisterelement. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-09",
      "title": "Automatisch passende Karten",
      "explanation": "auto-fit erzeugt so viele Spalten wie passen. minmax(140px,1fr) lässt Karten mitwachsen.",
      "task": "Baue .grid mit repeat(auto-fit,minmax(140px,1fr)) und 16px gap.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Automatisch passende Karten: auto-fit erzeugt so viele Spalten wie passen. minmax(140px,1fr) lässt Karten mitwachsen. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; }",
        "js": ""
      },
      "hints": [
        "auto-fit erzeugt so viele Spalten wie passen. minmax(140px,1fr) lässt Karten mitwachsen.",
        "Orientiere dich an diesem Baustein:\n.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; }"
      ],
      "tests": [
        {
          "label": "Baue .grid mit repeat(auto-fit,minmax(140px,1fr)) und 16px gap.",
          "code": "getComputedStyle(document.querySelector('.grid')).display==='grid' && getComputedStyle(document.querySelector('.grid')).gap==='16px' && [...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.cssText.includes('auto-fit') && r.cssText.includes('140px')))"
        }
      ],
      "prerequisites": [
        "m04-08"
      ],
      "solutionNotes": "auto-fit erzeugt so viele Spalten wie passen. minmax(140px,1fr) lässt Karten mitwachsen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    },
    {
      "id": "m04-10",
      "title": "Projekt: Ein kleines Dashboard",
      "explanation": "Kombiniere eine Flexnavigation mit einem Kartenraster. background und padding kennst du bereits.",
      "task": "Baue eine Flex-nav mit space-between und ein zweispaltiges Grid mit 16px gap.",
      "minutes": 12,
      "xp": 35,
      "focus": "css",
      "starter": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<nav><a href=\"#\">Start</a><a href=\"#\">Reise</a><button>Profil</button></nav><main class=\"grid\"><article>A</article><article>B</article><article>C</article><article>D</article></main>",
        "css": "/* Projekt: Ein kleines Dashboard: Kombiniere eine Flexnavigation mit einem Kartenraster. background und padding kennst du bereits. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nnav { display: flex; justify-content: space-between; margin-bottom: 24px; }\n.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }\narticle { background: white; padding: 24px; border-radius: 12px; }",
        "js": ""
      },
      "hints": [
        "Kombiniere eine Flexnavigation mit einem Kartenraster. background und padding kennst du bereits.",
        "Orientiere dich an diesem Baustein:\nnav { display: flex; justify-content: space-between; margin-bottom: 24px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\narticle { background: white; padding: 24px; border-radius: 12px; }"
      ],
      "tests": [
        {
          "label": "Baue eine Flex-nav mit space-between und ein zweispaltiges Grid mit 16px gap.",
          "code": "getComputedStyle(document.querySelector('nav')).display==='flex' && getComputedStyle(document.querySelector('nav')).justifyContent==='space-between' && getComputedStyle(document.querySelector('.grid')).display==='grid' && getComputedStyle(document.querySelector('.grid')).gridTemplateColumns.split(' ').length===2 && getComputedStyle(document.querySelector('.grid')).gap==='16px'"
        }
      ],
      "prerequisites": [
        "m04-09"
      ],
      "solutionNotes": "Kombiniere eine Flexnavigation mit einem Kartenraster. background und padding kennst du bereits. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
