import { userName, password } from "./index.js"
import { musterija } from "./index.js"

// klase za korisnika, kupca i admina
export class Korisnik {
    userName
    password
    constructor(userName, password){
        this.userName = userName
        this.password = password
    }
}

export class Kupac extends Korisnik {
    korpa = []
    constructor(userName, password){
        super(userName, password)
    }
}

export class Admin extends Korisnik {
    constructor(userName, password){
        super(userName, password)
    }
}
