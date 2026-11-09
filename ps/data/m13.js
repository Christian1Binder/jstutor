window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m13",
  "title": "Objektpipelines und Statistik",
  "city": "Dortmund",
  "description": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
  "lesson": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
  "tag": "ps-13",
  "level": 4,
  "exercises": [
    {
      "id": "m13-01",
      "title": "Transformation",
      "task": "Verdreifache jeden Wert mit ForEach-Object.",
      "explanation": "In dieser Übung übst du: Transformation. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Verdreifache jeden Wert mit ForEach-Object."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "3\n6\n9"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 1, 2, 3\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 1, 2, 3\n$werte | ForEach-Object { $_ * 3 }"
      },
      "solutionNotes": "Die Lösung zu „Transformation“ nutzt ForEach-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Verdreifache jeden Wert mit ForEach-Object.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ForEach-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "3",
            "6",
            "9"
          ]
        }
      ],
      "prerequisites": [
        "m12-10"
      ],
      "minutes": 8,
      "xp": 60,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-02",
      "title": "Pipeline-Namen",
      "task": "Gib alle Namen großgeschrieben aus.",
      "explanation": "In dieser Übung übst du: Pipeline-Namen. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Gib alle Namen großgeschrieben aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "ADA\nLIN"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$namen = \"ada\", \"lin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \"ada\", \"lin\"\n$namen | ForEach-Object { $_.ToUpper() }"
      },
      "solutionNotes": "Die Lösung zu „Pipeline-Namen“ nutzt ForEach-Object, .ToUpper. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Gib alle Namen großgeschrieben aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ForEach-Object, .ToUpper. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "ADA",
            "LIN"
          ]
        }
      ],
      "prerequisites": [
        "m13-01"
      ],
      "minutes": 9,
      "xp": 61,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-03",
      "title": "Summe messen",
      "task": "Gib nur die Sum-Eigenschaft der Messung aus.",
      "explanation": "In dieser Übung übst du: Summe messen. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Gib nur die Sum-Eigenschaft der Messung aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "24"
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
        "js": "$werte = 4, 8, 12\n$m = $werte | Measure-Object -Sum\n$m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Summe messen“ nutzt Measure-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Gib nur die Sum-Eigenschaft der Messung aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "24"
          ]
        }
      ],
      "prerequisites": [
        "m13-02"
      ],
      "minutes": 9,
      "xp": 62,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-04",
      "title": "Mittelwert",
      "task": "Gib nur den Mittelwert aus.",
      "explanation": "In dieser Übung übst du: Mittelwert. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Gib nur den Mittelwert aus."
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
        "js": "$werte = 10, 20, 30\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 10, 20, 30\n$m = $werte | Measure-Object -Average\n$m.Average"
      },
      "solutionNotes": "Die Lösung zu „Mittelwert“ nutzt Measure-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Gib nur den Mittelwert aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m13-03"
      ],
      "minutes": 10,
      "xp": 63,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-05",
      "title": "Kleinster Wert",
      "task": "Gib nur den kleinsten Wert aus.",
      "explanation": "In dieser Übung übst du: Kleinster Wert. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Gib nur den kleinsten Wert aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 7, 2, 9\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 7, 2, 9\n$m = $werte | Measure-Object -Minimum\n$m.Minimum"
      },
      "solutionNotes": "Die Lösung zu „Kleinster Wert“ nutzt Measure-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Gib nur den kleinsten Wert aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "2"
          ]
        }
      ],
      "prerequisites": [
        "m13-04"
      ],
      "minutes": 10,
      "xp": 64,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-06",
      "title": "Größter Wert",
      "task": "Gib nur den größten Wert aus.",
      "explanation": "In dieser Übung übst du: Größter Wert. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Gib nur den größten Wert aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "9"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 7, 2, 9\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 7, 2, 9\n$m = $werte | Measure-Object -Maximum\n$m.Maximum"
      },
      "solutionNotes": "Die Lösung zu „Größter Wert“ nutzt Measure-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Gib nur den größten Wert aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "9"
          ]
        }
      ],
      "prerequisites": [
        "m13-05"
      ],
      "minutes": 11,
      "xp": 65,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-07",
      "title": "Objektfeld messen",
      "task": "Addiere das Feld Frei aller Geräte und gib die Summe aus.",
      "explanation": "In dieser Übung übst du: Objektfeld messen. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Addiere das Feld Frei aller Geräte und gib die Summe aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "50"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Frei=20},[pscustomobject]@{Name=\"PC2\"; Frei=30})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Frei=20},[pscustomobject]@{Name=\"PC2\"; Frei=30})\n$m = $geraete | Measure-Object -Property Frei -Sum\n$m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Objektfeld messen“ nutzt Measure-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Addiere das Feld Frei aller Geräte und gib die Summe aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "50"
          ]
        }
      ],
      "prerequisites": [
        "m13-06"
      ],
      "minutes": 11,
      "xp": 66,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-08",
      "title": "Nach Feld sortieren",
      "task": "Sortiere nach Frei absteigend und gib die Namen aus.",
      "explanation": "In dieser Übung übst du: Nach Feld sortieren. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Sortiere nach Frei absteigend und gib die Namen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC2\nPC1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Frei=20},[pscustomobject]@{Name=\"PC2\"; Frei=30})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Frei=20},[pscustomobject]@{Name=\"PC2\"; Frei=30})\n$geraete | Sort-Object -Property Frei -Descending | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Nach Feld sortieren“ nutzt Sort-Object, Select-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Sortiere nach Frei absteigend und gib die Namen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Sort-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC2",
            "PC1"
          ]
        }
      ],
      "prerequisites": [
        "m13-07"
      ],
      "minutes": 12,
      "xp": 67,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-09",
      "title": "Gruppen zählen",
      "task": "Gruppiere die Rollen und gib die Count-Werte in Reihenfolge der Gruppen aus.",
      "explanation": "In dieser Übung übst du: Gruppen zählen. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Gruppiere die Rollen und gib die Count-Werte in Reihenfolge der Gruppen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "2\n1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$rollen = \"Admin\", \"Leser\", \"Admin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$rollen = \"Admin\", \"Leser\", \"Admin\"\n$rollen | Group-Object | Select-Object -ExpandProperty Count"
      },
      "solutionNotes": "Die Lösung zu „Gruppen zählen“ nutzt Group-Object, Select-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Gruppiere die Rollen und gib die Count-Werte in Reihenfolge der Gruppen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Group-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "2",
            "1"
          ]
        }
      ],
      "prerequisites": [
        "m13-08"
      ],
      "minutes": 12,
      "xp": 68,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    },
    {
      "id": "m13-10",
      "title": "Projekt: Gesamtkosten",
      "task": "Berechne je Position Preis mal Menge und summiere die Ergebnisse. Gib nur die Summe aus.",
      "explanation": "In dieser Übung übst du: Projekt: Gesamtkosten. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt.",
      "concept": {
        "explanation": "ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.",
        "example": "$messung = 2,4,6 | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Berechne je Position Preis mal Menge und summiere die Ergebnisse. Gib nur die Summe aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "35"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$posten = @([pscustomobject]@{Preis=10; Menge=2},[pscustomobject]@{Preis=5; Menge=3})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$posten = @([pscustomobject]@{Preis=10; Menge=2},[pscustomobject]@{Preis=5; Menge=3})\n$m = $posten | ForEach-Object { $_.Preis * $_.Menge } | Measure-Object -Sum\n$m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Gesamtkosten“ nutzt ForEach-Object, Measure-Object. ForEach-Object { … } berechnet eine Ausgabe je Pipelineobjekt. Measure-Object liefert ein Messobjekt: .Count ist die Anzahl, mit -Sum wird .Sum, mit -Average .Average, mit -Minimum .Minimum und mit -Maximum .Maximum gefüllt. -Property Feld misst ein Zahlenfeld. Group-Object Feld gruppiert Objekte; jede Gruppe hat Name, Count und Group. Select-Object Feld wählt Eigenschaften, -ExpandProperty gibt deren Werte aus.\nArbeitsauftrag: Berechne je Position Preis mal Menge und summiere die Ergebnisse. Gib nur die Summe aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ForEach-Object, Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "35"
          ]
        }
      ],
      "prerequisites": [
        "m13-09"
      ],
      "minutes": 13,
      "xp": 69,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objektpipelines und Statistik"
      ]
    }
  ]
});
