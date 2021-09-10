let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector ('.blue');
const red = document.querySelector ('.red');
const green = document.querySelector ('.green');
const yellow = document.querySelector ('.yellow');

// Criando ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor (Math.random () * 4);
    order [order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement (order[i]); 
        lightColor (elementColor, Number (i) + 1);
    }
}

// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout (() => {
        element.classList.add ('selected');
    }, number - 1000);
    setTimeout (() => {
        element.classList.add ('selected');
    });
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder [i] != order [i]) {
            gameOver ();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert (`Pontuação: ${score}\n Você acertou! Iniciando próximo nível! =D`);
        nextLevel ();
    }
}

// Função para o clique do jogador
let click = (color) => {
    clickedOrder [clickedOrder.length] = color;
    createColorElement (color).classList.add ('selected');

    setTimeout (() => {
        createColorElement (color).classList.remove ('selected');
        checkOrder ();
    }, 250);

}

// Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder ();
}

// Função Loser - Game Over
let gameOver = () => {
    alert (`Pontuação: ${score}\n Você perdeu o Jogo! =´( \n Clique em OK para iniciar o Jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função de início do jogo
let playGame = () => {
    alert ("Bem vindo ao Genesis!")
    score = 0;

    nextLevel ();
}

// Evento de clique para as cores
green.onclick = () => click (0);
red.onclick = () => click (1);
yellow.onclick = () => click (2);
blue.onclick = () => click (3);

// Início do jogo
playGame ();