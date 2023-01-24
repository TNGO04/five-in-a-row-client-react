import {useRef} from "react";
import Logo from "./logo";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import gameService from "../services/game-service"

const SelectGame = ({loggedIn, user, connectToGame, setPlayer}) => {
    const navigate = useNavigate();
    const gameIdRef = useRef("");

    const navToPvPGame = () => {
        gameService.createGame(user).then(
            newGame => {
                connectToGame(newGame);
                setPlayer('X');
                navigate("/game");
            }

        );
    }

    const joinGame = () => {
        gameService.connectToGame(user, gameIdRef.current.value).then(
            newGame => {
                connectToGame(newGame);
                setPlayer('O');
                navigate("/game");
            })
    }

    const navToAIGame = () => {
        gameService.connectToAIGame(user).then(
            newGame => {
                connectToGame(newGame);
                setPlayer('O');
                navigate("/game");
            }
        )
    }

    return (
        <>
            <Logo/>
            <h4 className={"mb-4 d-none d-md-block"}> Hi, {user.username}! </h4>
            <div className="select-game d-flex flex-row gap-5 flex-wrap justify-content-center">
                <div className="card">
                    <div className="d-none d-sm-flex mb-1"><i className="fa-solid icon-large fa-user-group"/></div>
                    <button onClick={navToPvPGame} className="btn btn-custom">Create Game</button>
                    <button onClick={joinGame} className="btn btn-custom">Join Game</button>
                    <input id="gameIdFld" ref={gameIdRef} type="text" className="form-control form-control-sm"
                        placeholder="Game ID to join"/>
                </div>

                <div className="card">
                    <div className="d-none d-sm-flex mb-1"><i className="fa-solid icon-large fa-robot"/></div>
                    <button onClick={navToAIGame} className="btn btn-custom"> New AI Game</button>
                </div>

            </div>
        </>
    )
}

const stpm = state => ({
    loggedIn: state.sessionReducer.loggedIn,
    user: state.sessionReducer.user
})

const dtpm = dispatch => ({
    connectToGame:
        (newGame) => dispatch({type: "CONNECT_TO_GAME",
                                  game: newGame}),
    setPlayer:
        (symbol) => dispatch({type:"SET_PLAYER", symbol: symbol})
})

export default connect(stpm,dtpm)(SelectGame);