function verificar() {
    var dat = new Date()
    var ano = dat.getFullYear()
    var niver = window.document.getElementById('nascimento')
    var res = window.document.querySelector('div.res')
    //window.alert(`ano atual ${ano} e data de nascimento ${Number(niver.value)}`)
    
    if (Number(niver.value) <= 0 || niver.value > ano ) {
        window.alert('ERRO')
    } else {
        //window.alert(`ano atual ${ano} e data de nascimento ${Number(niver.value)}`)
        var genero = document.getElementsByName('gen')
        var gen = ''
        var idade = ano - Number(niver.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (genero[0].checked) {
            gen = 'Homem'
            //window.alert(`ano atual ${ano} e data de nascimento ${Number(niver.value)} e 1 ${gen} e ${idade}` ) 
            if (idade >= 0 && idade <= 13 ){
                //criança
                //window.alert('criança')
                img.setAttribute('src','imagens/foto-bebe-m.png')

            } else if (idade < 21 ) {
                //jovem
                //window.alert('jovem')
                img.setAttribute('src', 'imagens/foto-jovem-m.png')

            } else if (idade < 55 ) {
                //adulto
                //window.alert('aduto')
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                //window.alert('idoso')
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
    
        } else if (genero[1].checked) {
            gen = 'Mulher'
            //window.alert(`ano atual ${ano} e data de nascimento ${Number(niver.value)} e 2 ${gen}`)
            if (idade >= 0 && idade <= 13){
                img.setAttribute('src', 'imagens/foto-bebe-f.png' )

            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')

            } else if ( idade < 55) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')

            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
        
    }

}