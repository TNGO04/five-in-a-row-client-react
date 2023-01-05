import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const NavBar = ({
                           isLoggedIn,
                           props
                       }) => {
    const currentPath = useLocation().pathname;
    return (
        <>
            <Link to="/"><h3 className="masthead-brand">Caro</h3></Link>
            <nav className="col nav nav-masthead justify-content-center">
                <div className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
                    <a href="/">Home</a>
                </div>

                <div className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}>
                    <a href="/login">Login</a>
                </div>

                <div className={`nav-link ${currentPath === '/signup' ? 'active' : ''}`}>
                    <a href="/signup">Sign Up</a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;