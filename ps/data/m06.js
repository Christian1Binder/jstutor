window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m06",
  "title": "Listen erweitern und zerlegen",
  "city": "Berlin",
  "description": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
  "lesson": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
  "tag": "ps-06",
  "level": 2,
  "exercises": [
    {
      "id": "m06-01",
      "title": "Anhängen",
      "task": "Hänge 30 an $werte an und gib alle Werte aus.",
      "explanation": "In dieser Übung übst du: Anhängen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Hänge 30 an $werte an und gib alle Werte aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "10\n20\n30"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$werte = 10, 20\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$werte = 10, 20\n$werte += 30\n$werte"
      },
      "solutionNotes": "Die Lösung zu „Anhängen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Hänge 30 an $werte an und gib alle Werte aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "10",
            "20",
            "30"
          ]
        }
      ],
      "prerequisites": [
        "m05-10"
      ],
      "minutes": 6,
      "xp": 39,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-02",
      "title": "Listen verbinden",
      "task": "Verbinde beide Listen und gib die Werte aus.",
      "explanation": "In dieser Übung übst du: Listen verbinden. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Verbinde beide Listen und gib die Werte aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "1\n2\n3\n4"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$a = 1, 2\n$b = 3, 4\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$a = 1, 2\n$b = 3, 4\n$a + $b"
      },
      "solutionNotes": "Die Lösung zu „Listen verbinden“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Verbinde beide Listen und gib die Werte aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 4 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "1",
            "2",
            "3",
            "4"
          ]
        }
      ],
      "prerequisites": [
        "m06-01"
      ],
      "minutes": 7,
      "xp": 40,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-03",
      "title": "Zahlenbereich",
      "task": "Gib die Zahlen 3 bis 7 einschließlich der Grenzen aus.",
      "explanation": "In dieser Übung übst du: Zahlenbereich. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Gib die Zahlen 3 bis 7 einschließlich der Grenzen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "3\n4\n5\n6\n7"
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
        "js": "3..7"
      },
      "solutionNotes": "Die Lösung zu „Zahlenbereich“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Gib die Zahlen 3 bis 7 einschließlich der Grenzen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 5 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "3",
            "4",
            "5",
            "6",
            "7"
          ]
        }
      ],
      "prerequisites": [
        "m06-02"
      ],
      "minutes": 7,
      "xp": 41,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-04",
      "title": "Abwärts zählen",
      "task": "Gib den Bereich von 4 bis 1 aus.",
      "explanation": "In dieser Übung übst du: Abwärts zählen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Gib den Bereich von 4 bis 1 aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "4\n3\n2\n1"
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
        "js": "4..1"
      },
      "solutionNotes": "Die Lösung zu „Abwärts zählen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Gib den Bereich von 4 bis 1 aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 4 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "4",
            "3",
            "2",
            "1"
          ]
        }
      ],
      "prerequisites": [
        "m06-03"
      ],
      "minutes": 8,
      "xp": 42,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-05",
      "title": "Lesbare Liste",
      "task": "Verbinde die Namen mit Komma und Leerzeichen zu einer Zeile.",
      "explanation": "In dieser Übung übst du: Lesbare Liste. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Verbinde die Namen mit Komma und Leerzeichen zu einer Zeile."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Ada, Lin, Sam"
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
        "js": "$namen = \"Ada\", \"Lin\", \"Sam\"\n$namen -join \", \""
      },
      "solutionNotes": "Die Lösung zu „Lesbare Liste“ nutzt -join. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Verbinde die Namen mit Komma und Leerzeichen zu einer Zeile.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -join. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Ada, Lin, Sam"
          ]
        }
      ],
      "prerequisites": [
        "m06-04"
      ],
      "minutes": 8,
      "xp": 43,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-06",
      "title": "Text zerlegen",
      "task": "Zerlege den Text am Semikolon und gib die Teile aus.",
      "explanation": "In dieser Übung übst du: Text zerlegen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Zerlege den Text am Semikolon und gib die Teile aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Nord\nSüd\nWest"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$text = \"Nord;Süd;West\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$text = \"Nord;Süd;West\"\n$text -split \";\""
      },
      "solutionNotes": "Die Lösung zu „Text zerlegen“ nutzt -split. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Zerlege den Text am Semikolon und gib die Teile aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -split. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Nord",
            "Süd",
            "West"
          ]
        }
      ],
      "prerequisites": [
        "m06-05"
      ],
      "minutes": 9,
      "xp": 44,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-07",
      "title": "Mitgliedschaft",
      "task": "Prüfe, ob Admin in der Rollenliste vorkommt.",
      "explanation": "In dieser Übung übst du: Mitgliedschaft. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Prüfe, ob Admin in der Rollenliste vorkommt."
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
        "js": "$rollen = \"Leser\", \"Admin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$rollen = \"Leser\", \"Admin\"\n$rollen -contains \"Admin\""
      },
      "solutionNotes": "Die Lösung zu „Mitgliedschaft“ nutzt -contains. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Prüfe, ob Admin in der Rollenliste vorkommt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -contains. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m06-06"
      ],
      "minutes": 9,
      "xp": 45,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-08",
      "title": "Wert in Liste",
      "task": "Prüfe mit -in, ob Kiel in der Liste steht.",
      "explanation": "In dieser Übung übst du: Wert in Liste. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Prüfe mit -in, ob Kiel in der Liste steht."
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
        "js": "$orte = \"Bonn\", \"Kiel\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$orte = \"Bonn\", \"Kiel\"\n\"Kiel\" -in $orte"
      },
      "solutionNotes": "Die Lösung zu „Wert in Liste“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Prüfe mit -in, ob Kiel in der Liste steht.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m06-07"
      ],
      "minutes": 10,
      "xp": 46,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-09",
      "title": "Nicht enthalten",
      "task": "Prüfe, ob Gast nicht in den Rollen vorkommt.",
      "explanation": "In dieser Übung übst du: Nicht enthalten. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Prüfe, ob Gast nicht in den Rollen vorkommt."
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
        "js": "$rollen = \"Leser\", \"Admin\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$rollen = \"Leser\", \"Admin\"\n$rollen -notcontains \"Gast\""
      },
      "solutionNotes": "Die Lösung zu „Nicht enthalten“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Prüfe, ob Gast nicht in den Rollen vorkommt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m06-08"
      ],
      "minutes": 10,
      "xp": 47,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    },
    {
      "id": "m06-10",
      "title": "Projekt: Zielzeile",
      "task": "Zerlege $text am Komma und verbinde die Teile mit einem senkrechten Strich.",
      "explanation": "In dieser Übung übst du: Projekt: Zielzeile. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu.",
      "concept": {
        "explanation": "Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.",
        "example": "$werte = 2,4\n$werte += 6\n$werte -join \";\"",
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
          "text": "Zerlege $text am Komma und verbinde die Teile mit einem senkrechten Strich."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC1|PC2|SRV1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$text = \"PC1,PC2,SRV1\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$text = \"PC1,PC2,SRV1\"\n$ziele = $text -split \",\"\n$ziele -join \"|\""
      },
      "solutionNotes": "Die Lösung zu „Projekt: Zielzeile“ nutzt -split, -join. Mit + verbindest du Arrays; += weist das Ergebnis zurück zu. Bei normalen PowerShell-Arrays wird dabei ein neues Array erzeugt; für große veränderliche Sammlungen nutzt man später andere Collection-Typen. 1..4 erzeugt einen Zahlenbereich einschließlich beider Grenzen. -join verbindet Elemente zu Text, -split zerlegt Text an einem Muster. -contains prüft Mitgliedschaft, -in kehrt die Reihenfolge um.\nArbeitsauftrag: Zerlege $text am Komma und verbinde die Teile mit einem senkrechten Strich.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind -split, -join. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC1|PC2|SRV1"
          ]
        }
      ],
      "prerequisites": [
        "m06-09"
      ],
      "minutes": 11,
      "xp": 48,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Listen erweitern und zerlegen"
      ]
    }
  ]
});
