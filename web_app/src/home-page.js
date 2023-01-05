import React from 'react';
import NavBar from "./components/nav-bar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import HomeContent from "./components/home-content";
import SignUp from "./components/sign-up";
import Login from "./components/login";

export const HomePage = () => {
    return (
        <BrowserRouter>

            <div className="text-center cover-container d-flex h-100 p-3 mx-auto flex-column"
                 style={{'width': '500px'}}>

                <header className="masthead mb-5">
                    <div className="inner">
                        <NavBar isLoggedIn={true}/>
                    </div>
                </header>

                <main role="main" className="inner cover">
                    <h1 className="cover-heading pb-2 mb-5">Caro</h1>

                    <Routes>
                        <Route path="/" element={<HomeContent/>}/>

                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                    </Routes>

                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p><a href="">GitHub repository</a></p>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    )
}

export default HomePage;