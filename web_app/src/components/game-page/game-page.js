import React from "react";
import {GameBoard} from "./game-board";

export const GamePage = () => {
    return (
        <div className="row align-content-center">
            <div className="col-3 d-flex flex-column gap-4">
                <div className="card" style={{'width': '10rem'}}>
                    <i className="fa-solid icon-large fa-user-group"></i>
                </div>

                <div className="card" style={{'width': '10rem'}}>
                    <i className="fa-solid icon-large fa-user-group"></i>
                </div>
            </div>
            <div className="col-9">
                <div className="card" style={{'width': '700px', 'height': '700px'}}>
                    <GameBoard/>
                </div>
            </div>

        </div>
    )
}