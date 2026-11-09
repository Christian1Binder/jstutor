window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m01",
  "title": "Dein erstes Terminal",
  "city": "Flensburg",
  "description": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
  "lesson": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
  "tag": "ps-01",
  "level": 1,
  "exercises": [
    {
      "id": "m01-01",
      "title": "Hallo, PowerShell",
      "task": "Gib exakt Hallo, PowerShell! aus.",
      "explanation": "In dieser Übung übst du: Hallo, PowerShell. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib exakt Hallo, PowerShell! aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Hallo, PowerShell!"
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
        "js": "Write-Output \"Hallo, PowerShell!\""
      },
      "solutionNotes": "Die Lösung zu „Hallo, PowerShell“ nutzt Write-Output. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib exakt Hallo, PowerShell! aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Write-Output. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Hallo, PowerShell!"
          ]
        }
      ],
      "prerequisites": [],
      "minutes": 5,
      "xp": 24,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-02",
      "title": "Ein Text als Ausdruck",
      "task": "Gib den Text Meine Werkstatt ohne Write-Output als Ausdruck aus.",
      "explanation": "In dieser Übung übst du: Ein Text als Ausdruck. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib den Text Meine Werkstatt ohne Write-Output als Ausdruck aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Meine Werkstatt"
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
        "js": "\"Meine Werkstatt\""
      },
      "solutionNotes": "Die Lösung zu „Ein Text als Ausdruck“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib den Text Meine Werkstatt ohne Write-Output als Ausdruck aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Meine Werkstatt"
          ]
        }
      ],
      "prerequisites": [
        "m01-01"
      ],
      "minutes": 6,
      "xp": 25,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-03",
      "title": "Zwei Meldungen",
      "task": "Gib zuerst Start und danach Fertig aus, jeweils in einer eigenen Zeile.",
      "explanation": "In dieser Übung übst du: Zwei Meldungen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib zuerst Start und danach Fertig aus, jeweils in einer eigenen Zeile."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Start\nFertig"
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
        "js": "\"Start\"\n\"Fertig\""
      },
      "solutionNotes": "Die Lösung zu „Zwei Meldungen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib zuerst Start und danach Fertig aus, jeweils in einer eigenen Zeile.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Start",
            "Fertig"
          ]
        }
      ],
      "prerequisites": [
        "m01-02"
      ],
      "minutes": 6,
      "xp": 26,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-04",
      "title": "Eine Zahl",
      "task": "Gib die Zahl 42 als Zahl aus.",
      "explanation": "In dieser Übung übst du: Eine Zahl. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib die Zahl 42 als Zahl aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "42"
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
        "js": "42"
      },
      "solutionNotes": "Die Lösung zu „Eine Zahl“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib die Zahl 42 als Zahl aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "42"
          ]
        }
      ],
      "prerequisites": [
        "m01-03"
      ],
      "minutes": 7,
      "xp": 27,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-05",
      "title": "Rechnen im Terminal",
      "task": "Berechne 8 + 7 und gib nur das Ergebnis aus.",
      "explanation": "In dieser Übung übst du: Rechnen im Terminal. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Berechne 8 + 7 und gib nur das Ergebnis aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "8 + 7"
      },
      "solutionNotes": "Die Lösung zu „Rechnen im Terminal“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Berechne 8 + 7 und gib nur das Ergebnis aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
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
        "m01-04"
      ],
      "minutes": 7,
      "xp": 28,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-06",
      "title": "Kommentare",
      "task": "Ergänze einen Kommentar über der Ausgabe und gib Bereit aus.",
      "explanation": "In dieser Übung übst du: Kommentare. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Ergänze einen Kommentar über der Ausgabe und gib Bereit aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Bereit"
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
        "js": "# Startmeldung\n\"Bereit\""
      },
      "solutionNotes": "Die Lösung zu „Kommentare“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Ergänze einen Kommentar über der Ausgabe und gib Bereit aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Bereit"
          ]
        }
      ],
      "prerequisites": [
        "m01-05"
      ],
      "minutes": 8,
      "xp": 29,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-07",
      "title": "Leerzeichen im Text",
      "task": "Gib Server ist bereit mit den beiden inneren Leerzeichen aus.",
      "explanation": "In dieser Übung übst du: Leerzeichen im Text. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib Server ist bereit mit den beiden inneren Leerzeichen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Server ist bereit"
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
        "js": "Write-Output \"Server ist bereit\""
      },
      "solutionNotes": "Die Lösung zu „Leerzeichen im Text“ nutzt Write-Output. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib Server ist bereit mit den beiden inneren Leerzeichen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Write-Output. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Server ist bereit"
          ]
        }
      ],
      "prerequisites": [
        "m01-06"
      ],
      "minutes": 8,
      "xp": 30,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-08",
      "title": "Ein Apostroph",
      "task": "Gib Admins Werkzeug aus. Verwende einfache Anführungszeichen.",
      "explanation": "In dieser Übung übst du: Ein Apostroph. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib Admins Werkzeug aus. Verwende einfache Anführungszeichen."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Admins Werkzeug"
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
        "js": "'Admins Werkzeug'"
      },
      "solutionNotes": "Die Lösung zu „Ein Apostroph“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib Admins Werkzeug aus. Verwende einfache Anführungszeichen.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Admins Werkzeug"
          ]
        }
      ],
      "prerequisites": [
        "m01-07"
      ],
      "minutes": 9,
      "xp": 31,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-09",
      "title": "Mehrere Zahlen",
      "task": "Gib 10, dann 20 und dann 30 in drei Zeilen aus.",
      "explanation": "In dieser Übung übst du: Mehrere Zahlen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Gib 10, dann 20 und dann 30 in drei Zeilen aus."
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
        "js": "\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "10\n20\n30"
      },
      "solutionNotes": "Die Lösung zu „Mehrere Zahlen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Gib 10, dann 20 und dann 30 in drei Zeilen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
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
        "m01-08"
      ],
      "minutes": 9,
      "xp": 32,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    },
    {
      "id": "m01-10",
      "title": "Projekt: Statusmeldung",
      "task": "Erzeuge die drei Ausgaben SYSTEMCHECK, 3 und Alles bereit in dieser Reihenfolge.",
      "explanation": "In dieser Übung übst du: Projekt: Statusmeldung. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus.",
      "concept": {
        "explanation": "PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.",
        "example": "Write-Output \"Guten Morgen\"",
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
          "text": "Erzeuge die drei Ausgaben SYSTEMCHECK, 3 und Alles bereit in dieser Reihenfolge."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SYSTEMCHECK\n3\nAlles bereit"
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
        "js": "\"SYSTEMCHECK\"\n3\n\"Alles bereit\""
      },
      "solutionNotes": "Die Lösung zu „Projekt: Statusmeldung“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell gibt den Wert eines Ausdrucks in den Erfolgs-Ausgabestrom aus. Write-Output macht diese Ausgabe ausdrücklich. Texte stehen in Anführungszeichen. Ein Kommentar beginnt mit # und endet am Zeilenende. Ein Zeilenumbruch trennt Anweisungen. Die Lernkonsole zeigt jeden ausgegebenen Wert in einer eigenen Zeile. Zahlen kannst du direkt addieren: 2 + 3 ergibt 5. Ein Ausdruck benötigt keinen zusätzlichen Ausgabebefehl.\nArbeitsauftrag: Erzeuge die drei Ausgaben SYSTEMCHECK, 3 und Alles bereit in dieser Reihenfolge.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SYSTEMCHECK",
            "3",
            "Alles bereit"
          ]
        }
      ],
      "prerequisites": [
        "m01-09"
      ],
      "minutes": 10,
      "xp": 33,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Dein erstes Terminal"
      ]
    }
  ]
});
