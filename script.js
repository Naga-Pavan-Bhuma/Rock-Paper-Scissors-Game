let userScore = 0;
let compScore = 0;
let drawScore = 0;
let body = document.querySelector("body");
let theme = document.getElementById("theme");
let div = document.getElementById("top");
let currMode = "light";
theme.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dark';
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        theme.style.backgroundColor = 'white';
        theme.style.color = 'black';
        theme.innerText = 'Light Mode';
        div.style.backgroundColor = 'blue';
        div.style.color = 'white';
    } else {
        currMode = 'light';
        body.style.backgroundColor = 'white';
        body.style.color = '#222222';
        theme.style.backgroundColor = 'black';
        theme.style.color = 'white';
        theme.innerText = 'Dark Mode';
        div.style.backgroundColor = '#00ffaa';
        div.style.color = 'black';
    }
})
let img = document.getElementsByTagName("img");
const msg = document.getElementById('msg');
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const drawScorePara = document.getElementById("draw-score");
const choices = document.querySelectorAll(".choice");
const genCompScore = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    drawScorePara.innerText = ++drawScore;
    msg.innerText = 'Game was Draw!Try Again';
    msg.style.backgroundColor = 'rgb(65, 65, 65)';
    msg.style.color = 'white';
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScorePara.innerText = ++userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
        msg.style.color = 'white';
    } else {
        compScorePara.innerText = ++compScore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompScore();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'scissors' ? true : false;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'rock' ? true : false;
        } else {
            userWin = compChoice === 'paper' ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})