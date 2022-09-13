//Valor de Entrada input
let fNum = document.getElementById('fNum')
//Mostra na lista os valores
let flista = document.getElementById('flista')
//divisoria da lista
let resp = document.getElementById('resp')
//Array Para salvar o input fNum
let numeros = []

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
        return false
    } else {
        return true
    }

}

function adicionar() {    
    if(isNumber(fNum.value) && !inLista(fNum.value), numeros) {
        window.alert('Tudo funcionando' +fNum)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.' +fNum)
    }
}

function finalizar() {
    window.alert('teste')
}