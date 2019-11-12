import { getRandomInt } from './utility/utility.js';

let col = document.getElementsByTagName('td');
console.log(col);

function generateGame(height, length) {
    const tbody = document.createElement('tbody');
    for (let i = 9; i >= height; i--) {
        const tr = document.createElement('tr');
        for (let j = 9; j >= length; j--) {
            const td = document.createElement('td');
            let cell = Number(String(i) + String(j)) + 1;
            td.innerHTML = cell;
            td.setAttribute('id', `col${cell}`)
            if (i % 2 == 0) {
                tr.prepend(td);
            } else {
                tr.append(td);
            }
        }
        tbody.append(tr);
    }
    gameMatrix.append(tbody);

    return gameMatrix;
}
main.appendChild(generateGame(0, 0));
gameMatrix.style.height = gameBoard.clientHeight + 'px';

window.onresize = function () {
    gameMatrix.style.height = gameBoard.clientHeight + 'px';
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
const setPlayerPosition = function (player, pos) {
    player.style.bottom = pos.getBoundingClientRect().bottom + 'px';
    player.style.top = pos.getBoundingClientRect().top + 'px';
    player.style.left = pos.getBoundingClientRect().left + 'px';
    player.style.right = pos.getBoundingClientRect().right + 'px';
}

console.log(col1.getBoundingClientRect())
p1.style.bottom = col1.getBoundingClientRect().bottom + 'px';
p1.style.top = col1.getBoundingClientRect().top + 'px';
p2.style.bottom = col1.getBoundingClientRect().bottom + 'px';
p2.style.top = col1.getBoundingClientRect().top + 'px';
const game = new SnakesLadders();
dice.addEventListener('click', function () {
    console.log(game)
    game.play(getRandomInt(1, 6), getRandomInt(1, 6));
    const p1Pos = document.getElementById(`col${game.playersPos[0]}`);
    const p2Pos = document.getElementById(`col${game.playersPos[1]}`);
    if (game.currentTurn == 0) {
        setPlayerPosition(p1, p1Pos);
    } else {
        setPlayerPosition(p2, p2Pos);
    }
})
console.dir(dice)
