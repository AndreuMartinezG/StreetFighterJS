const screenTitle = document.getElementById('inicio');
const transicionInicio = document.getElementById('transicionInicio')
const pulsaStart = document.getElementById('pulsaStartInicio')
const audioIntro = new Audio('assets/sounds/street-fighter.mp3')

// Funciones 

//Cambios de pantalla
const cambiaPantalla = (cambio) => {

    let pantallaDeseada = "screen" + cambio;
    let arrayPantallas = ["screen1","screen2","screen3","screen4","screen5","screen6","screen7","screen8","screen9"];

    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    document.getElementById(pantallaDeseada).style.display = "block";

    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }

    //Animacion para transicion entre inicio y pulsaStart
    if (pantallaDeseada == "screen2") {
        audioIntro.play()
        audioIntro.volume = 0.5
        transicionInicio.style.backgroundImage = "url('assets/img/intro-1.gif')";
        transicionInicio.style.backgroundSize = "cover"
        setTimeout(function() {
            transicionInicio.style.backgroundSize = "cover"
            transicionInicio.style.backgroundImage = "url('assets/img/intro-4.gif')";
            setTimeout(function() {
                transicionInicio.style.backgroundSize = "cover"
                transicionInicio.style.backgroundImage = "url('assets/img/intro-2.gif')";
                setTimeout(function() {
                    transicionInicio.style.backgroundSize = "cover"
                    transicionInicio.style.backgroundImage = "url('assets/img/intro-3.gif')";
                    setTimeout(function() {
                        cambiaPantalla(3)
                    },2500)
                },2500)
            }, 2500)
        }, 2500);
    }
}

//Funcion para detectar pulsacion de cualquier tecla en Pulsa Start para continuar

const onKeyDownHandler = () => {
    cambiaPantalla(4)
}

//TRansicion pantalla

//Imagen para Pantalla inicio
screenTitle.style.backgroundImage = "url('assets/img/titulo.png')"
screenTitle.style.backgroundSize = "cover"


//Imagen para Pantalla Pulsa Cualquier tecla para continuar
pulsaStart.style.backgroundImage = "url('assets/img/press_start.png')"
pulsaStart.style.backgroundSize = "cover"