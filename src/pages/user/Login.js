import React from 'react';
import '../../assets/style/user/Login.css';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <br></br>
            <div>
                <form className="login-form">
                    <label>Username:</label>
                    <input type="text" name="username"></input>
                    <br></br>
                    <label>Password:</label>
                    <input type="text" name="password"></input>
                    <br></br>
                    <button className="login-btn" type="submit">Login</button>
                </form>
                <Link className="link" to="/register">
                    <button class="register-link">Register</button>
                </Link>
            </div>   
        </div>
    )
}
export default Login