import React, {useState} from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import {useNavigate} from "react-router-dom"; // Import css


export const SignUp = () => {
    const navigate = useNavigate();

    const submit = () => {
        confirmAlert({
                         title: 'Successful',                        // Title dialog
                         message: 'Sign-up successful. Click below to start a game.',               // Message dialog
                         buttons: [
                             {
                                 label: 'Start A Game',
                                 onClick: () => navigate("/")
                             }
                         ],
                         overlayClassName: "overlay-custom-class-name"      // Custom overlay class name
                     })
    };

    return (
        <div className="px-5">
            <div className="d-flex flex-row justify-content-end gap-4 align-items-center mb-3">
                <label htmlFor="usernameFld">Username</label>
                <input id="usernameFld" type='text' className="form-control"
                       style={{'width':'250px'}}/>
            </div>

            <div className="d-flex flex-row justify-content-end gap-4 align-items-center mb-1">
                <label htmlFor="passwordFld">Password </label>
                <input id="passwordFld" type='password' className="form-control"
                       style={{'width':'250px'}}/>
            </div>


            <button type="button" className="mt-5 btn-custom fiar-btn"
                    onClick={submit}>
                Sign Up
            </button>

        </div>

    )
};

export default SignUp;