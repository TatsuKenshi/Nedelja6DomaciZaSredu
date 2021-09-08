//-------------------------------//
//----------- Importi -----------//
//-------------------------------//
import { proizvodi, korpa, musterija } from "./index.js";
import { Kupac } from "./korisnici_klase.js";

// lista proizvoda

export let listaProizvoda = [
  {
    naziv: "mleko",
    cena: "100 din",
    dodatniInfo: "Rok trajanja: 21.3.2023",
    naStanju: 10,
  },
  {
    naziv: "sporet",
    cena: "30000 din",
    dodatniInfo: "Garancija: 5 godina",
    naStanju: 4,
  },
];

// prikazi sve proizvode na stranici
export function prikaziSveproizvode(listaProizvoda) {

  // prikaz svih proizvoda na stranici
  proizvodi.innerHTML = "";
  listaProizvoda.forEach(function (jedanProizvod) {
    let proizvod = document.createElement("div");
    proizvod.classList.add("proizvod");

    let nazivProizvoda = document.createElement("p");
    nazivProizvoda.classList.add("nazivProizvoda");
    nazivProizvoda.textContent = `Naziv: ${jedanProizvod.naziv}`;

    let cenaProizvoda = document.createElement("p");
    cenaProizvoda.classList.add("cenaProizvoda");
    cenaProizvoda.textContent = `Cena: ${jedanProizvod.cena}`;

    let dodatniInfo = document.createElement("p");
    dodatniInfo.classList.add("dodatniInfo");
    dodatniInfo.textContent = `${jedanProizvod.dodatniInfo}`;

    let kolicina = document.createElement("input");
    kolicina.type = "number";
    kolicina.classList.add("kolicina");

    let dodaj = document.createElement("button");
    dodaj.classList.add("dodaj");
    dodaj.textContent = "Dodaj u Korpu";

    let obavestenje = document.createElement("p");
    obavestenje.classList.add("obavestenje");
    obavestenje.textContent = "";

    proizvod.append(
      nazivProizvoda,
      cenaProizvoda,
      dodatniInfo,
      kolicina,
      dodaj,
      obavestenje
    );
    proizvodi.append(proizvod);

      // listener za dodavanje ajtema u korpu
    dodaj.addEventListener("click", function (e) {
      e.preventDefault();
      if (kolicina.value !== "" && kolicina.value > 0 && kolicina.value <= jedanProizvod.naStanju) {
          jedanProizvod.naStanju = jedanProizvod.naStanju - kolicina.value;
          console.log(jedanProizvod.naziv, jedanProizvod.naStanju);

          let kupljeniproizvod = document.createElement("div");
          kupljeniproizvod.classList.add("proizvod");

          let nazivkupljenogProizvoda = document.createElement("p");
          nazivkupljenogProizvoda.classList.add("nazivProizvoda");
          nazivkupljenogProizvoda.textContent = `Naziv: ${jedanProizvod.naziv}`;

          let cenakupljenogProizvoda = document.createElement("p");
          cenakupljenogProizvoda.classList.add("cenaProizvoda");
          cenakupljenogProizvoda.textContent = `Cena: ${jedanProizvod.cena}`;

          let kupljenakolicina = document.createElement("p");
          kupljenakolicina.classList.add("kolicina");
          kupljenakolicina.textContent = `Kolicina: ${kolicina.value}`;
          let cifra = kupljenakolicina.textContent;

          let izbaci = document.createElement("button");
          izbaci.classList.add("izbaci");
          izbaci.textContent = "Izbaci iz korpe";

          kupljeniproizvod.append(
            nazivkupljenogProizvoda,
            cenakupljenogProizvoda,
            kupljenakolicina,
            izbaci
          );
          korpa.append(kupljeniproizvod);

          // pravljenje objekta dodatog proizvoda
          let jedanKupljeniProizvod = {
            naziv: jedanProizvod.naziv,
            cena: jedanProizvod.cena,
            dodatniInfo: jedanProizvod.dodatniInfo,
            kupljenaKolicina: kolicina.value,
          };

          // dodajemo proizvod nizu korpa na objektu kupca
          musterija[0].korpa.push(jedanKupljeniProizvod);
          console.log(musterija[0]);

          // listener za brisanje iz korpe na DOM-u
          izbaci.addEventListener("click", function (e) {
            e.preventDefault();
            kupljeniproizvod.remove();

            // vracamo proizvodu na listi originalno brojno stanje
            jedanProizvod.naStanju =
              Number(cifra.substr(-1)) + jedanProizvod.naStanju;
            let index = musterija[0].korpa.findIndex(
              (ajtem) => ajtem.index == jedanKupljeniProizvod.index
            );

            // izbacujemo ajtem iz niza korpa
            musterija[0].korpa.splice(index, 1);
          });

          kolicina.value = "";
      } else {
        // invalidan unos u korpu
        obavestenje.textContent = `kolicina mora biti veca od nule i manja od ${jedanProizvod.naStanju}`;
        obavestenje.style.color = "red";
        setTimeout(function () {
          obavestenje.textContent = "";
        }, 3000);
      }
    });
  });
}
