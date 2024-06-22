
// para modificar objetos del html como por ejemplo el h1 y los p
/*
let elementohtml = document.querySelector('h1');
elementohtml.innerHTML = 'hello world'

esto hace que en un h1 del html muestre hello world seleccionando el elemento mediante el comando 
querySelector

--------------------
document.getElementById('valorUsuario').value

obtiene el valor de un imput mediante su id esto mediante el comando getElementById
------------------
document.getElementById('reiniciar').removeAttribute('disabled')

este codigo remueve la desabilitacion de un boton , primero se selecciona el boton mediante 
getElementById que es reiniciar y con el atributo removeAttribute('atributo a remover') en este caso se remobio 
el atributo disabled
----------------
document.getElementById('reiniciar').setAttribute('disabled','true')

este codigo por otro lado coloca atributos a un boton en html esto mediante el id y con el comando 
setAttribute('comando a colocar') en este caso se quiere colocar el elemento disable y debe de colocarse
el valor true

*/

let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




function asignarTextoElemento(elemento,texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;

}

function generarNumeroSecreto(){
    
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p','Ya se sortearon tosos los numeros posibles');

    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {

            return generarNumeroSecreto();

        } else {
            
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado ;
        }
    }
};



function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acerto

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }

        intentos++;

        limpiarCaja()

    };


    return;
};

function limpiarCaja() { 
    document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;  
}

function nuevoJuego() { 
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');


};

condicionesIniciales();








// a partir de aqui comienzan los desafios





// ejercicios de practica

// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

/*
function indiceMasaCorporal(x,y) {
    return y/x;
};

let peso   = parseInt(prompt('ingrese su peso'));
let altura = parseInt(prompt('ingrese su altura'));
let masa   = indiceMasaCorporal(peso,altura);
console.log(masa)
*/

/*
// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(n) {

    let cont = 1;
    let acum = 1;

    while (cont != n) {
        cont++
        acum = acum * cont
        
        console.log(acum)
    }
    return acum;
}

let numeroUsuario = parseInt(prompt('ingrese su numero a factorizar'));
let resultado     = factorial(numeroUsuario);
alert(`el factorial de ${numeroUsuario} es ${resultado}`) 
*/
/*

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolares(cant) { 
    return cant*4.80
};

let cantidadUsuario = parseFloat(prompt('ingrese su cantidad de dolares: '))
alert(`usted tiene ${convertirDolares(cantidadUsuario)} reales`)

*/


/*
// 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function area(h,b) {
    return h*b;

}

function perimetro(h,b) {
    return (2*h) + (2*b)
}

let altura = parseFloat(prompt('ingressa la altura : '));
let base = parseFloat(prompt('ingressa la base : '));

alert(`la figura tiene  un area de ${area(altura,base)} y un perimetro de ${perimetro(altura,base)}`)
*/

/*
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function tablaMultiblicar(numero) {
    let cont = 0;
    while (cont != 11) {
        console.log(`${numero}x${cont}=${cont*numero}`);
        cont++;

    };
};

let num = parseFloat(prompt('ingrese un numero '));
tablaMultiblicar(num)
*/

/*
let lenguajesDeProgramacion = [];
let numeros  = [3,4,3,2];
let numeros2 = [2,4,6,8]; 

function agregarValorLista(valor) {
    lenguajesDeProgramacion.push(valor);
    return;
};

agregarValorLista('java')
agregarValorLista('ruby')
agregarValorLista('golang')
function mostrarElementosEnConsola(lista) {
    console.log(lista)
}

mostrarElementosEnConsola(lenguajesDeProgramacion)
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostaraElementosInversos(lista) {
    let listaInversa = [];
    let cont = lista.length - 1;
    while (cont != -1 ) {
        listaInversa.push(lista[cont]);
        cont--;
    }
    return listaInversa;
}

console.log(mostaraElementosInversos(lenguajesDeProgramacion))
//Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioLista(lista) {
    
    let cont = 0;
    let acum = 0;
    
    while (cont != lista.length ){
        acum = acum + lista[cont];
        cont++;

    }

    return `el promedio es ${acum/lista.length}`

}

console.log(promedioLista(numeros));


// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function numeroMaxMin(lista) {
    let max = lista[0];
    let min = lista[0];
    let cont = 0;

    while (cont != lista.length) {
        
        if (lista[cont] > max) {
            max = lista[cont];
        } else {
            max = max;
        };

        if (lista[cont] < max) {
            min = lista[cont];
        } else {
            min = min;
        };
        
        cont++;
    };

    return `el  max es ${max} y el min es ${min}`
};

console.log(numeroMaxMin(numeros))

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarNumero(valor , lista) {

    let posicion = -1;
    let cont = 0;

    if (lista.includes(valor)) {

        while (cont != lista.length) {
            
            if (lista[cont] == valor) {
                return cont;
            }
            cont++;

        }
    } else {
        return posicion;
    }





};

console.log(encontrarNumero(10,numeros))

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.


function sumaListas(lista1,lista2) {
    let listaSumas = [];
    cont = 0;

    while (cont != lista1.length) {
        
        listaSumas.push(lista1[cont]+lista2[cont]);
        cont++;

    }
    return listaSumas
}

console.log(sumaListas(numeros,numeros2))

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/