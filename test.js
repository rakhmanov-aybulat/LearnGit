'use strict'

export default class Game {
    constructor(columns, rows) {
        this.columns = columns;
	this.rows = rows;
    }
    movePieceDown() {
	console.log('движение вниз')
    }
}
