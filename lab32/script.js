const questions = [
    {
        question: "Em que ano foi fundado o Sesi Franca Basquete?",
        answers: ["1930", "1940", "1950", "1960"],
        correctAnswer: 0
    },
    {
        question: "Qual é o nome do ginásio onde o Sesi Franca Basquete manda seus jogos?",
        answers: ["Ginásio do Ibirapuera", "Ginásio do Morumbi", "Ginásio Antônio Prado Júnior", "Ginásio Paulo Machadão"],
        correctAnswer: 2
    },
    {
        question: "Qual título importante o Sesi Franca Basquete conquistou em 2019?",
        answers: ["Copa do Brasil", "Campeonato Paulista", "NBB (Novo Basquete Brasil)", "Liga Sul-Americana"],
        correctAnswer: 1
    },
    {
        question: "Quem é um dos jogadores mais emblemáticos da história do Sesi Franca Basquete, conhecido por sua habilidade como armador?",
        answers: ["Leandrinho", "Huertas", "helinho", "Nenê"],
        correctAnswer: 2
    },
    {
        question: "Em quantas edições do NBB (Novo Basquete Brasil) o Sesi Franca Basquete chegou à final até 2023?",
        answers: ["3", "5", "7", "10"],
        correctAnswer: 1
    },
    

];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}
function reset(){
    
}

window.onload = loadQuestions;