window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m02",
  "title": "Variablen und Werte",
  "city": "Kiel",
  "description": "Eine Variable beginnt mit $.",
  "lesson": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
  "tag": "ps-02",
  "level": 1,
  "exercises": [
    {
      "id": "m02-01",
      "title": "Ein Name",
      "task": "Speichere Ada in $name und gib $name aus.",
      "explanation": "In dieser Übung übst du: Ein Name. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Speichere Ada in $name und gib $name aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"Ada\"\n$name"
      },
      "solutionNotes": "Die Lösung zu „Ein Name“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Speichere Ada in $name und gib $name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m01-10"
      ],
      "minutes": 5,
      "xp": 27,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-02",
      "title": "Ein Zähler",
      "task": "Speichere 12 in $anzahl und gib die Variable aus.",
      "explanation": "In dieser Übung übst du: Ein Zähler. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Speichere 12 in $anzahl und gib die Variable aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "12"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$anzahl = 12\n$anzahl"
      },
      "solutionNotes": "Die Lösung zu „Ein Zähler“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Speichere 12 in $anzahl und gib die Variable aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "12"
          ]
        }
      ],
      "prerequisites": [
        "m02-01"
      ],
      "minutes": 6,
      "xp": 28,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-03",
      "title": "Wert ersetzen",
      "task": "Ersetze den Inhalt von $status durch Fertig und gib $status aus.",
      "explanation": "In dieser Übung übst du: Wert ersetzen. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Ersetze den Inhalt von $status durch Fertig und gib $status aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Fertig"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$status = \"Offen\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$status = \"Offen\"\n$status = \"Fertig\"\n$status"
      },
      "solutionNotes": "Die Lösung zu „Wert ersetzen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Ersetze den Inhalt von $status durch Fertig und gib $status aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Fertig"
          ]
        }
      ],
      "prerequisites": [
        "m02-02"
      ],
      "minutes": 6,
      "xp": 29,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-04",
      "title": "Zwei Variablen",
      "task": "Addiere $a und $b und gib das Ergebnis aus.",
      "explanation": "In dieser Übung übst du: Zwei Variablen. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Addiere $a und $b und gib das Ergebnis aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "20"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$a = 14\n$b = 6\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$a = 14\n$b = 6\n$a + $b"
      },
      "solutionNotes": "Die Lösung zu „Zwei Variablen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Addiere $a und $b und gib das Ergebnis aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "20"
          ]
        }
      ],
      "prerequisites": [
        "m02-03"
      ],
      "minutes": 7,
      "xp": 30,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-05",
      "title": "Ergebnis speichern",
      "task": "Speichere $preis * $menge in $gesamt und gib $gesamt aus.",
      "explanation": "In dieser Übung übst du: Ergebnis speichern. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Speichere $preis * $menge in $gesamt und gib $gesamt aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "36"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$preis = 9\n$menge = 4\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$preis = 9\n$menge = 4\n$gesamt = $preis * $menge\n$gesamt"
      },
      "solutionNotes": "Die Lösung zu „Ergebnis speichern“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Speichere $preis * $menge in $gesamt und gib $gesamt aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "36"
          ]
        }
      ],
      "prerequisites": [
        "m02-04"
      ],
      "minutes": 7,
      "xp": 31,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-06",
      "title": "Wahrheitswert",
      "task": "Speichere $true in $aktiv und gib $aktiv aus.",
      "explanation": "In dieser Übung übst du: Wahrheitswert. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Speichere $true in $aktiv und gib $aktiv aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$aktiv = $true\n$aktiv"
      },
      "solutionNotes": "Die Lösung zu „Wahrheitswert“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Speichere $true in $aktiv und gib $aktiv aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m02-05"
      ],
      "minutes": 8,
      "xp": 32,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-07",
      "title": "Nicht aktiv",
      "task": "Speichere $false in $aktiv und gib $aktiv aus.",
      "explanation": "In dieser Übung übst du: Nicht aktiv. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Speichere $false in $aktiv und gib $aktiv aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$aktiv = $false\n$aktiv"
      },
      "solutionNotes": "Die Lösung zu „Nicht aktiv“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Speichere $false in $aktiv und gib $aktiv aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m02-06"
      ],
      "minutes": 8,
      "xp": 33,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-08",
      "title": "Zahlentext wandeln",
      "task": "Wandle $text mit [int] um und addiere 1.",
      "explanation": "In dieser Übung übst du: Zahlentext wandeln. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Wandle $text mit [int] um und addiere 1."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "42"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$text = \"41\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$text = \"41\"\n[int]$text + 1"
      },
      "solutionNotes": "Die Lösung zu „Zahlentext wandeln“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Wandle $text mit [int] um und addiere 1.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "42"
          ]
        }
      ],
      "prerequisites": [
        "m02-07"
      ],
      "minutes": 9,
      "xp": 34,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-09",
      "title": "Ein Wert ohne Inhalt",
      "task": "Prüfe mit -eq, ob $wert gleich $null ist. $null ist ein besonderer Wert; -eq vergleicht zwei Werte.",
      "explanation": "In dieser Übung übst du: Ein Wert ohne Inhalt. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Prüfe mit -eq, ob $wert gleich $null ist. $null ist ein besonderer Wert; -eq vergleicht zwei Werte."
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
        "js": "$wert = $null\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$wert = $null\n$wert -eq $null"
      },
      "solutionNotes": "Die Lösung zu „Ein Wert ohne Inhalt“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Prüfe mit -eq, ob $wert gleich $null ist. $null ist ein besonderer Wert; -eq vergleicht zwei Werte.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m02-08"
      ],
      "minutes": 9,
      "xp": 35,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    },
    {
      "id": "m02-10",
      "title": "Projekt: Vorrat",
      "task": "Berechne den Rest aus $bestand minus $verbrauch, speichere ihn in $rest und gib ihn aus.",
      "explanation": "In dieser Übung übst du: Projekt: Vorrat. Eine Variable beginnt mit $.",
      "concept": {
        "explanation": "Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.",
        "example": "$ort = \"Kiel\"\n$ort",
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
          "text": "Berechne den Rest aus $bestand minus $verbrauch, speichere ihn in $rest und gib ihn aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "18"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$bestand = 25\n$verbrauch = 7\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$bestand = 25\n$verbrauch = 7\n$rest = $bestand - $verbrauch\n$rest"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Vorrat“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Variable beginnt mit $. Mit = speicherst du einen Wert; die Zuweisung selbst erzeugt keine Ausgabe. $name liest den gespeicherten Wert. Namen sind nicht von Groß- und Kleinschreibung abhängig. $true und $false sind Wahrheitswerte, $null steht für keinen Wert. Mit [int] wandelst du hier einen Zahlentext in eine ganze Zahl um.\nArbeitsauftrag: Berechne den Rest aus $bestand minus $verbrauch, speichere ihn in $rest und gib ihn aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "18"
          ]
        }
      ],
      "prerequisites": [
        "m02-09"
      ],
      "minutes": 10,
      "xp": 36,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Variablen und Werte"
      ]
    }
  ]
});
