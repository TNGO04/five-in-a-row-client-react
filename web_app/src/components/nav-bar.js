import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const NavBar = ({
                           isLoggedIn
                       }) => {
    const currentPath = useLocation().pathname;
    return (
        <>
            <header className="masthead">
                <div className="inner">
                    <nav className="col nav nav-masthead justify-content-center">

                        <div className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
                            <Link to="/">Home</Link>
                        </div>

                        <div className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}>
                            <Link to="/login">Login</Link>
                        </div>

                        <div className={`nav-link ${currentPath === '/signup' ? 'active' : ''}`}>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar;