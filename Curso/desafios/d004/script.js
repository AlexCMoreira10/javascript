//Nome dos Alunos
let nome = document.getElementById('nome')
let alunos = []

//Notas e Media
let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let notas1 = []
let notas2 = []

//Generos

//Resultados
let sala = document.getElementById('sala')
let res = document.getElementById('resultado')


function adicionar() {

    if(!isName(nome.value) && !isNota(Number(nota1.value) , Number(nota2.value)) ) {
        //Notas
        notas1.push(Number(nota1.value))
        notas2.push(Number(nota2.value))
        //Criação de itens na section
        let item = document.createElement('option')
        item.text = `Aluno ${nome.value} a notas foram ${nota1.value} e ${nota2.value}`
        alunos = nome.value
        sala.appendChild(item)


    } else {
        window.alert('PREENCHA CORRETAMENTE!')
    }


    nome.value = ""
    nota1.value = ''
    nota2.value = ''
    nome.focus()

    
}


function isName(n) {
    if(n == 0) {
        return true
    } else {
        return false
    }
}

function isNota (n1 , n2) {
    if((n1 <= 0 || n1 > 10) || (n2 <= 0 || n2 > 10) ){
        return true
    } else {
        return false
    }
}

function isGene () {

}

function finalizar() {
    notas1.length
    notas2.length
}