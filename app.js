import checkResult from './checkResult.js';
import getRandomThrow from './get-random-throw.js';

// add dom
let playButton = document.getElementById('button'); 
let numOfWins = document.getElementById('numOfWins');
let numOfLosses = document.getElementById('numOfLosses');
let numOfDraws = document.getElementById('numOfDraws');
let yourScore = document.getElementById('yourScore');
let computerScore = document.getElementById('computerScore');
let outcomeDisplay = document.getElementById('outcomeDisplay');
let scoreDisplay = document.getElementById('scoreDisplay');

// set state
let wins = 0;
let losses = 0;
let draws = 0;


// set event
playButton.addEventListener('click', () => {
    const playerInput = document.querySelector('input:checked');
    const playerChoice = playerInput.value;
    const computerChoice = getRandomThrow();
    const outcome = checkResult(playerChoice, computerChoice);
    console.log('player', playerChoice);
    console.log('comp', computerChoice);
    console.log('result', outcome);

    if (outcome === 'win') {
        wins++;
        numOfWins.textContent = wins;
        outcomeDisplay.classList.remove('hidden');
        scoreDisplay.classList.remove('hidden');
        yourScore.textContent = 'Congradulations! You won!';
        computerScore.textContent = 'The computer lost';

    } else if (outcome === 'lose') {
        losses++;
        numOfLosses.textContent = losses;
        outcomeDisplay.classList.remove('hidden');
        scoreDisplay.classList.remove('hidden');
        yourScore.textContent = 'So sorry, you lost :(';
        computerScore.textContent = 'The computer won';

 
    } else {
        draws++;
        numOfDraws.textContent = draws;
        outcomeDisplay.classList.remove('hidden');
        scoreDisplay.classList.remove('hidden');
        yourScore.textContent = 'It was a draw!';

    }
});