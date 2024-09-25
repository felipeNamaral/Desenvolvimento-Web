const startBtn = document.querySelector('#iniciar');
const telas = document.querySelectorAll('.tela');
const proximo = document.querySelector('#proximo'),
    proximo1 = document.querySelector('#proximo1'),
    proximo2 = document.querySelector('#proximo2'),
    proximo3 = document.querySelector('#proximo3'),
    proximo4 = document.querySelector('#proximo4'),
    proximo5 = document.querySelector('#proximo5');
const restartBtns = document.querySelectorAll('.restart');
const scoreA = document.querySelector("#acertos");
const errosA = document.querySelector("#erros");
let score = 0,
    erros = 0;


startBtn.addEventListener('click', () => {
    telas[0].classList.add('up')
})

proximo1.addEventListener('click', () => {
    telas[1].classList.add('up');
})
proximo2.addEventListener('click', () => {
    telas[2].classList.add('up');
})
proximo3.addEventListener('click', () => {
    telas[3].classList.add('up');
})
proximo4.addEventListener('click', () => {
    telas[4].classList.add('up');
})
proximo5.addEventListener('click', () => {
    telas[5].classList.add('up');
    questao();
    mudaAcerto();
})

const questao0 = document.querySelector(`input[name="quetao0"]:checked`);
const questao1 = document.querySelector(`input[name="quetao1"]:checked`);
const questao2 = document.querySelector(`input[name="quetao2"]:checked`);
const questao3 = document.querySelector(`input[name="quetao3"]:checked`);
const questao4 = document.querySelector(`input[name="quetao4"]:checked`);
function questao() {
    if (questao0 && parseInt(questao0.value) === 0) {
        score++;
    }
    if (questao1 && parseInt(questao1.value) === 2) {
        score++;
    }
    if (questao2 && parseInt(questao2.value) === 1) {
        score++;
    }
    if (questao3 && parseInt(questao3.value) === 2) {
        score++;
    }
    if (questao4 && parseInt(questao4.value) === 1) {
        score++;
    }
}


function mudaAcerto() {
    scoreA.innerHTML = score;
    erros = 5 - score;
    errosA.innerHTML = erros;
    errosA.style.color = 'red';
    scoreA.style.color = 'green';
}



restartBtns.forEach((btn) => {
    btn.addEventListener('click', restartGame);
})
function restartGame() {
    telas[0].classList.remove("up");
    telas[1].classList.remove("up");
    telas[2].classList.remove("up");
    telas[3].classList.remove("up");
    telas[4].classList.remove("up");
    telas[5].classList.remove("up");
    telas[6].classList.remove("up");
    score = 0;
    erros = 0;
}




