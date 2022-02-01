const screenTitle = document.getElementById('inicio');
const transicionInicio = document.getElementById('transicionInicio')
const pulsaStart = document.getElementById('pulsaStartInicio')
const selectPj1 = document.getElementById('pj1')
const selectPj2 = document.getElementById('pj2')
const win = document.getElementById('pagWin')
const audioTitulo = new Audio('assets/sounds/audioTitulo.mp3')
const audioIntro = new Audio('assets/sounds/street-fighter.mp3')
const screen3Tecla = document.getElementById('screen3')


// Funciones 


// Pantalla inicio titulo
audioTitulo.volume = 0.1
audioTitulo.play()
screenTitle.style.backgroundImage = "url('assets/img/titulo.png')"
screenTitle.style.backgroundSize = "cover"

//Limpiar registro de la batalla para empezar otra partida

const cleanGame = () => {
    player1 = "";
    player2 = "";
    ganador = "";
}


//Cambios de pantalla
const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "screen" + cambio;
    let arrayPantallas = ["screen1", "screen2", "screen3", "screen4", "screen5", "screen6", "screen7", "screen8", "screen9"];

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
        audioTitulo.volume = 0.2
        audioTitulo.play()
        setTimeout(function () {
            cambiaPantalla(2)
        }, 6000)
    }


    //Animacion para transicion entre inicio y pulsaStart

    /* Intento de asignar variable a los time out de las transiciones
    
    let transicion2;
    let transicion3;
    let transicion4;*/
    let transicion1;

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
        pulsaStart.style.backgroundSize = "cover"
        /*
        pulsaStart.addEventListener('keydown', cambiaPantalla())*/

        
        //pulsaStart.addEventListener("keydown", cualquierTecla());
        
        /*
        pulsaStart.onkeydown = function (e) {
            cambiaPantalla(4)
        }*/
        
    }


    //Pantalla Controles
    if (pantallaDeseada == "screen4") {
        audioIntro.pause()
    }


    if (pantallaDeseada =="screen5") {
        selectPj1.style.backgroundColor = "grey"
    }

    if (pantallaDeseada =="screen6") {
        selectPj2.style.backgroundColor = "grey"
    }

    //Pantalla WIN
    if (pantallaDeseada == "screen9") {
        win.style.backgroundImage = "url('assets/img/you-win.png')"
        win.style.backgroundSize = "cover"

    }
}

//Funcion para detectar pulsacion de cualquier tecla en Pulsa Start para continuar

const cualquierTecla = () => {

    cambiaPantalla(4)

}

//Funcion para seleccionar Personaje

const selectorFighter = (nFighter) => {
    
    if(player1 == ""){
        player1 = allFighters[nFighter];
        let personajePrimero = document.getElementById(nFighter);
        let datosPersonaje = document.getElementById("estadisticas" + 1);
        console.log(personajePrimero)
        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
        personajePrimero.disabled = true;
        personajePrimero.classList.add("playerSelected");
        datosPersonaje.innerHTML = `Nombre: ${player1.nombre}`;
        datosPersonaje.innerHTML = `Vida: ${player1.vida}`;
        datosPersonaje.innerHTML = `Ataque: ${player1.vida}`;
        datosPersonaje.innerHTML = `Defensa: ${player1.vida}`;
        datosPersonaje.innerHTML = `Resistencia: ${player1.vida}`;
       
    } 
} 

