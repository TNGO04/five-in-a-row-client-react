import React from 'react';
import NavBar from "./components/nav-bar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import HomeContentUnlogged from "./components/home-content";
import SignUp from "./components/sign-up";
import Login from "./components/login";
import SelectGame from "./components/select-game";

export const HomePage = ({isLoggedIn = true}) => {
    return (
        <BrowserRouter>

            <div className="text-center cover-container d-flex h-100 p-3 mx-auto flex-column"
                 style={{'width': '700px'}}>

                <header className="masthead mb-5">
                    <div className="inner">
                        <NavBar isLoggedIn={isLoggedIn}/>

                    </div>
                </header>

                <main role="main" className="inner cover">
                    <h1 className="cover-heading pb-2 mb-5">Caro</h1>

                    <Routes>
                        <Route path="/" element={
                            isLoggedIn ? <SelectGame/> : <HomeContentUnlogged/>}/>

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