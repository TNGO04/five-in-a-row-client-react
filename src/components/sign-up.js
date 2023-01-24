import {useRef, useState} from 'react';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import {useNavigate} from "react-router-dom";
import Logo from "./logo";
import userService from "../services/user-service"
import {connect} from "react-redux";

export const SignUp = ({logIn}) => {
    const navigate = useNavigate();
    const password = useRef(null);
    const username = useRef(null);
    const [isInvalid, setInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const submit = () => {
        userService.signUp(username.current.value, password.current.value).then(response => {
            if (response.status === 403) {
               setInvalid(true);
               response.text().then(message => setErrorMessage(message));
            }
            else {
                setInvalid(false);
                logIn(response);
                confirmAlert({
                     title: 'Successful',
                     message: 'Sign-up successful. Click below to start a game.',
                     buttons: [
                         {
                             label: 'Start A Game',
                             onClick: () => navigate("/")
                         }
                     ],
                     overlayClassName: "overlay-custom-class-name"
                 })
            };
        })}

    return (
        <>
            <Logo/>
            {
                isInvalid &&
                <div className="mb-4">
                    {errorMessage}
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


                <button type="button" className="mt-5 btn btn-custom"
                        onClick={submit}>
                    Sign Up
                </button>

            </div>
        </>
    )
};

const stpm = (state) => ({})

const dtpm = (dispatch) => ({
    logIn: (user) => dispatch({type: "LOGIN", user: user})
})

export default connect(stpm, dtpm)(SignUp);