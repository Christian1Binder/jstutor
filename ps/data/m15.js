window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m15",
  "title": "JSON und strukturierte Daten",
  "city": "Bonn",
  "description": "JSON beschreibt Objekte und Arrays als Text.",
  "lesson": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
  "tag": "ps-15",
  "level": 4,
  "exercises": [
    {
      "id": "m15-01",
      "title": "JSON lesen",
      "task": "Parse den Text und gib Name aus.",
      "explanation": "In dieser Übung übst du: JSON lesen. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Parse den Text und gib Name aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ada"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '{\"Name\":\"Ada\",\"Alter\":30}'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '{\"Name\":\"Ada\",\"Alter\":30}'\n$p = $json | ConvertFrom-Json\n$p.Name"
      },
      "solutionNotes": "Die Lösung zu „JSON lesen“ nutzt ConvertFrom-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Parse den Text und gib Name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ada"
          ]
        }
      ],
      "prerequisites": [
        "m14-10"
      ],
      "minutes": 8,
      "xp": 66,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-02",
      "title": "Zahl aus JSON",
      "task": "Parse den Text und gib Port plus 1 aus.",
      "explanation": "In dieser Übung übst du: Zahl aus JSON. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Parse den Text und gib Port plus 1 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "444"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '{\"Port\":443}'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '{\"Port\":443}'\n$c = $json | ConvertFrom-Json\n$c.Port + 1"
      },
      "solutionNotes": "Die Lösung zu „Zahl aus JSON“ nutzt ConvertFrom-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Parse den Text und gib Port plus 1 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "444"
          ]
        }
      ],
      "prerequisites": [
        "m15-01"
      ],
      "minutes": 9,
      "xp": 67,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-03",
      "title": "JSON-Array",
      "task": "Parse die Liste und gib die Anzahl aus.",
      "explanation": "In dieser Übung übst du: JSON-Array. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Parse die Liste und gib die Anzahl aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "3"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '[\"PC1\",\"PC2\",\"PC3\"]'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '[\"PC1\",\"PC2\",\"PC3\"]'\n$liste = $json | ConvertFrom-Json\n$liste.Count"
      },
      "solutionNotes": "Die Lösung zu „JSON-Array“ nutzt ConvertFrom-Json, .Count. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Parse die Liste und gib die Anzahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json, .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "3"
          ]
        }
      ],
      "prerequisites": [
        "m15-02"
      ],
      "minutes": 9,
      "xp": 68,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-04",
      "title": "JSON verschachtelt",
      "task": "Gib den Wert von System.Version nach dem Parsen aus.",
      "explanation": "In dieser Übung übst du: JSON verschachtelt. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Gib den Wert von System.Version nach dem Parsen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "7.4"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '{\"System\":{\"Version\":\"7.4\"}}'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '{\"System\":{\"Version\":\"7.4\"}}'\n$c = $json | ConvertFrom-Json\n$c.System.Version"
      },
      "solutionNotes": "Die Lösung zu „JSON verschachtelt“ nutzt ConvertFrom-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Gib den Wert von System.Version nach dem Parsen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "7.4"
          ]
        }
      ],
      "prerequisites": [
        "m15-03"
      ],
      "minutes": 10,
      "xp": 69,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-05",
      "title": "Kompakt exportieren",
      "task": "Wandle das Objekt mit -Compress in JSON um.",
      "explanation": "In dieser Übung übst du: Kompakt exportieren. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Wandle das Objekt mit -Compress in JSON um."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "{\"Name\":\"Ada\",\"Aktiv\":true}"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$p = [pscustomobject]@{Name=\"Ada\"; Aktiv=$true}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$p = [pscustomobject]@{Name=\"Ada\"; Aktiv=$true}\n$p | ConvertTo-Json -Compress"
      },
      "solutionNotes": "Die Lösung zu „Kompakt exportieren“ nutzt ConvertTo-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Wandle das Objekt mit -Compress in JSON um.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertTo-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "{\"Name\":\"Ada\",\"Aktiv\":true}"
          ]
        }
      ],
      "prerequisites": [
        "m15-04"
      ],
      "minutes": 10,
      "xp": 70,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-06",
      "title": "Array exportieren",
      "task": "Gib die Liste als kompaktes JSON-Array aus.",
      "explanation": "In dieser Übung übst du: Array exportieren. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Gib die Liste als kompaktes JSON-Array aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "[1,2,3]"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$liste = 1, 2, 3\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$liste = 1, 2, 3\n$liste | ConvertTo-Json -Compress"
      },
      "solutionNotes": "Die Lösung zu „Array exportieren“ nutzt ConvertTo-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Gib die Liste als kompaktes JSON-Array aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertTo-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "[1,2,3]"
          ]
        }
      ],
      "prerequisites": [
        "m15-05"
      ],
      "minutes": 11,
      "xp": 71,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-07",
      "title": "Wahrheitswert lesen",
      "task": "Gib nach dem Parsen die Eigenschaft Aktiv aus.",
      "explanation": "In dieser Übung übst du: Wahrheitswert lesen. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Gib nach dem Parsen die Eigenschaft Aktiv aus."
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
        "js": "$json = '{\"Aktiv\":false}'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '{\"Aktiv\":false}'\n$c = $json | ConvertFrom-Json\n$c.Aktiv"
      },
      "solutionNotes": "Die Lösung zu „Wahrheitswert lesen“ nutzt ConvertFrom-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Gib nach dem Parsen die Eigenschaft Aktiv aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m15-06"
      ],
      "minutes": 11,
      "xp": 72,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-08",
      "title": "Arrayelement aus JSON",
      "task": "Gib den Namen des zweiten Geräts aus.",
      "explanation": "In dieser Übung übst du: Arrayelement aus JSON. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Gib den Namen des zweiten Geräts aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"PC1\"},{\"Name\":\"SRV1\"}]'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"PC1\"},{\"Name\":\"SRV1\"}]'\n$d = $json | ConvertFrom-Json\n$d[1].Name"
      },
      "solutionNotes": "Die Lösung zu „Arrayelement aus JSON“ nutzt ConvertFrom-Json. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Gib den Namen des zweiten Geräts aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV1"
          ]
        }
      ],
      "prerequisites": [
        "m15-07"
      ],
      "minutes": 12,
      "xp": 73,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-09",
      "title": "JSON-Pipeline",
      "task": "Parse die Liste und gib nur Werte größer als 4 aus.",
      "explanation": "In dieser Übung übst du: JSON-Pipeline. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Parse die Liste und gib nur Werte größer als 4 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "8\n5"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '[2,8,5,1]'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '[2,8,5,1]'\n$json | ConvertFrom-Json | Where-Object { $_ -gt 4 }"
      },
      "solutionNotes": "Die Lösung zu „JSON-Pipeline“ nutzt ConvertFrom-Json, Where-Object. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Parse die Liste und gib nur Werte größer als 4 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json, Where-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "8",
            "5"
          ]
        }
      ],
      "prerequisites": [
        "m15-08"
      ],
      "minutes": 12,
      "xp": 74,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    },
    {
      "id": "m15-10",
      "title": "Projekt: API-Antwort",
      "task": "Die Antwort ist eine lokale API-Testantwort. Parse sie, filtere aktive Geräte und gib ihre Namen aus.",
      "explanation": "In dieser Übung übst du: Projekt: API-Antwort. JSON beschreibt Objekte und Arrays als Text.",
      "concept": {
        "explanation": "JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.",
        "example": "$daten = '{\"Name\":\"Lin\",\"Aktiv\":true}' | ConvertFrom-Json\n$daten.Name",
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
          "text": "Die Antwort ist eine lokale API-Testantwort. Parse sie, filtere aktive Geräte und gib ihre Namen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC1\nSRV1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"PC1\",\"Aktiv\":true},{\"Name\":\"PC2\",\"Aktiv\":false},{\"Name\":\"SRV1\",\"Aktiv\":true}]'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"PC1\",\"Aktiv\":true},{\"Name\":\"PC2\",\"Aktiv\":false},{\"Name\":\"SRV1\",\"Aktiv\":true}]'\n$json | ConvertFrom-Json | Where-Object { $_.Aktiv -eq $true } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Projekt: API-Antwort“ nutzt ConvertFrom-Json, Where-Object, Select-Object. JSON beschreibt Objekte und Arrays als Text. ConvertFrom-Json wandelt JSON-Text in Daten um, ConvertTo-Json Daten zurück in Text. -Compress entfernt Einrückung. JSON verwendet doppelte Anführungszeichen für Schlüssel und Textwerte. Für JSON als PowerShell-Text sind einfache äußere Anführungszeichen praktisch. Wahrheitswerte im JSON heißen true und false. Für tiefe Strukturen bietet echte PowerShell zusätzlich -Depth; die Lernumgebung serialisiert vollständig.\nArbeitsauftrag: Die Antwort ist eine lokale API-Testantwort. Parse sie, filtere aktive Geräte und gib ihre Namen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json, Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC1",
            "SRV1"
          ]
        }
      ],
      "prerequisites": [
        "m15-09"
      ],
      "minutes": 13,
      "xp": 75,
      "focus": "js",
      "tags": [
        "PowerShell",
        "JSON und strukturierte Daten"
      ]
    }
  ]
});
