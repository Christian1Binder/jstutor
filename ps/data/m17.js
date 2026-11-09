window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m17",
  "title": "Virtuelle Dateien",
  "city": "Mainz",
  "description": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
  "lesson": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
  "tag": "ps-17",
  "level": 5,
  "exercises": [
    {
      "id": "m17-01",
      "title": "Datei schreiben",
      "task": "Schreibe Hallo in gruss.txt und lies die Datei aus.",
      "explanation": "In dieser Übung übst du: Datei schreiben. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Schreibe Hallo in gruss.txt und lies die Datei aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Hallo"
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
        "js": "Set-Content -Path \"gruss.txt\" -Value \"Hallo\"\nGet-Content -Path \"gruss.txt\""
      },
      "solutionNotes": "Die Lösung zu „Datei schreiben“ nutzt Set-Content, Get-Content. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Schreibe Hallo in gruss.txt und lies die Datei aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Hallo"
          ]
        }
      ],
      "prerequisites": [
        "m16-10"
      ],
      "minutes": 9,
      "xp": 72,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-02",
      "title": "Existenz prüfen",
      "task": "Prüfe nach dem Schreiben mit Test-Path, ob a.txt existiert.",
      "explanation": "In dieser Übung übst du: Existenz prüfen. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Prüfe nach dem Schreiben mit Test-Path, ob a.txt existiert."
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
        "js": "Set-Content -Path \"a.txt\" -Value \"A\"\nTest-Path \"a.txt\""
      },
      "solutionNotes": "Die Lösung zu „Existenz prüfen“ nutzt Set-Content, Test-Path. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Prüfe nach dem Schreiben mit Test-Path, ob a.txt existiert.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Test-Path. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m17-01"
      ],
      "minutes": 10,
      "xp": 73,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-03",
      "title": "Fehlende Datei",
      "task": "Prüfe, ob unbekannt.txt existiert. Es wurden keine Dateien erzeugt.",
      "explanation": "In dieser Übung übst du: Fehlende Datei. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Prüfe, ob unbekannt.txt existiert. Es wurden keine Dateien erzeugt."
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
        "js": "Test-Path \"unbekannt.txt\""
      },
      "solutionNotes": "Die Lösung zu „Fehlende Datei“ nutzt Test-Path. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Prüfe, ob unbekannt.txt existiert. Es wurden keine Dateien erzeugt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Test-Path. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m17-02"
      ],
      "minutes": 10,
      "xp": 74,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-04",
      "title": "Zeile anhängen",
      "task": "Schreibe Start in log.txt, hänge Ende an und lies die Datei zeilenweise.",
      "explanation": "In dieser Übung übst du: Zeile anhängen. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Schreibe Start in log.txt, hänge Ende an und lies die Datei zeilenweise."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Start\nEnde"
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
        "js": "Set-Content -Path \"log.txt\" -Value \"Start\"\nAdd-Content -Path \"log.txt\" -Value \"Ende\"\nGet-Content \"log.txt\""
      },
      "solutionNotes": "Die Lösung zu „Zeile anhängen“ nutzt Set-Content, Add-Content, Get-Content. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Schreibe Start in log.txt, hänge Ende an und lies die Datei zeilenweise.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Add-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Start",
            "Ende"
          ]
        }
      ],
      "prerequisites": [
        "m17-03"
      ],
      "minutes": 11,
      "xp": 75,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-05",
      "title": "Datei ersetzen",
      "task": "Schreibe Alt und danach Neu in dieselbe Datei; gib den Inhalt aus.",
      "explanation": "In dieser Übung übst du: Datei ersetzen. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Schreibe Alt und danach Neu in dieselbe Datei; gib den Inhalt aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Neu"
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
        "js": "Set-Content -Path \"a.txt\" -Value \"Alt\"\nSet-Content -Path \"a.txt\" -Value \"Neu\"\nGet-Content \"a.txt\""
      },
      "solutionNotes": "Die Lösung zu „Datei ersetzen“ nutzt Set-Content, Get-Content. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Schreibe Alt und danach Neu in dieselbe Datei; gib den Inhalt aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Neu"
          ]
        }
      ],
      "prerequisites": [
        "m17-04"
      ],
      "minutes": 11,
      "xp": 76,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-06",
      "title": "Datei entfernen",
      "task": "Erzeuge a.txt, lösche sie und gib danach das Ergebnis von Test-Path aus.",
      "explanation": "In dieser Übung übst du: Datei entfernen. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Erzeuge a.txt, lösche sie und gib danach das Ergebnis von Test-Path aus."
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
        "js": "Set-Content -Path \"a.txt\" -Value \"A\"\nRemove-Item \"a.txt\"\nTest-Path \"a.txt\""
      },
      "solutionNotes": "Die Lösung zu „Datei entfernen“ nutzt Set-Content, Remove-Item, Test-Path. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Erzeuge a.txt, lösche sie und gib danach das Ergebnis von Test-Path aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Remove-Item, Test-Path. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m17-05"
      ],
      "minutes": 12,
      "xp": 77,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-07",
      "title": "Pfade verbinden",
      "task": "Verbinde den Ordner berichte mit status.txt und gib den Pfad aus.",
      "explanation": "In dieser Übung übst du: Pfade verbinden. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Verbinde den Ordner berichte mit status.txt und gib den Pfad aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "berichte/status.txt"
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
        "js": "Join-Path -Path \"berichte\" -ChildPath \"status.txt\""
      },
      "solutionNotes": "Die Lösung zu „Pfade verbinden“ nutzt Join-Path. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Verbinde den Ordner berichte mit status.txt und gib den Pfad aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Join-Path. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "berichte/status.txt"
          ]
        }
      ],
      "prerequisites": [
        "m17-06"
      ],
      "minutes": 12,
      "xp": 78,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-08",
      "title": "Namen auflisten",
      "task": "Erzeuge a.txt und b.txt und gib die Dateinamen in dieser Reihenfolge aus.",
      "explanation": "In dieser Übung übst du: Namen auflisten. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Erzeuge a.txt und b.txt und gib die Dateinamen in dieser Reihenfolge aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "a.txt\nb.txt"
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
        "js": "Set-Content -Path \"a.txt\" -Value \"A\"\nSet-Content -Path \"b.txt\" -Value \"B\"\nGet-ChildItem | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Namen auflisten“ nutzt Set-Content, Get-ChildItem, Select-Object. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Erzeuge a.txt und b.txt und gib die Dateinamen in dieser Reihenfolge aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Get-ChildItem, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "a.txt",
            "b.txt"
          ]
        }
      ],
      "prerequisites": [
        "m17-07"
      ],
      "minutes": 13,
      "xp": 79,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-09",
      "title": "JSON-Datei",
      "task": "Schreibe kompaktes JSON mit Name Ada in konto.json, lies mit -Raw, parse und gib Name aus.",
      "explanation": "In dieser Übung übst du: JSON-Datei. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Schreibe kompaktes JSON mit Name Ada in konto.json, lies mit -Raw, parse und gib Name aus."
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
        "js": "$p = [pscustomobject]@{Name=\"Ada\"}\n$json = $p | ConvertTo-Json -Compress\nSet-Content -Path \"konto.json\" -Value $json\n$d = Get-Content \"konto.json\" -Raw | ConvertFrom-Json\n$d.Name"
      },
      "solutionNotes": "Die Lösung zu „JSON-Datei“ nutzt ConvertTo-Json, Set-Content, Get-Content, ConvertFrom-Json. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Schreibe kompaktes JSON mit Name Ada in konto.json, lies mit -Raw, parse und gib Name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertTo-Json, Set-Content, Get-Content, ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m17-08"
      ],
      "minutes": 13,
      "xp": 80,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    },
    {
      "id": "m17-10",
      "title": "Projekt: Bericht speichern",
      "task": "Schreibe alle Namen aus $ziele in ziele.txt und lies sie zeilenweise aus.",
      "explanation": "In dieser Übung übst du: Projekt: Bericht speichern. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu.",
      "concept": {
        "explanation": "In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.",
        "example": "Set-Content -Path \"notiz.txt\" -Value \"Hallo\"\nGet-Content -Path \"notiz.txt\"",
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
          "text": "Schreibe alle Namen aus $ziele in ziele.txt und lies sie zeilenweise aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC1\nSRV1\nSRV2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$ziele = \"PC1\", \"SRV1\", \"SRV2\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$ziele = \"PC1\", \"SRV1\", \"SRV2\"\n$ziele | Set-Content -Path \"ziele.txt\"\nGet-Content \"ziele.txt\""
      },
      "solutionNotes": "Die Lösung zu „Projekt: Bericht speichern“ nutzt Set-Content, Get-Content. In diesem Modul sind alle Dateien im Arbeitsspeicher der Lernumgebung; jeder Ausführen-Klick startet neu. Set-Content -Path pfad -Value wert schreibt, Add-Content hängt eine neue Zeile an. Get-Content liest zeilenweise, -Raw als einen Text. Test-Path prüft Existenz. Get-ChildItem gibt hier Name und Length virtueller Dateien aus. Remove-Item löscht eine virtuelle Datei. Join-Path verbindet Pfadteile; Pfadformat und Metadaten sind hier vereinfacht.\nArbeitsauftrag: Schreibe alle Namen aus $ziele in ziele.txt und lies sie zeilenweise aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC1",
            "SRV1",
            "SRV2"
          ]
        }
      ],
      "prerequisites": [
        "m17-09"
      ],
      "minutes": 14,
      "xp": 81,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Virtuelle Dateien"
      ]
    }
  ]
});
