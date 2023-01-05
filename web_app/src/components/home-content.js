import React from 'react';
import {Link} from "react-router-dom";

export const HomeContent = () => {
    return (
        <>
            <div className="mb-4 lead">Sign Up or Log In to Get Started</div>
            <div className="row">

                <div className="col d-flex flex-column align-items-center"
                     style={{'width': '250px'}}>
                    <label htmlFor="signUpBtn">New User?</label>
                    <Link to="/signup">
                        <button id="signUpBtn" className="btn btn-primary fiar-btn">Sign Up</button>
                    </Link>
                </div>


                <div className="col d-flex flex-column align-items-center"
                     style={{'width': '250px'}}>
                    <label htmlFor="loginBtn">Have An Account?</label>
                    <Link to="/login">
                        <button id="loginBtn" className="btn btn-primary fiar-btn"> Login</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default HomeContent;