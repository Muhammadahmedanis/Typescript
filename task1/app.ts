// Define the Question type
type Question = {
    question: string;
    options: string[];
    correctAnswer: number;
};

// Array of quiz questions
const questions: Question[] = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: 0,
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
    },
];

// Variables to track quiz progress
let score: number = 0;
let currentQuestionIndex: number = 0;
const scoreboard: { name: string; score: number; date: Date }[] = [];

// DOM elements
const questionElement = document.getElementById("question") as HTMLDivElement;
const optionsElement = document.getElementById("options") as HTMLUListElement;
const scoreElement = document.getElementById("score") as HTMLDivElement;
const scoreboardElement = document.getElementById("scoreboard") as HTMLDivElement;
const resetButton = document.getElementById("resetBtn") as HTMLButtonElement;

// Function to load a question
function loadQuestion(): void {
    if (currentQuestionIndex >= questions.length) {
        showScore();
    } else {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;

        optionsElement.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => {
                submitAnswer(index);
                loadQuestion();
            };
            const li = document.createElement("li");
            li.appendChild(button);
            optionsElement.appendChild(li);
        });
    }
}

// Function to handle the submission of an answer
function submitAnswer(answerIndex: number): void {
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
}

// Function to display the score and prompt for the player's name
function showScore(): void {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    scoreElement.style.display = "block";
    resetButton.style.display = "block";

    const playerName: string = prompt("Enter your name:") || "Anonymous";
    scoreboard.push({ name: playerName, score: score, date: new Date() });

    scoreElement.innerText = `Your score: ${score} / ${questions.length}`;
    updateScoreboard();
}

// Function to update and display the scoreboard
function updateScoreboard(): void {
    scoreboardElement.innerHTML = `
        <h3>Scoreboard</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                ${scoreboard.map(entry => `
                    <tr>
                        <td>${entry.name}</td>
                        <td>${entry.score}</td>
                        <td>${entry.date.toLocaleString()}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Event listener for the reset button
resetButton.onclick = () => {
    score = 0;
    currentQuestionIndex = 0;
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    scoreElement.style.display = "none";
    resetButton.style.display = "none";
    loadQuestion();
};

// Start the quiz by loading the first question
loadQuestion();
