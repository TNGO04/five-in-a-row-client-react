const initialState = {
    user: [],
    loggedIn: false,
    game: []
}

export const sessionReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return initialState;
        case "LOGIN":
            return {
                ...state,
                user: action.user,
                loggedIn: true
            }
        case "CONNECT_TO_GAME":
            return {
                ...state,
                game: action.game
            }

        default:
            return state;
    }
}

export default sessionReducer;