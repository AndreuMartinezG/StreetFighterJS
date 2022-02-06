const screenTitle = document.getElementById('inicio');
const transicionInicio = document.getElementById('transicionInicio');
const pulsaStart = document.getElementById('pulsaStartInicio');
const selectPj1 = document.getElementById('pj1');
const win = document.getElementById('pagWin');
const audioTitulo = new Audio('assets/sounds/audioTitulo.mp3');
const audioIntro = new Audio('assets/sounds/street-fighter.mp3');
const audioNextBattle = new Audio('assets/sounds/Get-ready-battle.mp3');
const audioSelect = new Audio('assets/sounds/characterSelect.mp3');
const audioBattle = new Audio('assets/sounds/battle.mp3')
const screen3Tecla = document.getElementById('screen3');


// Elementos para la eleccion de Mapa
// Id de donde esta la Pantalla de Batalla
let mapaBatalla = document.getElementById('mapaBatallaResult')
let mapaBatallaElejido = ""
let mapaBatalla1 = document.getElementById("mapa1")
let mapaBatalla2 = document.getElementById("mapa2")
let mapaBatalla3 = document.getElementById("mapa3")
let mapaBatalla4 = document.getElementById("mapa4")

const mapa1 = () => {
    mapaBatallaElejido = "url('assets/img/intro-1.gif')"
    mapaBatalla1.classList.add("playerSelected");
    setTimeout(() =>{
        cambiaPantalla(5)
    },3000)
}

const mapa2 = () => {
    mapaBatallaElejido = "url('assets/img/intro-2.gif')"
    mapaBatalla2.classList.add("playerSelected");
    setTimeout(() =>{
        cambiaPantalla(5)
    },3000)
}

const mapa3 = () => {
    mapaBatallaElejido = "url('assets/img/intro-3.gif')"
    mapaBatalla3.classList.add("playerSelected");
    setTimeout(() =>{
        cambiaPantalla(5)
    },3000)
}

const mapa4 = () => {
    mapaBatallaElejido = "url('assets/img/intro-4.gif')"
    mapaBatalla4.classList.add("playerSelected");
    console.log(mapaBatallaElejido)
    setTimeout(() =>{
        cambiaPantalla(5)
    },3000)
}


const mapaBatallaSelected = () => {

    mapaBatalla.style.backgroundImage = mapaBatallaElejido
}



// Funciones 


// Pantalla inicio titulo
audioTitulo.volume = 0.1
audioTitulo.play()
screenTitle.style.backgroundImage = "url('assets/img/titulo.png')"
screenTitle.style.backgroundSize = "cover"
screenTitle.style.backgroundPosition = "center"

//Limpiar registro de la batalla para empezar otra partida

const cleanGame = () => {
    window.location.reload();
}


