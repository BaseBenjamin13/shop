import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../../assets/style/user/Login.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserState';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate()
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
        ).then((res) => {
            setUser({
                username: res.data.user.username,
                email: res.data.user.email,
                knoxToken: res.data.token
            })
            setLogin()
            localStorage.setItem('username', res.data.user.username)
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('knox_token', res.data.token)
        })
        .then((data) => {
            navigate('/profile')
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
    }, [])

    return (
        <div className="login">
            <h1 className="login-title">Login</h1>
            <br></br>
            <div>

                <form className="login-form" onSubmit={submitLogin}>
                    <div className="login-inner-form">
                        <label>Username:</label>
                        <input type="text" id="username" value={loginForm.username}
                            onChange={handleLoginChange} ></input>
                        <br></br>

                        <label>Password:</label>
                        <input type="text" id="password" value={loginForm.password} 
                            onChange={handleLoginChange}></input>
                        <br></br>

                        <button className="login-btn" type="submit">Login</button>
                    </div>
                </form>

                <Link className="link" to="/register">
                    <button className="register-link">Register</button>
                </Link>
            </div>   
        </div>
    )
}
export default Login