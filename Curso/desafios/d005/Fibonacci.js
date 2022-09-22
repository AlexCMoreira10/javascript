// criar uma função que receba do usuario o limite do fibonatti
//  em que a soma seja feita em outra função, passando parametro
var numeral = window.document.querySelector('#Fibonacci')
var resultado = document.querySelector('#resultado')

function calcularFibonacci() {
    num = Number(numeral.value)
    a = 0
    b = 1
    res = 0
    resultado.innerHTML = a +" " +b +" "
    for(var contar = 1; res < num ; contar++ ) {
        
        res = soma(a,b)
        a = b
        b = res
    
    if (res <= num) {

        resultado.innerHTML += res +' '
        }
    }
    
}

function soma(valor1, valor2) {
    return valor1 + valor2
}