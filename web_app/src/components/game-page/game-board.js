import React from "react";
export const GameBoard = () => {

    const range = Array.from(new Array(20), (x, i) => i);
    return (
        <>
        {
            range.map(index =>
                 <div className="d-flex flex-fill bd-highlight flex-row p-0 m-0 gap-0
                                align-items-stretch justify-content-around">
                {
                    range.map(index =>
                              <div className="d-flex flex-fill bd-highlight flex-column m-0
                                board-cell"
                                >
                                  <div className="symbol align-center">{index%2 == 1 ? 'x': 'o'}</div>
                              </div>)
                }

            </div>)
        }</>
    )
}
export default GameBoard;