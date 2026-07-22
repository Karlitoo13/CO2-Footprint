let alleDaten = [];
let sortSpalte = null;
let sortAufsteigend = true;

document.addEventListener("DOMContentLoaded", function () {
  alleDaten = EMISSIONS_DATEN;
  filterDropdownFuellen(alleDaten);
  tabelleZeichnen(alleDaten);
  ereignisseVerbinden();
});

function escapeHTML(wert) {
  return String(wert)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function filterDropdownFuellen(daten) {
  const select = document.getElementById("filterLand");
  const laender = [...new Set(daten.map(function (e) { return e.land; }))];
  laender.sort();
  laender.forEach(function (land) {
    const option = document.createElement("option");
    option.value = land;
    option.textContent = land;
    select.appendChild(option);
  });
}

function tabelleZeichnen(daten) {
  const koerper = document.getElementById("tabellenKoerper");
  koerper.innerHTML = "";
  const hinweis = document.getElementById("keineTreffer");
  hinweis.classList.toggle("d-none", daten.length > 0);
  daten.forEach(function (eintrag) {
    const zeile = document.createElement("tr");
    zeile.innerHTML =
      "<td>" + escapeHTML(eintrag.land)        + "</td>" +
      "<td>" + escapeHTML(eintrag.unternehmen) + "</td>" +
      "<td>" + escapeHTML(eintrag.branche)     + "</td>" +
      "<td>" + escapeHTML(eintrag.emissionen)  + "</td>";
    koerper.appendChild(zeile);
  });
}

function datenAktualisieren() {
  const suchbegriff = document.getElementById("suche-feld").value.toLowerCase().trim();
  const landFilter  = document.getElementById("filterLand").value;
  let gefiltert = alleDaten.filter(function (e) {
    const passtSuche =
      e.land.toLowerCase().includes(suchbegriff) ||
      e.unternehmen.toLowerCase().includes(suchbegriff);
    const passtFilter = (landFilter === "" || e.land === landFilter);
    return passtSuche && passtFilter;
  });
  if (sortSpalte) {
    gefiltert = sortieren(gefiltert, sortSpalte, sortAufsteigend);
  }
  tabelleZeichnen(gefiltert);
}

function sortieren(daten, spalte, aufsteigend) {
  const kopie = [...daten];
  kopie.sort(function (a, b) {
    let wertA = a[spalte];
    let wertB = b[spalte];
    if (typeof wertA === "number") {
      return aufsteigend ? wertA - wertB : wertB - wertA;
    } else {
      return aufsteigend
        ? String(wertA).localeCompare(String(wertB))
        : String(wertB).localeCompare(String(wertA));
    }
  });
  return kopie;
}

function ereignisseVerbinden() {
  document.getElementById("suche-feld").addEventListener("input", datenAktualisieren);
  document.getElementById("filterLand").addEventListener("change", datenAktualisieren);
  document.querySelectorAll("th[data-sort]").forEach(function (kopf) {
    kopf.addEventListener("click", function () {
      const spalte = kopf.getAttribute("data-sort");
      if (sortSpalte === spalte) {
        sortAufsteigend = !sortAufsteigend;
      } else {
        sortSpalte = spalte;
        sortAufsteigend = true;
      }
      document.querySelectorAll("th[data-sort]").forEach(function (k) {
        k.classList.remove("sortiert");
      });
      kopf.classList.add("sortiert");
      datenAktualisieren();
    });
  });
}