//Cambios de pantalla y Diseño
const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "screen" + cambio;
    let arrayPantallas = ["screen1", "screen2", "screen3", "screen4", "screen5", "screen7", "screen8", "screen9"];

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";


    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";

    }


    //Animacion de Cambio y sonido pagina titulo
    if (pantallaDeseada == "screen1") {
        //Imagen para Pantalla inicio
        screenTitle.style.backgroundImage = "url('assets/img/titulo.png')"
        screenTitle.style.backgroundSize = "cover"
        screenTitle.style.backgroundPosition = "center"
        audioTitulo.volume = 0.2
        audioTitulo.play()
        setTimeout(() => {
            cambiaPantalla(2)
        }, 6000)
    }


    //Animacion para transicion entre inicio y pulsaStart

    /* Intento de asignar variable a los time out de las transiciones*/


    if (pantallaDeseada == "screen2") {
        audioTitulo.pause()
        audioIntro.play()
        audioIntro.volume = 0.2
        audioIntro.loop = true
        transicionInicio.style.backgroundImage = "url('assets/img/intro-1.gif')";
        transicionInicio.style.backgroundSize = "cover"



        transicion1 = setTimeout(() => {
            transicionInicio.style.backgroundSize = "cover"
            transicionInicio.style.backgroundImage = "url('assets/img/intro-4.gif')";
            setTimeout(() => {
                transicionInicio.style.backgroundSize = "cover"
                transicionInicio.style.backgroundImage = "url('assets/img/intro-2.gif')";
                setTimeout(() => {
                    transicionInicio.style.backgroundSize = "cover"
                    transicionInicio.style.backgroundImage = "url('assets/img/intro-3.gif')";
                    setTimeout(() => {
                        cambiaPantalla(3)
                    }, 50)
                }, 50)
            }, 50)
        }, 50);
    }


    //Imagen para Pantalla Pulsa Cualquier tecla para continuar
    if (pantallaDeseada == "screen3") {

        /* Intento de Detener las transiciones
        clearTimeout(transicion1)
        clearTimeout(transicion2)
        clearTimeout(transicion3)
        clearTimeout(transicion4)
        */
        transicion1 = "";
        audioIntro.play()
        audioIntro.volume = 0.2
        pulsaStart.style.backgroundImage = "url('assets/img/press_start.png')"
        pulsaStart.style.backgroundSize = "cover"
        pulsaStart.style.backgroundPosition = "center"

        document.body.addEventListener("keydown", (ev) => {

            if (screen3Tecla.style.display == "block") {
                cambiaPantalla(4)
            }
        })
    }


    //Pantalla Controles
    if (pantallaDeseada == "screen4") {
        audioIntro.pause()
    }


    if (pantallaDeseada == "screen5") {
        selectPj1.style.backgroundColor = "#202124"
        audioSelect.volume = 0.2
        audioSelect.play()
        audioSelect.loop = true
    }

    if (pantallaDeseada == "screen7") {
        audioSelect.pause()
        audioNextBattle.volume = 0.2
        audioNextBattle.play()
        audioNextBattle.loop = false
    }

    if (pantallaDeseada == "screen8") {
        audioNextBattle.pause()
        audioBattle.volume = 0.2
        audioBattle.play()
        audioBattle.loop = true
    }
    //Pantalla WIN
    if (pantallaDeseada == "screen9") {
        audioBattle.pause()
        win.style.backgroundImage = "url('assets/img/you-win.png')"
        win.style.backgroundSize = "cover"

    }
}


//Funcion para seleccionar Personaje

const selectorFighter = (nFighter) => {


    if (player1 == "") {
        player1 = allFighters[nFighter];
        let personajePrimero = document.getElementById(nFighter);
        let datosPersonaje = document.getElementById("estadisticas" + 1);
        personajePrimero.onclick = "";
        personajePrimero.classList.add("playerSelected");
        datosPersonaje.innerHTML = `
            Nombre: ${player1.nombre}<br>
            Vida: ${player1.vida}<br>
            Ataque: ${player1.ataque}<br>
            Defensa: ${player1.defensa}<br>
            Resistencia: ${player1.suerte}
        `;

    } else if (player2 == "") {
        player2 = allFighters[nFighter];
        let personajeSegundo = document.getElementById(nFighter);
        let datosPersonaje2 = document.getElementById("estadisticas" + 2);
        console.log(personajeSegundo)
        personajeSegundo.classList.add("playerSelected");
        datosPersonaje2.innerHTML = `
            Nombre: ${player2.nombre}<br>
            Vida: ${player2.vida}<br>
            Ataque: ${player2.ataque}<br>
            Defensa: ${player2.defensa}<br>
            Resistencia: ${player2.suerte}
        `;
        console.log(player2, player1)
        setTimeout(() => {
            cambiaPantalla(7);
            displayGame();
        }, 4000);
    }
}

//Funcion para Mostrar personajes elejidos

