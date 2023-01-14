const initialState = {
    user: [],
    gameId: [],
    loggedIn: false
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
        default:
            return state;
    }
}

export default sessionReducer;