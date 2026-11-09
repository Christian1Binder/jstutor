window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m11",
  "title": "Schleifen",
  "city": "Erfurt",
  "description": "foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
  "lesson": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
  "tag": "ps-11",
  "level": 3,
  "exercises": [
    {
      "id": "m11-01",
      "title": "Jeden Namen begrüßen",
      "task": "Gib Hallo Ada und Hallo Lin aus.",
      "explanation": "In dieser Übung übst du: Jeden Namen begrüßen. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib Hallo Ada und Hallo Lin aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Hallo Ada\nHallo Lin"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$namen = \"Ada\", \"Lin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \"Ada\", \"Lin\"\nforeach ($name in $namen) { \"Hallo $name\" }"
      },
      "solutionNotes": "Die Lösung zu „Jeden Namen begrüßen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib Hallo Ada und Hallo Lin aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Hallo Ada",
            "Hallo Lin"
          ]
        }
      ],
      "prerequisites": [
        "m10-10"
      ],
      "minutes": 7,
      "xp": 54,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-02",
      "title": "Verdoppeln",
      "task": "Gib jeden Wert verdoppelt aus.",
      "explanation": "In dieser Übung übst du: Verdoppeln. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib jeden Wert verdoppelt aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "4\n8\n12"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 2, 4, 6\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 2, 4, 6\nforeach ($wert in $werte) { $wert * 2 }"
      },
      "solutionNotes": "Die Lösung zu „Verdoppeln“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib jeden Wert verdoppelt aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "4",
            "8",
            "12"
          ]
        }
      ],
      "prerequisites": [
        "m11-01"
      ],
      "minutes": 8,
      "xp": 55,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-03",
      "title": "Summe sammeln",
      "task": "Addiere die Werte in $summe und gib nur die Endsumme aus.",
      "explanation": "In dieser Übung übst du: Summe sammeln. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Addiere die Werte in $summe und gib nur die Endsumme aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "15"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 3, 5, 7\n$summe = 0\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 3, 5, 7\n$summe = 0\nforeach ($wert in $werte) { $summe += $wert }\n$summe"
      },
      "solutionNotes": "Die Lösung zu „Summe sammeln“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Addiere die Werte in $summe und gib nur die Endsumme aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "15"
          ]
        }
      ],
      "prerequisites": [
        "m11-02"
      ],
      "minutes": 8,
      "xp": 56,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-04",
      "title": "For-Zähler",
      "task": "Gib mit for die Zahlen 0, 1 und 2 aus.",
      "explanation": "In dieser Übung übst du: For-Zähler. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib mit for die Zahlen 0, 1 und 2 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "0\n1\n2"
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
        "js": "for ($i = 0; $i -lt 3; $i++) { $i }"
      },
      "solutionNotes": "Die Lösung zu „For-Zähler“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib mit for die Zahlen 0, 1 und 2 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "0",
            "1",
            "2"
          ]
        }
      ],
      "prerequisites": [
        "m11-03"
      ],
      "minutes": 9,
      "xp": 57,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-05",
      "title": "While-Zähler",
      "task": "Gib mit while die Werte 1, 2 und 3 aus.",
      "explanation": "In dieser Übung übst du: While-Zähler. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib mit while die Werte 1, 2 und 3 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "1\n2\n3"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$i = 1\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$i = 1\nwhile ($i -le 3) { $i\n$i++ }"
      },
      "solutionNotes": "Die Lösung zu „While-Zähler“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib mit while die Werte 1, 2 und 3 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "1",
            "2",
            "3"
          ]
        }
      ],
      "prerequisites": [
        "m11-04"
      ],
      "minutes": 9,
      "xp": 58,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-06",
      "title": "Rückwärts",
      "task": "Gib mit for 3, 2 und 1 aus.",
      "explanation": "In dieser Übung übst du: Rückwärts. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib mit for 3, 2 und 1 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "3\n2\n1"
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
        "js": "for ($i = 3; $i -gt 0; $i--) { $i }"
      },
      "solutionNotes": "Die Lösung zu „Rückwärts“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib mit for 3, 2 und 1 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "3",
            "2",
            "1"
          ]
        }
      ],
      "prerequisites": [
        "m11-05"
      ],
      "minutes": 10,
      "xp": 59,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-07",
      "title": "Gezielt ausgeben",
      "task": "Gib in einer foreach-Schleife nur Werte größer als 4 aus.",
      "explanation": "In dieser Übung übst du: Gezielt ausgeben. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib in einer foreach-Schleife nur Werte größer als 4 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "6\n8"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 2, 6, 3, 8\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 2, 6, 3, 8\nforeach ($wert in $werte) { if ($wert -gt 4) { $wert } }"
      },
      "solutionNotes": "Die Lösung zu „Gezielt ausgeben“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib in einer foreach-Schleife nur Werte größer als 4 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "6",
            "8"
          ]
        }
      ],
      "prerequisites": [
        "m11-06"
      ],
      "minutes": 10,
      "xp": 60,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-08",
      "title": "Index nutzen",
      "task": "Gib per for-Schleife die beiden Listenelemente aus.",
      "explanation": "In dieser Übung übst du: Index nutzen. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib per for-Schleife die beiden Listenelemente aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Nord\nSüd"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$namen = \"Nord\", \"Süd\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \"Nord\", \"Süd\"\nfor ($i = 0; $i -lt $namen.Count; $i++) { $namen[$i] }"
      },
      "solutionNotes": "Die Lösung zu „Index nutzen“ nutzt .Count. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib per for-Schleife die beiden Listenelemente aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Nord",
            "Süd"
          ]
        }
      ],
      "prerequisites": [
        "m11-07"
      ],
      "minutes": 11,
      "xp": 61,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-09",
      "title": "Eigenschaften im Durchlauf",
      "task": "Gib je Gerät den Namen aus.",
      "explanation": "In dieser Übung übst du: Eigenschaften im Durchlauf. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Gib je Gerät den Namen aus."
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
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"},[pscustomobject]@{Name=\"SRV1\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"},[pscustomobject]@{Name=\"SRV1\"})\nforeach ($geraet in $geraete) { $geraet.Name }"
      },
      "solutionNotes": "Die Lösung zu „Eigenschaften im Durchlauf“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Gib je Gerät den Namen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m11-08"
      ],
      "minutes": 11,
      "xp": 62,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    },
    {
      "id": "m11-10",
      "title": "Projekt: Alarmzähler",
      "task": "Zähle Werte über 80 in $alarme und gib nur den Zähler aus.",
      "explanation": "In dieser Übung übst du: Projekt: Alarmzähler. foreach ($element in $liste) { … } führt den Block einmal je Element aus.",
      "concept": {
        "explanation": "foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.",
        "example": "foreach ($zahl in 1..3) { $zahl * 10 }",
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
          "text": "Zähle Werte über 80 in $alarme und gib nur den Zähler aus."
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
        "js": "$lasten = 20, 95, 81, 60\n$alarme = 0\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$lasten = 20, 95, 81, 60\n$alarme = 0\nforeach ($last in $lasten) { if ($last -gt 80) { $alarme++ } }\n$alarme"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Alarmzähler“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. foreach ($element in $liste) { … } führt den Block einmal je Element aus. for ($i=0; $i -lt 3; $i++) verbindet Startwert, Bedingung und Fortschritt. while (Bedingung) wiederholt, solange die Bedingung wahr ist. Vergiss die Änderung des Zählers nicht. += addiert und speichert, ++ erhöht um eins. Die Lernumgebung beendet sehr lange Schleifen.\nArbeitsauftrag: Zähle Werte über 80 in $alarme und gib nur den Zähler aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m11-09"
      ],
      "minutes": 12,
      "xp": 63,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Schleifen"
      ]
    }
  ]
});
