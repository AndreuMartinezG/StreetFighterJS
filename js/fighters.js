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
        return this.defensa = 0;
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

