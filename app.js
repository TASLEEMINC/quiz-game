const questions = [
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Shanghai"],
        answer: "Tokyo"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        answer: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 300000;

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz("Time's up! Quiz over.");
        }
    }, 1000);
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.play();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');

    if (currentQuestionIndex >= questions.length) {
        endQuiz("Quiz completed!");
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.innerHTML = question.question;
    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');

    if (selectedOption === question.answer) {
        resultElement.textContent = "Correct !";
        score++;
        playSound('correctSound');
    } else {
        resultElement.textContent = `Wrong! The correct answer is ${question.answer}.`;
        playSound('wrongSound');
    }

    document.getElementById('score').textContent = `Score: ${score}`;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz(message) {
    document.getElementById('question').innerHTML = message;
    document.getElementById('options').innerHTML = "";
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('score').textContent = `Final Score: ${score}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#bgMusic').play();
    startTimer();
    loadQuestion();
});
console.log('ok')

document.querySelectorAll('.highlight-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.highlight-btn').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
console.log('ok')