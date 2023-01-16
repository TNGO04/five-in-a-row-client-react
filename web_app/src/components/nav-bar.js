import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {connect} from "react-redux";

export const NavBar = ({loggedIn, logOut}) => {
    const currentPath = useLocation().pathname;
    return (
        <>
            <header className="masthead">
                <div className="inner">
                    <nav className="col nav nav-masthead justify-content-center">

                        <div className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
                            <Link to="/">Home</Link>
                        </div>
                        {   !loggedIn &&
                            <>
                                <div className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}>
                                    <Link to="/login">Login</Link>
                                </div>
                                <div className={`nav-link ${currentPath === '/signup' ? 'active' : ''}`}>
                                    <Link to="/signup">Sign Up</Link>
                                </div>
                            </>
                        }
                        {
                            loggedIn &&
                            <>
                                <div className={`nav-link`} onClick={logOut}>
                                    <Link to="/">Log Out</Link>
                                </div>
                            </>
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

const stpm = state => ({
    loggedIn: state.sessionReducer.loggedIn
})

const dtpm = dispatch => ({
    logOut: () => dispatch({type: "LOGOUT"})
})
export default connect(stpm, dtpm)(NavBar);