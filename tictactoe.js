// A function to return the current status of a game of tic tac toe
/**
 * Returns the  current status of a game of tic tac toe
 *
 * @param {Array} board A tic tac toe board 
 * @return {String} The current status of the game.
 */
exports.gameStatus = function(board) {
    //setting the default status
    let status = 'Game still in progress'

    //checks that 
    if (!(board instanceof Array)) {
        status = 'Invalid input'
        return status
    }

    // strict size for tic tac toe but easily scalable
    boardSize = 3
    if (board.flat().length != (boardSize * boardSize) && Math.sqrt(board.flat().length) % 1 != 0) {
        status = 'Not a square number of elements to make a board'
        return status
    }


    // ensures that there is only valid characters 'X' 'O' and blank 
    if (board.flat().find((c) => !['X', 'O', ''].includes(c))) {
        status = 'Invalid characters'
        return status
    }

    // check for a draw
    if (board.flat().length == board.flat().filter((x) => ['X', 'O'].includes(x)).length) {
        status = 'The game is a draw'
    }


    // checks columns
    for (columnIndex in board[0]) {
        let columncount = 0
        for (rowIndex in board) {
            // checks that the row is of the expected length
            if (board[rowIndex].length != board.length) {
                return status = 'Not a square board'
            }
            // checks rows
            let rowcount = 0
            board[rowIndex].forEach((tile) => {
                    if (tile == board[rowIndex][0]) {
                        rowcount++
                    } else {
                        return
                    }
                })
                // if a row is made, set status
            if (rowcount == board[rowIndex].length) {
                status = `${board[rowIndex][0]} - won`;
            }
            // increase number of the same character we have seen in the column
            if (board[rowIndex][columnIndex] == board[0][columnIndex]) {
                columncount++
            } else {
                // breaks loop if the sequence stops 
                break
            }
        }
        //if a column is made, set status
        if (columncount == board.length) {
            status = `${board[0][columnIndex]} - won`;
            break
        }
    }


    // checks diagonals
    let left_diag_count = 0
    let right_diag_count = 0
    for (columnIndex in board[0]) {
        if (board[columnIndex][columnIndex] == board[0][0]) {
            left_diag_count++
        }
        if (board[columnIndex][board[columnIndex].length - 1 - columnIndex] == board[0][board[0].length - 1]) {
            right_diag_count++
        }

        if (left_diag_count == board.length) {
            status = `${board[0][0]} - won`;
            break
        } else if (right_diag_count == board.length) {
            status = `${ board[0][board[0].length - 1]} - won`;
            break
        }
    }
    return status
}