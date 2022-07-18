import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const initForm = {username: '', email: '', password: ''}
    const [registerForm, setRegisterForm] = useState(initForm)
    const [registerUser, setRegisterUser] = useState()

    const handleFormChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.id]: e.target.value})
        console.log(registerForm)
    }
    const submitRegisterForm = async (e) => {
        e.preventDefault()
        console.log(registerForm)
        await setRegisterUser(registerForm)
        axios.post('http://127.0.0.1:8000/api/auth/register', 
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
            })
            .catch(err => console.log(err))
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
                    <input type="email" id="email" value={registerForm.email} onChange={handleFormChange}></input>
                    <br></br>
                    <label>Password:</label>
                    <input type="password" id="password" value={registerForm.password} onChange={handleFormChange}></input>
                    <br></br>
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