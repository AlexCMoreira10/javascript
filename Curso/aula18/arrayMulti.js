let nome = document.querySelector('input#nome')
let salario = document.querySelector('input#salario')
let arrayDeDados = [[]] //[ [nome = document.querySelector('input#nome'),salario = document.querySelector('input#salario')] ]

//resultado em paragrafo
let res = document.querySelector('p#res')

function adicionar() {
    arrayDeDados.push([String(nome.value), Number(salario.value)])
    
    res.innerHTML += `Nome: ${nome.value} e salario ${salario.value} `
    verificadorDeDados(arrayDeDados[[salario.value]])
}

function verificadorDeDados() {
    if(arrayDeDados[[]] >= 1500) {
        return res.innerHTML += ` Valor superior a 1500 <br>`
    } else {
        return  res.innerHTML += ` Valor inferior a 1500 <br>`
    }
}


function media() {
    console.log(arrayDeDados.length)
    console.log(arrayDeDados[salario.length])
    console.log(arrayDeDados[nome.length])
}
/*var salario = [
    [nome, tel, 18000],
    ["EFG", 30, 30000],
    ["IJK", 28, 41000],
    ["EFG", 31, 28000],
 ];

 console.log(salario[1]) */