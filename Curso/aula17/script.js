var adicionado = document.querySelector('p#adicionado')
var adcNumero = document.querySelector('input#adcNumero')
var txtresultado = document.querySelector('div#txtresultado')
let arrayDeValor = []
let pos = 0

function adicionarNumero() {
    let novoValor = Number(adcNumero.value)
    let posIndex = arrayDeValor.indexOf(novoValor)
    
    if (novoValor <= 0 || novoValor > 100) {
        window.alert('Valor invalido! digite um numero entre 1 a 100 ')

    }  else if (posIndex != -1){
        window.alert('Erro! Valor já existente')

    } else {
        arrayDeValor.push(novoValor)
        adicionado.innerHTML += `${arrayDeValor[pos]}  , `
        pos++
        return arrayDeValor;

    }

}

function resultado() {
    txtresultado.innerHTML = ""
    var soma = 0
    var media = 0
    var maior = arrayDeValor[0]
    var menor = arrayDeValor[0]

    for (pos in arrayDeValor) (
        soma = arrayDeValor[pos] + soma
    ) 
    
    for(pos in arrayDeValor) {
        if(arrayDeValor[pos] > maior) {
            maior = arrayDeValor[pos]
        }
    }

    for(pos in arrayDeValor) {
        if(arrayDeValor[pos] < menor) {
            menor = arrayDeValor[pos]
        }
    }
    media = soma/arrayDeValor.length

    
    arrayDeValor.sort(function(a, b){return a-b})

    
    txtresultado.innerHTML += `Foram Digita o total de ${arrayDeValor.length} <br>`
    txtresultado.innerHTML += `A soma de dos os valores é ${soma}<br>`
    txtresultado.innerHTML += `Sequencia em ordem crescente é: [ ${arrayDeValor} ]<br>`
    txtresultado.innerHTML += `O Maior valor digitado foi ${maior}<br>`
    txtresultado.innerHTML += `O Menor valor digitado foi ${menor}<br>`
    txtresultado.innerHTML += `O Média foi ${media}<br>`
    
}