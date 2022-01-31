const screenTitle = document.getElementById('inicio');
const transicionInicio = document.getElementById('transicionInicio')

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

    if (pantallaDeseada == "screen2") {
        transicionInicio.style.backgroundImage = "url('assets/img/intro-1.gif')";
        transicionInicio.style.backgroundSize = "cover"
        setTimeout(function() {
            transicionInicio.style.backgroundSize = "cover"
            transicionInicio.style.backgroundImage = "url('assets/img/intro-2.gif')";
            setTimeout(function() {
                transicionInicio.style.backgroundSize = "cover"
                transicionInicio.style.backgroundImage = "url('assets/img/intro-3.gif')";
            }, 2000)
        }, 2000);
    }
}

//TRansicion pantallas

screenTitle.style.backgroundImage = "url('assets/img/titulo.png')"
screenTitle.style.backgroundSize = "cover"

