window.CURRICULUM=window.CURRICULUM||[];window.CURRICULUM.push({
  "id": "m19",
  "title": "Verwaltungsdaten auswerten",
  "city": "Nürnberg",
  "description": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
  "lesson": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
  "tag": "ps-19",
  "level": 5,
  "exercises": [
    {
      "id": "m19-01",
      "title": "Gestoppte Dienste",
      "task": "Gib Namen der simulierten Dienste mit Status Stopped aus.",
      "explanation": "In dieser Übung übst du: Gestoppte Dienste. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib Namen der simulierten Dienste mit Status Stopped aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Backup"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$dienste = @([pscustomobject]@{Name=\"Web\"; Status=\"Running\"},[pscustomobject]@{Name=\"Backup\"; Status=\"Stopped\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$dienste = @([pscustomobject]@{Name=\"Web\"; Status=\"Running\"},[pscustomobject]@{Name=\"Backup\"; Status=\"Stopped\"})\n$dienste | Where-Object { $_.Status -eq \"Stopped\" } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Gestoppte Dienste“ nutzt Where-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib Namen der simulierten Dienste mit Status Stopped aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Backup"
          ]
        }
      ],
      "prerequisites": [
        "m18-10"
      ],
      "minutes": 9,
      "xp": 78,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-02",
      "title": "Aktive Konten",
      "task": "Gib nur die Namen aktiver Konten aus.",
      "explanation": "In dieser Übung übst du: Aktive Konten. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib nur die Namen aktiver Konten aus."
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
        "js": "$konten = @([pscustomobject]@{Name=\"Ada\"; Aktiv=$true},[pscustomobject]@{Name=\"Lin\"; Aktiv=$false})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$konten = @([pscustomobject]@{Name=\"Ada\"; Aktiv=$true},[pscustomobject]@{Name=\"Lin\"; Aktiv=$false})\n$konten | Where-Object { $_.Aktiv } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Aktive Konten“ nutzt Where-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib nur die Namen aktiver Konten aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m19-01"
      ],
      "minutes": 10,
      "xp": 79,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-03",
      "title": "Speicherwarnung",
      "task": "Gib Gerätenamen mit weniger als 15 freiem Speicher aus.",
      "explanation": "In dieser Übung übst du: Speicherwarnung. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib Gerätenamen mit weniger als 15 freiem Speicher aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Frei=40},[pscustomobject]@{Name=\"SRV1\"; Frei=8})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Frei=40},[pscustomobject]@{Name=\"SRV1\"; Frei=8})\n$geraete | Where-Object { $_.Frei -lt 15 } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Speicherwarnung“ nutzt Where-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib Gerätenamen mit weniger als 15 freiem Speicher aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV1"
          ]
        }
      ],
      "prerequisites": [
        "m19-02"
      ],
      "minutes": 10,
      "xp": 80,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-04",
      "title": "Höchste Last",
      "task": "Gib den Prozessnamen mit der höchsten simulierten Last aus.",
      "explanation": "In dieser Übung übst du: Höchste Last. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib den Prozessnamen mit der höchsten simulierten Last aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "B"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$prozesse = @([pscustomobject]@{Name=\"A\"; Last=12},[pscustomobject]@{Name=\"B\"; Last=80})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$prozesse = @([pscustomobject]@{Name=\"A\"; Last=12},[pscustomobject]@{Name=\"B\"; Last=80})\n$prozesse | Sort-Object Last -Descending | Select-Object -First 1 | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Höchste Last“ nutzt Sort-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib den Prozessnamen mit der höchsten simulierten Last aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Sort-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "B"
          ]
        }
      ],
      "prerequisites": [
        "m19-03"
      ],
      "minutes": 11,
      "xp": 81,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-05",
      "title": "Standortfilter",
      "task": "Gib die Namen aller Geräte am Standort Bonn aus.",
      "explanation": "In dieser Übung übst du: Standortfilter. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib die Namen aller Geräte am Standort Bonn aus."
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
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Ort=\"Bonn\"},[pscustomobject]@{Name=\"PC2\"; Ort=\"Kiel\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Ort=\"Bonn\"},[pscustomobject]@{Name=\"PC2\"; Ort=\"Kiel\"})\n$geraete | Where-Object { $_.Ort -eq \"Bonn\" } | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Standortfilter“ nutzt Where-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib die Namen aller Geräte am Standort Bonn aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
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
        "m19-04"
      ],
      "minutes": 11,
      "xp": 82,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-06",
      "title": "Eindeutige Ziele",
      "task": "Sortiere die Zielliste und entferne Duplikate.",
      "explanation": "In dieser Übung übst du: Eindeutige Ziele. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Sortiere die Zielliste und entferne Duplikate."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC1\nPC2\nSRV1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$ziele = \"PC2\", \"PC1\", \"PC2\", \"SRV1\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$ziele = \"PC2\", \"PC1\", \"PC2\", \"SRV1\"\n$ziele | Sort-Object -Unique"
      },
      "solutionNotes": "Die Lösung zu „Eindeutige Ziele“ nutzt Sort-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Sortiere die Zielliste und entferne Duplikate.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Sort-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 3 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC1",
            "PC2",
            "SRV1"
          ]
        }
      ],
      "prerequisites": [
        "m19-05"
      ],
      "minutes": 12,
      "xp": 83,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-07",
      "title": "Gesamtbedarf",
      "task": "Gib die Summe aller Kapazitätsanforderungen aus.",
      "explanation": "In dieser Übung übst du: Gesamtbedarf. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib die Summe aller Kapazitätsanforderungen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "35"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$jobs = @([pscustomobject]@{Bedarf=12},[pscustomobject]@{Bedarf=18},[pscustomobject]@{Bedarf=5})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$jobs = @([pscustomobject]@{Bedarf=12},[pscustomobject]@{Bedarf=18},[pscustomobject]@{Bedarf=5})\n$m = $jobs | Measure-Object Bedarf -Sum\n$m.Sum"
      },
      "solutionNotes": "Die Lösung zu „Gesamtbedarf“ nutzt Measure-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib die Summe aller Kapazitätsanforderungen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Measure-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "35"
          ]
        }
      ],
      "prerequisites": [
        "m19-06"
      ],
      "minutes": 12,
      "xp": 84,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-08",
      "title": "Namen prüfen",
      "task": "Gib die Gerätenamen aus, die nicht dem Muster PC- gefolgt von Ziffern entsprechen.",
      "explanation": "In dieser Übung übst du: Namen prüfen. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gib die Gerätenamen aus, die nicht dem Muster PC- gefolgt von Ziffern entsprechen."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "PC-X"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$namen = \"PC-01\", \"PC-X\", \"PC-02\"\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$namen = \"PC-01\", \"PC-X\", \"PC-02\"\n$namen | Where-Object { -not ($_ -match \"^PC-[0-9]+$\") }"
      },
      "solutionNotes": "Die Lösung zu „Namen prüfen“ nutzt Where-Object, -match. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gib die Gerätenamen aus, die nicht dem Muster PC- gefolgt von Ziffern entsprechen.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, -match. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 1 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "PC-X"
          ]
        }
      ],
      "prerequisites": [
        "m19-07"
      ],
      "minutes": 13,
      "xp": 85,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-09",
      "title": "Gruppenstatistik",
      "task": "Gruppiere nach Ort und gib die Gruppennamen aus.",
      "explanation": "In dieser Übung übst du: Gruppenstatistik. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Gruppiere nach Ort und gib die Gruppennamen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "Bonn\nKiel"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Ort=\"Bonn\"},[pscustomobject]@{Ort=\"Kiel\"},[pscustomobject]@{Ort=\"Bonn\"})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Ort=\"Bonn\"},[pscustomobject]@{Ort=\"Kiel\"},[pscustomobject]@{Ort=\"Bonn\"})\n$geraete | Group-Object Ort | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Gruppenstatistik“ nutzt Group-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Gruppiere nach Ort und gib die Gruppennamen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Group-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "Bonn",
            "Kiel"
          ]
        }
      ],
      "prerequisites": [
        "m19-08"
      ],
      "minutes": 13,
      "xp": 86,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    },
    {
      "id": "m19-10",
      "title": "Projekt: Prioritätenliste",
      "task": "Filtere Geräte mit Last mindestens 70, sortiere nach Last absteigend und gib die Namen aus.",
      "explanation": "In dieser Übung übst du: Projekt: Prioritätenliste. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel.",
      "concept": {
        "explanation": "Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.",
        "example": "$dienste = @([pscustomobject]@{Name=\"Demo\"; Status=\"Running\"})\n$dienste | Where-Object { $_.Status -eq \"Running\" } | Select-Object -ExpandProperty Name",
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
          "text": "Filtere Geräte mit Last mindestens 70, sortiere nach Last absteigend und gib die Namen aus."
        }
      ],
      "examples": [
        {
          "input": "Vorgegebene Daten im Editor",
          "expected": "SRV1\nPC1"
        }
      ],
      "starter": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Last=70},[pscustomobject]@{Name=\"SRV1\"; Last=95},[pscustomobject]@{Name=\"PC2\"; Last=20})\n# Ergänze hier deine Verarbeitung.\n"
      },
      "solution": {
        "html": "",
        "css": "",
        "js": "$geraete = @([pscustomobject]@{Name=\"PC1\"; Last=70},[pscustomobject]@{Name=\"SRV1\"; Last=95},[pscustomobject]@{Name=\"PC2\"; Last=20})\n$geraete | Where-Object { $_.Last -ge 70 } | Sort-Object Last -Descending | Select-Object -ExpandProperty Name"
      },
      "solutionNotes": "Die Lösung zu „Projekt: Prioritätenliste“ nutzt Where-Object, Sort-Object, Select-Object. Verwaltungsaufgaben beginnen oft mit einem Datenbestand und einer klaren Auswahlregel. Die Geräte, Konten und Dienste dieses Moduls sind vorgegebene Objekte; sie werden nicht vom echten Rechner abgefragt. Kombiniere gelernte Filter, Projektionen, Sortierung und Messung. So bleibt die Datenlogik auch auf dem iPad übbar. Für Get-Service, Get-Process oder Active Directory brauchst du später eine echte PowerShell-Umgebung.\nArbeitsauftrag: Filtere Geräte mit Last mindestens 70, sortiere nach Last absteigend und gib die Namen aus.\nPrüfe anschließend mit veränderten Eingabedaten, ob du den Zusammenhang verstanden hast. Die Musterlösung unten zeigt jeden Verarbeitungsschritt.",
      "hints": [
        "Lies die Eingabedaten im Editor und das erwartete Ergebnis. Welche Werte müssen ausgewählt, umgewandelt oder berechnet werden?",
        "Passende Bausteine für diese Aufgabe sind Where-Object, Sort-Object, Select-Object. Lies im Grundwissen, was sie verarbeiten und welchen Wert sie zurückgeben.",
        "Prüfe jede Ausgabestelle deines Skripts: 2 Werte werden erwartet. Achte auf Index 0 beim ersten Element, Anführungszeichen bei Text und darauf, ob du ein Objekt oder dessen Eigenschaft ausgibst."
      ],
      "tests": [
        {
          "label": "Ausgabe entspricht dem beschriebenen Ergebnis",
          "expected": [
            "SRV1",
            "PC1"
          ]
        }
      ],
      "prerequisites": [
        "m19-09"
      ],
      "minutes": 14,
      "xp": 87,
      "focus": "js",
      "tags": [
        "PowerShell",
        "Verwaltungsdaten auswerten"
      ]
    }
  ]
});
