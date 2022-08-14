function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
   

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Preencha Corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            //Checagem da Faixa de Idade Homens
            if (idade >= 0 && idade <= 13 ) {
                //criança
                img.setAttribute('src','foto-bebe-m.png')
                
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 55 ) {
                //adulto
                img.setAttribute('src','foto-jovem-m.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }

            
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            //Checagem da Faixa de Idade Mulheres
            if (idade >= 0 && idade <= 13) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21 ) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 55) { 
                img.setAttribute('src', 'foto-adulto-f.png')
            } else  {
                img.setAttribute('src', 'foto-idoso-f.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}