const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user_score");
const computerScoreEl = document.getElementById("computer_score");
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

function compOp() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

function playRound(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
        return "It's a tie";
    } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        userScoreEl.innerText = userScore;
        return `You win! "!human" chose ${computerChoice}`;
    } else {
        computerScore++;
        computerScoreEl.innerText = computerScore;
        return `You win! "!human" chose ${computerChoice}`;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const res = playRound(button.id, compOp());
        resultEl.textContent = res;
    })
})