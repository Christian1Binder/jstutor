window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m07",
  "title": "Hashtabellen",
  "city": "Potsdam",
  "description": "Eine Hashtabelle ordnet Schlüsseln Werte zu.",
  "lesson": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
  "tag": "ps-07",
  "level": 2,
  "exercises": [
    {
      "id": "m07-01",
      "title": "Ein Datensatz",
      "task": "Erzeuge $daten mit Name Ada und Ort Bonn. Gib Name aus.",
      "explanation": "In dieser Übung übst du: Ein Datensatz. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Erzeuge $daten mit Name Ada und Ort Bonn. Gib Name aus."
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
        "js": "$daten = @{Name=\"Ada\"; Ort=\"Bonn\"}\n$daten.Name"
      },
      "solutionNotes": "Die Lösung zu „Ein Datensatz“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Erzeuge $daten mit Name Ada und Ort Bonn. Gib Name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m06-10"
      ],
      "minutes": 6,
      "xp": 42,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-02",
      "title": "Schlüssel lesen",
      "task": "Gib den Ort aus.",
      "explanation": "In dieser Übung übst du: Schlüssel lesen. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Gib den Ort aus."
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
        "js": "$daten = @{Name=\"Ada\"; Ort=\"Bonn\"}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$daten = @{Name=\"Ada\"; Ort=\"Bonn\"}\n$daten[\"Ort\"]"
      },
      "solutionNotes": "Die Lösung zu „Schlüssel lesen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Gib den Ort aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m07-01"
      ],
      "minutes": 7,
      "xp": 43,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-03",
      "title": "Einträge zählen",
      "task": "Gib die Anzahl der Schlüssel aus.",
      "explanation": "In dieser Übung übst du: Einträge zählen. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Gib die Anzahl der Schlüssel aus."
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
        "js": "$daten = @{Name=\"Ada\"; Ort=\"Bonn\"; Aktiv=$true}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$daten = @{Name=\"Ada\"; Ort=\"Bonn\"; Aktiv=$true}\n$daten.Count"
      },
      "solutionNotes": "Die Lösung zu „Einträge zählen“ nutzt .Count. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Gib die Anzahl der Schlüssel aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m07-02"
      ],
      "minutes": 7,
      "xp": 44,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-04",
      "title": "Numerischer Wert",
      "task": "Gib den numerischen Port aus.",
      "explanation": "In dieser Übung übst du: Numerischer Wert. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Gib den numerischen Port aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "443"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$config = @{Host=\"localhost\"; Port=443}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$config = @{Host=\"localhost\"; Port=443}\n$config.Port"
      },
      "solutionNotes": "Die Lösung zu „Numerischer Wert“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Gib den numerischen Port aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "443"
          ]
        }
      ],
      "prerequisites": [
        "m07-03"
      ],
      "minutes": 8,
      "xp": 45,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-05",
      "title": "Boolescher Wert",
      "task": "Prüfe, ob Aktiv gleich $true ist.",
      "explanation": "In dieser Übung übst du: Boolescher Wert. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Prüfe, ob Aktiv gleich $true ist."
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
        "js": "$konto = @{Name=\"Ada\"; Aktiv=$true}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$konto = @{Name=\"Ada\"; Aktiv=$true}\n$konto.Aktiv -eq $true"
      },
      "solutionNotes": "Die Lösung zu „Boolescher Wert“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Prüfe, ob Aktiv gleich $true ist.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
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
        "m07-04"
      ],
      "minutes": 8,
      "xp": 46,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-06",
      "title": "Zwei Felder verbinden",
      "task": "Verbinde Host und Umgebung mit einem Bindestrich.",
      "explanation": "In dieser Übung übst du: Zwei Felder verbinden. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Verbinde Host und Umgebung mit einem Bindestrich."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "srv01-test"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$config = @{Host=\"srv01\"; Umgebung=\"test\"}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$config = @{Host=\"srv01\"; Umgebung=\"test\"}\n$config.Host + \"-\" + $config.Umgebung"
      },
      "solutionNotes": "Die Lösung zu „Zwei Felder verbinden“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Verbinde Host und Umgebung mit einem Bindestrich.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "srv01-test"
          ]
        }
      ],
      "prerequisites": [
        "m07-05"
      ],
      "minutes": 9,
      "xp": 47,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-07",
      "title": "Liste als Wert",
      "task": "Gib die zweite Rolle aus der Tabelle aus.",
      "explanation": "In dieser Übung übst du: Liste als Wert. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Gib die zweite Rolle aus der Tabelle aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Admin"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$konto = @{Name=\"Ada\"; Rollen=@(\"Leser\",\"Admin\")}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$konto = @{Name=\"Ada\"; Rollen=@(\"Leser\",\"Admin\")}\n$konto.Rollen[1]"
      },
      "solutionNotes": "Die Lösung zu „Liste als Wert“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Gib die zweite Rolle aus der Tabelle aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Admin"
          ]
        }
      ],
      "prerequisites": [
        "m07-06"
      ],
      "minutes": 9,
      "xp": 48,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-08",
      "title": "Verschachtelte Tabelle",
      "task": "Lies den Ort aus der inneren Tabelle Adresse.",
      "explanation": "In dieser Übung übst du: Verschachtelte Tabelle. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Lies den Ort aus der inneren Tabelle Adresse."
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
        "js": "$konto = @{Name=\"Ada\"; Adresse=@{Ort=\"Kiel\"}}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$konto = @{Name=\"Ada\"; Adresse=@{Ort=\"Kiel\"}}\n$konto.Adresse.Ort"
      },
      "solutionNotes": "Die Lösung zu „Verschachtelte Tabelle“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Lies den Ort aus der inneren Tabelle Adresse.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m07-07"
      ],
      "minutes": 10,
      "xp": 49,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-09",
      "title": "Rechnen mit Feldern",
      "task": "Berechne Preis mal Menge.",
      "explanation": "In dieser Übung übst du: Rechnen mit Feldern. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Berechne Preis mal Menge."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "36"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$posten = @{Preis=12; Menge=3}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$posten = @{Preis=12; Menge=3}\n$posten.Preis * $posten.Menge"
      },
      "solutionNotes": "Die Lösung zu „Rechnen mit Feldern“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Berechne Preis mal Menge.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "36"
          ]
        }
      ],
      "prerequisites": [
        "m07-08"
      ],
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    },
    {
      "id": "m07-10",
      "title": "Projekt: Konfiguration",
      "task": "Gib aus der Konfiguration zuerst Host und dann die Anzahl der Ziele aus.",
      "explanation": "In dieser Übung übst du: Projekt: Konfiguration. Eine Hashtabelle ordnet Schlüsseln Werte zu.",
      "concept": {
        "explanation": "Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.",
        "example": "$konto = @{Name=\"Lin\"; Aktiv=$true}\n$konto.Name",
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
          "text": "Gib aus der Konfiguration zuerst Host und dann die Anzahl der Ziele aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "LAB\n3"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$config = @{Host=\"LAB\"; Ziele=@(\"PC1\",\"PC2\",\"PC3\")}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$config = @{Host=\"LAB\"; Ziele=@(\"PC1\",\"PC2\",\"PC3\")}\n$config.Host\n$config.Ziele.Count"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Konfiguration“ nutzt .Count. Eine Hashtabelle ordnet Schlüsseln Werte zu. @{Name=\"Ada\"; Ort=\"Kiel\"} hat zwei Einträge. Innerhalb der Tabelle trennen Semikolon oder neue Zeilen die Zuweisungen. $daten.Name und $daten[\"Name\"] lesen einen Wert. Werte können Zahlen, Wahrheitswerte oder weitere Tabellen sein. .Count zählt die Einträge.\nArbeitsauftrag: Gib aus der Konfiguration zuerst Host und dann die Anzahl der Ziele aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "LAB",
            "3"
          ]
        }
      ],
      "prerequisites": [
        "m07-09"
      ],
      "minutes": 11,
      "xp": 51,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Hashtabellen"
      ]
    }
  ]
});
