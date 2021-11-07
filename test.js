'use strict'

class Game {
    constructor(columns, rows) {
        this.columns = columns;
	this.rows = rows;
    }
    movePieceDown() {
	console.log('движение вниз')
    }
}
class Controller {
    constructor(game) {
        this.game = game;
        this.speed = 800;
        this.timerId = null;
    }
    startTimer() {
        let tick;
        this.timerId = setTimeout(tick = () => {
            this.game.movePieceDown();
            this.timerId = setInterval(tick, this.speed);
        }, this.speed);
    }
}
