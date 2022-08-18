function loop() {
    var c = 0
    var cont = document.querySelector('p#cont')
    var numero = Number(document.querySelector('input#numero').value)
    cont.innerHTML = `contando de 0 até ${numero} <br>`
    while (c <= numero) {
        cont.innerHTML += `contado <strong>${c}</strong> <br> `
        c++
    }

}

function clean() {
    var cont = document.querySelector('p#cont')
    cont.innerHTML = ''
}