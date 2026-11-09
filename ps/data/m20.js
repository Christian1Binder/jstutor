window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m20",
  "title": "Dein Automatisierungsatelier",
  "city": "München",
  "description": "Hier kombinierst du die zuvor erklärten Bausteine.",
  "lesson": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
  "tag": "ps-20",
  "level": 5,
  "exercises": [
    {
      "id": "m20-01",
      "title": "Projekt: Namensliste bereinigen",
      "task": "Trimme alle Namen, wandle in Großschreibung, sortiere und entferne Duplikate.",
      "explanation": "In dieser Übung übst du: Projekt: Namensliste bereinigen. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Trimme alle Namen, wandle in Großschreibung, sortiere und entferne Duplikate."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC1\nPC2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$namen = \" pc2 \", \"PC1\", \"pc2\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \" pc2 \", \"PC1\", \"pc2\"\n$namen | ForEach-Object { $_.Trim().ToUpper() } | Sort-Object -Unique"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Namensliste bereinigen“ nutzt ForEach-Object, .Trim, .ToUpper, Sort-Object. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Trimme alle Namen, wandle in Großschreibung, sortiere und entferne Duplikate.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ForEach-Object, .Trim, .ToUpper, Sort-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC1",
            "PC2"
          ]
        }
      ],
      "prerequisites": [
        "m19-10"
      ],
      "minutes": 10,
      "xp": 81,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-02",
      "title": "Projekt: JSON-Alarm",
      "task": "Parse die JSON-Daten und gib Namen mit Frei kleiner 10 aus.",
      "explanation": "In dieser Übung übst du: Projekt: JSON-Alarm. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Parse die JSON-Daten und gib Namen mit Frei kleiner 10 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "A\nC"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"A\",\"Frei\":5},{\"Name\":\"B\",\"Frei\":30},{\"Name\":\"C\",\"Frei\":8}]'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"A\",\"Frei\":5},{\"Name\":\"B\",\"Frei\":30},{\"Name\":\"C\",\"Frei\":8}]'\n$json | ConvertFrom-Json | Where-Object { $_.Frei -lt 10 } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Projekt: JSON-Alarm“ nutzt ConvertFrom-Json, Where-Object, Select-Object. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Parse die JSON-Daten und gib Namen mit Frei kleiner 10 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json, Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "A",
            "C"
          ]
        }
      ],
      "prerequisites": [
        "m20-01"
      ],
      "minutes": 11,
      "xp": 82,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-03",
      "title": "Projekt: CSV-Speicherreport",
      "task": "Summiere Frei aus der CSV und gib Gesamtfrei: 50 aus.",
      "explanation": "In dieser Übung übst du: Projekt: CSV-Speicherreport. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Summiere Frei aus der CSV und gib Gesamtfrei: 50 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Gesamtfrei: 50"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Frei`nA,20`nB,30\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Name,Frei`nA,20`nB,30\"\n$m = $csv | ConvertFrom-Csv | ForEach-Object { [int]$_.Frei } | Measure-Object -Sum\n\"Gesamtfrei: \" + $m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Projekt: CSV-Speicherreport“ nutzt ConvertFrom-Csv, ForEach-Object, Measure-Object. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Summiere Frei aus der CSV und gib Gesamtfrei: 50 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, ForEach-Object, Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Gesamtfrei: 50"
          ]
        }
      ],
      "prerequisites": [
        "m20-02"
      ],
      "minutes": 11,
      "xp": 83,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-04",
      "title": "Projekt: Grenzwertfunktion",
      "task": "Definiere Test-Alarm mit $last und Rückgabe, ob sie mindestens 80 beträgt. Rufe für 79 und 80 auf.",
      "explanation": "In dieser Übung übst du: Projekt: Grenzwertfunktion. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Definiere Test-Alarm mit $last und Rückgabe, ob sie mindestens 80 beträgt. Rufe für 79 und 80 auf."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "False\nTrue"
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
        "js": "function Test-Alarm { param($last)\n$last -ge 80 }\nTest-Alarm 79\nTest-Alarm 80"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Grenzwertfunktion“ nutzt Test-Alarm. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Definiere Test-Alarm mit $last und Rückgabe, ob sie mindestens 80 beträgt. Rufe für 79 und 80 auf.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Test-Alarm. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "False",
            "True"
          ]
        }
      ],
      "prerequisites": [
        "m20-03"
      ],
      "minutes": 12,
      "xp": 84,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-05",
      "title": "Projekt: Logzusammenfassung",
      "task": "Filtere ERROR-Zeilen und gib nur deren Anzahl aus.",
      "explanation": "In dieser Übung übst du: Projekt: Logzusammenfassung. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Filtere ERROR-Zeilen und gib nur deren Anzahl aus."
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
        "js": "$logs = \"INFO Start\", \"ERROR Disk\", \"ERROR Netz\", \"INFO Ende\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$logs = \"INFO Start\", \"ERROR Disk\", \"ERROR Netz\", \"INFO Ende\"\n$m = $logs | Where-Object { $_ -match \"^ERROR\" } | Measure-Object\n$m.Count"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Logzusammenfassung“ nutzt Where-Object, -match, Measure-Object, .Count. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Filtere ERROR-Zeilen und gib nur deren Anzahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, -match, Measure-Object, .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m20-04"
      ],
      "minutes": 12,
      "xp": 85,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-06",
      "title": "Projekt: Berichtdatei",
      "task": "Filtere Last über 50, schreibe die Namen in alarm.txt und lies die Datei aus.",
      "explanation": "In dieser Übung übst du: Projekt: Berichtdatei. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Filtere Last über 50, schreibe die Namen in alarm.txt und lies die Datei aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "B"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$daten = @([pscustomobject]@{Name=\"A\"; Last=20},[pscustomobject]@{Name=\"B\"; Last=90})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$daten = @([pscustomobject]@{Name=\"A\"; Last=20},[pscustomobject]@{Name=\"B\"; Last=90})\n$namen = $daten | Where-Object { $_.Last -gt 50 } | Select-Object -ExpandProperty Name\nSet-Content -Path \"alarm.txt\" -Value $namen\nGet-Content \"alarm.txt\""
      },
      "solutionNotes": "Die Lösung zu „Projekt: Berichtdatei“ nutzt Where-Object, Select-Object, Set-Content, Get-Content. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Filtere Last über 50, schreibe die Namen in alarm.txt und lies die Datei aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Select-Object, Set-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "B"
          ]
        }
      ],
      "prerequisites": [
        "m20-05"
      ],
      "minutes": 13,
      "xp": 86,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-07",
      "title": "Projekt: Robuster Import",
      "task": "Versuche, die fehlende config.json zu lesen und zu parsen; gib im Fehlerfall Standardkonfiguration aus.",
      "explanation": "In dieser Übung übst du: Projekt: Robuster Import. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Versuche, die fehlende config.json zu lesen und zu parsen; gib im Fehlerfall Standardkonfiguration aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Standardkonfiguration"
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
        "js": "try { Get-Content \"config.json\" -Raw | ConvertFrom-Json } catch { \"Standardkonfiguration\" }"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Robuster Import“ nutzt Get-Content, ConvertFrom-Json. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Versuche, die fehlende config.json zu lesen und zu parsen; gib im Fehlerfall Standardkonfiguration aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Content, ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Standardkonfiguration"
          ]
        }
      ],
      "prerequisites": [
        "m20-06"
      ],
      "minutes": 13,
      "xp": 87,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-08",
      "title": "Projekt: Budget",
      "task": "Berechne aus CSV die Kosten je Position, summiere sie und gib Im Budget aus, wenn die Summe höchstens 100 beträgt, sonst Zu teuer.",
      "explanation": "In dieser Übung übst du: Projekt: Budget. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Berechne aus CSV die Kosten je Position, summiere sie und gib Im Budget aus, wenn die Summe höchstens 100 beträgt, sonst Zu teuer."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Im Budget"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$csv = \"Preis,Menge`n15,4`n10,3\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$csv = \"Preis,Menge`n15,4`n10,3\"\n$m = $csv | ConvertFrom-Csv | ForEach-Object { ([int]$_.Preis) * ([int]$_.Menge) } | Measure-Object -Sum\nif ($m.Sum -le 100) { \"Im Budget\" } else { \"Zu teuer\" }"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Budget“ nutzt ConvertFrom-Csv, ForEach-Object, Measure-Object. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Berechne aus CSV die Kosten je Position, summiere sie und gib Im Budget aus, wenn die Summe höchstens 100 beträgt, sonst Zu teuer.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, ForEach-Object, Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Im Budget"
          ]
        }
      ],
      "prerequisites": [
        "m20-07"
      ],
      "minutes": 14,
      "xp": 88,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-09",
      "title": "Projekt: Datentransfer",
      "task": "Importiere CSV und exportiere die Datensätze als kompaktes JSON.",
      "explanation": "In dieser Übung übst du: Projekt: Datentransfer. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Importiere CSV und exportiere die Datensätze als kompaktes JSON."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "[{\"Name\":\"Ada\",\"Ort\":\"Bonn\"},{\"Name\":\"Lin\",\"Ort\":\"Kiel\"}]"
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
        "js": "$csv = \"Name,Ort`nAda,Bonn`nLin,Kiel\"\n$csv | ConvertFrom-Csv | ConvertTo-Json -Compress"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Datentransfer“ nutzt ConvertFrom-Csv, ConvertTo-Json. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Importiere CSV und exportiere die Datensätze als kompaktes JSON.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Csv, ConvertTo-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "[{\"Name\":\"Ada\",\"Ort\":\"Bonn\"},{\"Name\":\"Lin\",\"Ort\":\"Kiel\"}]"
          ]
        }
      ],
      "prerequisites": [
        "m20-08"
      ],
      "minutes": 14,
      "xp": 89,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    },
    {
      "id": "m20-10",
      "title": "Abschluss: Geräteprüfung",
      "task": "Parse JSON, filtere aktive Geräte mit Last mindestens 70, sortiere nach Name, schreibe die Namen in report.txt und lies den Bericht aus.",
      "explanation": "In dieser Übung übst du: Abschluss: Geräteprüfung. Hier kombinierst du die zuvor erklärten Bausteine.",
      "concept": {
        "explanation": "Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.",
        "example": "$werte = 3,9,6\n$messung = $werte | Where-Object { $_ -gt 4 } | Measure-Object -Sum\n$messung.Sum",
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
          "text": "Parse JSON, filtere aktive Geräte mit Last mindestens 70, sortiere nach Name, schreibe die Namen in report.txt und lies den Bericht aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV1\nSRV2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"SRV2\",\"Aktiv\":true,\"Last\":80},{\"Name\":\"PC1\",\"Aktiv\":false,\"Last\":90},{\"Name\":\"SRV1\",\"Aktiv\":true,\"Last\":75}]'\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = '[{\"Name\":\"SRV2\",\"Aktiv\":true,\"Last\":80},{\"Name\":\"PC1\",\"Aktiv\":false,\"Last\":90},{\"Name\":\"SRV1\",\"Aktiv\":true,\"Last\":75}]'\n$namen = $json | ConvertFrom-Json | Where-Object { $_.Aktiv -and ($_.Last -ge 70) } | Sort-Object Name | Select-Object -ExpandProperty Name\n$namen | Set-Content -Path \"report.txt\"\nGet-Content \"report.txt\""
      },
      "solutionNotes": "Die Lösung zu „Abschluss: Geräteprüfung“ nutzt ConvertFrom-Json, Where-Object, Sort-Object, Select-Object, Set-Content, Get-Content. Hier kombinierst du die zuvor erklärten Bausteine. Zerlege jede Aufgabe zuerst in Eingabe, Verarbeitung und Ausgabe. Halte Daten als Objekte, filtere vor der Darstellung und wandle Zahlen aus CSV ausdrücklich um. Funktionen bündeln wiederholte Verarbeitung. Virtuelle Dateien werden bei jeder Ausführung zurückgesetzt; baue alle benötigten Daten im Skript auf. Die Projekte simulieren administrative Datenflüsse und führen keine Änderungen am echten System aus.\nArbeitsauftrag: Parse JSON, filtere aktive Geräte mit Last mindestens 70, sortiere nach Name, schreibe die Namen in report.txt und lies den Bericht aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json, Where-Object, Sort-Object, Select-Object, Set-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV1",
            "SRV2"
          ]
        }
      ],
      "prerequisites": [
        "m20-09"
      ],
      "minutes": 15,
      "xp": 90,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein Automatisierungsatelier"
      ]
    }
  ]
});
