//-------------------------------//
//----------- Importi -----------//
//-------------------------------//
import { listaKorisnika, nadjiKorisnika } from "./korisnici_lista.js";
import { listaProizvoda, prikaziSveproizvode } from "./proizvodi_lista.js";
import { Kupac } from "./korisnici_klase.js";
import { dodajNoviAjtem } from "./adminDodajAjtem.js";

//-------------------------------//
//-------- DOM Elementi ---------//
//-------------------------------//

export const userName = document.querySelector("#username");
export const password = document.querySelector("#password");
const forma = document.querySelector("#forma");
const loginBtn = document.querySelector("#LogIn");
export const korpa = document.querySelector(".korpa");
export const proizvodi = document.querySelector(".proizvodi");
const ulogovaniKorisnik = document.querySelector("#ulogovaniKorisnik");
const administrator = document.querySelector(".admin");
const ulogovaniAdmin = document.querySelector("#ulogovaniAdmin");
const logout = document.querySelector("#logout");
export let musterija = [];
export const dodajAjtem = document.querySelector("#dodajAjtem");
export const imeNovogAjtema = document.querySelector("#imeNovogAjtema");
export const cenaNovogAjtema = document.querySelector("#cenaNovogAjtema");
export const opisNovogAjtema = document.querySelector("#opisNovogAjtema");
export const kolicinaNovogAjtema = document.querySelector(
  "#kolicinaNovogAjtema"
);

//-------------------------------//
//---- Ucitavanje Proizvoda -----//
//-------------------------------//

prikaziSveproizvode(listaProizvoda);

//-------------------------------//
//-------- Login Event ----------//
//-------------------------------//

forma.addEventListener("submit", function (event) {
  event.preventDefault();
  // privremeni objekat za proveru tipa korisnika koji se loguje
  let temp = listaKorisnika.find(nadjiKorisnika)
    ? listaKorisnika.find(nadjiKorisnika)
    : { tip: "pogresan unos" };

  if (temp.tip === "kupac") {
    // ako imamo kupca, pravimo objekat kupac
    let trenutnikupac = new Kupac(userName.value, password.value);
    // guramo ga u niz musterija da bi mogli da mu storujemo u polje korpa ono sto je dodao sa liste proizvoda
    musterija.push(trenutnikupac);

    loginBtn.disabled = true;
    forma.reset();

    // prikazujemo korpu
    korpa.classList.remove("korpa_nologin");
    // ispisujemo ime kupca
    ulogovaniKorisnik.textContent = trenutnikupac.userName;
  } else {
    // ako imamo admina
    loginBtn.disabled = true;
    forma.reset();

    // prikazujemo admin panel
    administrator.classList.remove("admin_nologin");
    // ispisujemo ime admina
    ulogovaniAdmin.textContent = temp.korisnickoIme;

    // poziv funkcije za dodavanje novog ajtema u niz proizvoda
    dodajNoviAjtem(
      dodajAjtem,
      imeNovogAjtema,
      cenaNovogAjtema,
      opisNovogAjtema,
      kolicinaNovogAjtema,
      listaProizvoda,
      prikaziSveproizvode
    );
  }
});

// kad se logautujemo, ne refresujemo stranicu
// da bi omogucili kupcima da se uloguju i kupuju proizvode koje je admin dodao naknadno
logout.addEventListener("click", function (e) {
  loginBtn.disabled = false;
  korpa.classList.add("korpa_nologin");
  administrator.classList.add("admin_nologin");
  musterija = [];
});
