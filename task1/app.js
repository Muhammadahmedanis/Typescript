// Array of quiz questions
var questions = [
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
var score = 0;
var currentQuestionIndex = 0;
var scoreboard = [];
// DOM elements
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var scoreElement = document.getElementById("score");
var scoreboardElement = document.getElementById("scoreboard");
var resetButton = document.getElementById("resetBtn");
// Function to load a question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showScore();
    }
    else {
        var currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach(function (option, index) {
            var button = document.createElement("button");
            button.innerText = option;
            button.onclick = function () {
                submitAnswer(index);
                loadQuestion();
            };
            var li = document.createElement("li");
            li.appendChild(button);
            optionsElement.appendChild(li);
        });
    }
}
// Function to handle the submission of an answer
function submitAnswer(answerIndex) {
    var currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
}
// Function to display the score and prompt for the player's name
function showScore() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    scoreElement.style.display = "block";
    resetButton.style.display = "block";
    var playerName = prompt("Enter your name:") || "Anonymous";
    scoreboard.push({ name: playerName, score: score, date: new Date() });
    scoreElement.innerText = "Your score: ".concat(score, " / ").concat(questions.length);
    updateScoreboard();
}
// Function to update and display the scoreboard
function updateScoreboard() {
    scoreboardElement.innerHTML = "\n        <h3>Scoreboard</h3>\n        <table>\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Score</th>\n                    <th>Date</th>\n                </tr>\n            </thead>\n            <tbody>\n                ".concat(scoreboard.map(function (entry) { return "\n                    <tr>\n                        <td>".concat(entry.name, "</td>\n                        <td>").concat(entry.score, "</td>\n                        <td>").concat(entry.date.toLocaleString(), "</td>\n                    </tr>\n                "); }).join(''), "\n            </tbody>\n        </table>\n    ");
}
// Event listener for the reset button
resetButton.onclick = function () {
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
