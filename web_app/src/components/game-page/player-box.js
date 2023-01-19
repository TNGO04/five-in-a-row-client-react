import React from "react";

const PlayerBox = ({username, nMoves, isFirst}) => {
    return (
        <div className={`card 
        ${((isFirst && nMoves % 2 === 0) 
          || (!isFirst && nMoves % 2 === 1))  ? 'custom-shadow' : ''}`}>
            {username !== "Computer" && <i className="fa-solid icon-large fa-user-group"/>}
            {username === "Computer" && <i className="fa-solid icon-large fa-robot"/>}

            {username}
        </div>
    )
}

export default PlayerBox;