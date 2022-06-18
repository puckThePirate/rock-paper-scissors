const newGame = document.querySelector('.match');
const player = document.querySelectorAll('.choice');
const game = document.querySelector('.game');
const body = document.querySelector('body');
const result = document.querySelector('.currResult');
const scores = document.querySelector('.score');
const current = document.createElement('div');
const finalWinner = document.createElement('div');

finalWinner.classList.add('final-winner');
current.classList.add('current');

let compscore = 0;
let playscore = 0;

game.remove();
result.remove();
scores.remove();

const CompChoice = function() {
    const choice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}
var PlayerChoice = function(e) {
    const choice = e.target.value;
    Game(choice);
}

const Game = function(prop) {
    const compChoice = CompChoice();
    const playChoice = prop;
    let win;
    if ((compChoice == "rock" && playChoice == "scissor") || (compChoice == "paper" && playChoice == "rock") || (compChoice == "scissor" && playChoice == "paper")) {
        console.log("Computer Wins!");
        compscore++;
        if (compChoice == "rock") current.textContent = "Computer Wins!  Rock beats Scissor!";
        else if (compChoice == "paper") current.textContent = "Computer Wins!  Paper beats Rock!";
        else current.textContent = "Computer Wins!  Scissor beats Paper!";
        win = 'computer';

        result.appendChild(current);
    } else if (compChoice == playChoice) {
        console.log("Draw!");
        win = null;

        current.textContent = "Draw!"
        result.appendChild(current);

    } else {
        console.log("Player Wins!");
        playscore++;
        if (playChoice == "rock") current.textContent = "PLayer Wins!  Rock beats Scissor!";
        else if (playChoice == "paper") current.textContent = "Player Wins!  Paper beats Rock!";
        else current.textContent = "PLayer Wins!  Scissor beats Paper!";
        win = 'player';

        result.appendChild(current);
    }
    scores.textContent = `Computer Score: ${compscore}  Player Score: ${playscore}`;
    body.appendChild(scores);
    body.insertBefore(result,scores);

    Match()
}

const Match = function() {
    console.log("Computer Score:" + compscore + " Player Score:" + playscore);
    if (compscore == 5 || playscore == 5) {
        console.log("Game Over!");

        if (compscore == 5) finalWinner.textContent = "Computer Wins the Match!";
        else finalWinner.textContent = "Player Wins the Match!";

        body.appendChild(newGame);
        body.insertBefore(finalWinner, newGame);
        current.remove();
        result.remove();
        game.remove();

        compscore = 0;
        playscore = 0;
    }
}

const startgame = function() {
    body.appendChild(game);
    body.appendChild(scores);
    finalWinner.remove();
    newGame.remove();
    scores.textContent = `Computer Score: ${compscore}  Player Score: ${playscore}`;
}


player.forEach(play => play.addEventListener('click', PlayerChoice));
newGame.addEventListener('click', startgame);