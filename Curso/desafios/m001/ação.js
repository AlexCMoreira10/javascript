function mudar() {
    const fundo = document.getElementById('ncor');
    fundo.addEventListener('click', (event) => {
        fundo.textContent = `click ${event.detail}`;
    });
    if (fundo => 1 ) {
        document.body.style.background = 'black'
    } else if (fundo => 2 ){
        document.body.style.background = 'pink'
    } else if (fundo => 3) {
        document.body.style.background = 'purple'
    } else {
        window.alert('erro!!')
    }
    
}