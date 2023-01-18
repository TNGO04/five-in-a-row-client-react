import React from "react";
import {GameBoard} from "./game-board";
import {connect} from "react-redux";
import SockJsClient from "react-stomp";

const SOCKET_URL = "http://localhost:8092/gameplay";

const GamePage = ({game, updateGame}) => {
    const playerX = game.playerX;
    const playerO = game.playerO;


    const onConnected = () => {
        console.log("Connected to WebSocket!");
    }
    const onMessageReceived = (msg) => {
        updateGame(msg);

    }




    return (
        <div className="game-page row align-content-center">
            <SockJsClient
                url={SOCKET_URL}
                topics={[`/topic/game-progress/${game._id}`]}
                onConnect={onConnected}
                onDisconnect={() => {console.log("Disconnected!")}}
                onMessage={msg => {
                    console.log(msg);
                    onMessageReceived(msg);}
                }
                debug={false}
            />
            <div className="mb-1">Game Id: {game._id}</div>
            <div className="mb-3">
                {
                    game.status === "NEW" && <>Waiting for another player...</>
                }
                {
                (game.status === "IN_PROGRESS" && game.board.nmoves % 2 === 0) && <> Player {playerX.username} is making a move.</>
                }
                {
                (game.status === "IN_PROGRESS" && game.board.nmoves % 2 === 1) && <> Player {playerO.username} is making a move.</>
                }
                {
                    game.status === "FINISHED" && <>Player {game.winner.username} won!</>
                }
            </div>
            <div className="col-3 d-flex flex-column gap-4 d-none d-sm-flex
                    justify-content-center">



                <div className={`card ${(game.board.nmoves % 2 === 0) ? 'custom-shadow' : ''}`}>
                    <i className="fa-solid icon-large fa-user-group"></i>
                    {playerX.username}
                </div>

                <div className={`card ${(game.board.nmoves % 2 === 1) ? 'custom-shadow' : ''}`}>
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
    updateGame: (updatedGame) =>
        dispatch({type:"UPDATE_GAME", game: updatedGame})
})
export default connect(stpm, dtpm)(GamePage);