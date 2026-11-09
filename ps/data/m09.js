window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m09",
  "title": "Deine erste Pipeline",
  "city": "Leipzig",
  "description": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
  "lesson": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
  "tag": "ps-09",
  "level": 3,
  "exercises": [
    {
      "id": "m09-01",
      "title": "Große Werte",
      "task": "Gib nur Werte größer als 5 aus.",
      "explanation": "In dieser Übung übst du: Große Werte. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Gib nur Werte größer als 5 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "8\n10"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 2, 8, 4, 10\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 2, 8, 4, 10\n$werte | Where-Object { $_ -gt 5 }"
      },
      "solutionNotes": "Die Lösung zu „Große Werte“ nutzt Where-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Gib nur Werte größer als 5 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "8",
            "10"
          ]
        }
      ],
      "prerequisites": [
        "m08-10"
      ],
      "minutes": 7,
      "xp": 48,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-02",
      "title": "Gerade Zahlen",
      "task": "Gib nur gerade Zahlen aus; gerade heißt Rest bei Division durch 2 gleich 0.",
      "explanation": "In dieser Übung übst du: Gerade Zahlen. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Gib nur gerade Zahlen aus; gerade heißt Rest bei Division durch 2 gleich 0."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "2\n4\n6"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 1..6\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 1..6\n$werte | Where-Object { ($_ % 2) -eq 0 }"
      },
      "solutionNotes": "Die Lösung zu „Gerade Zahlen“ nutzt Where-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Gib nur gerade Zahlen aus; gerade heißt Rest bei Division durch 2 gleich 0.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "2",
            "4",
            "6"
          ]
        }
      ],
      "prerequisites": [
        "m09-01"
      ],
      "minutes": 8,
      "xp": 49,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-03",
      "title": "Aufsteigend",
      "task": "Sortiere die Werte aufsteigend.",
      "explanation": "In dieser Übung übst du: Aufsteigend. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Sortiere die Werte aufsteigend."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "2\n5\n8"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 8, 2, 5\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 8, 2, 5\n$werte | Sort-Object"
      },
      "solutionNotes": "Die Lösung zu „Aufsteigend“ nutzt Sort-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Sortiere die Werte aufsteigend.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Sort-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "2",
            "5",
            "8"
          ]
        }
      ],
      "prerequisites": [
        "m09-02"
      ],
      "minutes": 8,
      "xp": 50,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-04",
      "title": "Absteigend",
      "task": "Sortiere die Werte absteigend.",
      "explanation": "In dieser Übung übst du: Absteigend. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Sortiere die Werte absteigend."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "8\n5\n2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 8, 2, 5\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 8, 2, 5\n$werte | Sort-Object -Descending"
      },
      "solutionNotes": "Die Lösung zu „Absteigend“ nutzt Sort-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Sortiere die Werte absteigend.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Sort-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "8",
            "5",
            "2"
          ]
        }
      ],
      "prerequisites": [
        "m09-03"
      ],
      "minutes": 9,
      "xp": 51,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-05",
      "title": "Erste zwei",
      "task": "Gib nur die ersten zwei Werte aus.",
      "explanation": "In dieser Übung übst du: Erste zwei. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Gib nur die ersten zwei Werte aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "4\n8"
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
        "js": "$werte = 4, 8, 12, 16\n$werte | Select-Object -First 2"
      },
      "solutionNotes": "Die Lösung zu „Erste zwei“ nutzt Select-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Gib nur die ersten zwei Werte aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "4",
            "8"
          ]
        }
      ],
      "prerequisites": [
        "m09-04"
      ],
      "minutes": 9,
      "xp": 52,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-06",
      "title": "Letzte zwei",
      "task": "Gib die letzten zwei Werte aus.",
      "explanation": "In dieser Übung übst du: Letzte zwei. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Gib die letzten zwei Werte aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "12\n16"
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
        "js": "$werte = 4, 8, 12, 16\n$werte | Select-Object -Last 2"
      },
      "solutionNotes": "Die Lösung zu „Letzte zwei“ nutzt Select-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Gib die letzten zwei Werte aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "12",
            "16"
          ]
        }
      ],
      "prerequisites": [
        "m09-05"
      ],
      "minutes": 10,
      "xp": 53,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-07",
      "title": "Ersten überspringen",
      "task": "Überspringe den ersten Wert und gib den Rest aus.",
      "explanation": "In dieser Übung übst du: Ersten überspringen. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Überspringe den ersten Wert und gib den Rest aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "8\n12"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 4, 8, 12\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 4, 8, 12\n$werte | Select-Object -Skip 1"
      },
      "solutionNotes": "Die Lösung zu „Ersten überspringen“ nutzt Select-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Überspringe den ersten Wert und gib den Rest aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "8",
            "12"
          ]
        }
      ],
      "prerequisites": [
        "m09-06"
      ],
      "minutes": 10,
      "xp": 54,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-08",
      "title": "Doppelte entfernen",
      "task": "Gib jeden Wert nur beim ersten Auftreten aus.",
      "explanation": "In dieser Übung übst du: Doppelte entfernen. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Gib jeden Wert nur beim ersten Auftreten aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "3\n1\n2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 3, 1, 3, 2, 1\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 3, 1, 3, 2, 1\n$werte | Select-Object -Unique"
      },
      "solutionNotes": "Die Lösung zu „Doppelte entfernen“ nutzt Select-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Gib jeden Wert nur beim ersten Auftreten aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "3",
            "1",
            "2"
          ]
        }
      ],
      "prerequisites": [
        "m09-07"
      ],
      "minutes": 11,
      "xp": 55,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-09",
      "title": "Eigenschaft ausgeben",
      "task": "Lies Name aus jedem Objekt mit Select-Object -ExpandProperty.",
      "explanation": "In dieser Übung übst du: Eigenschaft ausgeben. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Lies Name aus jedem Objekt mit Select-Object -ExpandProperty."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ada\nLin"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$personen = @([pscustomobject]@{Name=\"Ada\"},[pscustomobject]@{Name=\"Lin\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$personen = @([pscustomobject]@{Name=\"Ada\"},[pscustomobject]@{Name=\"Lin\"})\n$personen | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Eigenschaft ausgeben“ nutzt Select-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Lies Name aus jedem Objekt mit Select-Object -ExpandProperty.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ada",
            "Lin"
          ]
        }
      ],
      "prerequisites": [
        "m09-08"
      ],
      "minutes": 11,
      "xp": 56,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    },
    {
      "id": "m09-10",
      "title": "Projekt: Top zwei",
      "task": "Behalte Werte mindestens 5, sortiere absteigend und gib die ersten zwei aus.",
      "explanation": "In dieser Übung übst du: Projekt: Top zwei. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl.",
      "concept": {
        "explanation": "Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.",
        "example": "1..6 | Where-Object { $_ -gt 3 }",
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
          "text": "Behalte Werte mindestens 5, sortiere absteigend und gib die ersten zwei aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "12\n8"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 3, 8, 5, 12, 1\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 3, 8, 5, 12, 1\n$werte | Where-Object { $_ -ge 5 } | Sort-Object -Descending | Select-Object -First 2"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Top zwei“ nutzt Where-Object, Sort-Object, Select-Object. Die Pipeline | übergibt ausgegebene Objekte einzeln an den nächsten Befehl. Where-Object { … } behält Objekte, für die der Ausdruck wahr ist. $_ bezeichnet das aktuelle Objekt. Sort-Object sortiert Werte, mit -Descending absteigend. Select-Object -First n begrenzt die Ausgabe. -ExpandProperty liest eine Eigenschaft aus jedem Objekt. Parameter beginnen mit -.\nArbeitsauftrag: Behalte Werte mindestens 5, sortiere absteigend und gib die ersten zwei aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Sort-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "12",
            "8"
          ]
        }
      ],
      "prerequisites": [
        "m09-09"
      ],
      "minutes": 12,
      "xp": 57,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Deine erste Pipeline"
      ]
    }
  ]
});
