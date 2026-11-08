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
        "Liegt die Layoutregel am gemeinsamen Elternteil der Elemente?",
        "Das Layout wird auf dem Elternteil aktiviert. Die direkten Kinder werden dadurch nebeneinander angeordnet. Den Kindern selbst display:flex zu geben erzeugt stattdessen jeweils ein eigenes inneres Layout.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".row { display: flex; }",
        "explanation": "Das Layout wird auf dem Elternteil aktiviert. Die direkten Kinder werden dadurch nebeneinander angeordnet. Den Kindern selbst display:flex zu geben erzeugt stattdessen jeweils ein eigenes inneres Layout.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Das Layout wird auf dem Elternteil aktiviert. Die direkten Kinder werden dadurch nebeneinander angeordnet. Den Kindern selbst display:flex zu geben erzeugt stattdessen jeweils ein eigenes inneres Layout. Flexbox aktiviert man am Elternteil. Seine direkten Kinder werden Flex-Items. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hat der Container das passende Layout und dort einen Zwischenraum?",
        "gap schafft Platz zwischen den Kindern, nicht am äußeren Rand des Containers. Es ersetzt bei diesem Zweck viele einzelne Margins und bleibt auch beim Umordnen konsistent.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".row { display: flex; gap: 24px; }",
        "explanation": "gap schafft Platz zwischen den Kindern, nicht am äußeren Rand des Containers. Es ersetzt bei diesem Zweck viele einzelne Margins und bleibt auch beim Umordnen konsistent.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "gap schafft Platz zwischen den Kindern, nicht am äußeren Rand des Containers. Es ersetzt bei diesem Zweck viele einzelne Margins und bleibt auch beim Umordnen konsistent. gap verteilt einen gleichmäßigen Abstand zwischen Flex-Items. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Soll der freie Platz vor, hinter oder zwischen den Kindern liegen?",
        "justify-content verteilt freien Platz auf der Hauptachse. Bei einer normalen Flexzeile ist diese horizontal. Die Wirkung wird erst sichtbar, wenn der Container mehr Platz als seine Kinder besitzt.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".row { display: flex; justify-content: center; }",
        "explanation": "justify-content verteilt freien Platz auf der Hauptachse. Bei einer normalen Flexzeile ist diese horizontal. Die Wirkung wird erst sichtbar, wenn der Container mehr Platz als seine Kinder besitzt.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "justify-content verteilt freien Platz auf der Hauptachse. Bei einer normalen Flexzeile ist diese horizontal. Die Wirkung wird erst sichtbar, wenn der Container mehr Platz als seine Kinder besitzt. justify-content: space-between verteilt freien Platz zwischen den Items. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Geht es um die Hauptachse oder die Querachse?",
        "align-items arbeitet quer zur Hauptachse. In einer Zeile betrifft das die vertikale Ausrichtung. Verwechsle diese Eigenschaft nicht mit der Verteilung entlang der Zeile.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".row { display: flex; align-items: flex-start; }",
        "explanation": "align-items arbeitet quer zur Hauptachse. In einer Zeile betrifft das die vertikale Ausrichtung. Verwechsle diese Eigenschaft nicht mit der Verteilung entlang der Zeile.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "align-items arbeitet quer zur Hauptachse. In einer Zeile betrifft das die vertikale Ausrichtung. Verwechsle diese Eigenschaft nicht mit der Verteilung entlang der Zeile. align-items:center richtet die Kinder quer zur Hauptachse mittig aus. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Darf die Zeile bei wenig Platz tatsächlich umbrechen?",
        "Ohne erlaubten Umbruch versucht Flexbox die Kinder in einer Zeile unterzubringen. wrap gestattet zusätzliche Zeilen. Deren Höhe hängt vom Inhalt ab.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".row { display: flex; flex-wrap: wrap; }",
        "explanation": "Ohne erlaubten Umbruch versucht Flexbox die Kinder in einer Zeile unterzubringen. wrap gestattet zusätzliche Zeilen. Deren Höhe hängt vom Inhalt ab.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Ohne erlaubten Umbruch versucht Flexbox die Kinder in einer Zeile unterzubringen. wrap gestattet zusätzliche Zeilen. Deren Höhe hängt vom Inhalt ab. flex-wrap:wrap erlaubt neue Zeilen statt immer engerer Items. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Wie viele Spalten verlangt die Aufgabe und sollen ihre Anteile gleich groß sein?",
        "Grid legt Spalten explizit fest. fr teilt den freien Raum nach Anteilen auf; gleiche Anteile ergeben gleich breite Spalten. Die Kinder fließen in dieses Raster.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".board { display: grid; grid-template-columns: 2fr 1fr; }",
        "explanation": "Grid legt Spalten explizit fest. fr teilt den freien Raum nach Anteilen auf; gleiche Anteile ergeben gleich breite Spalten. Die Kinder fließen in dieses Raster.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Grid legt Spalten explizit fest. fr teilt den freien Raum nach Anteilen auf; gleiche Anteile ergeben gleich breite Spalten. Die Kinder fließen in dieses Raster. 1fr 1fr verteilt den verfügbaren Platz auf zwei gleiche Spalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Passen Wiederholungszahl und Abstand unabhängig voneinander?",
        "repeat wiederholt eine Spaltendefinition. Der erste Parameter ist die Anzahl, der zweite das zu wiederholende Muster. Zwischenräume werden getrennt mit gap angegeben.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".board { display: grid; grid-template-columns: repeat(4, 1fr); }",
        "explanation": "repeat wiederholt eine Spaltendefinition. Der erste Parameter ist die Anzahl, der zweite das zu wiederholende Muster. Zwischenräume werden getrennt mit gap angegeben.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "repeat wiederholt eine Spaltendefinition. Der erste Parameter ist die Anzahl, der zweite das zu wiederholende Muster. Zwischenräume werden getrennt mit gap angegeben. repeat(3,1fr) ist eine lesbare Kurzschreibweise für drei gleiche Spalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Welche Regel gehört zum Raster und welche zum ersten Artikel?",
        "Das Raster wird am Container festgelegt, das Überspannen dagegen am Kind. span beschreibt, wie viele Spalten dieses Kind belegt; es ändert nicht die allgemeine Spaltenzahl.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".board { display: grid; grid-template-columns: 1fr 1fr 1fr; } .feature { grid-column: span 3; }",
        "explanation": "Das Raster wird am Container festgelegt, das Überspannen dagegen am Kind. span beschreibt, wie viele Spalten dieses Kind belegt; es ändert nicht die allgemeine Spaltenzahl.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Das Raster wird am Container festgelegt, das Überspannen dagegen am Kind. span beschreibt, wie viele Spalten dieses Kind belegt; es ändert nicht die allgemeine Spaltenzahl. grid-column:span 2 überspannt zwei Rasterspalten. :first-child wählt das erste Geschwisterelement. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Ist die Spaltenzahl automatisch und die Kartenbreite nach unten begrenzt?",
        "auto-fit bestimmt die Anzahl passender Spalten aus dem verfügbaren Platz. minmax setzt eine Untergrenze und erlaubt Wachstum. Anders als bei einer festen Spaltenzahl reagiert das Raster damit auf seine Umgebung.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": ".board { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }",
        "explanation": "auto-fit bestimmt die Anzahl passender Spalten aus dem verfügbaren Platz. minmax setzt eine Untergrenze und erlaubt Wachstum. Anders als bei einer festen Spaltenzahl reagiert das Raster damit auf seine Umgebung.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "auto-fit bestimmt die Anzahl passender Spalten aus dem verfügbaren Platz. minmax setzt eine Untergrenze und erlaubt Wachstum. Anders als bei einer festen Spaltenzahl reagiert das Raster damit auf seine Umgebung. auto-fit erzeugt so viele Spalten wie passen. minmax(140px,1fr) lässt Karten mitwachsen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
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
        "Hast du Navigation und Kartenraster als zwei getrennte Layoutaufgaben behandelt?",
        "Eine Oberfläche kann mehrere Layoutsysteme kombinieren. Navigation und Karten sind verschiedene Container und brauchen eigene Regeln. Arbeite die beiden Bereiche nacheinander ab.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
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
      "concept": {
        "example": "header { display: flex; } main { display: grid; }",
        "explanation": "Eine Oberfläche kann mehrere Layoutsysteme kombinieren. Navigation und Karten sind verschiedene Container und brauchen eigene Regeln. Arbeite die beiden Bereiche nacheinander ab.",
        "note": "Dieses Beispiel zeigt die Technik mit anderen Inhalten. Übertrage das Prinzip auf die Aufgabe; kopiere nicht einfach die Beispielwerte."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Ergänze die Regeln im CSS-Editor. Die vorhandene HTML-Struktur bleibt erhalten."
        },
        {
          "label": "Frei gestaltbar",
          "text": "Einrückung, Leerzeilen und Hilfsvariablen sind frei. Zusätzliche Gestaltung ist erlaubt, solange sie die verlangte Funktion und DOM-Struktur erhält."
        }
      ],
      "examples": [],
      "solutionNotes": "Eine Oberfläche kann mehrere Layoutsysteme kombinieren. Navigation und Karten sind verschiedene Container und brauchen eigene Regeln. Arbeite die beiden Bereiche nacheinander ab. Kombiniere eine Flexnavigation mit einem Kartenraster. background und padding kennst du bereits. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
