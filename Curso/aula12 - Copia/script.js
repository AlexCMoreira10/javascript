
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML= `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'imagens/manhã3.jpg'
        document.body.style.background = '#fbf096'
        document.getElementsByTagName('h1')[0].style.color = 'black'
        document.getElementsByClassName('msg')[0].innerHTML = 'Tenha um <strong>BOM DIA</strong>'

    } else if (hora >=12 && hora <= 18 ) {
        //Boa Tarde
        img.src = 'imagens/tarde3.jpg'
        document.body.style.background = '#fc5900'
        //document.body.getElementsByTagName('h1')
        document.getElementsByClassName('msg')[0].innerHTML = 'Tenha uma <strong>BOA TARDE!</strong>'

    } else {
        //Boa Noite
        img.src = 'imagens/noite3.jpg'
        document.body.style.background = '#5b4667'

        document.getElementsByClassName('msg')[0].innerHTML = 'Tenha uma <strong>BOA NOITE</strong>'
    }
}