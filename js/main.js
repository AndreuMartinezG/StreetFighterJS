const screenTitle = document.getElementById('inicio');
const transicionInicio = document.getElementById('transicionInicio')
const pulsaStart = document.getElementById('pulsaStartInicio')
const selectPj1 = document.getElementById('pj1')

const win = document.getElementById('pagWin')
const audioTitulo = new Audio('assets/sounds/audioTitulo.mp3')
const audioIntro = new Audio('assets/sounds/street-fighter.mp3')
const audioNextBattle = new Audio('assets/sounds/Get-ready-battle.mp3')
const audioSelect = new Audio('assets/sounds/characterSelect.mp3')
const screen3Tecla = document.getElementById('screen3')


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


//Cambios de pantalla
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
        setTimeout(function () {
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
            setTimeout(function () {
                transicionInicio.style.backgroundSize = "cover"
                transicionInicio.style.backgroundImage = "url('assets/img/intro-2.gif')";
                setTimeout(function () {
                    transicionInicio.style.backgroundSize = "cover"
                    transicionInicio.style.backgroundImage = "url('assets/img/intro-3.gif')";
                    setTimeout(function () {
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
        pulsaStart.style.backgroundSize = "contain"
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

    if (pantallaDeseada == "screen7"){
        audioSelect.pause()
        audioNextBattle.volume = 0.2
        audioNextBattle.play()
        audioNextBattle.loop = false
    }


    //Pantalla WIN
    if (pantallaDeseada == "screen9") {
        win.style.backgroundImage = "url('assets/img/you-win.png')"
        win.style.backgroundSize = "cover"

    }
}

//Funcion para detectar pulsacion de cualquier tecla en Pulsa Start para continuar

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
            Resistencia: ${player1.resistencia}
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
            Resistencia: ${player2.resistencia}
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
    displayPlayer2.innerHTML = `<img class="foto" src="assets/img/${player2.imgRute}.gif" alt="segundoluchador"/>`;
    banderaPlayer2.innerHTML = `<img class="banderaPresent" src="assets/img/${player2.pais}.png" alt="segundoLuchadorBandera"/>`;
    setTimeout(() =>{
        cambiaPantalla(8);
        //game()
    },6500)
}

//Elementos para mostrar los personajes seleccionados

let displayPlayer1 = document.getElementById("presentacionPlayer1");
let displayPlayer2 = document.getElementById("presentacionPlayer2");
let banderaPlayer1 = document.getElementById("banderaPresentacion1");
let banderaPlayer2 = document.getElementById("banderaPresentacion2");


//src=`img\${jugador1.nombre}.jpg`

/*
let divLuchador1 = document.getElementById("iddeldiv");
divLuchador1.style.src
*/