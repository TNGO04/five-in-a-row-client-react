import React from 'react';
import {Link} from "react-router-dom";

export const HomeContentUnlogged = () => {
    return (
        <>
            <div className="mb-5 lead">Sign Up or Log In to Get Started</div>
            <div className="row">

                <div className="col d-flex flex-column align-items-center"
                     style={{'width': '250px'}}>
                    <label htmlFor="signUpBtn"><b> New User?</b></label>
                    <Link to="/signup">
                        <button id="signUpBtn" className="btn btn-custom fiar-btn">Sign Up</button>
                    </Link>
                </div>


                <div className="col d-flex flex-column align-items-center"
                     style={{'width': '250px'}}>
                    <label htmlFor="loginBtn"><b>Have An Account?</b></label>
                    <Link to="/login">
                        <button id="loginBtn" className="btn btn-custom fiar-btn"> Login</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default HomeContentUnlogged;