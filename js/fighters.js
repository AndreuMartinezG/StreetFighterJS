class Luchador {

    constructor(nombre, vida, ataque, defensa, suerte, pais, imgRute, imgRuteReve) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.suerte = suerte;
        this.pais = pais;
        this.imgRute = imgRute;
        this.imgRuteReve = imgRuteReve;
    }

    pegar() {
        let random = Math.round(this.ataque - (this.defensa / ((Math.random() * this.suerte) + 1)));

        this.vida -= random;
        return Math.round(Math.random() * (3 - 1) + 1);

    }
};

//Instanciando luchadores

let luchador1 = new Luchador("Ryu", 300, 20, 10, 10, "Japon", "ryuSelect", "ryuSelectReve");
let luchador2 = new Luchador("Ken", 300, 20, 10, 10, "EEUU", "kenSelect", "kenSelectReve");
let luchador3 = new Luchador("Chun-Li", 300, 20, 10, 10, "China", "chunLiSelect", "chunLiSelectReve");
let luchador4 = new Luchador("Guile", 300, 20, 10, 10, "EEUU", "guileSelect", "guileSelectReve");
let luchador5 = new Luchador("Blanka", 300, 20, 10, 10, "Brasil", "blankaSelect", "blankaSelectReve");
let luchador6 = new Luchador("E.Honda", 300, 20, 10, 10, "Japon", "eHondaSelect", "eHondaSelectReve");
let luchador7 = new Luchador("Zangief", 300, 20, 10, 10, "URSS", "zangiefSelect", "zangiefSelectReve");
let luchador8 = new Luchador("Dhalsim", 300, 20, 10, 10, "India", "dhalsimSelect", "dhalsimSelectReve");


//Generacion de diccionario de los Luchadores
let allFighters = {
    1: luchador1,
    2: luchador2,
    3: luchador3,
    4: luchador4,
    5: luchador5,
    6: luchador6,
    7: luchador7,
    8: luchador8,

};

let player1 = "";

let player2 = "";

let ganador = "";

let vidaMuerte = 0;