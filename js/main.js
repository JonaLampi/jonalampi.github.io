/* ==========================================================================
   BERLINER SALON — main.js
   ==========================================================================
   Ganz bewusst sehr kurz gehalten: Diese Datei macht nur EINE Sache —
   sie blendet auf dem Handy das Menü ein/aus, wenn man auf das
   Hamburger-Icon (☰) tippt. Alles andere auf der Seite braucht kein
   JavaScript, nur HTML und CSS.
   ========================================================================== */

// Wartet, bis die komplette Seite geladen ist, bevor der Code läuft
document.addEventListener('DOMContentLoaded', function () {

  // Sucht sich den Hamburger-Button und die Navigationsliste im HTML
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Falls eine Seite (aus Versehen) keinen Hamburger-Button hat,
  // bricht die Funktion hier einfach ab, statt einen Fehler zu werfen.
  if (!navToggle || !navLinks) {
    return;
  }

  navToggle.addEventListener('click', function () {
    // Schaltet die Klasse "is-open" an/aus — das CSS kümmert sich
    // um den Rest (siehe .nav-links.is-open in style.css)
    navLinks.classList.toggle('is-open');

    // Aktualisiert das aria-expanded Attribut für Screenreader,
    // damit auch blinde Nutzer:innen erfahren, ob das Menü offen ist
    const isOpen = navLinks.classList.contains('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

});
