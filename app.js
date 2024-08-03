

let listaDeNumerosSorteados = [];
let limite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  //responsiveVoice.speak(texto, 'Portuguese Female', {rate:1.3});
};

  




exibirTextoNaTela('h1', 'Adivinhe o número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute(){
  let chute = parseInt(document.querySelector('input').value);
  if(Number.isNaN(chute)){
    exibirTextoNaTela('p', 'Erro: Escolha um número de 1 a 10');
    return 1
  }
  console.log(Number.isNaN(chute))
  if(chute==numeroSecreto){
    exibirTextoNaTela('h1', 'Ual! Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(chute > numeroSecreto){
      exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
    } else {
      exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
  }
};

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * limite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == limite){
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTextoNaTela('h1', 'Adivinhe o número secreto');
  exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}






