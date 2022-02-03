class Luchador {

    constructor(nombre, vida, ataque, defensa, resistencia, pais, imgRute) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.resistencia = resistencia;
        this.pais = pais;
        this.vidaMuerte = 0;
        this.imgRute = imgRute;
    }

    pegar() {
        return this.vida - 20
    }

    defender() {
        return this.defensa = this.resistencia + this.defensa;
    }

};

//Instanciando luchadores

let luchador1 = new Luchador("Ryu",300,20,10,10,"Japon", "ryuSelect");
let luchador2 = new Luchador("Ken",300,20,10,10,"EEUU", "kenSelect");
let luchador3 = new Luchador("Chun-Li",300,20,10,10,"China", "chunLiSelect");
let luchador4 = new Luchador("Guile",300,20,10,10,"EEUU", "guileSelect");
let luchador5 = new Luchador("Blanka",300,20,10,10,"Brasil", "blankaSelect");
let luchador6 = new Luchador("E.Honda",300,20,10,10,"Japon", "eHondaSelect");
let luchador7 = new Luchador("Zangief",300,20,10,10,"URSS", "zangiefSelect");
let luchador8 = new Luchador("Dhalsim",300,20,10,10,"India", "dhalsimSelect");


//Generacion de diccionario de los Luchadores
let allFighters = {
    1 : luchador1,
    2 : luchador2,
    3 : luchador3,
    4 : luchador4,
    5 : luchador5,
    6 : luchador6,
    7 : luchador7,
    8 : luchador8,

};

let player1 = "";

let player2 = "";

let ganador = "";

