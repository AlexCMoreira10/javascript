function contar() {
    var passo = Number(document.querySelector('input#passo').value)
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var res = document.querySelector('div#resultado')
    res.innerHTML = ""
    
    //window.alert(`O inicio ${inicio}, o Passo ${passo} e o fim ${fim}`)
    if (passo == 0) {
        passo = 1
        window.alert('Passo invalido será considerado 1')
    }

    if (passo.lenght == 0 || inicio.lenght == 0 || fim.lenght == 0) {
        window.alert("ERRO!! Preencha os campos.")
    } else {
        if (inicio <= fim) {
            while (inicio < fim){
                res.innerHTML += `&#x1F449 ${inicio} `
                inicio = inicio + passo
            }
        } else {
            while (inicio >= fim) {
                inicio = inicio - passo
                res.innerHTML += ` &#x1F449 ${inicio} `
            }
        }

        res.innerHTML += ` &#x1F449 \u{1F3C1}`
    }
} 