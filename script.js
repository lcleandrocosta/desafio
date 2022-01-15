//Declaração de variáveis dos elementos da coluna esquerda
const imagemEsquerda = document.querySelector('#img-esquerda');
const nomeDoPersonagemEsquerda = document.querySelector('#nome-esquerda');
const especieEsquerda = document.querySelector('#especie-esquerda');
const statusEsquerda = document.querySelector('#status-esquerda');

//Declaração de variáveis dos elementos da coluna central
const imagemCentral = document.querySelector('#img-central');
const nomeDoPersonagemCentral = document.querySelector('#nome-central');
const especieCentral = document.querySelector('#especie-central');
const statusCentral = document.querySelector('#status-central');

//Declaração de variáveis dos elementos da coluna direita
const imagemDireita = document.querySelector('#img-direita');
const nomeDoPersonagemDireita = document.querySelector('#nome-direita');
const especieDireita = document.querySelector('#especie-direita');
const statusDireita = document.querySelector('#status-direita');

//Declaração da variável do Botão
const botao = document.querySelector('button');

//Método para gerar valor aleatório para a coluna da equerda
gerarValorAleatorioEsquerda  = () => {
    return Math.floor(Math.random() * 671);
}

//Função para recuperar dados dos personagens da coluna da esquerda
pegarPersonagemEsquerda = () => {
    let numeroAleatorio = gerarValorAleatorioEsquerda();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json', 
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemEsquerda.src = data.image;
        imagemEsquerda.alt = data.name;
        nomeDoPersonagemEsquerda.innerHTML = data.name;
        especieEsquerda.innerHTML = data.species;
        statusEsquerda.innerHTML = data.status;
    });
}

//Função para gerar valor aleatório para a coluna central
gerarValorAleatorioCentral  = () => {
    return Math.floor(Math.random() * 671);
}

//Função para recuperar dados dos personagens da coluna central
pegarPersonagemCentral = () => {
    let numeroAleatorio = gerarValorAleatorioCentral();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json', 
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemCentral.src = data.image;
        imagemCentral.alt = data.name;
        nomeDoPersonagemCentral.innerHTML = data.name;
        especieCentral.innerHTML = data.species;
        statusCentral.innerHTML = data.status;
    });
}

//Função para gerar valor aleatório para a coluna direita
gerarValorAleatorioDireita  = () => {
    return Math.floor(Math.random() * 671);
}

