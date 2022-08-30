var numeroAleatorio = Math.floor(Math.random()*100)+1 //Numero Aleatorio
//PARAGRAFOS
var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado') 
var baixoOuAlto = document.querySelector('.baixoOuAlto')
//INPUT
var envioPalpite = document.querySelector('.evioPalpite')
var campoPalpite = document.querySelector('.campoPalpite')
//VARIAVEL
var contagemPalpites = 1
var botaoReinicio

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite).value

    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores'
    }
    palpites.textContent += palpiteUsuario + '';
    
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabens! Você acertou';
        ultimoResultado.style.background = 'green'
        baixoOuAlto.textContent = '';
        configFimDeJogo()
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!FIM DE JOGO!!'
        baixoOuAlto.textContent = ''
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = 'ERRADO!'
        ultimoResultado.style.background = 'red'
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite foi Baixo'
        } else if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite foi Alto'
        }
    }
    contagemPalpites++
    campoPalpite.value = ''
    campoPalpite.focus()
}
//envioPalpite.addEventListener('click', conferirPalpite); //<- event listeners