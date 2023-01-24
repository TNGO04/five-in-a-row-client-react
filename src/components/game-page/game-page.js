import React from "react";
import {GameBoard} from "./game-board";
import {connect} from "react-redux";
import SockJsClient from "react-stomp";
import gameService from "../../services/game-service";
import PlayerBox from "./player-box";
import {SOCKET_URL} from "../../constants";

const GamePage = ({game, updateGame}) => {
    const playerX = game.playerX;
    const playerO = game.playerO;

    const onConnected = () => {
        console.log("Connected to WebSocket!");
        if (playerX.username === "Computer") {
            makeAIMove();
        }
    }
    const onMessageReceived = (msg) => {
        updateGame(msg);

    }

    const makeAIMove = () => {
        gameService.gamePlayComputer(game._id).then(
            (response) => {
            if (response.status !== 200) {response.text().then(message => alert(message))}});
    }

    return (
        <div className="game-page row">
            <SockJsClient
                url={SOCKET_URL}
                topics={[`/topic/game-progress/${game._id}`]}
                onConnect={() => onConnected()}
                onDisconnect={() => {console.log("Disconnected!")}}
                onMessage={msg => {
                    onMessageReceived(msg);}
                }
                debug={false}
            />


            <div className="col-3 d-flex flex-column gap-4 d-none d-sm-flex
                    justify-content-center align-items-center">
                <div className="small text-center">
                    <div>Game Id:</div>
                    <div className="mb-1">{game._id}</div>
                </div>

                <PlayerBox nMoves={game.board.nmoves} username={playerX.username} isFirst={true}/>
                {playerO === null && <PlayerBox nMoves={game.board.nmoves} username="Waiting..." isFirst={false}/>}
                {playerO !== null && <PlayerBox nMoves={game.board.nmoves} username={playerO.username} isFirst={false}/>}


            </div>
            <div className="col-9 d-flex flex-column align-items-center">
                <div className="mb-2 text-center ">
                    {
                        game.status === "NEW" && <>Waiting for another player...</>
                    }
                    {
                        (game.status === "IN_PROGRESS" && game.board.nmoves % 2 === 0) && <> {playerX.username}'s turn to make a move</>
                    }
                    {
                        (game.status === "IN_PROGRESS" && game.board.nmoves % 2 === 1) && <> {playerO.username}'s turn to make a move</>
                    }
                    {
                        game.status === "FINISHED" && game.winner === null && <>It is a tie!</>
                    }
                    {
                        game.status === "FINISHED" && game.winner !== null && <> {game.winner.username} won!</>
                    }
                </div>
                <div className="game-board card">
                    <GameBoard makeAIMove={makeAIMove}/>
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