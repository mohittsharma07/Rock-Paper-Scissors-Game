let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "🤝 It's a Draw! Try Again";
    msg.style.backgroundColor = "#475569";
};

const showWinner = (userWin, userChoice, computerChoice) => {

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText =
        `🎉 You Win! ${userChoice} beats ${computerChoice}`;

        msg.style.backgroundColor = "#16a34a";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;

        msg.innerText =
        `😢 You Lost! ${computerChoice} beats ${userChoice}`;

        msg.style.backgroundColor = "#dc2626";
    }
};

const playGame = (userChoice) => {

    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice){
        drawGame();
    }
    else{

        let userWin = true;

        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

});