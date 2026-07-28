# Berliner Salon — Website

## Struktur

```
berliner-salon/
├── index.html            Landing page (Startseite)
├── tischpatinnen.html    Table Captains Portraits
├── spenden.html          Spendenseite
├── events.html           Eventkalender
├── community.html        Community
├── tickets.html          Ticketing
├── css/
│   └── style.css         Ein gemeinsames Stylesheet für alle Seiten
└── js/
    └── main.js           Nur fürs mobile Hamburger-Menü
```

Jede `.html`-Datei kannst du direkt im Browser öffnen (Doppelklick reicht),
sie brauchen keinen Server.

## Eine neue Unterseite hinzufügen

1. Kopiere eine bestehende Seite (z. B. `events.html`) und benenne die
   Kopie um, z. B. `projekte.html`.
2. Ersetze den Inhalt zwischen `<section>` und `</section>` mit deinem
   eigenen Text — Überschriften, Karten (`.card`) etc. sind in `style.css`
   bereits fertig gestylt, du musst nur die passenden Klassen verwenden.
3. Füge in JEDER Seite (auch in `index.html`!) einen neuen Menüpunkt in
   der Liste `.nav-links` hinzu:
   ```html
   <li><a href="projekte.html">Projekte</a></li>
   ```
4. Setze auf der neuen Seite selbst `class="is-active"` beim passenden
   Menüpunkt, damit er im Menü hervorgehoben wird.

## Design-Entscheidungen (kurz erklärt)

- **Farben & Schriften**: alle zentral als Variablen ganz oben in
  `css/style.css` definiert (Abschnitt "1. DESIGN-TOKENS"). Willst du
  den Gelbton ändern? Eine Zeile reicht.
- **Tischpat:innen-Portraits**: aktuell runde Farbkreise mit Initialen
  (kein echtes Foto nötig, damit die Seite sofort funktioniert). Um
  echte Fotos einzusetzen, ersetze in `tischpatinnen.html` das
  `<div class="person-avatar">...</div>` durch z. B.
  `<img class="person-avatar" src="bilder/aylin.jpg" alt="Aylin Mert">`.
- **Formulare** (Spenden, Newsletter, Tickets): reines HTML ohne
  Backend. Für echte Zahlungen/Versand brauchst du einen Anbieter wie
  Stripe, PayPal oder Mailchimp, den du über das `action`-Attribut des
  jeweiligen `<form>` anbindest.

## Schriften

Die Website lädt zwei Google Fonts:
- **Fraunces** — für Überschriften (warme, markante Serifenschrift)
- **Space Grotesk** — für Fließtext und Buttons (klare, moderne Grotesk)

Beide werden per `<link>`-Tag im `<head>` jeder Seite geladen. Für
den Einsatz ohne Internetverbindung müsstest du die Schriftdateien
selbst herunterladen und lokal einbinden.
