let numeroSecreto = gerarNumeroALeatorio();

function exibirtextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirtextoNaTela('h1', 'jogo o número secreto');
exibirtextoNaTela('p','escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){}
         exibirtextoNaTela('h1', 'Acertou!')
          exibirtextoNaTela('p', 'você descobriu o número secreto!')
    } else {
        if (chute > numeroSecreto)
          exibirtextoNaTela('p', 'O número secreto é menor');
        } else {  
         exibirtextoNaTela('p',  'O número secreto é maior');
        }
    }
}