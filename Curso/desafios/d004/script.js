//Nome dos Alunos
let nome = document.getElementById('nome')
let alunos = []

//Notas e Media
let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let notas1 = []
let notas2 = []

//Generos
let masculino1 = 0 
let masculino2 = 0
let masculinoNota1 = []
let masculinoNota2 = []

let feminino1 = 0
let feminino2 = 0
let femininoNota1 = []
let femininoNota2 = []

//Resultados
let sala = document.getElementById('sala')
let res = document.getElementById('resultado')

nome.focus()

function adicionar() {

    

    if(!isName(nome.value) && !isNota(Number(nota1.value) , Number(nota2.value)) ) {
        //Notas
        notas1.push(Number(nota1.value))
        notas2.push(Number(nota2.value))

        //Sexo e notas
        isGene(Number(nota1.value), Number(nota2.value))

        //Maior nota

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

function maiorNota() {
    if()
}

function isName(n) {
    if(n == 0) {
        return true
    } else {
        return false
    }
}

function isNota (n1 , n2) {
    if((n1 <= -1 || n1 > 10) || (n2 <= -1 || n2 > 10) ){
        return true
    } else {
        return false
    }
}

function isGene(a1, a2) {
    let gen = document.querySelector('input[name="genero"]:checked')
    let genero = parseFloat(gen.value, 0)

    if(genero == 1) {
      masculinoNota1.push(a1)
      masculinoNota2.push(a2)

    } else if (genero == 2){
       femininoNota1.push(a1)
       femininoNota2.push(a2)
    }

}
/*
OBS: FIZ PARA TREINAR PORÉM EU NÃO RECISO CRIAR OS ARRAYS DE NOTAS 1 E NEM DE NOTAS 2
 POIS ELES SE TORNAM REDUNDANTES JÁ QUE POSSO SIMPLESMENTE PEGAR OS ARRAYS MASC1 E FEMI1 E SOMA-LOS
*/
function finalizar() {
    let medH1 = 0
    let medH2 = 0
    let medM1 = 0
    let medM2 = 0

    for(let pos in femininoNota1) {
        feminino1 += femininoNota1[pos]
        feminino2 += femininoNota2[pos]
    }

    for(let pos in masculinoNota1) {
        masculino1 += masculinoNota1[pos]
        masculino2 += masculinoNota2[pos]
    }
    
    //CACULOS DAS MEDIAS
    medH1 = masculino1 / masculinoNota1.length
    medH2 = masculino2 / masculinoNota2.length
    medM1 = feminino1 / femininoNota1.length
    medM2 = feminino2 / femininoNota2.length
    
    //RESULTADOS
    resultado.innerHTML += `<p> Media dos Homens Prova 1 : ${medH1} </p>`
    resultado.innerHTML += `<p> Media dos Mulheres Prova 1 : ${medM1} </p> `
    resultado.innerHTML += `<p> Media dos Homens Prova 2 : ${medH2} </p> `
    resultado.innerHTML += `<p> Media dos Mulheres Prova 2 : ${medM2} </p>`
}