window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m12",
  "title": "Funktionen",
  "city": "Kassel",
  "description": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
  "lesson": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
  "tag": "ps-12",
  "level": 3,
  "exercises": [
    {
      "id": "m12-01",
      "title": "Feste Begrüßung",
      "task": "Definiere Get-Hallo ohne Parameter mit Ausgabe Hallo und rufe sie auf.",
      "explanation": "In dieser Übung übst du: Feste Begrüßung. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Get-Hallo ohne Parameter mit Ausgabe Hallo und rufe sie auf."
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
        "js": "function Get-Hallo { \"Hallo\" }\nGet-Hallo"
      },
      "solutionNotes": "Die Lösung zu „Feste Begrüßung“ nutzt Get-Hallo. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Get-Hallo ohne Parameter mit Ausgabe Hallo und rufe sie auf.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Hallo. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m11-10"
      ],
      "minutes": 8,
      "xp": 57,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-02",
      "title": "Mit Parameter",
      "task": "Definiere Get-Gruss mit $name; rufe sie mit Ada auf. Ausgabe: Hallo Ada.",
      "explanation": "In dieser Übung übst du: Mit Parameter. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Get-Gruss mit $name; rufe sie mit Ada auf. Ausgabe: Hallo Ada."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Hallo Ada"
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
        "js": "function Get-Gruss { param($name)\n\"Hallo $name\" }\nGet-Gruss \"Ada\""
      },
      "solutionNotes": "Die Lösung zu „Mit Parameter“ nutzt Get-Gruss. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Get-Gruss mit $name; rufe sie mit Ada auf. Ausgabe: Hallo Ada.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Gruss. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Hallo Ada"
          ]
        }
      ],
      "prerequisites": [
        "m12-01"
      ],
      "minutes": 9,
      "xp": 58,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-03",
      "title": "Verdoppeln als Funktion",
      "task": "Definiere Get-Double mit $zahl und gib das Doppelte von 9 aus.",
      "explanation": "In dieser Übung übst du: Verdoppeln als Funktion. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Get-Double mit $zahl und gib das Doppelte von 9 aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 9"
      },
      "solutionNotes": "Die Lösung zu „Verdoppeln als Funktion“ nutzt Get-Double. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Get-Double mit $zahl und gib das Doppelte von 9 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Double. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m12-02"
      ],
      "minutes": 9,
      "xp": 59,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-04",
      "title": "Zwei Argumente",
      "task": "Definiere Add-Werte mit $a und $b und gib die Summe von 4 und 7 aus.",
      "explanation": "In dieser Übung übst du: Zwei Argumente. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Add-Werte mit $a und $b und gib die Summe von 4 und 7 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "11"
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
        "js": "function Add-Werte { param($a, $b)\n$a + $b }\nAdd-Werte 4 7"
      },
      "solutionNotes": "Die Lösung zu „Zwei Argumente“ nutzt Add-Werte. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Add-Werte mit $a und $b und gib die Summe von 4 und 7 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Add-Werte. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "11"
          ]
        }
      ],
      "prerequisites": [
        "m12-03"
      ],
      "minutes": 10,
      "xp": 60,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-05",
      "title": "Ergebnis speichern",
      "task": "Speichere das Ergebnis von Get-Double 6 in $ergebnis und gib es aus.",
      "explanation": "In dieser Übung übst du: Ergebnis speichern. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Speichere das Ergebnis von Get-Double 6 in $ergebnis und gib es aus."
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
        "js": "function Get-Double { param($zahl)\n$zahl * 2 }\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "function Get-Double { param($zahl)\n$zahl * 2 }\n$ergebnis = Get-Double 6\n$ergebnis"
      },
      "solutionNotes": "Die Lösung zu „Ergebnis speichern“ nutzt Get-Double. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Speichere das Ergebnis von Get-Double 6 in $ergebnis und gib es aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Double. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m12-04"
      ],
      "minutes": 10,
      "xp": 61,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-06",
      "title": "Frühe Rückgabe",
      "task": "Definiere Test-Positiv: Bei Werten größer 0 return $true, sonst return $false. Prüfe -2.",
      "explanation": "In dieser Übung übst du: Frühe Rückgabe. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Test-Positiv: Bei Werten größer 0 return $true, sonst return $false. Prüfe -2."
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
        "js": "function Test-Positiv { param($zahl)\nif ($zahl -gt 0) { return $true }\nreturn $false }\nTest-Positiv -2"
      },
      "solutionNotes": "Die Lösung zu „Frühe Rückgabe“ nutzt Test-Positiv. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Test-Positiv: Bei Werten größer 0 return $true, sonst return $false. Prüfe -2.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Test-Positiv. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m12-05"
      ],
      "minutes": 11,
      "xp": 62,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-07",
      "title": "Text normalisieren",
      "task": "Definiere Format-Name mit $name, entferne Ränder und gib Großschreibung zurück. Rufe mit \"  pc1  \" auf.",
      "explanation": "In dieser Übung übst du: Text normalisieren. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Format-Name mit $name, entferne Ränder und gib Großschreibung zurück. Rufe mit \"  pc1  \" auf."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC1"
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
        "js": "function Format-Name { param($name)\n$name.Trim().ToUpper() }\nFormat-Name \"  pc1  \""
      },
      "solutionNotes": "Die Lösung zu „Text normalisieren“ nutzt Format-Name, .Trim, .ToUpper. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Format-Name mit $name, entferne Ränder und gib Großschreibung zurück. Rufe mit \"  pc1  \" auf.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Format-Name, .Trim, .ToUpper. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC1"
          ]
        }
      ],
      "prerequisites": [
        "m12-06"
      ],
      "minutes": 11,
      "xp": 63,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-08",
      "title": "Wiederverwenden",
      "task": "Rufe die Funktion für Ada und danach Lin auf.",
      "explanation": "In dieser Übung übst du: Wiederverwenden. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Rufe die Funktion für Ada und danach Lin auf."
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
        "js": "function Get-Gruss { param($name)\n\"Hallo $name\" }\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "function Get-Gruss { param($name)\n\"Hallo $name\" }\nGet-Gruss \"Ada\"\nGet-Gruss \"Lin\""
      },
      "solutionNotes": "Die Lösung zu „Wiederverwenden“ nutzt Get-Gruss. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Rufe die Funktion für Ada und danach Lin auf.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Gruss. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m12-07"
      ],
      "minutes": 12,
      "xp": 64,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-09",
      "title": "Funktionsausgabe als Liste",
      "task": "Definiere Get-Ziele mit den beiden Ausgaben PC1 und PC2; speichere den Aufruf in $ziele und gib die Anzahl aus.",
      "explanation": "In dieser Übung übst du: Funktionsausgabe als Liste. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Get-Ziele mit den beiden Ausgaben PC1 und PC2; speichere den Aufruf in $ziele und gib die Anzahl aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "function Get-Ziele { \"PC1\"\n\"PC2\" }\n$ziele = Get-Ziele\n$ziele.Count"
      },
      "solutionNotes": "Die Lösung zu „Funktionsausgabe als Liste“ nutzt Get-Ziele, .Count. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Get-Ziele mit den beiden Ausgaben PC1 und PC2; speichere den Aufruf in $ziele und gib die Anzahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Ziele, .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m12-08"
      ],
      "minutes": 12,
      "xp": 65,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    },
    {
      "id": "m12-10",
      "title": "Projekt: Freier Platz",
      "task": "Definiere Get-Frei mit $gesamt und $belegt. Gib für 250 und 80 die freie Kapazität zurück.",
      "explanation": "In dieser Übung übst du: Projekt: Freier Platz. function Name { param($wert) … } definiert eine wiederverwendbare Funktion.",
      "concept": {
        "explanation": "function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.",
        "example": "function Get-Double { param($zahl)\n$zahl * 2 }\nGet-Double 7",
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
          "text": "Definiere Get-Frei mit $gesamt und $belegt. Gib für 250 und 80 die freie Kapazität zurück."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "170"
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
        "js": "function Get-Frei { param($gesamt, $belegt)\nreturn ($gesamt - $belegt) }\nGet-Frei 250 80"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Freier Platz“ nutzt Get-Frei. function Name { param($wert) … } definiert eine wiederverwendbare Funktion. Der Aufruf erfolgt wie bei einem Befehl: Name Argument. Ohne ausdrücklich benannte Parameter werden hier Argumente der Reihe nach gebunden. Jeder nicht zugewiesene Ausdruck wird ausgegeben; return beendet die Funktion mit einem Ergebnis. Die Lernumgebung unterstützt einfache Funktionen mit Positionsparametern, keine erweiterten Funktionen oder Module.\nArbeitsauftrag: Definiere Get-Frei mit $gesamt und $belegt. Gib für 250 und 80 die freie Kapazität zurück.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Get-Frei. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "170"
          ]
        }
      ],
      "prerequisites": [
        "m12-09"
      ],
      "minutes": 13,
      "xp": 66,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Funktionen"
      ]
    }
  ]
});
