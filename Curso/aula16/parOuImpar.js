let botaoCheck = document.querySelector('#checagem')
var numero = document.querySelector('input#numeroChecagem')

function chacagem() {
    let numeroChecagem = Number(numero.value)
    window.alert(parImpar(numeroChecagem))
    window.alert(numeroPrimo(numeroChecagem))

}

botaoCheck.addEventListener('click', chacagem)

function parImpar(number) {
    if (number%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

function numeroPrimo(primo) {
    var contagemPrimo = 0
    var controlePrimo = 0
    for(var cont = 1; cont <= primo; cont++ ) {
        contagemPrimo = primo%cont
        console.log(contagemPrimo)
        if (contagemPrimo == 0) {
            controlePrimo++
            console.log(` Resto : ${controlePrimo}`)
        } 
    } if(controlePrimo == 2) {
        return 'é um numero Primo!'
    } else {
        return 'não é um numero primo'
    }
}


/*function numeroPrimo(primo) {
    let convertPrimo = Number(numero.value)
    let contadorPrimo = 0
    let contadorControle = 0
    for (var cont = 1; cont <= convertPrimo; cont++) {
        contadorPrimo = convertPrimo%cont
        if(contadorPrimo == 0) {
            contadorControle++
        } 
        if (contadorControle == 2) {
            return 'É um Numero Primo'
        } else {
            return 'Não é um Numero Primo'
        }
    }
}
*/