import React, { useContext } from 'react';
import '../../assets/style/user/Login.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserState';


function Login() {

    const { user, setUser } = useContext(UserContext)

    const submitLogin = (e) => {
        e.preventDefault();
        setUser({username: 'benji', email: 'ben', password: 'ben'})
        console.log(user)
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <br></br>
            <div>
                <form className="login-form" onSubmit={submitLogin}>
                    <label>Username:</label>
                    <input type="text" name="username"></input>
                    <br></br>
                    <label>Password:</label>
                    <input type="text" name="password"></input>
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