import React from "react";
import Logo from "./logo";
import {useNavigate} from "react-router-dom";

const SelectGame = () => {
    const navigate = useNavigate();

    const navToPvPGame = () => {
        navigate("/game");
    }

    return (
        <>
            <Logo/>
            <div className="select-game d-flex flex-row gap-5 flex-wrap justify-content-center">

                <div className="card">
                    <div className="d-none d-sm-flex mb-1"><i className="fa-solid icon-large fa-user-group"/></div>
                    <button onClick={navToPvPGame} className="btn btn-custom">New PvP Game</button>
                    <button className="btn btn-custom">Join Game</button>
                    <input id="gameIdFld" type="text" className="form-control form-control-sm"
                        placeholder="Game ID"/>
                </div>

                <div className="card">
                    <div className="d-none d-sm-flex mb-1"><i className="fa-solid icon-large fa-robot"/></div>
                    <button className="btn btn-custom"> New AI Game</button>
                </div>

            </div>
        </>
    )
}

export default SelectGame;