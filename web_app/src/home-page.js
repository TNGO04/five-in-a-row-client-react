import React from 'react';
import NavBar from "./components/nav-bar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import HomeContentUnlogged from "./components/home-content";
import SignUp from "./components/sign-up";
import Login from "./components/login";
import SelectGame from "./components/select-game";
import {GamePage} from "./components/game-page/game-page";

export const HomePage = ({isLoggedIn = true}) => {
    return (
        <BrowserRouter>
            <div className="text-center cover-container d-flex h-100 p-3 mx-auto flex-column overflow-hidden">
                <NavBar isLoggedIn={isLoggedIn}/>
                <main role="main" className="inner cover">
                    <Routes>
                        <Route path="/" element={
                            isLoggedIn ? <SelectGame/> : <HomeContentUnlogged/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/game" element={<GamePage/>}/>
                    </Routes>

                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <a href="">GitHub repository</a>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    )
}

export default HomePage;