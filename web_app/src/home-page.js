import React from 'react';
import NavBar from "./components/nav-bar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import HomeContentUnlogged from "./components/home-content";
import SignUp from "./components/sign-up";
import Login from "./components/login";
import SelectGame from "./components/select-game";
import {GamePage} from "./components/game-page/game-page";
import {connect} from "react-redux";



export const HomePage = ({loggedIn}) => {
    return (
        <BrowserRouter>
            <div className="text-center cover-container d-flex h-100 p-3 mx-auto flex-column overflow-hidden">
                <NavBar />
                <main role="main" className="inner cover">
                    <Routes>
                        <Route path="/" element={
                            loggedIn ? <SelectGame/> : <HomeContentUnlogged/>}/>
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

const stpm = state => ({
    loggedIn: state.sessionReducer.loggedIn
})

const dtpm = dispatch => ({})

export default connect(stpm, dtpm)(HomePage);