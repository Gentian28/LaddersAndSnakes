import { getRandomInt } from './utility/utility.js';

class SnakesLadders {
    ladders = [[2, 38], [7, 14], [8, 31], [15, 26], [21, 41], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94]];
    snakes = [[16, 6], [46, 25], [49, 11], [62, 19], [64, 60], [74, 53], [89, 68], [92, 88], [95, 75], [99, 80]];
    playersPosition = [0, 0];
    player = 'p1' || 'p2';

    rollDice(dice1, dice2) {
        this.dicesResult = dice1 + dice2;
        this.currentPlayer = this.player;
        this.playersPosition[this.player] = this.playersPosition[this.player] + this.dicesResult;
        // if (this.currentPlayer == 0) {
        //     this.player = 1;
        // }
        // if (this.currentPlayer == 1) {
        //     this.player = 0;
        // }
        console.log(this.currentPlayer)
    }
}

const game = new SnakesLadders();
game.rollDice(1, 2)
game.rollDice(3, 2)
game.rollDice(3, 2)
game.rollDice(3, 2)
game.rollDice(3, 2)