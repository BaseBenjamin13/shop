import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../assets/style/user/Login.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserState';


function Login() {

    const { user, setUser } = useContext(UserContext)
    const [loginForm, setLoginForm] = useState({username: '', password: ''})
    const [login, setLogin] = useState()

    const handleLoginChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
    }

    const submitLogin = (e) => {
        e.preventDefault();
        setLogin(loginForm)
    }

    if(login){
        axios.post('http://127.0.0.1:8000/api/auth/login', 
        {
            "username": login.username,
            "password": login.password
        },
        {
            headers: {'Content-Type': 'application/json'}
        }
        ).then(res => {
            console.log(res)
            setUser({
                username: res.data.user.username,
                email: res.data.user.email,
                knoxToken: res.data.token
            })
            setLogin()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <br></br>
            <div>

                <form className="login-form" onSubmit={submitLogin}>
                    <label>Username:</label>
                    <input type="text" id="username" value={loginForm.username}
                        onChange={handleLoginChange} ></input>
                    <br></br>

                    <label>Password:</label>
                    <input type="text" id="password" value={loginForm.password} 
                        onChange={handleLoginChange}></input>
                    <br></br>

                    <button className="login-btn" type="submit">Login</button>
                </form>

                <Link className="link" to="/register">
                    <button className="register-link">Register</button>
                </Link>
            </div>   
        </div>
    )
}
export default Login