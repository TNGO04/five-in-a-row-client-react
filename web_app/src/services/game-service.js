import {GAME_API_URL} from "../constants";

export const createGame = (user) => {
    return fetch(`${GAME_API_URL}/start`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(game => game.json());
}

export const connectToGame = (user, gameId) => {
    return fetch(`${GAME_API_URL}/connect`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({user: user, gameId: gameId})
    }).then(game => game.json());
}
export const connectToAIGame = (user) => {
    return fetch(`${GAME_API_URL}/connect/computer`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(game => game.json());

}

export const gamePlay = (gameplay) => {
    return fetch(`${GAME_API_URL}/gameplay`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(gameplay)
        }).then(response => {return response});
}

export const gamePlayComputer = (gameId) => {
    return fetch(`${GAME_API_URL}/gameplay/computer?id=${gameId}`)
        .then(response => {return response});
}

export default {createGame, connectToGame, gamePlay, connectToAIGame, gamePlayComputer};