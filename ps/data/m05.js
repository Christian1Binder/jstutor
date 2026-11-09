window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m05",
  "title": "Arrays: deine ersten Listen",
  "city": "Hannover",
  "description": "Ein Array enthält mehrere Werte in einer Reihenfolge.",
  "lesson": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
  "tag": "ps-05",
  "level": 2,
  "exercises": [
    {
      "id": "m05-01",
      "title": "Drei Namen",
      "task": "Speichere Ada, Lin und Sam in dieser Reihenfolge in $namen und gib die Liste aus.",
      "explanation": "In dieser Übung übst du: Drei Namen. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Speichere Ada, Lin und Sam in dieser Reihenfolge in $namen und gib die Liste aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ada\nLin\nSam"
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
        "js": "$namen = \"Ada\", \"Lin\", \"Sam\"\n$namen"
      },
      "solutionNotes": "Die Lösung zu „Drei Namen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Speichere Ada, Lin und Sam in dieser Reihenfolge in $namen und gib die Liste aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ada",
            "Lin",
            "Sam"
          ]
        }
      ],
      "prerequisites": [
        "m04-10"
      ],
      "minutes": 6,
      "xp": 36,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-02",
      "title": "Elemente zählen",
      "task": "Gib die Anzahl der Elemente aus.",
      "explanation": "In dieser Übung übst du: Elemente zählen. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Gib die Anzahl der Elemente aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "4"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 4, 8, 12, 16\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 4, 8, 12, 16\n$werte.Count"
      },
      "solutionNotes": "Die Lösung zu „Elemente zählen“ nutzt .Count. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Gib die Anzahl der Elemente aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "4"
          ]
        }
      ],
      "prerequisites": [
        "m05-01"
      ],
      "minutes": 7,
      "xp": 37,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-03",
      "title": "Erstes Element",
      "task": "Gib den ersten Namen aus.",
      "explanation": "In dieser Übung übst du: Erstes Element. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Gib den ersten Namen aus."
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
        "js": "$namen = \"Ada\", \"Lin\", \"Sam\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \"Ada\", \"Lin\", \"Sam\"\n$namen[0]"
      },
      "solutionNotes": "Die Lösung zu „Erstes Element“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Gib den ersten Namen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
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
        "m05-02"
      ],
      "minutes": 7,
      "xp": 38,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-04",
      "title": "Zweites Element",
      "task": "Gib das zweite Element aus.",
      "explanation": "In dieser Übung übst du: Zweites Element. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Gib das zweite Element aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Bonn"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$orte = \"Kiel\", \"Bonn\", \"Mainz\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$orte = \"Kiel\", \"Bonn\", \"Mainz\"\n$orte[1]"
      },
      "solutionNotes": "Die Lösung zu „Zweites Element“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Gib das zweite Element aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Bonn"
          ]
        }
      ],
      "prerequisites": [
        "m05-03"
      ],
      "minutes": 8,
      "xp": 39,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-05",
      "title": "Letztes Element",
      "task": "Gib das letzte Element per negativem Index aus.",
      "explanation": "In dieser Übung übst du: Letztes Element. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Gib das letzte Element per negativem Index aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Mainz"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$orte = \"Kiel\", \"Bonn\", \"Mainz\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$orte = \"Kiel\", \"Bonn\", \"Mainz\"\n$orte[-1]"
      },
      "solutionNotes": "Die Lösung zu „Letztes Element“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Gib das letzte Element per negativem Index aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Mainz"
          ]
        }
      ],
      "prerequisites": [
        "m05-04"
      ],
      "minutes": 8,
      "xp": 40,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-06",
      "title": "Leere Liste",
      "task": "Erzeuge $liste als leeres Array und gib seine Anzahl aus.",
      "explanation": "In dieser Übung übst du: Leere Liste. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Erzeuge $liste als leeres Array und gib seine Anzahl aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "0"
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
        "js": "$liste = @()\n$liste.Count"
      },
      "solutionNotes": "Die Lösung zu „Leere Liste“ nutzt .Count. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Erzeuge $liste als leeres Array und gib seine Anzahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "0"
          ]
        }
      ],
      "prerequisites": [
        "m05-05"
      ],
      "minutes": 9,
      "xp": 41,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-07",
      "title": "Ein Element bleibt Liste",
      "task": "Erzeuge ein Array mit nur dem Text Server und gib seine Anzahl aus.",
      "explanation": "In dieser Übung übst du: Ein Element bleibt Liste. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Erzeuge ein Array mit nur dem Text Server und gib seine Anzahl aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "1"
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
        "js": "$liste = @(\"Server\")\n$liste.Count"
      },
      "solutionNotes": "Die Lösung zu „Ein Element bleibt Liste“ nutzt .Count. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Erzeuge ein Array mit nur dem Text Server und gib seine Anzahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "1"
          ]
        }
      ],
      "prerequisites": [
        "m05-06"
      ],
      "minutes": 9,
      "xp": 42,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-08",
      "title": "Array aus Zahlen",
      "task": "Gib die Summe des ersten und letzten Elements aus.",
      "explanation": "In dieser Übung übst du: Array aus Zahlen. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Gib die Summe des ersten und letzten Elements aus."
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
        "js": "$werte = 5, 10, 15\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 5, 10, 15\n$werte[0] + $werte[-1]"
      },
      "solutionNotes": "Die Lösung zu „Array aus Zahlen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Gib die Summe des ersten und letzten Elements aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
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
        "m05-07"
      ],
      "minutes": 10,
      "xp": 43,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-09",
      "title": "Liste speichern",
      "task": "Speichere das zweite Element der Liste in $auswahl und gib $auswahl aus.",
      "explanation": "In dieser Übung übst du: Liste speichern. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Speichere das zweite Element der Liste in $auswahl und gib $auswahl aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Süd"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$liste = \"Nord\", \"Süd\", \"West\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$liste = \"Nord\", \"Süd\", \"West\"\n$auswahl = $liste[1]\n$auswahl"
      },
      "solutionNotes": "Die Lösung zu „Liste speichern“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Speichere das zweite Element der Liste in $auswahl und gib $auswahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Süd"
          ]
        }
      ],
      "prerequisites": [
        "m05-08"
      ],
      "minutes": 10,
      "xp": 44,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    },
    {
      "id": "m05-10",
      "title": "Projekt: Zielauswahl",
      "task": "Gib zuerst die Anzahl und danach das letzte Ziel aus.",
      "explanation": "In dieser Übung übst du: Projekt: Zielauswahl. Ein Array enthält mehrere Werte in einer Reihenfolge.",
      "concept": {
        "explanation": "Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.",
        "example": "$farben = \"Rot\", \"Blau\"\n$farben[0]\n$farben.Count",
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
          "text": "Gib zuerst die Anzahl und danach das letzte Ziel aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "3\nSRV-01"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$ziele = \"PC-01\", \"PC-02\", \"SRV-01\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$ziele = \"PC-01\", \"PC-02\", \"SRV-01\"\n$ziele.Count\n$ziele[-1]"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Zielauswahl“ nutzt .Count. Ein Array enthält mehrere Werte in einer Reihenfolge. 1,2,3 erzeugt drei Elemente; @() erzeugt ein leeres Array. @(\"A\") hält auch ein einzelnes Element als Array. .Count zählt Elemente. Der erste Index ist 0: $liste[0]. Der Index -1 liest das letzte Element. Ein Array als Ausgabe wird elementweise ausgegeben.\nArbeitsauftrag: Gib zuerst die Anzahl und danach das letzte Ziel aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "3",
            "SRV-01"
          ]
        }
      ],
      "prerequisites": [
        "m05-09"
      ],
      "minutes": 11,
      "xp": 45,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Arrays: deine ersten Listen"
      ]
    }
  ]
});
