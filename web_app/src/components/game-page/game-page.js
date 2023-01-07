import React from "react";
import {GameBoard} from "./game-board";

export const GamePage = () => {
    return (
        <div className="game-page row align-content-center">
            <div className="col-3 d-flex flex-column gap-4 d-none d-sm-flex
                    justify-content-center">
                <div className="card">
                    <i className="fa-solid icon-large fa-user-group"></i>
                    Player 1
                </div>

                <div className="card">
                    <i className="fa-solid icon-large fa-user-group"></i>
                    Player 2
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