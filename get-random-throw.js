export default function getRandomThrow() {
    const randomNumber = Math.round(Math.random() * 3);
    return getNumberFromThrow(randomNumber);
}

export function getNumberFromThrow(computerNumber) {
    if (computerNumber === 1) {
        return 'rock';
    } else if (computerNumber === 2) {
        return 'paper';
    } else return 'scissors';
} 
// when rock = 1, paper = 2, and scissors = 3