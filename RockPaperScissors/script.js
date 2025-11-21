playerScore = 0;
computerScore = 0;
Count = 0;
maxRounds = 3;
gameOver = false;

lastChoice = "";

function getComputerChoice() {
    choice = "";

    while (choice == "" || choice == lastChoice) {
        num = Math.floor(Math.random() * 3);

        if (num == 0) {
            choice = "Rock";
        } else if (num == 1) {
            choice = "Paper";
        } else {
            choice = "Scissors";
        }
    }

    lastChoice = choice;
    return choice;
}

function playRound(playerChoice) {

    if (gameOver == true) {
        return;
    }

    Count += 1;

    computerChoice = getComputerChoice();

    document.getElementById("player-choice").textContent =
        "Your Choice: " + playerChoice;

    document.getElementById("computer-choice").textContent =
        "Computer's Choice: " + computerChoice;

    result = "";


    if (playerChoice == computerChoice) {
        result = "It's a draw!";
    }
    else if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            result = "You win! Rock beats scissors.";
            playerScore = playerScore + 1;
        } else {
            result = "You lose! Paper beats rock.";
            computerScore = computerScore + 1;
        }
    }
    else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            result = "You win! Paper beats rock.";
            playerScore = playerScore + 1;
        } else {
            result = "You lose! Scissors beat paper.";
            computerScore = computerScore + 1;
        }
    }
    else if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            result = "You win! Scissors beat paper.";
            playerScore = playerScore + 1;
        } else {
            result = "You lose! Rock beats scissors.";
           computerScore = computerScore + 1;
        }
    }

    document.getElementById("result").textContent = "Result: " + result;
    document.getElementById("player-score").textContent = "Your Score: " + playerScore;
    document.getElementById("computer-score").textContent = "Computer Score: " + computerScore;

    if (result.indexOf("You win!") != -1) {
        document.getElementById("result").textContent =
            "Result: " + result + " (GAME OVER — you won!)";
        gameOver = true;
        return;
    }

    if (roundCount == maxRounds) {
        document.getElementById("result").textContent =
            "Result: " + result + " (GAME OVER — 3 rounds played)";
        gameOver = true;
    }
}
