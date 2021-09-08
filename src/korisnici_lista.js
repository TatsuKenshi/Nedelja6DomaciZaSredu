//-------------------------------//
//----------- Importi -----------//
//-------------------------------//

import { userName, password } from "./index.js";

//-------------------------------//
//------- Lista Korisnika -------//
//-------------------------------//

export let listaKorisnika = [
  {
    tip: "kupac",
    korisnickoIme: "MarkoPetrovic",
    password: "55533322",
    korpa: [],
  },
  {
    tip: "kupac",
    korisnickoIme: "PeraPeric",
    password: "12345678",
    korpa: [],
  },
  {
    tip: "admin",
    korisnickoIme: "DejanPavlovic",
    password: "admin123",
  },
];

//-------------------------------//
//------- Nadji Korisnika -------//
//-------------------------------//

export function nadjiKorisnika(korisnik) {
  return (
    korisnik.korisnickoIme === userName.value &&
    korisnik.password === password.value
  );
}
