
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
    //console.log(numeroSecreto);
    
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('P',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('P','El número secreto es menor');
        }else{
            asignarTextoElemento('P','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    };
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}   

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor( Math.random()*numeroMaximo) + 1;

    console.log(`Numero Generado ${numeroGenerado}`);    
    console.log(listaNumeroSorteados);
    //Si ya sorteó todos los números debe salir

    if(listaNumeroSorteados.length == numeroMaximo){

        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {    

        // Validar si el numeroGenerado está o no en la listaNumeroSorteados, si no está se debe incluir
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
     }
}




function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //condiciones de intervalo de números
    //generar el número aleatorio
    //asignar intentos en 1    
    condicionesIniciales();    
    //deshabilitar el boton de nuevo juego     
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}






/* EJERCICIOS DE FUNCIONES 

function hW(){
    console.log('hello world');
}

hW();

function saludo(name){
    name = prompt('Ingrese su nombre:');
    console.log(`¡Hola ${name}!`);
}
saludo();

function doble(numero){
    numero = prompt('Ingrese un número para saber el doble de este:');
    console.log(numero *    2);
}

doble();

function promedio(n1, n2, n3){
    n1 = parseInt(prompt('Ingrese el primer número de 3 números para obtener el promedio de estos:'));
    n2 = parseInt(prompt('Ingrese el segundo número'));
    n3 = parseInt(prompt('Ingrese el tercer número'));
    resultado = ((n1 + n2 + n3) / 3); 
    console.log(resultado);
}

promedio();

function numeroMayor(n1, n2){
    n1 = parseInt(prompt('Ingrese el primer número de 2 números para obtener mayor de estos:'));
    n2 = parseInt(prompt('Ingrese el segundo número'));
    n1 > n2 ? console.log(n1) : console.log(n2);
    // if (n1 > n2){
    //     console.log(n1);
    // }else{
    //     console.log(n2);
    // }
}

numeroMayor();

function porSiMismo(n1){
    n1 = parseInt(prompt('Ingrese un número y sabrá el resultado de multiplicarlo por si mismo:'));
    console.log(n1 * n1);
}

porSiMismo();*/

