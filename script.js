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

//Método para recuperar dados dos personagens da coluna da esquerda

pegarPersonagemEsquerda = () => {
    let numeroAleatorio = gerarValorAleatorio1();
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