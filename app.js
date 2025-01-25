let numeroSecreto = 0;
let intentos = 0;
//console.log(numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades Acertaste en ${intentos} ${(intentos ===1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            //No acertó
            if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
            } else {
                asignarTextoElemento('p','El numero es mayor');
            } 
        intentos++;
        limpiarCaja();
    }
    
    return;
}
    function limpiarCaja(){
        document.querySelector('#valorUsuario').value='';
        
    }

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {
        //Si el número esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Ingresa un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpia e inicia el juego
    limpiarCaja();
    //Informar nuevamente el ingreso de intervalo
    //Generar nuevo número aleatorio
    //Inicializar número de intentos
    condicionesIniciales();
    //Deshabilitar botón
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

