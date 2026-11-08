window.CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM.push({
  "id": "m05",
  "title": "Modernes, responsives CSS",
  "city": "Hannover",
  "tag": "responsive",
  "level": 2,
  "description": "Fließende Größen, Container Queries und Bewegung mit Rücksicht.",
  "lesson": "Responsive Gestaltung passt sich dem verfügbaren Raum an. @media fragt die Fensterbreite oder Benutzereinstellungen ab. clamp(min,ideal,max) begrenzt fließende Werte; vw entspricht 1% der Fensterbreite. Container Queries reagieren auf ein Elternelement mit container-type:inline-size. aspect-ratio hält Proportionen. prefers-reduced-motion berücksichtigt reduzierte Bewegung. Moderne Funktionen erhalten sinnvoll voreingestellte Grundstile als Rückfall.",
  "exercises": [
    {
      "id": "m05-01",
      "title": "Eine begrenzte Lesebreite",
      "explanation": "max-width verhindert überlange Textzeilen; width:100% nutzt auf kleinen Geräten den vorhandenen Raum.",
      "task": "Begrenze .card auf max-width:640px bei width:100%.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Eine begrenzte Lesebreite: max-width verhindert überlange Textzeilen; width:100% nutzt auf kleinen Geräten den vorhandenen Raum. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { width: 100%; max-width: 640px; box-sizing: border-box; }",
        "js": ""
      },
      "hints": [
        "Begrenzt du nur die Maximalbreite, ohne eine unnötige starre Mindestbreite einzubauen?",
        "width beschreibt den gewünschten Platz, max-width begrenzt ihn nach oben. Auf schmalen Flächen kann das Element kleiner bleiben. Eine maximale Lesebreite verhindert sehr lange Zeilen.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Begrenze .card auf max-width:640px bei width:100%.",
          "code": "getComputedStyle(document.querySelector('.card')).maxWidth==='640px'"
        }
      ],
      "prerequisites": [
        "m04-10"
      ],
      "concept": {
        "example": ".text { width: 100%; max-width: 720px; }",
        "explanation": "width beschreibt den gewünschten Platz, max-width begrenzt ihn nach oben. Auf schmalen Flächen kann das Element kleiner bleiben. Eine maximale Lesebreite verhindert sehr lange Zeilen.",
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
      "solutionNotes": "width beschreibt den gewünschten Platz, max-width begrenzt ihn nach oben. Auf schmalen Flächen kann das Element kleiner bleiben. Eine maximale Lesebreite verhindert sehr lange Zeilen. max-width verhindert überlange Textzeilen; width:100% nutzt auf kleinen Geräten den vorhandenen Raum. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-02",
      "title": "Eine fließende Überschrift",
      "explanation": "clamp(24px,5vw,48px) wächst mit dem Fenster, bleibt aber in sinnvollen Grenzen.",
      "task": "Setze h1 font-size auf clamp(24px,5vw,48px).",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Eine fließende Überschrift: clamp(24px,5vw,48px) wächst mit dem Fenster, bleibt aber in sinnvollen Grenzen. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nh1 { font-size: clamp(24px, 5vw, 48px); }",
        "js": ""
      },
      "hints": [
        "Sind Minimum, Wunschwert und Maximum in der richtigen Reihenfolge angegeben?",
        "clamp erhält eine Untergrenze, einen fließenden Wunschwert und eine Obergrenze. Die Reihenfolge dieser drei Werte ist entscheidend. vw reagiert auf die Breite der Vorschau, nicht auf die Textlänge.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Setze h1 font-size auf clamp(24px,5vw,48px).",
          "code": "[...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.style?.fontSize==='clamp(24px, 5vw, 48px)'))"
        }
      ],
      "prerequisites": [
        "m05-01"
      ],
      "concept": {
        "example": "h2 { font-size: clamp(20px, 4vw, 40px); }",
        "explanation": "clamp erhält eine Untergrenze, einen fließenden Wunschwert und eine Obergrenze. Die Reihenfolge dieser drei Werte ist entscheidend. vw reagiert auf die Breite der Vorschau, nicht auf die Textlänge.",
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
      "solutionNotes": "clamp erhält eine Untergrenze, einen fließenden Wunschwert und eine Obergrenze. Die Reihenfolge dieser drei Werte ist entscheidend. vw reagiert auf die Breite der Vorschau, nicht auf die Textlänge. clamp(24px,5vw,48px) wächst mit dem Fenster, bleibt aber in sinnvollen Grenzen. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-03",
      "title": "Ein quadratisches Motiv",
      "explanation": "aspect-ratio:1 hält eine Box quadratisch, wenn nur eine Dimension feststeht.",
      "task": "Gib .visual width:160px und aspect-ratio:1.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Ein quadratisches Motiv: aspect-ratio:1 hält eine Box quadratisch, wenn nur eine Dimension feststeht. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.visual { width: 160px; aspect-ratio: 1; background: #c9e9d4; }",
        "js": ""
      },
      "hints": [
        "Ist die Höhe noch automatisch, damit das Seitenverhältnis wirken kann?",
        "Ein Seitenverhältnis braucht eine freie Dimension. Bei festgelegter Breite und automatischer Höhe kann der Browser die passende Höhe berechnen. Eine zweite feste Dimension könnte das Verhältnis überstimmen.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Gib .visual width:160px und aspect-ratio:1.",
          "code": "getComputedStyle(document.querySelector('.visual')).aspectRatio==='1 / 1' && Math.round(document.querySelector('.visual').getBoundingClientRect().height)===160"
        }
      ],
      "prerequisites": [
        "m05-02"
      ],
      "concept": {
        "example": ".portrait { width: 96px; aspect-ratio: 1; }",
        "explanation": "Ein Seitenverhältnis braucht eine freie Dimension. Bei festgelegter Breite und automatischer Höhe kann der Browser die passende Höhe berechnen. Eine zweite feste Dimension könnte das Verhältnis überstimmen.",
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
      "solutionNotes": "Ein Seitenverhältnis braucht eine freie Dimension. Bei festgelegter Breite und automatischer Höhe kann der Browser die passende Höhe berechnen. Eine zweite feste Dimension könnte das Verhältnis überstimmen. aspect-ratio:1 hält eine Box quadratisch, wenn nur eine Dimension feststeht. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-04",
      "title": "Mobile zuerst",
      "explanation": "Grundstile gelten überall; @media(min-width:600px) erweitert sie auf größeren Fenstern.",
      "task": "Setze .card auf 16px padding und ab 600px auf 32px.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Mobile zuerst: Grundstile gelten überall; @media(min-width:600px) erweitert sie auf größeren Fenstern. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { padding: 16px; }\n@media (min-width: 600px) { .card { padding: 32px; } }",
        "js": ""
      },
      "hints": [
        "Hast du einen Grundwert und eine davon getrennte Regel für breitere Vorschauen?",
        "Die Grundregel gilt zuerst überall. Eine Media Query überschreibt sie nur bei erfüllter Bedingung. min-width bedeutet ab einschließlich der angegebenen Breite.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Setze .card auf 16px padding und ab 600px auf 32px.",
          "code": "getComputedStyle(document.querySelector('.card')).paddingTop===(innerWidth>=600?'32px':'16px') && [...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.conditionText?.includes('600px')))"
        }
      ],
      "prerequisites": [
        "m05-03"
      ],
      "concept": {
        "example": ".panel { padding: 12px; } @media (min-width: 800px) { .panel { padding: 28px; } }",
        "explanation": "Die Grundregel gilt zuerst überall. Eine Media Query überschreibt sie nur bei erfüllter Bedingung. min-width bedeutet ab einschließlich der angegebenen Breite.",
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
      "solutionNotes": "Die Grundregel gilt zuerst überall. Eine Media Query überschreibt sie nur bei erfüllter Bedingung. min-width bedeutet ab einschließlich der angegebenen Breite. Grundstile gelten überall; @media(min-width:600px) erweitert sie auf größeren Fenstern. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-05",
      "title": "Logische Abstände",
      "explanation": "padding-inline wirkt in Schreibrichtung links/rechts, padding-block oben/unten.",
      "task": "Setze .card padding-inline:24px und padding-block:16px.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Logische Abstände: padding-inline wirkt in Schreibrichtung links/rechts, padding-block oben/unten. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { padding-inline: 24px; padding-block: 16px; }",
        "js": ""
      },
      "hints": [
        "Welche Abstandsrichtung entspricht inline und welche block?",
        "Logische Eigenschaften orientieren sich an der Schreibrichtung. Bei deutschem Text ist inline normalerweise horizontal und block vertikal. Dadurch bleiben Layouts auch bei anderen Schreibrichtungen verständlich.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Setze .card padding-inline:24px und padding-block:16px.",
          "code": "getComputedStyle(document.querySelector('.card')).paddingLeft==='24px' && getComputedStyle(document.querySelector('.card')).paddingTop==='16px'"
        }
      ],
      "prerequisites": [
        "m05-04"
      ],
      "concept": {
        "example": ".panel { padding-inline: 20px; padding-block: 10px; }",
        "explanation": "Logische Eigenschaften orientieren sich an der Schreibrichtung. Bei deutschem Text ist inline normalerweise horizontal und block vertikal. Dadurch bleiben Layouts auch bei anderen Schreibrichtungen verständlich.",
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
      "solutionNotes": "Logische Eigenschaften orientieren sich an der Schreibrichtung. Bei deutschem Text ist inline normalerweise horizontal und block vertikal. Dadurch bleiben Layouts auch bei anderen Schreibrichtungen verständlich. padding-inline wirkt in Schreibrichtung links/rechts, padding-block oben/unten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-06",
      "title": "Der Container zählt",
      "explanation": "container-type:inline-size macht .shell für Größenabfragen ihrer Kinder verfügbar.",
      "task": "Aktiviere inline-size auf .shell und färbe .card ab Containerbreite 400px weiß.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Der Container zählt: container-type:inline-size macht .shell für Größenabfragen ihrer Kinder verfügbar. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.shell { container-type: inline-size; }\n.card { background: #e4efe8; }\n@container (min-width: 400px) { .card { background: white; } }",
        "js": ""
      },
      "hints": [
        "Ist der abgefragte Container ein Elternteil des Elements, das die Query verändert?",
        "Der Container erklärt zuerst, dass seine Inline-Größe abgefragt werden darf. Die Query gestaltet einen Nachfahren dieses Containers. Sie fragt nicht einfach die Fensterbreite ab.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Aktiviere inline-size auf .shell und färbe .card ab Containerbreite 400px weiß.",
          "code": "getComputedStyle(document.querySelector('.shell')).containerType==='inline-size' && [...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.constructor.name==='CSSContainerRule'))"
        }
      ],
      "prerequisites": [
        "m05-05"
      ],
      "concept": {
        "example": ".host { container-type: inline-size; } @container (min-width: 500px) { .child { color: navy; } }",
        "explanation": "Der Container erklärt zuerst, dass seine Inline-Größe abgefragt werden darf. Die Query gestaltet einen Nachfahren dieses Containers. Sie fragt nicht einfach die Fensterbreite ab.",
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
      "solutionNotes": "Der Container erklärt zuerst, dass seine Inline-Größe abgefragt werden darf. Die Query gestaltet einen Nachfahren dieses Containers. Sie fragt nicht einfach die Fensterbreite ab. container-type:inline-size macht .shell für Größenabfragen ihrer Kinder verfügbar. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-07",
      "title": "Ein sanfter Zustandswechsel",
      "explanation": "transition beschreibt Eigenschaft, Dauer und Timing. :hover gilt beim Darüberfahren.",
      "task": "Gib button eine background-color-Transition von 0.2s und einen Hover-Stil.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Ein sanfter Zustandswechsel: transition beschreibt Eigenschaft, Dauer und Timing. :hover gilt beim Darüberfahren. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nbutton { background-color: white; transition: background-color .2s ease; }\nbutton:hover { background-color: #c9e9d4; }",
        "js": ""
      },
      "hints": [
        "Übergang und Zustandsregel beziehen sich auf dieselbe Eigenschaft?",
        "Der Grundzustand nennt die Transition. Ein zweiter Zustand ändert die passende Eigenschaft. Die Dauer wird üblicherweise in Sekunden geschrieben; .3s entspricht 300 Millisekunden.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Gib button eine background-color-Transition von 0.2s und einen Hover-Stil.",
          "code": "getComputedStyle(document.querySelector('button')).transitionDuration==='0.2s' && getComputedStyle(document.querySelector('button')).transitionProperty==='background-color'"
        }
      ],
      "prerequisites": [
        "m05-06"
      ],
      "concept": {
        "example": "a { transition: color .3s ease; } a:hover { color: navy; }",
        "explanation": "Der Grundzustand nennt die Transition. Ein zweiter Zustand ändert die passende Eigenschaft. Die Dauer wird üblicherweise in Sekunden geschrieben; .3s entspricht 300 Millisekunden.",
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
      "solutionNotes": "Der Grundzustand nennt die Transition. Ein zweiter Zustand ändert die passende Eigenschaft. Die Dauer wird üblicherweise in Sekunden geschrieben; .3s entspricht 300 Millisekunden. transition beschreibt Eigenschaft, Dauer und Timing. :hover gilt beim Darüberfahren. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-08",
      "title": "Bewegung respektieren",
      "explanation": "Eine Media Query für prefers-reduced-motion:reduce kann Transitionen abschalten.",
      "task": "Schalte button-Transitionen bei reduzierter Bewegung mit transition:none ab.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Bewegung respektieren: Eine Media Query für prefers-reduced-motion:reduce kann Transitionen abschalten. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\nbutton { transition: transform .2s; }\n@media (prefers-reduced-motion: reduce) { button { transition: none; } }",
        "js": ""
      },
      "hints": [
        "Überschreibt die Regel innerhalb der passenden Media Query die normale Transition?",
        "Die Abfrage beschreibt eine Benutzereinstellung. Eine darin gesetzte Regel überschreibt die normale Bewegung. Ohne aktivierte Einstellung muss die normale Darstellung weiterhin funktionieren.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Schalte button-Transitionen bei reduzierter Bewegung mit transition:none ab.",
          "code": "[...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.conditionText?.includes('prefers-reduced-motion: reduce') && [...r.cssRules].some(x=>x.style?.transition==='none')))"
        }
      ],
      "prerequisites": [
        "m05-07"
      ],
      "concept": {
        "example": "@media (prefers-reduced-motion: reduce) { a { transition: none; } }",
        "explanation": "Die Abfrage beschreibt eine Benutzereinstellung. Eine darin gesetzte Regel überschreibt die normale Bewegung. Ohne aktivierte Einstellung muss die normale Darstellung weiterhin funktionieren.",
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
      "solutionNotes": "Die Abfrage beschreibt eine Benutzereinstellung. Eine darin gesetzte Regel überschreibt die normale Bewegung. Ohne aktivierte Einstellung muss die normale Darstellung weiterhin funktionieren. Eine Media Query für prefers-reduced-motion:reduce kann Transitionen abschalten. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-09",
      "title": "Eine eigene Farbwelt",
      "explanation": "color-scheme informiert native Steuerelemente. Eigene Farben setzt du über Variablen und eine passende Media Query.",
      "task": "Setze color-scheme:light dark auf :root und definiere --surface. ",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Eine eigene Farbwelt: color-scheme informiert native Steuerelemente. Eigene Farben setzt du über Variablen und eine passende Media Query. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n:root { color-scheme: light dark; --surface: #f6f8f5; }\n@media (prefers-color-scheme: dark) { :root { --surface: #1e2924; } }\nbody { background: var(--surface); }",
        "js": ""
      },
      "hints": [
        "Sind Farbvariable, Verwendung und unterstützte Farbschemata getrennt berücksichtigt?",
        "Farbvariablen trennen Designwerte von ihrer Verwendung. color-scheme informiert zusätzlich native Steuerelemente über unterstützte Darstellungen. Eine dunkle Hintergrundfarbe allein ersetzt diese Information nicht.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Setze color-scheme:light dark auf :root und definiere --surface. ",
          "code": "getComputedStyle(document.documentElement).colorScheme==='light dark' && !!getComputedStyle(document.documentElement).getPropertyValue('--surface')"
        }
      ],
      "prerequisites": [
        "m05-08"
      ],
      "concept": {
        "example": ":root { --paper: white; } @media (prefers-color-scheme: dark) { :root { --paper: #202020; } }",
        "explanation": "Farbvariablen trennen Designwerte von ihrer Verwendung. color-scheme informiert zusätzlich native Steuerelemente über unterstützte Darstellungen. Eine dunkle Hintergrundfarbe allein ersetzt diese Information nicht.",
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
      "solutionNotes": "Farbvariablen trennen Designwerte von ihrer Verwendung. color-scheme informiert zusätzlich native Steuerelemente über unterstützte Darstellungen. Eine dunkle Hintergrundfarbe allein ersetzt diese Information nicht. color-scheme informiert native Steuerelemente. Eigene Farben setzt du über Variablen und eine passende Media Query. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    },
    {
      "id": "m05-10",
      "title": "Projekt: Adaptive Profilkarte",
      "explanation": "Eine robuste Karte verbindet Lesebreite, fließende Schrift und ein proportionales Motiv.",
      "task": "Kombiniere max-width:640px für .card, clamp-Schrift für h1 und aspect-ratio:1 für .visual.",
      "minutes": 12,
      "xp": 40,
      "focus": "css",
      "starter": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "body { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n/* Ergänze deine CSS-Regeln hier. */",
        "js": ""
      },
      "solution": {
        "html": "<main class=\"shell\"><article class=\"card\"><h1>Große Ideen. Kleine Schritte.</h1><p>Auf jedem Bildschirm zu Hause.</p><div class=\"visual\">WEB</div><button>Entdecken</button></article></main>",
        "css": "/* Projekt: Adaptive Profilkarte: Eine robuste Karte verbindet Lesebreite, fließende Schrift und ein proportionales Motiv. */\nbody { font-family: system-ui, sans-serif; padding: 24px; color: #24342d; background: #f6f8f5; }\n#output { white-space: pre-wrap; }\nbutton, input, select { font: inherit; padding: .6em; }\n\n.card { max-width: 640px; padding: 24px; background: white; border-radius: 24px; }\nh1 { font-size: clamp(24px, 5vw, 48px); }\n.visual { width: 120px; aspect-ratio: 1; background: #c9e9d4; border-radius: 50%; }",
        "js": ""
      },
      "hints": [
        "Bleiben Text und Motiv bei schmaler und breiter Vorschau sinnvoll proportioniert?",
        "Responsive Gestaltung ist eine Kombination aus Grenzen, Wachstum und Proportionen. Teste die Karte in mehreren Vorschaubreiten. Ein guter Desktopstil darf auf einer schmalen Fläche nicht unbenutzbar werden.",
        "Prüfe den Selektor, dann Eigenschaft und Einheit einzeln. Beachte spätere Regeln für dasselbe Element: Sie können einen früheren Wert überschreiben. Verändere zum Gegencheck kurz eine einzelne Eigenschaft und führe erneut aus."
      ],
      "tests": [
        {
          "label": "Kombiniere max-width:640px für .card, clamp-Schrift für h1 und aspect-ratio:1 für .visual.",
          "code": "getComputedStyle(document.querySelector('.card')).maxWidth==='640px' && getComputedStyle(document.querySelector('.visual')).aspectRatio==='1 / 1' && [...document.styleSheets].some(s=>[...s.cssRules].some(r=>r.style?.fontSize.includes('clamp')))"
        }
      ],
      "prerequisites": [
        "m05-09"
      ],
      "concept": {
        "example": ".card { max-width: 720px; } h2 { font-size: clamp(20px, 4vw, 40px); }",
        "explanation": "Responsive Gestaltung ist eine Kombination aus Grenzen, Wachstum und Proportionen. Teste die Karte in mehreren Vorschaubreiten. Ein guter Desktopstil darf auf einer schmalen Fläche nicht unbenutzbar werden.",
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
      "solutionNotes": "Responsive Gestaltung ist eine Kombination aus Grenzen, Wachstum und Proportionen. Teste die Karte in mehreren Vorschaubreiten. Ein guter Desktopstil darf auf einer schmalen Fläche nicht unbenutzbar werden. Eine robuste Karte verbindet Lesebreite, fließende Schrift und ein proportionales Motiv. Vergleiche den Aufbau der Musterlösung mit deinem eigenen Ansatz. Entscheidend sind die vereinbarten Eingaben, Rückgaben und sichtbaren Wirkungen, nicht identischer Quelltext."
    }
  ]
});
