const CompChoice = function() {
    const choice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}
var PlayerChoice = function() {
    var choice = window.prompt("enter chocie");
    return choice;
}

const Game = function() {
    const compChoice = CompChoice();
    const playChoice = PlayerChoice();
    if ((compChoice == "rock" && playChoice == "scissor") || (compChoice == "paper" && playChoice == "rock") || (compChoice == "scissor" && playChoice == "paper")) {
        console.log("Computer Wins!");
        if (compChoice == "rock") console.log("Rock beats Scissor!");
        else if (compChoice == "paper") console.log("Paper beats Rock!");
        else console.log("Scissor beats Paper!");
        return "computer";
    } else if (compChoice == playChoice) {
        console.log("Draw!");
        return null;
    } else {
        console.log("Player Wins!");
        if (playChoice == "rock") console.log("Rock beats Scissor!");
        else if (playChoice == "paper") console.log("Paper beats Rock!");
        else console.log("Scissor beats Paper!");
        return "player";
    }
}

const Match = function() {
    let playWins = 0,
        compWins = 0;
    while (compWins != 5 && playWins != 5) {
        const winner = Game();
        if (winner == "computer") {
            compWins++;
            console.log("Computer Score:" + compWins + " Player Score:" + playWins);
        } else if (winner == "player") {
            playWins++;
            console.log("Computer Score:" + compWins + " Player Score:" + playWins);
        }
    }
}

Match();