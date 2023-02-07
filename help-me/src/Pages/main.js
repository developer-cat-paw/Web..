import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Router, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from '../Components/Layout/AppLayout'
import Blank from './Blank'
import Chat from '../ai-bot/AI-Chatbot';
import Auth from '../service/auth';
import './main.scss';
import Profile from './Profile';
import Home from './Home';
// import Navigation from './Navigation';
// import Profile from "routes/Profile";

const AppRouters = ({ isLoggedIn }) => {

    return (
        <Router>
            {isLoggedIn}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path='/' element={<AppLayout />}>
                            <Route index element={<Home />} />
                            <Route exact path='/started' element={<Blank />} />
                            <Route exact path='/calendar' element={<Blank />} />
                            <Route exact path='/user' element={<Profile />} />
                            <Route exact path='/order' element={<Chat />} />
                        </Route>
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </>
                ) : (
                    <>
                        <Route exact path="/" element={<Auth />} />
                        {/* <Redirect from="*" to="/" /> */}
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouters;