window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m04",
  "title": "Texte verarbeiten",
  "city": "Bremen",
  "description": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
  "lesson": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
  "tag": "ps-04",
  "level": 1,
  "exercises": [
    {
      "id": "m04-01",
      "title": "Begrüßung",
      "task": "Gib Hallo Ada durch eine Zeichenkette mit Variablenersetzung aus.",
      "explanation": "In dieser Übung übst du: Begrüßung. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Gib Hallo Ada durch eine Zeichenkette mit Variablenersetzung aus."
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
        "js": "$name = \"Ada\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"Ada\"\n\"Hallo $name\""
      },
      "solutionNotes": "Die Lösung zu „Begrüßung“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Gib Hallo Ada durch eine Zeichenkette mit Variablenersetzung aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m03-10"
      ],
      "minutes": 6,
      "xp": 33,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-02",
      "title": "Wörtlicher Dollar",
      "task": "Gib den wörtlichen Text $name aus.",
      "explanation": "In dieser Übung übst du: Wörtlicher Dollar. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Gib den wörtlichen Text $name aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "$name"
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
        "js": "'$name'"
      },
      "solutionNotes": "Die Lösung zu „Wörtlicher Dollar“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Gib den wörtlichen Text $name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "$name"
          ]
        }
      ],
      "prerequisites": [
        "m04-01"
      ],
      "minutes": 7,
      "xp": 34,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-03",
      "title": "Text verbinden",
      "task": "Verbinde $ort mit dem Text -LAB.",
      "explanation": "In dieser Übung übst du: Text verbinden. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Verbinde $ort mit dem Text -LAB."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "BERLIN-LAB"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$ort = \"BERLIN\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$ort = \"BERLIN\"\n$ort + \"-LAB\""
      },
      "solutionNotes": "Die Lösung zu „Text verbinden“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Verbinde $ort mit dem Text -LAB.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "BERLIN-LAB"
          ]
        }
      ],
      "prerequisites": [
        "m04-02"
      ],
      "minutes": 7,
      "xp": 35,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-04",
      "title": "Länge",
      "task": "Gib die Länge von $name aus.",
      "explanation": "In dieser Übung übst du: Länge. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Gib die Länge von $name aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "6"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"Server\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"Server\"\n$name.Length"
      },
      "solutionNotes": "Die Lösung zu „Länge“ nutzt .Length. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Gib die Länge von $name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Length. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "6"
          ]
        }
      ],
      "prerequisites": [
        "m04-03"
      ],
      "minutes": 8,
      "xp": 36,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-05",
      "title": "Ränder säubern",
      "task": "Entferne die Rand-Leerzeichen von $name und gib das Ergebnis aus.",
      "explanation": "In dieser Übung übst du: Ränder säubern. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Entferne die Rand-Leerzeichen von $name und gib das Ergebnis aus."
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
        "js": "$name = \"  Ada  \"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"  Ada  \"\n$name.Trim()"
      },
      "solutionNotes": "Die Lösung zu „Ränder säubern“ nutzt .Trim. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Entferne die Rand-Leerzeichen von $name und gib das Ergebnis aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Trim. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m04-04"
      ],
      "minutes": 8,
      "xp": 37,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-06",
      "title": "Großschreibung",
      "task": "Gib $name vollständig großgeschrieben aus.",
      "explanation": "In dieser Übung übst du: Großschreibung. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Gib $name vollständig großgeschrieben aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC-01"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"pc-01\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"pc-01\"\n$name.ToUpper()"
      },
      "solutionNotes": "Die Lösung zu „Großschreibung“ nutzt .ToUpper. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Gib $name vollständig großgeschrieben aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .ToUpper. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC-01"
          ]
        }
      ],
      "prerequisites": [
        "m04-05"
      ],
      "minutes": 9,
      "xp": 38,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-07",
      "title": "Kleinschreibung",
      "task": "Gib $mail kleingeschrieben aus.",
      "explanation": "In dieser Übung übst du: Kleinschreibung. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Gib $mail kleingeschrieben aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "ada@lab.de"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$mail = \"ADA@LAB.DE\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$mail = \"ADA@LAB.DE\"\n$mail.ToLower()"
      },
      "solutionNotes": "Die Lösung zu „Kleinschreibung“ nutzt .ToLower. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Gib $mail kleingeschrieben aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .ToLower. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "ada@lab.de"
          ]
        }
      ],
      "prerequisites": [
        "m04-06"
      ],
      "minutes": 9,
      "xp": 39,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-08",
      "title": "Ersetzen",
      "task": "Ersetze in $name PC durch SRV.",
      "explanation": "In dieser Übung übst du: Ersetzen. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Ersetze in $name PC durch SRV."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV-01"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-01\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"PC-01\"\n$name.Replace(\"PC\", \"SRV\")"
      },
      "solutionNotes": "Die Lösung zu „Ersetzen“ nutzt .Replace. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Ersetze in $name PC durch SRV.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Replace. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV-01"
          ]
        }
      ],
      "prerequisites": [
        "m04-07"
      ],
      "minutes": 10,
      "xp": 40,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-09",
      "title": "Ausschnitt",
      "task": "Lies die ersten drei Zeichen von $name aus.",
      "explanation": "In dieser Übung übst du: Ausschnitt. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Lies die ersten drei Zeichen von $name aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$name = \"SRV-42\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$name = \"SRV-42\"\n$name.Substring(0, 3)"
      },
      "solutionNotes": "Die Lösung zu „Ausschnitt“ nutzt .Substring. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Lies die ersten drei Zeichen von $name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Substring. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV"
          ]
        }
      ],
      "prerequisites": [
        "m04-08"
      ],
      "minutes": 10,
      "xp": 41,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    },
    {
      "id": "m04-10",
      "title": "Projekt: Kennung",
      "task": "Entferne Rand-Leerzeichen und gib die Kennung in Großschreibung aus.",
      "explanation": "In dieser Übung übst du: Projekt: Kennung. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich.",
      "concept": {
        "explanation": "Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.",
        "example": "$tier = \"Katze\"\n\"Hallo $tier\"\n\"  Text  \".Trim()",
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
          "text": "Entferne Rand-Leerzeichen und gib die Kennung in Großschreibung aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV-NORD"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$kennung = \"  srv-nord  \"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$kennung = \"  srv-nord  \"\n$kennung.Trim().ToUpper()"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Kennung“ nutzt .Trim, .ToUpper. Doppelte Anführungszeichen ersetzen Variablennamen durch deren Werte; einfache bleiben wörtlich. + verbindet Texte. .Length liest die Länge. .Trim() entfernt Rand-Leerzeichen, .ToUpper() und .ToLower() ändern die Schreibweise, .Replace(alt, neu) ersetzt Text, .Substring(start, länge) liest einen Ausschnitt ab Index 0. Methoden brauchen runde Klammern.\nArbeitsauftrag: Entferne Rand-Leerzeichen und gib die Kennung in Großschreibung aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Trim, .ToUpper. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV-NORD"
          ]
        }
      ],
      "prerequisites": [
        "m04-09"
      ],
      "minutes": 11,
      "xp": 42,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Texte verarbeiten"
      ]
    }
  ]
});
