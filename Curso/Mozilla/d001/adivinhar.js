let rad = Math.floor((Math.random()*100) +1) //Gera um Numero Aleatorio entre 1 e 100 com o metodo random
var palpite0 = Number(document.querySelector('#txtpalpite').value) //Puxa o palpite do HTML

let contagem = 8 //Contagem de Chutes
var reiniciar;
palpite0.focus();

function enviapalpite() {
    var res = document.querySelector('div#res')
    var palpite = palpite0.value

    if (palpite == 0 || palpite > 100) {
        window.alert('ERRO! Digite algum valor na area de palpite, entre 1 e 100',+palpite)
        contagem--
    }
    
    if (palpite === rad) {
        res.innerHTML += "Você acertou Parabêns <br>"
        configFimDeJogo();
    } else if (contagem === 10) {
        res.innerHTML += 'Fim de jogo <br>'
        configFimDeJogo();
        
    } else {
        if ( palpite < rad) {
            res.innerHTML += `Seu Chute ${palpite} foi baixo  ${rad} e ${contagem} <br>`
            
        } else if (palpite > rad) {
            res.innerHTML += `Seu chute ${palpite} foi alto ${rad} e ${contagem} <br>` 

        }
    }
    contagem++
    palpite.value = ''
    palpite.focus()
}


function configFimDeJogo() {
    palpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
}

function reiniciarJogo() {
    contagem = 1
    
    var reiniciarParas = document.querySelector()
}