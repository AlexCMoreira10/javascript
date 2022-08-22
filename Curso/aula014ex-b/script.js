function mostrar() {
    let tab = Number(document.getElementById('txttabu').value)
    let tot = 0
    let cont = 0
    var res = document.getElementById('resultado')
    res.innerHTML = ''
    if (tab.length == 0) {
        window.alert('Erro! Inserir o valor')
    }
    else {
        do {
            tot = tab * cont
            res.innerHTML += `<ul>${tab} X ${cont} = ${tot} </ul>`
            cont++
        } while (cont <= 10)
    }
    
}