const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonBorrar=document.getElementsByName('data-borrar')[0];
var result =document.getElementById('result')
var operActual='';
var operAnterior='';
var operacion=undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonBorrar.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});


function selectOperacion(op){
    if(operActual==='') return;
    if(operAnterior !==''){
        calcular()
    }
    operacion= op.toString();
    operAnterior=operActual;
    operActual='';
}
/* Funcion para las operaciones*/
function calcular(){
    var calculo;
    const anterior = parseFloat(operAnterior);
    const actual =parseFloat(operActual);
    if(isNaN(anterior)|| isNaN(actual))return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';

}

function agregarNumero(num){
    operActual= operActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    operActual='';
    operAnterior='';
    operacion=undefined;
}



function actualizarDisplay(){
    result.value = operActual;

}
clear();