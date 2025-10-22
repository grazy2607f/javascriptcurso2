let listaDeNúmerosSorteados = [];
let númerolimite = 10;
let númeroSecreto = gerarNumeroALeatorio();
let tentativas = 1;
 
function exibirtextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'brazilian portuguese female', {rate:1.2}).  
}

function exibirMensagemInicial
exibirtextoNaTela('h1', 'jogo o número secreto');
exibirtextoNaTela('p','escolha um número entre 1 e 10');


function verificarChute(){
let chute = Document.querySelector('input').value;
 





if (chute == numeroSecreto) {
exibirTextoNaTela('h1', 'Acertou!');
exibirtextoNaTela('p', 'você descobriu o numero secreto com 5 tentativas!')
} else {
    exibirtextoNaTela('p','O número secreto é menor');
} else {
      exibirtextoNaTela('p','O número secreto é maior');