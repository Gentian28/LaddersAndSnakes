import { getRandomInt } from './utility/utility.js';

let col = document.getElementsByTagName('td');
const players = document.getElementsByClassName('player');
// console.log(players)

function generateGame(height, length) {
    const tbody = document.createElement('tbody');
    for (let i = 9; i >= height; i--) {
        const tr = document.createElement('tr');
        for (let j = 9; j >= length; j--) {
            const td = document.createElement('td');
            let cell = Number(String(i) + String(j)) + 1;
            // td.innerHTML = cell;
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
board.appendChild(generateGame(0, 0));
gameMatrix.style.height = gameBoard.clientHeight + 'px';
p1.style.height = col1.clientHeight + 'px';
p2.style.height = col1.clientHeight + 'px';
p1.style.width = col1.clientWidth + 'px';
p2.style.width = col1.clientWidth + 'px';


window.onresize = function () {
    gameMatrix.style.height = gameBoard.clientHeight + 'px';
    p1.style.height = col1.clientHeight + 'px';
    p2.style.height = col1.clientHeight + 'px';
    p1.style.width = col1.clientWidth + 'px';
    p2.style.width = col1.clientWidth + 'px';
}


class SnakesLadders {
    ladders = [[2, 38], [7, 14], [8, 31], [15, 26], [21, 42], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94]];
    snakes = [[16, 6], [46, 25], [49, 11], [62, 19], [64, 60], [74, 53], [89, 68], [92, 88], [95, 75], [99, 80]];
    playersPos = [0, 0];
    previowsPlayersPos;
    turn = 'p1' || 'p2';
    // nextCellHTML = 0;

    play(dice1, dice2) {
        console.dir(resultContainer)
        resultContainer.style.display = 'flex';
        firstDiceResult.innerHTML = dice1;
        secondDiceResult.innerHTML = dice2;
        let currentPlayer = this.turn;
        if (currentPlayer == 'p1') {
            this.currentPlayerId = document.getElementById('p1');
            this.currentTurn = 0;
        }
        if (currentPlayer == 'p2') {
            this.currentPlayerId = document.getElementById('p2');
            this.currentTurn = 1;
        }
        this.previowsPlayersPos = [...this.playersPos];
        let result = dice1 + dice2;

        let finalCell = this.previowsPlayersPos[this.currentTurn] + result;

        this.goToNextCell(this.previowsPlayersPos[this.currentTurn], finalCell, this.currentPlayerId)

        this.playersPos[this.currentTurn] = this.playersPos[this.currentTurn] + result;

        // if (this.playersPos[this.currentTurn] > 100) {
        //     this.playersPos[this.currentTurn] = 100 - (this.playersPos[this.currentTurn] - 100)
        // }
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

        // console.log(finalCell)
        console.log(this.playersPos)
        return this.playersPos[this.currentTurn];
    }
    goToNextCell(currentPosition, finalPosition, player) {
        dice.disabled = true;
        if (currentPosition == finalPosition) {
            dice.disabled = false;
            return 1;
        }
        let nextCell;
        if (currentPosition > finalPosition) {
            nextCell = currentPosition - 1;
        } else {
            nextCell = currentPosition + 1;
        }
        let nextCellHTML = document.getElementById(`col${nextCell}`);

        currentPosition = nextCell;

        player.style.bottom = nextCellHTML.getBoundingClientRect().bottom + 'px';
        player.style.top = nextCellHTML.getBoundingClientRect().top + 'px';
        player.style.left = nextCellHTML.getBoundingClientRect().left + 'px';
        player.style.right = nextCellHTML.getBoundingClientRect().right + 'px';
        if (currentPosition == finalPosition) {
            setTimeout(() => {
                this.ladders.forEach(item => {
                    if (item[0] == finalPosition) {
                        this.playersPos[this.currentTurn] = item[1];
                        nextCellHTML = document.getElementById(`col${this.playersPos[this.currentTurn]}`);
                        player.style.bottom = nextCellHTML.getBoundingClientRect().bottom + 'px';
                        player.style.top = nextCellHTML.getBoundingClientRect().top + 'px';
                        player.style.left = nextCellHTML.getBoundingClientRect().left + 'px';
                        player.style.right = nextCellHTML.getBoundingClientRect().right + 'px';
                    }
                })
                this.snakes.forEach(item => {
                    if (item[0] == finalPosition) {
                        this.playersPos[this.currentTurn] = item[1];
                        nextCellHTML = document.getElementById(`col${this.playersPos[this.currentTurn]}`);
                        player.style.bottom = nextCellHTML.getBoundingClientRect().bottom + 'px';
                        player.style.top = nextCellHTML.getBoundingClientRect().top + 'px';
                        player.style.left = nextCellHTML.getBoundingClientRect().left + 'px';
                        player.style.right = nextCellHTML.getBoundingClientRect().right + 'px';
                    }
                })
            }, 300);
        }

        if (finalPosition > 100) {
            if (currentPosition == 100) {
                finalPosition = 100 - (finalPosition - 100)
                this.playersPos[this.currentTurn] = finalPosition;
            }
        }

        setTimeout(() => {
            this.goToNextCell(currentPosition, finalPosition, player);
        }, 100);
    }
}

p1.style.bottom = col1.getBoundingClientRect().bottom + 'px';
p1.style.top = col1.getBoundingClientRect().top + 'px';
p2.style.bottom = col1.getBoundingClientRect().bottom + 'px';
p2.style.top = col1.getBoundingClientRect().top + 'px';
const game = new SnakesLadders();
dice.addEventListener('click', function () {
    game.play(getRandomInt(1, 6), getRandomInt(1, 6));
})
