import React from "react";
import GameCell from "./game-cell";
import {BOARD_DIMENSION} from "../../constants";

export const GameBoard = ({makeAIMove}) => {
    const range = Array.from(new Array(BOARD_DIMENSION), (x, i) => i);
    return (
        <>
        {
            range.map(row =>
                 <div id={row} className="d-flex flex-fill bd-highlight flex-row p-0 m-0 gap-0
                                align-items-stretch justify-content-around">
                {   
                    range.map(col => <GameCell row={row} col={col} makeAIMove={makeAIMove}/>)
                }
                </div>)
        }</>
    )
}
export default GameBoard;