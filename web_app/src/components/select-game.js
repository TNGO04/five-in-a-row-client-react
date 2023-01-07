import React from "react";

const SelectGame = () => {
    return (
        <div className="d-flex flex-row gap-5">

            <div className="card" style={{'width': '18rem'}}>
                <i className="fa-solid icon-large fa-user-group"></i>
                <button className="btn btn-custom">New PvP Game</button>
                <button className="btn btn-custom">Join Game</button>
                <input type="text" className="form-control form-control-sm mt-1"
                       style={{'opacity':'0.6','width':'150px', 'border-radius':'10px', 'text-align': 'center'}}
                    placeholder="Game ID"/>
            </div>

            <div className="card" style={{'width': '18rem'}}>
                <i className="fa-solid icon-large fa-robot"></i>
                <button className="btn btn-custom"> New AI Game</button>
            </div>

        </div>
    )
}

export default SelectGame;