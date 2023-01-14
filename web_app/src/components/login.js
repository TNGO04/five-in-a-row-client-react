import React, {useRef, useState} from 'react'
import Logo from "./logo";
import userService from "../services/user-service";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

export const Login = ({logIn}) => {
    const navigate = useNavigate();
    const username = useRef(null);
    const password = useRef(null);
    const [isInvalid, setInvalid] = useState(false);

    const submit = () =>    {
        userService.logIn(username.current.value, password.current.value).then(response => {
            if (response.status === 404) {
                setInvalid(true);
            }
            else {
                setInvalid(false);
                logIn(response);
                navigate("/");}
    })}

    return (
        <>
            <Logo/>
            {
                isInvalid &&
                <div className="mb-4">
                    Credentials not found
                </div>
            }
            <div className="px-5">
                <div className="d-flex flex-row justify-content-end gap-4 align-items-center mb-3">
                    <label htmlFor="usernameFld">Username</label>
                    <input ref={username} id="usernameFld" type='text' className="form-control"
                            />
                </div>

                <div className="d-flex flex-row justify-content-end gap-4 align-items-center mb-1">
                    <label htmlFor="passwordFld">Password </label>
                    <input ref={password} id="passwordFld" type='password' className="form-control"
                           />
                </div>


                <button onClick={submit} className="mt-5 btn btn-custom">Login</button>
            </div>
        </>
    )
}

const stpm = (state) => ({})

const dtpm = (dispatch) => ({
    logIn: (user) => dispatch({type: "LOGIN", user: user})
})
export default connect(stpm, dtpm)(Login);