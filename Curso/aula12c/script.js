function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
   

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Preencha Corretamente')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano -Number(fAno.value)
        res.innerHTML = 'idade é ' +idade
    }
}