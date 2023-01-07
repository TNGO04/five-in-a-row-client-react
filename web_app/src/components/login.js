import React from 'react'

export const Login = () => {
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


            <button className="mt-5 btn btn-custom fiar-btn">Login</button>
        </div>
    )
}

export default Login;