window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m10",
  "title": "Entscheidungen",
  "city": "Dresden",
  "description": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
  "lesson": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
  "tag": "ps-10",
  "level": 3,
  "exercises": [
    {
      "id": "m10-01",
      "title": "Volljährig",
      "task": "Gib Freigabe aus, falls $alter mindestens 18 ist, sonst Gesperrt.",
      "explanation": "In dieser Übung übst du: Volljährig. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Freigabe aus, falls $alter mindestens 18 ist, sonst Gesperrt."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Freigabe"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$alter = 20\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$alter = 20\nif ($alter -ge 18) { \"Freigabe\" } else { \"Gesperrt\" }"
      },
      "solutionNotes": "Die Lösung zu „Volljährig“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Freigabe aus, falls $alter mindestens 18 ist, sonst Gesperrt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Freigabe"
          ]
        }
      ],
      "prerequisites": [
        "m09-10"
      ],
      "minutes": 7,
      "xp": 51,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-02",
      "title": "Alternative",
      "task": "Gleiche Regel: mindestens 18 ergibt Freigabe, sonst Gesperrt.",
      "explanation": "In dieser Übung übst du: Alternative. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gleiche Regel: mindestens 18 ergibt Freigabe, sonst Gesperrt."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Gesperrt"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$alter = 16\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$alter = 16\nif ($alter -ge 18) { \"Freigabe\" } else { \"Gesperrt\" }"
      },
      "solutionNotes": "Die Lösung zu „Alternative“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gleiche Regel: mindestens 18 ergibt Freigabe, sonst Gesperrt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Gesperrt"
          ]
        }
      ],
      "prerequisites": [
        "m10-01"
      ],
      "minutes": 8,
      "xp": 52,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-03",
      "title": "Niedriger Platz",
      "task": "Gib Warnung bei weniger als 10, sonst OK aus.",
      "explanation": "In dieser Übung übst du: Niedriger Platz. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Warnung bei weniger als 10, sonst OK aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Warnung"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$frei = 7\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$frei = 7\nif ($frei -lt 10) { \"Warnung\" } else { \"OK\" }"
      },
      "solutionNotes": "Die Lösung zu „Niedriger Platz“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Warnung bei weniger als 10, sonst OK aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Warnung"
          ]
        }
      ],
      "prerequisites": [
        "m10-02"
      ],
      "minutes": 8,
      "xp": 53,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-04",
      "title": "Grenze zählt",
      "task": "Gib Alarm ab Last 80, sonst OK aus.",
      "explanation": "In dieser Übung übst du: Grenze zählt. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Alarm ab Last 80, sonst OK aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Alarm"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$last = 80\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$last = 80\nif ($last -ge 80) { \"Alarm\" } else { \"OK\" }"
      },
      "solutionNotes": "Die Lösung zu „Grenze zählt“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Alarm ab Last 80, sonst OK aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Alarm"
          ]
        }
      ],
      "prerequisites": [
        "m10-03"
      ],
      "minutes": 9,
      "xp": 54,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-05",
      "title": "Aktiviert",
      "task": "Gib Aktiv aus, wenn $aktiv wahr ist, sonst Inaktiv.",
      "explanation": "In dieser Übung übst du: Aktiviert. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Aktiv aus, wenn $aktiv wahr ist, sonst Inaktiv."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Inaktiv"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$aktiv = $false\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$aktiv = $false\nif ($aktiv) { \"Aktiv\" } else { \"Inaktiv\" }"
      },
      "solutionNotes": "Die Lösung zu „Aktiviert“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Aktiv aus, wenn $aktiv wahr ist, sonst Inaktiv.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Inaktiv"
          ]
        }
      ],
      "prerequisites": [
        "m10-04"
      ],
      "minutes": 9,
      "xp": 55,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-06",
      "title": "Negation",
      "task": "Gib Starten aus, wenn $laeuft nicht wahr ist. Andernfalls keine Ausgabe.",
      "explanation": "In dieser Übung übst du: Negation. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Starten aus, wenn $laeuft nicht wahr ist. Andernfalls keine Ausgabe."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Starten"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$laeuft = $false\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$laeuft = $false\nif (-not $laeuft) { \"Starten\" }"
      },
      "solutionNotes": "Die Lösung zu „Negation“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Starten aus, wenn $laeuft nicht wahr ist. Andernfalls keine Ausgabe.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Starten"
          ]
        }
      ],
      "prerequisites": [
        "m10-05"
      ],
      "minutes": 10,
      "xp": 56,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-07",
      "title": "Zwei Voraussetzungen",
      "task": "Gib Bereit aus, wenn Netz und Dienst wahr sind, sonst Prüfen.",
      "explanation": "In dieser Übung übst du: Zwei Voraussetzungen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Bereit aus, wenn Netz und Dienst wahr sind, sonst Prüfen."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Prüfen"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$netz = $true\n$dienst = $false\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$netz = $true\n$dienst = $false\nif ($netz -and $dienst) { \"Bereit\" } else { \"Prüfen\" }"
      },
      "solutionNotes": "Die Lösung zu „Zwei Voraussetzungen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Bereit aus, wenn Netz und Dienst wahr sind, sonst Prüfen.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Prüfen"
          ]
        }
      ],
      "prerequisites": [
        "m10-06"
      ],
      "minutes": 10,
      "xp": 57,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-08",
      "title": "Rolle prüfen",
      "task": "Gib Zugriff für Admin oder Betreiber aus, sonst Verweigert.",
      "explanation": "In dieser Übung übst du: Rolle prüfen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Zugriff für Admin oder Betreiber aus, sonst Verweigert."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Verweigert"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$rolle = \"Leser\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$rolle = \"Leser\"\nif (($rolle -eq \"Admin\") -or ($rolle -eq \"Betreiber\")) { \"Zugriff\" } else { \"Verweigert\" }"
      },
      "solutionNotes": "Die Lösung zu „Rolle prüfen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Zugriff für Admin oder Betreiber aus, sonst Verweigert.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Verweigert"
          ]
        }
      ],
      "prerequisites": [
        "m10-07"
      ],
      "minutes": 11,
      "xp": 58,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-09",
      "title": "Leere Liste erkennen",
      "task": "Gib Keine Ziele aus, falls die Liste leer ist, sonst Ziele vorhanden.",
      "explanation": "In dieser Übung übst du: Leere Liste erkennen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Gib Keine Ziele aus, falls die Liste leer ist, sonst Ziele vorhanden."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Keine Ziele"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$ziele = @()\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$ziele = @()\nif ($ziele.Count -eq 0) { \"Keine Ziele\" } else { \"Ziele vorhanden\" }"
      },
      "solutionNotes": "Die Lösung zu „Leere Liste erkennen“ nutzt .Count. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Gib Keine Ziele aus, falls die Liste leer ist, sonst Ziele vorhanden.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Keine Ziele"
          ]
        }
      ],
      "prerequisites": [
        "m10-08"
      ],
      "minutes": 11,
      "xp": 59,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    },
    {
      "id": "m10-10",
      "title": "Projekt: Statusampel",
      "task": "Unter 10 ergibt Rot, von 10 bis unter 30 Gelb, ab 30 Grün.",
      "explanation": "In dieser Übung übst du: Projekt: Statusampel. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus.",
      "concept": {
        "explanation": "if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.",
        "example": "if (8 -gt 3) { \"größer\" } else { \"kleiner\" }",
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
          "text": "Unter 10 ergibt Rot, von 10 bis unter 30 Gelb, ab 30 Grün."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Gelb"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$frei = 20\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$frei = 20\nif ($frei -lt 10) { \"Rot\" } else { if ($frei -lt 30) { \"Gelb\" } else { \"Grün\" } }"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Statusampel“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. if (Bedingung) { Anweisungen } führt einen Block bei wahrer Bedingung aus. else { … } ist die Alternative. Vergleiche stehen in runden Klammern, Anweisungen in geschweiften. -not negiert einen Wahrheitswert. Zwei Bedingungen lassen sich mit -and und -or verbinden. Verschachtelte if-Blöcke bilden mehrere Entscheidungsstufen ab.\nArbeitsauftrag: Unter 10 ergibt Rot, von 10 bis unter 30 Gelb, ab 30 Grün.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Gelb"
          ]
        }
      ],
      "prerequisites": [
        "m10-09"
      ],
      "minutes": 12,
      "xp": 60,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Entscheidungen"
      ]
    }
  ]
});
