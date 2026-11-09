window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m08",
  "title": "Objekte verstehen",
  "city": "Magdeburg",
  "description": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
  "lesson": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
  "tag": "ps-08",
  "level": 2,
  "exercises": [
    {
      "id": "m08-01",
      "title": "Ein Objekt",
      "task": "Erzeuge ein Objekt mit Name Ada und Alter 30. Gib Name aus.",
      "explanation": "In dieser Übung übst du: Ein Objekt. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Erzeuge ein Objekt mit Name Ada und Alter 30. Gib Name aus."
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
        "js": "$person = [pscustomobject]@{Name=\"Ada\"; Alter=30}\n$person.Name"
      },
      "solutionNotes": "Die Lösung zu „Ein Objekt“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Erzeuge ein Objekt mit Name Ada und Alter 30. Gib Name aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
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
        "m07-10"
      ],
      "minutes": 7,
      "xp": 45,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-02",
      "title": "Alter lesen",
      "task": "Gib Alter aus.",
      "explanation": "In dieser Übung übst du: Alter lesen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib Alter aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "30"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$person = [pscustomobject]@{Name=\"Ada\"; Alter=30}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$person = [pscustomobject]@{Name=\"Ada\"; Alter=30}\n$person.Alter"
      },
      "solutionNotes": "Die Lösung zu „Alter lesen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib Alter aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "30"
          ]
        }
      ],
      "prerequisites": [
        "m08-01"
      ],
      "minutes": 8,
      "xp": 46,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-03",
      "title": "Objektliste",
      "task": "Gib die Anzahl der Geräte aus.",
      "explanation": "In dieser Übung übst du: Objektliste. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib die Anzahl der Geräte aus."
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
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"},[pscustomobject]@{Name=\"PC2\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"},[pscustomobject]@{Name=\"PC2\"})\n$geraete.Count"
      },
      "solutionNotes": "Die Lösung zu „Objektliste“ nutzt .Count. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib die Anzahl der Geräte aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .Count. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m08-02"
      ],
      "minutes": 8,
      "xp": 47,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-04",
      "title": "Ein Objekt auswählen",
      "task": "Gib den Namen des zweiten Geräts aus.",
      "explanation": "In dieser Übung übst du: Ein Objekt auswählen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib den Namen des zweiten Geräts aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC2"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"},[pscustomobject]@{Name=\"PC2\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"},[pscustomobject]@{Name=\"PC2\"})\n$geraete[1].Name"
      },
      "solutionNotes": "Die Lösung zu „Ein Objekt auswählen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib den Namen des zweiten Geräts aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC2"
          ]
        }
      ],
      "prerequisites": [
        "m08-03"
      ],
      "minutes": 9,
      "xp": 48,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-05",
      "title": "Objekt vergleichen",
      "task": "Prüfe, ob der freie Platz mindestens 20 beträgt.",
      "explanation": "In dieser Übung übst du: Objekt vergleichen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Prüfe, ob der freie Platz mindestens 20 beträgt."
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
        "js": "$geraet = [pscustomobject]@{Name=\"SRV1\"; Frei=12}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"SRV1\"; Frei=12}\n$geraet.Frei -ge 20"
      },
      "solutionNotes": "Die Lösung zu „Objekt vergleichen“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Prüfe, ob der freie Platz mindestens 20 beträgt.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
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
        "m08-04"
      ],
      "minutes": 9,
      "xp": 49,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-06",
      "title": "Objekt und Text",
      "task": "Erzeuge den Text SRV1 ist bereit aus der Eigenschaft Name und dem festen Zusatz.",
      "explanation": "In dieser Übung übst du: Objekt und Text. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Erzeuge den Text SRV1 ist bereit aus der Eigenschaft Name und dem festen Zusatz."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV1 ist bereit"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"SRV1\"}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"SRV1\"}\n$geraet.Name + \" ist bereit\""
      },
      "solutionNotes": "Die Lösung zu „Objekt und Text“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Erzeuge den Text SRV1 ist bereit aus der Eigenschaft Name und dem festen Zusatz.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV1 ist bereit"
          ]
        }
      ],
      "prerequisites": [
        "m08-05"
      ],
      "minutes": 10,
      "xp": 50,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-07",
      "title": "Text normalisieren",
      "task": "Gib den Namen des Geräts in Großschreibung aus.",
      "explanation": "In dieser Übung übst du: Text normalisieren. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib den Namen des Geräts in Großschreibung aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV-WEST"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"srv-west\"}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"srv-west\"}\n$geraet.Name.ToUpper()"
      },
      "solutionNotes": "Die Lösung zu „Text normalisieren“ nutzt .ToUpper. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib den Namen des Geräts in Großschreibung aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind .ToUpper. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV-WEST"
          ]
        }
      ],
      "prerequisites": [
        "m08-06"
      ],
      "minutes": 10,
      "xp": 51,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-08",
      "title": "Mehrere Eigenschaften",
      "task": "Gib Name und Ort in zwei Zeilen aus.",
      "explanation": "In dieser Übung übst du: Mehrere Eigenschaften. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib Name und Ort in zwei Zeilen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Lin\nKiel"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$person = [pscustomobject]@{Name=\"Lin\"; Ort=\"Kiel\"}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$person = [pscustomobject]@{Name=\"Lin\"; Ort=\"Kiel\"}\n$person.Name\n$person.Ort"
      },
      "solutionNotes": "Die Lösung zu „Mehrere Eigenschaften“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib Name und Ort in zwei Zeilen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Lin",
            "Kiel"
          ]
        }
      ],
      "prerequisites": [
        "m08-07"
      ],
      "minutes": 11,
      "xp": 52,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-09",
      "title": "Verschachtelte Daten",
      "task": "Gib die Versionsnummer aus der Eigenschaft System aus.",
      "explanation": "In dieser Übung übst du: Verschachtelte Daten. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib die Versionsnummer aus der Eigenschaft System aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "7.4"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"PC1\"; System=@{Version=\"7.4\"}}\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraet = [pscustomobject]@{Name=\"PC1\"; System=@{Version=\"7.4\"}}\n$geraet.System.Version"
      },
      "solutionNotes": "Die Lösung zu „Verschachtelte Daten“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib die Versionsnummer aus der Eigenschaft System aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "7.4"
          ]
        }
      ],
      "prerequisites": [
        "m08-08"
      ],
      "minutes": 11,
      "xp": 53,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    },
    {
      "id": "m08-10",
      "title": "Projekt: Inventarzugriff",
      "task": "Gib die Differenz zwischen Gesamt und Belegt des zweiten Datenträgers aus.",
      "explanation": "In dieser Übung übst du: Projekt: Inventarzugriff. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen.",
      "concept": {
        "explanation": "PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.",
        "example": "$person = [pscustomobject]@{Name=\"Lin\"; Alter=28}\n$person.Name",
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
          "text": "Gib die Differenz zwischen Gesamt und Belegt des zweiten Datenträgers aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "120"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$platten = @([pscustomobject]@{Gesamt=100; Belegt=30},[pscustomobject]@{Gesamt=200; Belegt=80})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$platten = @([pscustomobject]@{Gesamt=100; Belegt=30},[pscustomobject]@{Gesamt=200; Belegt=80})\n$platten[1].Gesamt - $platten[1].Belegt"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Inventarzugriff“ nutzt Variablen, Ausdrücke und die beschriebenen Kontrollstrukturen. PowerShell verarbeitet Objekte mit Eigenschaften, statt nur Textzeilen. [pscustomobject]@{Name=\"Ada\"; Alter=30} beschreibt einen Datensatz mit benannten Eigenschaften. Du liest Eigenschaften mit dem Punkt. Ein Array kann mehrere dieser Datensätze enthalten. Die Lernkonsole stellt ganze Datensätze als JSON dar; eine echte PowerShell formatiert sie je nach Host oft als Tabelle oder Liste.\nArbeitsauftrag: Gib die Differenz zwischen Gesamt und Belegt des zweiten Datenträgers aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Unterscheide Zuweisungen und Ausdrücke: Eine Zuweisung speichert den Wert. Ein einzelner Ausdruck gibt seinen Wert aus. Nutze Klammern, um die Reihenfolge einer Berechnung klar zu machen.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "120"
          ]
        }
      ],
      "prerequisites": [
        "m08-09"
      ],
      "minutes": 12,
      "xp": 54,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Objekte verstehen"
      ]
    }
  ]
});
