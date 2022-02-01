class Luchador {

    constructor(nombre, vida, ataque, defensa, resistencia, pais) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.resistencia = resistencia;
        this.pais = pais;
        this.vidaMuerte = 0;
    }

    pegar() {
        return this.vida - 20
    }

    defender() {
        return this.defensa = this.resistencia + this.defensa;
    }

};

//Instanciando luchadores

let luchador1 = new Luchador("Ryu",300,20,10,10,"Japón");
let luchador2 = new Luchador("Ken",300,20,10,10,"EEUU");
let luchador3 = new Luchador("Chun-Li",300,20,10,10,"China");
let luchador4 = new Luchador("Guile",300,20,10,10,"EEUU");
let luchador5 = new Luchador("Blanka",300,20,10,10,"Brasil");
let luchador6 = new Luchador("E.Honda",300,20,10,10,"Japón");
let luchador7 = new Luchador("Zangief",300,20,10,10,"URSS");
let luchador8 = new Luchador("Dhalsim",300,20,10,10,"India");


//Generacion de diccionario de los Luchadores
let allFighters = {
    1 : luchador1,
    2 : luchador2,
    3 : luchador3,
    4 : luchador4,
    5 : luchador5,
    6 : luchador6,
    7 : luchador7,
    8 : luchador8
};

let player1 = "";

let player2 = "";

let ganador = "";