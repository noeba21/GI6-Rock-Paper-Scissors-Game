//This keeps track of the record for the user
let wins = 0;
let losses = 0;
let ties = 0;



// Function to handle the game logic
function playGame() {
    let userInput = document.getElementById('userInput').value.toLowerCase().trim();
    if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        alert("Please enter rock, paper, or scissors.");
        return;
    }

    //Creates an array of strings representing the possible choices that the computer can make
    let choices = ['rock', 'paper', 'scissors'];

    //Randomly selects one of the choices provided for the computer by using a random index from the "choices" array
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computerChoice').textContent = "Computer's Choice: " + computerChoice;

    //Initializes a variable to store the result of the game
    let result = '';

    //Compares the user choice with the computer's choice to determine who wins, or loses or if it's a tie
    if (userInput === computerChoice) {
        result = "It's a tie!";
        ties++;
    } else if (
        (userInput === 'rock' && computerChoice === 'scissors') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        wins++;
    } else {
        result = "Computer wins!";
        losses++;
    }

    //Displays the result of the game
    document.getElementById('result').textContent = "Result: " + result;
    updateScores();
    document.getElementById('userInput').value = ''; // Clear input after play
}

// Event listener for the play button
document.getElementById('playButton').addEventListener('click', playGame);

// Event listener for pressing Enter key within the input field
document.getElementById('userInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submit behavior
        playGame();
    }
});

// Reset game scores and messages
document.getElementById('resetButton').addEventListener('click', function () {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScores();
    document.getElementById('computerChoice').textContent = "Computer's Choice: ";
    document.getElementById('result').textContent = "Result: ";
});

// Function to update the scoreboard
function updateScores() {
    document.getElementById('scores').textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}
