import React from "react";

export const GameCell = ({row, col}) => {
    return (
        <div id={`${row}_${col}`} className="d-flex flex-fill bd-highlight flex-column m-0
                                board-cell">
            <div className="symbol align-center"></div>
        </div>
    )
}

export default GameCell;