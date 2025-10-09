let numeroSecreto =gerarNumeroALeatorio ();

function exibirtextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirtextoNaTela('h1', 'jogo o número secreto');
exibirtextoNaTela('p','escolha um número entre 1 e 10');

function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroALeatorio() {
    parseInt(Math.random() * 10 + 1)
}