console.log('Dice game');
/**
 * SETTINGS
 */
const gameRounds = 5;


/**
 * IMPLEMENTATION
 */
let playersNr = prompt('Input the number of players: ');
playersNr = Number(playersNr);

let playersName = [];
let playersScore = [];
for (let i = 0; i < playersNr; i++) {
    playersName[i] = prompt(`Input name for player ${i + 1}`);
    playersScore[i] = 0;
}

for(roundNr = 1; roundNr <= gameRounds; roundNr++){
    // new round
    console.log('');
    console.log(`=== ROUND ${roundNr} STARTS! ===`);
    for (let i = 0; i < playersNr; i++) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        playersScore[i] += diceRoll;    // playersScore[i] = playersScore[i] + diceRoll;
        console.log(`${playersName[i]} rolls: ${diceRoll} and now has ${playersScore[i]} points`);
    }
}

console.log('');
console.log('=== FINAL SCORE ===');
console.log(playersName);
console.log(playersScore);

for (let i = 0; i < playersNr; i++) {
    alert(`Final score for ${playersName[i]} is ${playersScore[i]}`)
}