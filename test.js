// test/converter.js

var expect = require("chai").expect;
var tictactoe = require("./tictactoe");


let test_draw = [
    ['X', 'O', 'X'],
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
]

let test_diagonal = [
    ['X', 'O', 'O'],
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
]

let test_horizontal = [
    ['X', 'O', 'X'],
    ['X', 'X', 'X'],
    ['O', 'X', 'O'],
]

let test_vertical = [
    ['X', 'O', 'O'],
    ['X', 'O', 'O'],
    ['O', 'X', 'O'],
]

let test_invalid_array_shape = [
    ['X', 'O', 'O'],
    ['X', 'O', 'O', 'X', 'O', 'O'],
    ['O', 'X', 'O'],
]

let test_invalid_array_shape_square = [
    ['X', 'O', 'O'],
    ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'O', 'O', 'X'],
    ['O', 'X', 'O'],
]

let test_invalid_array_shape_square_2 = [
    ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'O', 'X'],
]

let test_in_progress = [
    ['X', 'O', 'O'],
    ['', 'O', null],
    ['X', 'X', 'O'],
]

test_invalid_characters = [
    ['X', 'G', 'O'],
    ['', 'O', null],
    ['F', 'X', 'O'],
]

let test_invalid_input_null = null
let test_invalid_input_string = 'null'

describe("Tic Tac Toe testing", function() {
    describe("Winning boards", function() {
        it("Horizontal winner", function() {
            expect(tictactoe.gameStatus(test_horizontal)).to.equal("X - won");
        });
        it("Vertical winner", function() {
            expect(tictactoe.gameStatus(test_vertical)).to.equal("O - won");
        });
        it("Diagonal winner", function() {
            expect(tictactoe.gameStatus(test_diagonal)).to.equal("O - won");
        });
        it("Draw", function() {
            expect(tictactoe.gameStatus(test_draw)).to.equal("The game is a draw");
        });
        it("Game still in progress", function() {
            expect(tictactoe.gameStatus(test_in_progress)).to.equal("Game still in progress");
        });
    });

    describe("Invalid boards", function() {
        it("Invalid board size", function() {
            expect(tictactoe.gameStatus(test_invalid_array_shape)).to.equal("Not a square number of elements to make a board");
        });
        it("Invalid input type (null)", function() {
            expect(tictactoe.gameStatus(test_invalid_input_null)).to.equal("Invalid input");
        });
        it("Invalid input type (string)", function() {
            expect(tictactoe.gameStatus(test_invalid_input_string)).to.equal("Invalid input");
        });
        it("Invalid board shape", function() {
            expect(tictactoe.gameStatus(test_invalid_array_shape_square)).to.equal("Not a square board");
        });
        it("Invalid board shape", function() {
            expect(tictactoe.gameStatus(test_invalid_array_shape_square_2)).to.equal("Not a square board");
        });
        it("Invalid characters", function() {
            expect(tictactoe.gameStatus(test_invalid_characters)).to.equal("Invalid characters");
        });
    });
});