const displayGame = () => {
    displayPlayer1.innerHTML = `<img class="foto" src="assets/img/${player1.imgRute}.gif" alt="primerLuchador"/>`;
    banderaPlayer1.innerHTML = `<img class="banderaPresent" src="assets/img/${player1.pais}.png" alt="primerLuchadorBandera"/>`;
    //presentacionNameP1.innerHTML = `${player1.nombre} VS ${player2.nombre}`
    displayPlayer2.innerHTML = `<img class="foto" src="assets/img/${player2.imgRuteReve}.gif" alt="segundoluchador"/>`;
    banderaPlayer2.innerHTML = `<img class="banderaPresent" src="assets/img/${player2.pais}.png" alt="segundoLuchadorBandera"/>`;
    //presentacionNameP2.innerHTML = `${player2.nombre}`
    setTimeout(() => {
        cambiaPantalla(8);
        game()
        mapaBatallaSelected()
    }, 6500)
}

//Elementos para mostrar los personajes seleccionados
let displayPlayer1 = document.getElementById("presentacionPlayer1");
let displayPlayer2 = document.getElementById("presentacionPlayer2");
let banderaPlayer1 = document.getElementById("banderaPresentacion1");
let banderaPlayer2 = document.getElementById("banderaPresentacion2");
let presentacionNameP1 = document.getElementById("divNameP1");
let presentacionNameP2 = document.getElementById("divNameP2");
let nombreBatallaP1 = document.getElementById("nombrePlayer1");
let nombreBatallaP2 = document.getElementById("nombrePlayer2");
let posicionBatallaP1 = document.getElementById("batallaJugador1");
let posicionBatallaP2 = document.getElementById("batallaJugador2");


const game = () => {
    nombreBatallaP1.innerHTML = `${player1.nombre}`
    nombreBatallaP2.innerHTML = `${player2.nombre}`
    posicionBatallaP1.innerHTML = `<img class="foto" style="width:auto;height:20em" src="assets/img/${player1.imgRute}.gif" alt="primerLuchador"/>`;
    posicionBatallaP2.innerHTML = `<img class="foto" style="width:auto;height:20em" src="assets/img/${player2.imgRuteReve}.gif" alt="segundoluchador"/>`;
}

// Funcion de Batalla

const hit = () => {



    let P1 = player1.pegar();
    player2.pegar();
    let pantallaDeLaBatalla = document.getElementById('battleDisplay')
    switch (P1) {
        case 1:
            pantallaDeLaBatalla.style.justifyContent = "flex-start"
            posicionBatallaP1.style.width = ""
            posicionBatallaP2.style.width = ""
            break

        case 2:
            pantallaDeLaBatalla.style.justifyContent = "center"
            posicionBatallaP1.style.width = "5em"
            break

        case 3:
            pantallaDeLaBatalla.style.justifyContent = "flex-end"
            posicionBatallaP1.style.width = "10em"
            posicionBatallaP2.style.width = "20em"
            break
        default:
            console.log(P1)
    }


    contadorVida()
    winer()
    console.log(`${player1.vida} ${player1.nombre}`)
    console.log(`${player2.vida} ${player2.nombre}`)
}


//Funcion para actualizar la vida

const contadorVida = () => {
    if ((player1.vida > 0) && (player2.vida > 0)) {
        let vidaPlayer1 = player1.vida;
        let vidaPlayer2 = player2.vida;
        vidaPlayer1 = (vidaPlayer1 * 100) / 300;
        document.getElementById("barraVidaIzq").style.width = vidaPlayer1 + "%";
        vidaPlayer2 = (vidaPlayer2 * 100) / 300;
        document.getElementById("barraVidaDer").style.width = vidaPlayer2 + "%";
    } else if (player1.vida <= 0) {
        document.getElementById("barraVidaIzq").style.width = 0;
    } else {
        document.getElementById("barraVidaDer").style.width = 0;
    }
}


// Funcion para ver si alguno a ganado
const winer = () => {
    if (player1.vida <= vidaMuerte) {

        ganador = player2;
        console.log(`${player2.nombre}`)
        setTimeout(() => {
            cambiaPantalla(9);
            mostrarGanador();
        }, 3500)

    }
    if (player2.vida <= vidaMuerte) {

        ganador = player1;
        console.log(`${player1.nombre}`)
        setTimeout(() => {
            cambiaPantalla(9);
            mostrarGanador();
        }, 3500)
    }
}


// DISEÑO DE Pantalla de Ganador 

const mostrarGanador = () => {
    console.log(ganador)
}
