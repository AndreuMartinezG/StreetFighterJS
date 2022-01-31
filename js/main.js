const screenTitle = document.getElementById('inicio');
const transicionInicio = document.getElementById('transicionInicio')
const pulsaStart = document.getElementById('pulsaStartInicio')
const win = document.getElementById('pagWin')
const audioTitulo = new Audio('assets/sounds/audioTitulo.mp3')
const audioIntro = new Audio('assets/sounds/street-fighter.mp3')

// Funciones 


// Pantalla inicio titulo
screenTitle.style.backgroundImage = "url('assets/img/titulo.png')"
screenTitle.style.backgroundSize = "cover"

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
        audioTitulo.play()
        setTimeout(function () {
            cambiaPantalla(2)
        }, 6000)
    }


    //Animacion para transicion entre inicio y pulsaStart
    if (pantallaDeseada == "screen2") {
        audioTitulo.pause()
        audioIntro.play()
        audioIntro.volume = 0.2
        audioIntro.loop = true
        transicionInicio.style.backgroundImage = "url('assets/img/intro-1.gif')";
        transicionInicio.style.backgroundSize = "cover"
        setTimeout(function () {
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
                    }, 3750)
                }, 3750)
            }, 3750)
        }, 3750);
    }


    //Imagen para Pantalla Pulsa Cualquier tecla para continuar
    if (pantallaDeseada == "screen3") {
        audioIntro.play()
        audioIntro.volume = 0.2
        pulsaStart.style.backgroundImage = "url('assets/img/press_start.png')"
        pulsaStart.style.backgroundSize = "cover"
        
    }


    //Pantalla Controles
    if (pantallaDeseada == "screen4") {
        audioIntro.pause()
    }


    //Pantalla WIN
    if(pantallaDeseada == "screen9") {
        win.style.backgroundImage = "url('assets/img/you-win.png')"
        win.style.backgroundSize = "cover"

    }
}

//Funcion para detectar pulsacion de cualquier tecla en Pulsa Start para continuar

const cualquierTecla = () => {

    cambiaPantalla(4)
 
}



