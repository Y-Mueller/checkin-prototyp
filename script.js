document
  .getElementById("checkin-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const vorname = document.getElementById("vorname").value.trim();
    const nachname = document.getElementById("nachname").value.trim();
    const firma = document.getElementById("firma").value.trim();
    const ansprechperson = document
      .getElementById("ansprechperson")
      .value.trim();

    const checkin = {
      vorname,
      nachname,
      firma,
      ansprechperson,
      zeitpunkt: new Date().toISOString(),
    };

    // Hol bestehende Einträge, oder initialisiere als leeres Array
    const eintraege = JSON.parse(localStorage.getItem("checkins")) || [];
    eintraege.push(checkin);

    localStorage.setItem("checkins", JSON.stringify(eintraege));

    // Formular zurücksetzen
    document.getElementById("checkin-form").reset();

    // Bestätigung anzeigen
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.remove("hidden");

    // Automatisch nach 5 Sekunden ausblenden
    setTimeout(() => {
      confirmation.classList.add("hidden");
    }, 5000);
  });
