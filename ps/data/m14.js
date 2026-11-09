window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m14",
  "title": "Suchmuster und reguläre Ausdrücke",
  "city": "Köln",
  "description": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
  "lesson": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
  "tag": "ps-14",
  "level": 4,
  "exercises": [
    {
      "id": "m14-01",
      "title": "Namenspräfix",
      "task": "Prüfe, ob $name zum Muster SRV-* passt.",
      "explanation": "In dieser Übung übst du: Namenspräfix. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Prüfe, ob $name zum Muster SRV-* passt."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "True"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"SRV-NORD\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"SRV-NORD\"\n$name -like \"SRV-*\""
      },
      "solutionNotes": "Die Lösung zu „Namenspräfix“ nutzt SRV-NORD, -like. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Prüfe, ob $name zum Muster SRV-* passt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind SRV-NORD, -like. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "True"
          ]
        }
      ],
      "prerequisites": [
        "m13-10"
      ],
      "minutes": 8,
      "xp": 63,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-02",
      "title": "Dateiendung",
      "task": "Prüfe, ob $name zum Muster *.csv passt.",
      "explanation": "In dieser Übung übst du: Dateiendung. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Prüfe, ob $name zum Muster *.csv passt."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "True"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"bericht.csv\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"bericht.csv\"\n$name -like \"*.csv\""
      },
      "solutionNotes": "Die Lösung zu „Dateiendung“ nutzt -like. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Prüfe, ob $name zum Muster *.csv passt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -like. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "True"
          ]
        }
      ],
      "prerequisites": [
        "m14-01"
      ],
      "minutes": 9,
      "xp": 64,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-03",
      "title": "Nur Ziffern",
      "task": "Prüfe, ob $text ausschließlich eine oder mehrere Ziffern enthält.",
      "explanation": "In dieser Übung übst du: Nur Ziffern. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Prüfe, ob $text ausschließlich eine oder mehrere Ziffern enthält."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "True"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$text = \"2048\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$text = \"2048\"\n$text -match \"^[0-9]+$\""
      },
      "solutionNotes": "Die Lösung zu „Nur Ziffern“ nutzt -match. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Prüfe, ob $text ausschließlich eine oder mehrere Ziffern enthält.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -match. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "True"
          ]
        }
      ],
      "prerequisites": [
        "m14-02"
      ],
      "minutes": 9,
      "xp": 65,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-04",
      "title": "Ungültige Kennung",
      "task": "Prüfe auf das Muster PC- gefolgt von Ziffern mit Anfang und Ende.",
      "explanation": "In dieser Übung übst du: Ungültige Kennung. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Prüfe auf das Muster PC- gefolgt von Ziffern mit Anfang und Ende."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "False"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-ABC\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-ABC\"\n$name -match \"^PC-[0-9]+$\""
      },
      "solutionNotes": "Die Lösung zu „Ungültige Kennung“ nutzt PC-ABC, -match. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Prüfe auf das Muster PC- gefolgt von Ziffern mit Anfang und Ende.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind PC-ABC, -match. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "False"
          ]
        }
      ],
      "prerequisites": [
        "m14-03"
      ],
      "minutes": 10,
      "xp": 66,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-05",
      "title": "Ziffern ersetzen",
      "task": "Ersetze jede Ziffernfolge durch X.",
      "explanation": "In dieser Übung übst du: Ziffern ersetzen. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Ersetze jede Ziffernfolge durch X."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC-X"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-123\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-123\"\n$name -replace \"[0-9]+\", \"X\""
      },
      "solutionNotes": "Die Lösung zu „Ziffern ersetzen“ nutzt -replace. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Ersetze jede Ziffernfolge durch X.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -replace. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC-X"
          ]
        }
      ],
      "prerequisites": [
        "m14-04"
      ],
      "minutes": 10,
      "xp": 67,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-06",
      "title": "Leerraum normalisieren",
      "task": "Ersetze mehrere Leerzeichen durch genau ein Leerzeichen.",
      "explanation": "In dieser Übung übst du: Leerraum normalisieren. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Ersetze mehrere Leerzeichen durch genau ein Leerzeichen."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ada Lin"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$text = \"Ada   Lin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$text = \"Ada   Lin\"\n$text -replace \" +\", \" \""
      },
      "solutionNotes": "Die Lösung zu „Leerraum normalisieren“ nutzt -replace. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Ersetze mehrere Leerzeichen durch genau ein Leerzeichen.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -replace. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ada Lin"
          ]
        }
      ],
      "prerequisites": [
        "m14-05"
      ],
      "minutes": 11,
      "xp": 68,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-07",
      "title": "Treffer lesen",
      "task": "Prüfe auf eine Ziffernfolge und gib zuerst das Prüfergebnis, danach den gesamten Treffer aus.",
      "explanation": "In dieser Übung übst du: Treffer lesen. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Prüfe auf eine Ziffernfolge und gib zuerst das Prüfergebnis, danach den gesamten Treffer aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "True\n503"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$text = \"Fehler 503\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$text = \"Fehler 503\"\n$text -match \"[0-9]+\"\n$Matches[0]"
      },
      "solutionNotes": "Die Lösung zu „Treffer lesen“ nutzt -match. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Prüfe auf eine Ziffernfolge und gib zuerst das Prüfergebnis, danach den gesamten Treffer aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -match. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "True",
            "503"
          ]
        }
      ],
      "prerequisites": [
        "m14-06"
      ],
      "minutes": 11,
      "xp": 69,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-08",
      "title": "Gruppe lesen",
      "task": "Prüfe ^PC-([0-9]+)$ und gib danach die erste Klammergruppe aus.",
      "explanation": "In dieser Übung übst du: Gruppe lesen. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Prüfe ^PC-([0-9]+)$ und gib danach die erste Klammergruppe aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "True\n42"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-42\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-42\"\n$name -match \"^PC-([0-9]+)$\"\n$Matches[1]"
      },
      "solutionNotes": "Die Lösung zu „Gruppe lesen“ nutzt -match. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Prüfe ^PC-([0-9]+)$ und gib danach die erste Klammergruppe aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -match. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "True",
            "42"
          ]
        }
      ],
      "prerequisites": [
        "m14-07"
      ],
      "minutes": 12,
      "xp": 70,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-09",
      "title": "Namen filtern",
      "task": "Gib nur Namen mit Präfix SRV- aus.",
      "explanation": "In dieser Übung übst du: Namen filtern. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Gib nur Namen mit Präfix SRV- aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV-01\nSRV-02"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$namen = \"PC-01\", \"SRV-01\", \"SRV-02\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \"PC-01\", \"SRV-01\", \"SRV-02\"\n$namen | Where-Object { $_ -like \"SRV-*\" }"
      },
      "solutionNotes": "Die Lösung zu „Namen filtern“ nutzt Where-Object, -like. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Gib nur Namen mit Präfix SRV- aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, -like. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV-01",
            "SRV-02"
          ]
        }
      ],
      "prerequisites": [
        "m14-08"
      ],
      "minutes": 12,
      "xp": 71,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    },
    {
      "id": "m14-10",
      "title": "Projekt: Logcodes",
      "task": "Filtere Zeilen mit ERROR und gib diese in ursprünglicher Reihenfolge aus.",
      "explanation": "In dieser Übung übst du: Projekt: Logcodes. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen.",
      "concept": {
        "explanation": "-like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.",
        "example": "\"PC-42\" -match \"^PC-[0-9]+$\"",
        "note": "Das Beispiel nutzt andere Daten. Übertrage das Prinzip auf den Arbeitsauftrag. Deine Eingabedaten stehen bereits im Editor."
      },
      "requirements": [
        {
          "label": "Arbeitsbereich",
          "text": "Bearbeite das PowerShell-Skript. Alle vorgegebenen Eingabewerte bleiben erhalten."
        },
        {
          "label": "Ausgabe",
          "text": "Gib ausschließlich die unten gezeigten Werte in genau dieser Reihenfolge aus. Zusätzliche Diagnoseausgaben zählen ebenfalls zur Ausgabe."
        },
        {
          "label": "Lernziel",
          "text": "Filtere Zeilen mit ERROR und gib diese in ursprünglicher Reihenfolge aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "ERROR Disk\nERROR Netz"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$logs = \"INFO Start\", \"ERROR Disk\", \"INFO Ende\", \"ERROR Netz\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$logs = \"INFO Start\", \"ERROR Disk\", \"INFO Ende\", \"ERROR Netz\"\n$logs | Where-Object { $_ -match \"^ERROR\" }"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Logcodes“ nutzt Where-Object, -match. -like prüft einfache Platzhalter; * steht für beliebig viele Zeichen. -match nutzt reguläre Ausdrücke: ^ und $ markieren Textanfang und Ende, [0-9] eine Ziffer, + mindestens eine Wiederholung. Bei einem Treffer enthält $Matches[0] den ganzen Treffer und $Matches[1] die erste Klammergruppe. -replace ersetzt mit regulärem Muster. In der Lernumgebung gelten JavaScript-RegEx-Regeln; .NET-spezifische Muster sind nicht verfügbar.\nArbeitsauftrag: Filtere Zeilen mit ERROR und gib diese in ursprünglicher Reihenfolge aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, -match. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "ERROR Disk",
            "ERROR Netz"
          ]
        }
      ],
      "prerequisites": [
        "m14-09"
      ],
      "minutes": 13,
      "xp": 72,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Suchmuster und reguläre Ausdrücke"
      ]
    }
  ]
});
