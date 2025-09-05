const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userCardsNL = document.querySelectorAll('.usercards>div');
const userCards = Array.from(userCardsNL);

let compChances = document.querySelector(".complife>p");
let userChances = document.querySelector(".userlife>p");

let userDisplay = document.querySelector(".userchoice");
let compDisplay = document.querySelector(".compchoice");

let compChoice = '';
let userChoice = '';

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let i = Math.random();
    if (i < 0.33) {
        compChoice = 'rock';
    } else if (i < 0.66) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    return compChoice;
}

function getUserChoice() {
    userCards.forEach(card => {
        card.addEventListener("click", () => {
            userDisplay.innerHTML = '';
            compDisplay.innerHTML = '';
            
            userChoice = card.id;
            let userClone = card.cloneNode(true);
            userClone.className = 'usermove'; 
            userDisplay.appendChild(userClone);
            
            getCompChoice();
            let compCard = document.createElement("div");
            compCard.className = 'compmove'; 
            compCard.id = compChoice;
            let img = document.createElement("img");
            img.src = `./images/${compChoice}.svg`;
            compCard.appendChild(img);
            compDisplay.appendChild(compCard);
            
            playRound();
        });
    });
}

function playRound() {
    if (userChoice === compChoice) {
        //alert("It's a tie!");
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        //alert("You win this round!");
        compChances.textContent = parseInt(compChances.textContent) - 1;
    } else {
        //alert("Computer wins this round!");
        userChances.textContent = parseInt(userChances.textContent) - 1;
    }
    checkGameOver();
}


function resetGame() {
    compChances.textContent = '3';
    userChances.textContent = '3';
    userDisplay.innerHTML = '';
    compDisplay.innerHTML = '';
}

function checkGameOver() {
    if (parseInt(compChances.textContent) === 0) {
        alert("Congratulations! You win the game!");
        resetGame();
    } else if (parseInt(userChances.textContent) === 0) {
        alert("Sorry, you lose the game!");
        resetGame();
    }
}

resetGame();
getUserChoice();