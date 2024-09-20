const startBtn = document.querySelector('#iniciar');
const telas = document.querySelectorAll('.tela');
const proximo = document.querySelector('#proximo'),
    proximo1 = document.querySelector('#proximo1'),
    proximo2 = document.querySelector('#proximo2'),
    proximo3 = document.querySelector('#proximo3'),
    proximo4 = document.querySelector('#proximo4'),
    proximo5 = document.querySelector('#proximo5');
const restartBtns = document.querySelectorAll('.restart');
const acertos = document.querySelector("#acertos");
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
    mudaAcerto()
})


function questao() {
    const quetao0 = document.querySelector(`input[name="quetao0"]:checked`);
    if (quetao0 && parseInt(quetao0.value) === 0) {
        score++;
    }
    const quetao1 = document.querySelector(`input[name="quetao1"]:checked`);
    if (quetao1 && parseInt(quetao1.value) === 2) {
        score++;
    }
    const quetao2 = document.querySelector(`input[name="quetao2"]:checked`);
    if (quetao2 && parseInt(quetao2.value) === 1) {
        score++;
    }
    const quetao3 = document.querySelector(`input[name="quetao3"]:checked`);
    if (quetao3 && parseInt(quetao3.value) === 2) {
        score++;
    }
    const quetao4 = document.querySelector(`input[name="quetao4"]:checked`);
    if (quetao4 && parseInt(quetao4.value) === 1) {
        score++;
    }
}


function mudaAcerto(){
    acertos.innerHTML = score;
    erros = 5 - score
    errosA.innerHTML = erros;
    errosA.style.color = 'red';
    acertos.style.color = 'green';
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




