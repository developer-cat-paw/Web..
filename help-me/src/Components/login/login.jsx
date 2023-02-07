import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
// import Header from '../header/header';

const Login = ({ auth }) => {
    const navigate = useNavigate();
    const onLogin = (e) => {
        auth
            .login(e.target.textContent)
            .then(data => goToHome(data.user.uid));
    }
    const goToHome = userId => {
        // navigate.push({  //🌞
        //     pathname: '/main',
        //     state: { id: userId },
        // });
        navigate("/main")
    }
    // useEffect(() => {
    //     // auth.js로 가서 onAuthChange 함수를 만들어주자.
    //     auth
    //         .onAuthChange(user => { //🌈
    //             user && goToHome(user.uid);
    //         })
    // });
    return (
        <div>
            <h1>Login</h1>
            <ul>
                <li><button onClick={onLogin}>Google</button></li>
                <li><button onClick={onLogin}>Github</button></li>
            </ul>
        </div>
    );
};
export default Login;