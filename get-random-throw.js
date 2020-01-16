export default function getRandomThrow() {
    const randomNumber = Math.round(Math.random() * 3);
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else return 'scissors';
}

// when rock = 1, paper = 2, and scissors = 3