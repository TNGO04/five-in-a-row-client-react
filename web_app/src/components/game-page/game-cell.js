import React, {useState} from "react";
import gameService from "../../services/game-service"
import {connect} from "react-redux";

const GameCell = ({row, col, symbol, gameId, game}) => {
    const [moveSymbol, setMoveSymbol] = useState("");

    const makeMove = () => {
        gameService.gamePlay({
            symbol: symbol,
            rowCoordinate: row,
            colCoordinate: col,
            gameId: gameId}).then((response) => {
                     if (response.status !== 200) {response.text().then(message => alert(message))}});
    }

    return (
        <div onClick={makeMove} id={`${row}_${col}`} className="d-flex flex-fill bd-highlight flex-column m-0
                                board-cell">
            <div className="symbol align-center">
                {game.board.board[row][col] == "X" && <>X</>}
                {game.board.board[row][col] == "O" && <>O</>}</div>
        </div>
    )
}

const stpm = (state) => ({
    symbol: state.sessionReducer.symbol,
    game: state.sessionReducer.game,
    gameId: state.sessionReducer.game._id
})

const dtpm = () => ({
})

export default connect(stpm, dtpm)(GameCell);