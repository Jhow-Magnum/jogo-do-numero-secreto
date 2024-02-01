let listaDeNumerosSorteados = [];
let numeroLimite =10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Edita os textos do titulo e o paragrafo dentro do HTML
function exibirNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
// Exibi na tela inicial as mensagem definidas
function exibirMensagemInicial() {
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Informe um número de 1 a 10');
}

// Inicia a função
exibirMensagemInicial();
//console.log(numeroSecreto);



// Pega o valor inserido e faz a verificação
function verificarChute(){
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirNaTela('h1', 'Acertou!');
        exibirNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');   //Habilita o botão novo jogo, removendo o atributo 'disabled' dentro de Element ID 'reiniciar'
    } else {
        if (chute > numeroSecreto){
            exibirNaTela('h1', 'Quase lá...');
            exibirNaTela('p', 'O número secreto é menor');
        } else {
            exibirNaTela('h1', 'Quase lá...');
            exibirNaTela('p', 'O número secreto é maior');
        }
        tentativas++; // Faz a soma das tentativas 
        limparCampo();   

    }
}

// Gera números aleatório de 1 a 10 para o jogo 
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementoNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }





    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


// Limpar campo de texto
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Reiniciar jogo quando botao Novo Jogo for clicado
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}






