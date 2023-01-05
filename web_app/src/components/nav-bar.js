import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const NavBar = ({
                           isLoggedIn
                       }) => {
    const currentPath = useLocation().pathname;
    return (
        <>
            <Link to="/"><h3 className="masthead-brand">Caro</h3></Link>
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
        </>
    )
}

export default NavBar;