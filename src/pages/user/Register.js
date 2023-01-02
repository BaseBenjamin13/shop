import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserState';
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const initForm = {username: '', email: '', password: ''}
    const [registerForm, setRegisterForm] = useState(initForm)
    const [registerUser, setRegisterUser] = useState()
    const [invalidInput, setInvalidInput] = useState(false);

    const handleFormChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.id]: e.target.value})
    }
    const submitRegisterForm = async (e) => {
        e.preventDefault()
        setRegisterUser(registerForm)
    }

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    if(registerUser) {
        axios.post(baseUrl + '/api/auth/register', 
            {
                "username": registerUser.username,
                "email": registerUser.email,
                "password": registerUser.password
            }, 
            {
                headers: {'Content-Type': 'application/json'},
            })
            .then((res) => {
                console.log(res)
                setUser({
                    username: res.data.user.username,
                    email: res.data.user.email,
                    knoxToken: res.data.token
                })
                localStorage.setItem('username', res.data.user.username)
                localStorage.setItem('email', res.data.user.email)
                localStorage.setItem('knox_token', res.data.token)
                
                axios.post(baseUrl + '/user/carts', 
                {
                    "total": 0,
                    "order_completed": false,
                    "items": []
                },
                {
                    headers: {
                        'Authorization': `Token ${res.data.token}`
                    }
                })
                .then((res) => {
                    localStorage.setItem('cart', JSON.stringify(res.data))
                    navigate('/login');
                })
                .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                setInvalidInput(true);
            })
    }

  return (
    <div className="register border-blue">
        <h1 className="register-title">Register</h1>
        <br></br>
            <div>
                <form className="register-form" onSubmit={submitRegisterForm}>
                    <div className="register-inner-form">

                    <label>Username:</label>
                    <input type="text" id="username" value={registerForm.username} onChange={handleFormChange}></input>
                    <br></br>
                    <label>Email:</label>
                    <input type="email" id="email" placeholder='jacksmit@gmail.com' value={registerForm.email} onChange={handleFormChange}></input>
                    <br></br>
                    <label>Password:</label>
                    <input type="password" id="password" value={registerForm.password} onChange={handleFormChange}></input>
                    {
                        invalidInput &&
                        <div>
                            <p className="invalid-input">Invalid Input</p>
                            <p>Please try again</p>
                        </div>
                    }
                    <button className="register-btn" type="submit">Register</button>
                    </div>
                </form>
                <Link className="link" to="/login">
                    <button className="login-link">Login</button>
                </Link>
            </div>   

    </div>
  )
}

export default Register