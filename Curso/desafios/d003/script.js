function testar() {
    var l1 = Number(window.document.querySelector('input#txtl1').value)
    var l2 = Number(window.document.querySelector('input#txtl2').value)
    var l3 = Number(window.document.querySelector('input#txtl3').value)
    var imagem = document.getElementById('triangulos')
    var res = document.querySelector('div#res')
    res.innerHTML = ''
    
    
    if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
        window.alert('ERRO, Preencha Corretamente')
    } 

    if (l1 <= l2+l3 && l2 <= l1+l3 && l3 <= l2 + l1) {
        res.innerHTML += 'É possivel Formar um triangulo <br>'
        imagem.src = 'imagem/Quest.jpg'
        if (l1 ==l2 && l2 == l3) {
            //Equilatero
            imagem.src = 'imagem/equilatero.jpg'
            res.innerHTML += 'Triangulo <strong>Equilatero</strong>'
        } else if (l1 != l2 && l2 != l3 && l3 != l1) {
            //Escaleno
            imagem.src = 'imagem/escaleno.jpg'
            res.innerHTML += 'Triangulo <strong>Escaleno</strong>'

        } else if ((l1 == l2 || l3) && (l1 != l2 && l3 )) {
            //Isosceles 
            imagem.src = 'imagem/isosceles-p.jpg'
            res.innerHTML += 'Triangulo <strong>isoceles</strong>'
        }
    } else {
        res.innerHTML += 'Não é possivel Formar um triangulo <br>'
    }
}