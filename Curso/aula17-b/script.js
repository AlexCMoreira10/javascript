//Valor de Entrada input
let fNum = document.getElementById('fNum')
//Mostra na lista os valores
let flista = document.getElementById('flista')
//divisoria da lista
let resp = document.getElementById('resp')
//Array Para salvar o input fNum
let numeros = []
fNum.focus()

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 

function inLista(n, l){
    //Se o numero n encontrar um Valor na lista ele Retorna True significa que o Valor existe
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {    
    if(isNumber(fNum.value) && !inLista(fNum.value, numeros)) {
        numeros.push(Number(fNum.value))
        let item = document.createElement('option')
        item.text =`Valor ${fNum.value} adicionado`
        flista.appendChild(item) //cria um item na lista
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    fNum.focus()
    resp.innerHTML = ''
}

function finalizar() {
    let soma = 0
    let media = 0
    let menor = numeros[0]
    let maior = numeros[0]

    for(let pos in numeros) {
        if(numeros[pos] > maior) {
            maior = numeros[pos]
        }
        if (numeros[pos] < menor) {
            menor = numeros[pos]
        }
        soma += numeros[pos]
    }
    numeros.sort(function(a, b){return a-b})
    media = soma / numeros.length

    resp.innerHTML = `O total de de numeros adicionado ${numeros.length} <br>`
    resp.innerHTML += `O maior valor digitado foi ${maior} <br>`
    resp.innerHTML += `O menor valor digitado foi ${menor} <br>`
    resp.innerHTML += `A soma dos valores é ${soma} <br>`
    resp.innerHTML += `A media dos valores é ${media} <br>`
    resp.innerHTML += `e os numeros ordenados de forma cresceste fica : <br> [${numeros}]`
}