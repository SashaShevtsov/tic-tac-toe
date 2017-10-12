class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.matrix = [];
        for(var i=0;i<3;i++){
            this.matrix[i] = [];
            for(var j=0;j<3;j++)
                this.matrix[i][j]=null;
        }
        this.amountOfTurns = 9;
        this.winner = null;
        this.isdraw = false;
        this.isfinished = false;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if( this.matrix[rowIndex][columnIndex]!==null)
            return;
        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
        if(this.currentPlayerSymbol==='x')
            this.currentPlayerSymbol='o';
        else
            this.currentPlayerSymbol = 'x';
        this.amountOfTurns--;

    }

    isFinished() {
        return this.isfinished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {

    }

    isDraw() {
        return this.isdraw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
