import { authService, firebaseInstance } from '../Firebase';
// import firebase from 'firebase/compat/app';
import React, { useState } from 'react';
import './auth.css';
import logo from '../logo.png'
import png from '../helpme.jpg';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // create account
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data)
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }

    return (
        <div>
            <div className='left'>
                <img className='logo' src={logo} />
                <form onSubmit={onSubmit}>
                    <input className='email' name="email" type="email" placeholder="Email" required value={email} onChange={onChange} />
                    <input className='password' name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
                    <input className='submit' type="submit" value={newAccount ? "Create Account" : "Sign In"} />
                    {error}
                </form>
                <div>
                    <button className='swop' onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</button>
                </div>
                <div>
                    <button className='google' name="google" onClick={onSocialClick}>Continue with Google</button>
                </div>
            </div>
            {/* <div>
                <div className='login-png'>
                    <img src={png}></img>
                </div>
            </div> */}
        </div>
    );
};

export default Auth;