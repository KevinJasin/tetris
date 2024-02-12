const GameBoard = {
    gameBoardTable: document .getElementById("gameboard"),
    boardSizeX: 12,
    boardSizeY: 18,
    draw() {
        this.gameBoardTable.innerHTML = "";

        for (let y = 0; y < this.boardSizeY; y++) {
            const boardRowTr = document.createElement("tr");
            for (let x = 0; x < this.boardSizeX; x++) {
                const boardCellTd = document.createElement("td");
                const id = y + "_" + x;
                boardCellTd.setAttribute("id", id);

                boardRowTr.append(boardCellTd);
            }
            this.gameBoardTable.append(boardRowTr);
        }

    }
}

export {GameBoard}
