const API_URL = "http://localhost:8091/game"

export const createGame = (user) => {
    return fetch(`${API_URL}/start`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(game => game.json());
}

export const connectToGame = (user, gameID) => {
    return fetch(`${API_URL}/connect`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({user: user, gameID: gameID})
    }).then(game => game.json());
}

export const gamePlay = (gameplay) => {
    return fetch(`${API_URL}/gameplay`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(gameplay)
        }).then(game => game.response());
}

export default {createGame, connectToGame, gamePlay};