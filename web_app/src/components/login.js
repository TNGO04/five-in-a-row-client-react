import React from 'react'
import Logo from "./logo";

export const Login = () => {
    return (
        <>
            <Logo/>
            <div className="px-5">
                <div className="d-flex flex-row justify-content-end gap-4 align-items-center mb-3">
                    <label htmlFor="usernameFld">Username</label>
                    <input id="usernameFld" type='text' className="form-control"
                            />
                </div>

                <div className="d-flex flex-row justify-content-end gap-4 align-items-center mb-1">
                    <label htmlFor="passwordFld">Password </label>
                    <input id="passwordFld" type='password' className="form-control"
                           />
                </div>


                <button className="mt-5 btn btn-custom">Login</button>
            </div>
        </>
    )
}

export default Login;