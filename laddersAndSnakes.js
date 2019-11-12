console.log('test');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SnakesLadders {
    constructor() {
        this.ladders = [[2, 38], [7, 14], [8, 31], [15, 26], [21, 41], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94]];
        this.snakes = [[16, 6], [46, 25], [49, 11], [62, 19], [64, 60], [74, 53], [89, 68], [92, 88], [95, 75], [99, 80]];
        this.playersPos = [0, 0];
        this.turn = 'p1' || 'p2';
    }
    play(dice1, dice2) {
        let currentPlayer = this.turn;
        if (currentPlayer == 'p1') {
            this.currentTurn = 0;
        }
        if (currentPlayer == 'p2') {
            this.currentTurn = 1;
        }
        let result = dice1 + dice2;
        this.playersPos[this.currentTurn] = this.playersPos[this.currentTurn] + result;
        this.ladders.forEach(item => {
            if (item[0] == this.playersPos[this.currentTurn]) {
                this.playersPos[this.currentTurn] = item[1];
            }
        })
        this.snakes.forEach(item => {
            if (item[0] == this.playersPos[this.currentTurn]) {
                this.playersPos[this.currentTurn] = item[1];
            }
        })
        if (this.playersPos[this.currentTurn] > 100) {
            this.playersPos[this.currentTurn] = 100 - (this.playersPos[this.currentTurn] - 100)
        }
        if (this.playersPos[this.currentTurn] === 100) {
            alert(`Player ${this.turn} wins`)
        }
        if (dice1 === dice2) {
            if (currentPlayer === 'p1') {
                this.turn = 'p1';
            }
            if (currentPlayer === 'p2') {
                this.turn = 'p2';
            }
        } else {
            if (currentPlayer === 'p1') {
                this.turn = 'p2';
            }
            if (currentPlayer === 'p2') {
                this.turn = 'p1';
            }
        }

        console.log(this.playersPos)
        return this.playersPos[this.currentTurn];
    }
}
// function SnakesLadders() {
//     this.ladders = [[2, 38], [7, 14], [8, 31], [15, 26], [21, 41], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94]];
//     this.snakes = [[16, 6], [46, 25], [49, 11], [62, 19], [64, 60], [74, 53], [89, 68], [92, 88], [95, 75], [99, 80]];
//     this.playersPos = [0, 0];
//     this.turn = 'p1' || 'p2';
// };

// SnakesLadders.prototype.play = function (dice1, dice2) {
//     let currentPlayer = this.turn;
//     console.log(dice1, dice2);
//     console.log(currentPlayer);
//     if (currentPlayer == 'p1') {
//         currentTurn = 0;
//     }
//     if (currentPlayer == 'p2') {
//         currentTurn = 1;
//     }
//     let result = dice1 + dice2;
//     this.playersPos[currentTurn] = this.playersPos[currentTurn] + result;
//     this.ladders.forEach(item => {
//         if (item[0] == this.playersPos[currentTurn]) {
//             this.playersPos[currentTurn] = item[1];
//         }
//     })
//     this.snakes.forEach(item => {
//         if (item[0] == this.playersPos[currentTurn]) {
//             this.playersPos[currentTurn] = item[1];
//         }
//     })
//     if (this.playersPos[currentTurn] > 100) {
//         this.playersPos[currentTurn] = 100 - (this.playersPos[currentTurn] - 100)
//     }
//     if (this.playersPos[currentTurn] === 100) {
//         alert(`Player ${this.turn} wins`)
//     }
//     if (dice1 === dice2) {
//         if (currentPlayer === 'p1') {
//             this.turn = 'p1';
//         }
//         if (currentPlayer === 'p2') {
//             this.turn = 'p2';
//         }
//     } else {
//         if (currentPlayer === 'p1') {
//             this.turn = 'p2';
//         }
//         if (currentPlayer === 'p2') {
//             this.turn = 'p1';
//         }
//     }

//     console.log(this.playersPos)
//     return this.playersPos[currentTurn];
// }

let game = new SnakesLadders();
console.log(game.play(getRandomInt(1, 6), getRandomInt(1, 6)))