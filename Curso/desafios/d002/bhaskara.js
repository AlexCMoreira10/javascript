function calc() {
    var a = Number(document.querySelector('input#valor-a').value)
    var b = Number(document.querySelector('input#valor-b').value)
    var c = Number(document.querySelector('input#valor-c').value)
    var res = document.querySelector('div#resultado')
    var delta = b**2 - 4 * a * c
    var x1 = 0
    var x2 = 0

    res.innerHTML += `Valor de A ${a} , valor de B ${b} ,valor de C ${c}, valor de <strong>Delta ${delta}</strong> <br> `

        
    if (delta < 0) {
        res.innerHTML += 'Não existe raiz de numero negativo <br>'
    } else {
        x1 = (-b + Math.sqrt(delta))/(2 * a)
        x2 = (-b - Math.sqrt(delta))/(2 * a )
        res.innerHTML += `x1 é igual  ${x1} <br> e x2 é igual ${x2} <br>`
    }

}