//-------------------------------//
//----------- Importi -----------//
//-------------------------------//
import {
  dodajAjtem,
  imeNovogAjtema,
  cenaNovogAjtema,
  opisNovogAjtema,
  kolicinaNovogAjtema,
} from "./index.js";
import { listaProizvoda, prikaziSveproizvode } from "./proizvodi_lista.js";

// listener za dodavanje ajtema za admina

export function dodajNoviAjtem(
  dodajAjtem,
  imeNovogAjtema,
  cenaNovogAjtema,
  opisNovogAjtema,
  kolicinaNovogAjtema,
    listaProizvoda,
  prikaziSveproizvode
) {
  dodajAjtem.addEventListener("submit", function (e) {
    e.preventDefault();

    // pravimo objekat novog proizvoda
    let dodatiAjtem = {
      naziv: imeNovogAjtema.value,
      cena: cenaNovogAjtema.value,
      dodatniInfo: opisNovogAjtema.value,
      naStanju: kolicinaNovogAjtema.value,
    };

    // guramo ga u listu
    listaProizvoda.push(dodatiAjtem)
    
    // pozivamo funkciju za ispis proizvoda na DOM
    prikaziSveproizvode(listaProizvoda)
  });
}
