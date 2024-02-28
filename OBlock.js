class OBlock {

    boardSizeX;
    boardSizeY;

    width = 2;
    height = 2;

    positionX;
    positionY = -2;

    class = 'o-block';

    shape = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ];


    constructor ( boardSizeX, boardSizeY ) {
        this.boardSizeX = boardSizeX;
        this.boardSizeY = boardSizeY;


        this.positionX = Math.floor(this.boardSizeX / 2) - 1;
    }

    isOverlapingCell ( id ) {
        let res = false;

        this.shape.forEach( el => {
            if ( id == (el[0] + this.positionY) + '_' + (el[1] + this.positionX) ) {
                res = true;
            }
        });

        return res;
    }

    moveDown () {
        this.positionY++;
    }

    moveLeft () {
        if (this.positionX > 0) {
        this.positionX--;
        }
    }

    moveRight () {
        if (this.positionX < (this.boardSizeX - this.width) ) {
        this.positionX++;
        }
    }

}

export { OBlock }