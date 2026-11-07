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
        "max-width verhindert überlange Textzeilen; width:100% nutzt auf kleinen Geräten den vorhandenen Raum.",
        "Orientiere dich an diesem Baustein:\n.card { width: 100%; max-width: 640px; box-sizing: border-box; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.card { width: 100%; max-width: 640px; box-sizing: border-box; }"
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
      "solutionNotes": "max-width verhindert überlange Textzeilen; width:100% nutzt auf kleinen Geräten den vorhandenen Raum. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "clamp(24px,5vw,48px) wächst mit dem Fenster, bleibt aber in sinnvollen Grenzen.",
        "Orientiere dich an diesem Baustein:\nh1 { font-size: clamp(24px, 5vw, 48px); }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nh1 { font-size: clamp(24px, 5vw, 48px); }"
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
      "solutionNotes": "clamp(24px,5vw,48px) wächst mit dem Fenster, bleibt aber in sinnvollen Grenzen. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "aspect-ratio:1 hält eine Box quadratisch, wenn nur eine Dimension feststeht.",
        "Orientiere dich an diesem Baustein:\n.visual { width: 160px; aspect-ratio: 1; background: #c9e9d4; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.visual { width: 160px; aspect-ratio: 1; background: #c9e9d4; }"
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
      "solutionNotes": "aspect-ratio:1 hält eine Box quadratisch, wenn nur eine Dimension feststeht. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Grundstile gelten überall; @media(min-width:600px) erweitert sie auf größeren Fenstern.",
        "Orientiere dich an diesem Baustein:\n.card { padding: 16px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n@media (min-width: 600px) { .card { padding: 32px; } }"
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
      "solutionNotes": "Grundstile gelten überall; @media(min-width:600px) erweitert sie auf größeren Fenstern. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "padding-inline wirkt in Schreibrichtung links/rechts, padding-block oben/unten.",
        "Orientiere dich an diesem Baustein:\n.card { padding-inline: 24px; padding-block: 16px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.card { padding-inline: 24px; padding-block: 16px; }"
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
      "solutionNotes": "padding-inline wirkt in Schreibrichtung links/rechts, padding-block oben/unten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "container-type:inline-size macht .shell für Größenabfragen ihrer Kinder verfügbar.",
        "Orientiere dich an diesem Baustein:\n.shell { container-type: inline-size; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n@container (min-width: 400px) { .card { background: white; } }"
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
      "solutionNotes": "container-type:inline-size macht .shell für Größenabfragen ihrer Kinder verfügbar. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "transition beschreibt Eigenschaft, Dauer und Timing. :hover gilt beim Darüberfahren.",
        "Orientiere dich an diesem Baustein:\nbutton { background-color: white; transition: background-color .2s ease; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nbutton:hover { background-color: #c9e9d4; }"
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
      "solutionNotes": "transition beschreibt Eigenschaft, Dauer und Timing. :hover gilt beim Darüberfahren. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine Media Query für prefers-reduced-motion:reduce kann Transitionen abschalten.",
        "Orientiere dich an diesem Baustein:\nbutton { transition: transform .2s; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n@media (prefers-reduced-motion: reduce) { button { transition: none; } }"
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
      "solutionNotes": "Eine Media Query für prefers-reduced-motion:reduce kann Transitionen abschalten. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "color-scheme informiert native Steuerelemente. Eigene Farben setzt du über Variablen und eine passende Media Query.",
        "Orientiere dich an diesem Baustein:\n:root { color-scheme: light dark; --surface: #f6f8f5; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\nbody { background: var(--surface); }"
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
      "solutionNotes": "color-scheme informiert native Steuerelemente. Eigene Farben setzt du über Variablen und eine passende Media Query. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
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
        "Eine robuste Karte verbindet Lesebreite, fließende Schrift und ein proportionales Motiv.",
        "Orientiere dich an diesem Baustein:\n.card { max-width: 640px; padding: 24px; background: white; border-radius: 24px; }",
        "Arbeite in kleinen Schritten: erst den Kern umsetzen, dann Ausführen und Prüfen. Bei Funktionen teste zusätzlich andere Eingaben in console.log.\n.visual { width: 120px; aspect-ratio: 1; background: #c9e9d4; border-radius: 50%; }"
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
      "solutionNotes": "Eine robuste Karte verbindet Lesebreite, fließende Schrift und ein proportionales Motiv. Die Musterlösung setzt den beschriebenen Vertrag direkt um. Prüfe danach einen abweichenden Wert oder ergänze eine eigene Gestaltung. Die sichtbaren Prüfungen decken konkrete Anforderungen ab; sie sind kein vollständiger Beweis für alle möglichen Eingaben."
    }
  ]
});
