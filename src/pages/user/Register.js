import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const initForm = {username: '', email: '', password: ''}
    const [registerForm, setRegisterForm] = useState(initForm)
    const [registerUser, setRegisterUser] = useState()

    const handleFormChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.id]: e.target.value})
        console.log(registerForm)
    }

  return (
    <div className="register login">
        <h1>Register</h1>
        <br></br>
            <div>
                <form className="login-form">
                    <label>Username:</label>
                    <input type="text" id="username" value={registerForm.username} onChange={handleFormChange}></input>
                    <br></br>
                    <label>Email:</label>
                    <input type="text" id="email" value={registerForm.email} onChange={handleFormChange}></input>
                    <br></br>
                    <label>Password:</label>
                    <input type="text" id="password" value={registerForm.password} onChange={handleFormChange}></input>
                    <br></br>
                    <button className="register-btn" type="submit">Register</button>
                </form>
                <Link className="link" to="/login">
                    <button className="login-link">Login</button>
                </Link>
            </div>   

    </div>
  )
}

export default Register