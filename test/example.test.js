// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResult from '../checkResult.js';

const test = QUnit.test;
QUnit.module('rps game');


// test syntax 'if player_score, computer_score, then win/lose/draw'

// test 1
test('If rock, paper then lose', assert => {
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
});

// test 2
test('If rock, scissors then win', assert => {
    
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
          
    const result = checkResult(player, computer);
               
    assert.equal(expected, result);
});
   
// test 3
test('If paper, paper then draw ', assert => {
    
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});

// test 4
test('If paper, scissors then lose', assert => {
    
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'lose';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});

// test 5
test('If paper, rock then win', assert => {
    
    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});

// test 6
test('If scissors, rock then lose', assert => {
    
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'lose';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});

// test 7
test('If scissors, paper then win', assert => {
    
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});

// test 8
test('If rock, rock then draw', assert => {
    
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});

// test 9 
test('If scissors, scissors then draw', assert => {
    
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw';
    
    const result = checkResult(player, computer);
    
    assert.equal(expected, result);
});