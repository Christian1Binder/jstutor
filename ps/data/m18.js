window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m18",
  "title": "Fehler erkennen und behandeln",
  "city": "Stuttgart",
  "description": "throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
  "lesson": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
  "tag": "ps-18",
  "level": 5,
  "exercises": [
    {
      "id": "m18-01",
      "title": "Fehler auffangen",
      "task": "Löse den Fehler Testfehler aus und gib im catch Abgefangen aus.",
      "explanation": "In dieser Übung übst du: Fehler auffangen. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Löse den Fehler Testfehler aus und gib im catch Abgefangen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Abgefangen"
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
        "js": "try { throw \"Testfehler\" } catch { \"Abgefangen\" }"
      },
      "solutionNotes": "Die Lösung zu „Fehler auffangen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Löse den Fehler Testfehler aus und gib im catch Abgefangen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Abgefangen"
          ]
        }
      ],
      "prerequisites": [
        "m17-10"
      ],
      "minutes": 9,
      "xp": 75,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-02",
      "title": "Meldung lesen",
      "task": "Fange den Fehler Nicht bereit ab und gib seine Meldung aus.",
      "explanation": "In dieser Übung übst du: Meldung lesen. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Fange den Fehler Nicht bereit ab und gib seine Meldung aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Nicht bereit"
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
        "js": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }"
      },
      "solutionNotes": "Die Lösung zu „Meldung lesen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Fange den Fehler Nicht bereit ab und gib seine Meldung aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Nicht bereit"
          ]
        }
      ],
      "prerequisites": [
        "m18-01"
      ],
      "minutes": 10,
      "xp": 76,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-03",
      "title": "Erfolgsweg",
      "task": "Gib im try OK aus. Der catch-Block darf nur bei Fehler Fehler ausgeben.",
      "explanation": "In dieser Übung übst du: Erfolgsweg. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Gib im try OK aus. Der catch-Block darf nur bei Fehler Fehler ausgeben."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "OK"
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
        "js": "try { \"OK\" } catch { \"Fehler\" }"
      },
      "solutionNotes": "Die Lösung zu „Erfolgsweg“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Gib im try OK aus. Der catch-Block darf nur bei Fehler Fehler ausgeben.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "OK"
          ]
        }
      ],
      "prerequisites": [
        "m18-02"
      ],
      "minutes": 10,
      "xp": 77,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-04",
      "title": "Fehlende Datei behandeln",
      "task": "Versuche fehlt.txt zu lesen und gib bei einem Fehler Datei fehlt aus.",
      "explanation": "In dieser Übung übst du: Fehlende Datei behandeln. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Versuche fehlt.txt zu lesen und gib bei einem Fehler Datei fehlt aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Datei fehlt"
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
        "js": "try { Get-Content \"fehlt.txt\" } catch { \"Datei fehlt\" }"
      },
      "solutionNotes": "Die Lösung zu „Fehlende Datei behandeln“ nutzt Get-Content. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Versuche fehlt.txt zu lesen und gib bei einem Fehler Datei fehlt aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Datei fehlt"
          ]
        }
      ],
      "prerequisites": [
        "m18-03"
      ],
      "minutes": 11,
      "xp": 78,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-05",
      "title": "Existenz vorher prüfen",
      "task": "Prüfe fehlt.txt vor dem Lesen. Falls die Datei fehlt, gib Übersprungen aus.",
      "explanation": "In dieser Übung übst du: Existenz vorher prüfen. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Prüfe fehlt.txt vor dem Lesen. Falls die Datei fehlt, gib Übersprungen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Übersprungen"
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
        "js": "if (Test-Path \"fehlt.txt\") { Get-Content \"fehlt.txt\" } else { \"Übersprungen\" }"
      },
      "solutionNotes": "Die Lösung zu „Existenz vorher prüfen“ nutzt Test-Path, Get-Content. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Prüfe fehlt.txt vor dem Lesen. Falls die Datei fehlt, gib Übersprungen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Test-Path, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Übersprungen"
          ]
        }
      ],
      "prerequisites": [
        "m18-04"
      ],
      "minutes": 11,
      "xp": 79,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-06",
      "title": "Eingabe zurückweisen",
      "task": "Wenn $zahl kleiner 0 ist, löse Ungültig aus. Fange ab und gib die Fehlermeldung aus.",
      "explanation": "In dieser Übung übst du: Eingabe zurückweisen. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Wenn $zahl kleiner 0 ist, löse Ungültig aus. Fange ab und gib die Fehlermeldung aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ungültig"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$zahl = -1\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$zahl = -1\ntry { if ($zahl -lt 0) { throw \"Ungültig\" } } catch { $_.Exception.Message }"
      },
      "solutionNotes": "Die Lösung zu „Eingabe zurückweisen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Wenn $zahl kleiner 0 ist, löse Ungültig aus. Fange ab und gib die Fehlermeldung aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ungültig"
          ]
        }
      ],
      "prerequisites": [
        "m18-05"
      ],
      "minutes": 12,
      "xp": 80,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-07",
      "title": "Division behandeln",
      "task": "Fange Division durch null ab und gib Rechenfehler aus.",
      "explanation": "In dieser Übung übst du: Division behandeln. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Fange Division durch null ab und gib Rechenfehler aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Rechenfehler"
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
        "js": "try { 5 / 0 } catch { \"Rechenfehler\" }"
      },
      "solutionNotes": "Die Lösung zu „Division behandeln“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Fange Division durch null ab und gib Rechenfehler aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Rechenfehler"
          ]
        }
      ],
      "prerequisites": [
        "m18-06"
      ],
      "minutes": 12,
      "xp": 81,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-08",
      "title": "JSON-Fehler",
      "task": "Fange den Fehler beim Parsen des ungültigen JSON ab und gib Ungültiges JSON aus.",
      "explanation": "In dieser Übung übst du: JSON-Fehler. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Fange den Fehler beim Parsen des ungültigen JSON ab und gib Ungültiges JSON aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ungültiges JSON"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$json = \"kein JSON\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$json = \"kein JSON\"\ntry { $json | ConvertFrom-Json } catch { \"Ungültiges JSON\" }"
      },
      "solutionNotes": "Die Lösung zu „JSON-Fehler“ nutzt ConvertFrom-Json. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Fange den Fehler beim Parsen des ungültigen JSON ab und gib Ungültiges JSON aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind ConvertFrom-Json. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ungültiges JSON"
          ]
        }
      ],
      "prerequisites": [
        "m18-07"
      ],
      "minutes": 13,
      "xp": 82,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-09",
      "title": "Danach weiter",
      "task": "Fange einen Fehler mit Ausgabe Ersatz ab und gib nach try/catch Weiter aus.",
      "explanation": "In dieser Übung übst du: Danach weiter. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Fange einen Fehler mit Ausgabe Ersatz ab und gib nach try/catch Weiter aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ersatz\nWeiter"
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
        "js": "try { throw \"Test\" } catch { \"Ersatz\" }\n\"Weiter\""
      },
      "solutionNotes": "Die Lösung zu „Danach weiter“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Fange einen Fehler mit Ausgabe Ersatz ab und gib nach try/catch Weiter aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ersatz",
            "Weiter"
          ]
        }
      ],
      "prerequisites": [
        "m18-08"
      ],
      "minutes": 13,
      "xp": 83,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    },
    {
      "id": "m18-10",
      "title": "Projekt: Fehlertoleranter Bericht",
      "task": "Lies die Dateien in $pfade. Bei fehlenden Dateien gib FEHLT aus; vorhandene Inhalte werden ausgegeben.",
      "explanation": "In dieser Übung übst du: Projekt: Fehlertoleranter Bericht. throw \"Meldung\" erzeugt einen abbrechenden Fehler.",
      "concept": {
        "explanation": "throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.",
        "example": "try { throw \"Nicht bereit\" } catch { $_.Exception.Message }",
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
          "text": "Lies die Dateien in $pfade. Bei fehlenden Dateien gib FEHLT aus; vorhandene Inhalte werden ausgegeben."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "OK\nFEHLT"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$pfade = \"a.txt\", \"b.txt\"\nSet-Content -Path \"a.txt\" -Value \"OK\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$pfade = \"a.txt\", \"b.txt\"\nSet-Content -Path \"a.txt\" -Value \"OK\"\nforeach ($pfad in $pfade) { try { Get-Content $pfad } catch { \"FEHLT\" } }"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Fehlertoleranter Bericht“ nutzt Set-Content, Get-Content. throw \"Meldung\" erzeugt einen abbrechenden Fehler. try { … } catch { … } fängt abbrechende Fehler ab. Im catch bezeichnet $_ den Fehler und $_.Exception.Message seine Meldung. Echte PowerShell unterscheidet außerdem nicht abbrechende Fehler und bietet -ErrorAction Stop; die vereinfachte Lernumgebung behandelt ihre Laufzeitfehler immer als abbrechend. Vorbedingungen mit if und Test-Path können erwartete Fehler vermeiden.\nArbeitsauftrag: Lies die Dateien in $pfade. Bei fehlenden Dateien gib FEHLT aus; vorhandene Inhalte werden ausgegeben.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Set-Content, Get-Content. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "OK",
            "FEHLT"
          ]
        }
      ],
      "prerequisites": [
        "m18-09"
      ],
      "minutes": 14,
      "xp": 84,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Fehler erkennen und behandeln"
      ]
    }
  ]
});
