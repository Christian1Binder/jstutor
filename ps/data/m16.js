window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m16",
  "title": "CSV: Tabellen verarbeiten",
  "city": "Frankfurt",
  "description": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
  "lesson": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
  "tag": "ps-16",
  "level": 4,
  "exercises": [
    {
      "id": "m16-01",
      "title": "Namen importieren",
      "task": "Lies die CSV-Tabelle und gib die Namen aus.",
      "explanation": "In dieser Übung übst du: Namen importieren. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Lies die CSV-Tabelle und gib die Namen aus."
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
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Namen importieren“ nutzt ConvertFrom-Csv, Select-Object. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Lies die CSV-Tabelle und gib die Namen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m15-10"
      ],
      "minutes": 9,
      "xp": 69,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-02",
      "title": "Zeilen zählen",
      "task": "Importiere die CSV-Tabelle und gib die Datensatzanzahl aus.",
      "explanation": "In dieser Übung übst du: Zeilen zählen. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Importiere die CSV-Tabelle und gib die Datensatzanzahl aus."
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
        "js": "$csv = \"Name`nAda`nLin`nSam\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name`nAda`nLin`nSam\"\n$d = $csv | ConvertFrom-Csv\n$d.Count"
      },
      "solutionNotes": "Die Lösung zu „Zeilen zählen“ nutzt ConvertFrom-Csv, .Count. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Importiere die CSV-Tabelle und gib die Datensatzanzahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m16-01"
      ],
      "minutes": 10,
      "xp": 70,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-03",
      "title": "Semikolon",
      "task": "Importiere mit Semikolon als Trennzeichen und gib Ort aus.",
      "explanation": "In dieser Übung übst du: Semikolon. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Importiere mit Semikolon als Trennzeichen und gib Ort aus."
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
        "js": "$csv = \"Name;Ort`nAda;Bonn\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name;Ort`nAda;Bonn\"\n$csv | ConvertFrom-Csv -Delimiter \";\" | Select-Object -ExpandProperty Ort"
      },
      "solutionNotes": "Die Lösung zu „Semikolon“ nutzt ConvertFrom-Csv, Select-Object. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Importiere mit Semikolon als Trennzeichen und gib Ort aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m16-02"
      ],
      "minutes": 10,
      "xp": 71,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-04",
      "title": "Zahlentexte addieren",
      "task": "Importiere die Tabelle und summiere Menge nach Umwandlung in [int]. Gib nur die Summe aus.",
      "explanation": "In dieser Übung übst du: Zahlentexte addieren. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Importiere die Tabelle und summiere Menge nach Umwandlung in [int]. Gib nur die Summe aus."
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
        "js": "$csv = \"Menge`n12`n8\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Menge`n12`n8\"\n$m = $csv | ConvertFrom-Csv | ForEach-Object { [int]$_.Menge } | Measure-Object -Sum\n$m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Zahlentexte addieren“ nutzt ConvertFrom-Csv, ForEach-Object, Measure-Object. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Importiere die Tabelle und summiere Menge nach Umwandlung in [int]. Gib nur die Summe aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, ForEach-Object, Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m16-03"
      ],
      "minutes": 11,
      "xp": 72,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-05",
      "title": "Ort filtern",
      "task": "Gib Namen aus Bonn aus.",
      "explanation": "In dieser Übung übst du: Ort filtern. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Gib Namen aus Bonn aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ada\nSam"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel`nSam,Bonn\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel`nSam,Bonn\"\n$csv | ConvertFrom-Csv | Where-Object { $_.Ort -eq \"Bonn\" } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Ort filtern“ nutzt ConvertFrom-Csv, Where-Object, Select-Object. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Gib Namen aus Bonn aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ada",
            "Sam"
          ]
        }
      ],
      "prerequisites": [
        "m16-04"
      ],
      "minutes": 11,
      "xp": 73,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-06",
      "title": "Zweites Feld lesen",
      "task": "Gib den Ort der zweiten Datenzeile aus.",
      "explanation": "In dieser Übung übst du: Zweites Feld lesen. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Gib den Ort der zweiten Datenzeile aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Kiel"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel\"\n$d = $csv | ConvertFrom-Csv\n$d[1].Ort"
      },
      "solutionNotes": "Die Lösung zu „Zweites Feld lesen“ nutzt ConvertFrom-Csv. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Gib den Ort der zweiten Datenzeile aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Kiel"
          ]
        }
      ],
      "prerequisites": [
        "m16-05"
      ],
      "minutes": 12,
      "xp": 74,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-07",
      "title": "Export mit Kopfzeile",
      "task": "Wandle das Objekt in CSV ohne Typinformation um.",
      "explanation": "In dieser Übung übst du: Export mit Kopfzeile. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Wandle das Objekt in CSV ohne Typinformation um."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "\"Name\",\"Ort\"\n\"Ada\",\"Bonn\""
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$p = [pscustomobject]@{Name=\"Ada\"; Ort=\"Bonn\"}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$p = [pscustomobject]@{Name=\"Ada\"; Ort=\"Bonn\"}\n$p | ConvertTo-Csv -NoTypeInformation"
      },
      "solutionNotes": "Die Lösung zu „Export mit Kopfzeile“ nutzt ConvertTo-Csv. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Wandle das Objekt in CSV ohne Typinformation um.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertTo-Csv. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "\"Name\",\"Ort\"",
            "\"Ada\",\"Bonn\""
          ]
        }
      ],
      "prerequisites": [
        "m16-06"
      ],
      "minutes": 12,
      "xp": 75,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-08",
      "title": "Import und Export",
      "task": "Lies die CSV-Tabelle und exportiere sie wieder ohne Typinformation.",
      "explanation": "In dieser Übung übst du: Import und Export. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Lies die CSV-Tabelle und exportiere sie wieder ohne Typinformation."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "\"Name\"\n\"Ada\"\n\"Lin\""
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name`nAda`nLin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name`nAda`nLin\"\n$csv | ConvertFrom-Csv | ConvertTo-Csv -NoTypeInformation"
      },
      "solutionNotes": "Die Lösung zu „Import und Export“ nutzt ConvertFrom-Csv, ConvertTo-Csv. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Lies die CSV-Tabelle und exportiere sie wieder ohne Typinformation.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, ConvertTo-Csv. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "\"Name\"",
            "\"Ada\"",
            "\"Lin\""
          ]
        }
      ],
      "prerequisites": [
        "m16-07"
      ],
      "minutes": 13,
      "xp": 76,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-09",
      "title": "Zahlenfilter",
      "task": "Gib Namen aus, deren Menge nach Umwandlung mindestens 10 ist.",
      "explanation": "In dieser Übung übst du: Zahlenfilter. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Gib Namen aus, deren Menge nach Umwandlung mindestens 10 ist."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "B\nC"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Menge`nA,2`nB,12`nC,10\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Menge`nA,2`nB,12`nC,10\"\n$csv | ConvertFrom-Csv | Where-Object { [int]$_.Menge -ge 10 } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Zahlenfilter“ nutzt ConvertFrom-Csv, Where-Object, Select-Object. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Gib Namen aus, deren Menge nach Umwandlung mindestens 10 ist.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "B",
            "C"
          ]
        }
      ],
      "prerequisites": [
        "m16-08"
      ],
      "minutes": 13,
      "xp": 77,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    },
    {
      "id": "m16-10",
      "title": "Projekt: Inventarsumme",
      "task": "Berechne Preis mal Menge pro CSV-Zeile und gib die Gesamtsumme aus.",
      "explanation": "In dieser Übung übst du: Projekt: Inventarsumme. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen.",
      "concept": {
        "explanation": "CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.",
        "example": "$csv = \"Name,Ort`nLin,Kiel\"\n$csv | ConvertFrom-Csv | Select-Object -ExpandProperty Ort",
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
          "text": "Berechne Preis mal Menge pro CSV-Zeile und gib die Gesamtsumme aus."
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
        "js": "$csv = \"Preis,Menge`n10,3`n5,4\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Preis,Menge`n10,3`n5,4\"\n$m = $csv | ConvertFrom-Csv | ForEach-Object { ([int]$_.Preis) * ([int]$_.Menge) } | Measure-Object -Sum\n$m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Inventarsumme“ nutzt ConvertFrom-Csv, ForEach-Object, Measure-Object. CSV enthält eine Kopfzeile mit Spaltennamen und danach Datenzeilen. ConvertFrom-Csv macht jede Datenzeile zu einem Objekt. Alle eingelesenen Feldwerte sind zunächst Texte; [int] wandelt Zahlen vor Berechnungen um. -Delimiter \";\" nutzt ein Semikolon. ConvertTo-Csv -NoTypeInformation erzeugt wieder Textzeilen. Innerhalb einer doppelt zitierten PowerShell-Zeichenkette erzeugt `n einen Zeilenumbruch.\nArbeitsauftrag: Berechne Preis mal Menge pro CSV-Zeile und gib die Gesamtsumme aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, ForEach-Object, Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m16-09"
      ],
      "minutes": 14,
      "xp": 78,
      "focus": "js",
      "tags": [
        "PowerShell",
        "CSV: Tabellen verarbeiten"
      ]
    }
  ]
});
