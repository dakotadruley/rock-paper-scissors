// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResult from '../checkResult.js';
import getRandomThrow from '../get-random-throw.js';

const test = QUnit.test;

test('if the player shoots rock and the computer shoots paper'), assert => {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
};
