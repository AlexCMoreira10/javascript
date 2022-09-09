var numeroChecagem = 10;
function numeroPrimo(primo) {
    var contagemPrimo = 0
    var controlePrimo = 0
    for(var cont = 1; cont <= numeroChecagem; cont++ ) {
        contagemPrimo = numeroChecagem%cont
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


console.log(numeroPrimo(numeroChecagem));