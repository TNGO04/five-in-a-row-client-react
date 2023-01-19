import {USER_API_URL} from "../constants";

export const signUp = (username, password) =>
    fetch(`${USER_API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: {
                'content-type': 'application/json'}
        }).then(response => {
                if (response.status === 403) {return response}
                else {return response.json()}})

export const logIn = (username, password) =>
        fetch(`${USER_API_URL}/login`, {
                method: 'POST',
                body: JSON.stringify({username: username, password: password}),
                headers: {
                        'content-type': 'application/json'}
        }).then(response => {
                if (response.status === 404) {return response}
                else {return response.json()}})


export default {signUp, logIn}

