import React from "react";
import {GameBoard} from "./game-board";
import {connect} from "react-redux";

const GamePage = ({game}) => {
    const playerX = game.playerX;
    const playerO = game.playerO;

    return (
        <div className="game-page row align-content-center">
            <div className="mb-3">Game Id: {game._id}</div>
            <div className="col-3 d-flex flex-column gap-4 d-none d-sm-flex
                    justify-content-center">



                <div className={`card`}>
                    <i className="fa-solid icon-large fa-user-group"></i>
                    {playerX.username}
                </div>

                <div className="card">
                    <div className={`${playerO === null ? 'd-none' : ''}`}>
                        <i className="fa-solid icon-large fa-user-group"></i>
                    </div>
                    {
                        (playerO === null) && <>Waiting for player...</>
                    }
                    {
                        (playerO !== null) && <>{playerO.username}</>
                    }
                </div>
            </div>
            <div className="col-9">
                <div className="game-board card">
                    <GameBoard/>
                </div>
            </div>

        </div>
    )
}

const stpm = state => ({
  game: state.sessionReducer.game
})

const dtpm = dispatch => ({
})
export default connect(stpm, dtpm)(GamePage);