import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import '../../assets/style/user/ProfilePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const logout = () => {
        axios.post('http://127.0.0.1:8000/api/auth/logout', {},{
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            })
            .then((res) => {
                setUser({})
            })
            .then(() => {
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() =>{
        const getUser = () => {
            axios.get('http://127.0.0.1:8000/api/auth/user', {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                    }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                navigate('/login')
            })
        }
        getUser()
    }, [])

  return (
    <div className="profile">
        <div className="user-info-container">
            <h1>Welcome {user.username}</h1>
            <br></br>
            <h1>{user.email}</h1>
            <button onClick={() => logout()} className="logout-btn">Logout</button>
        </div>
        <div className="help-container">
            <button>Order History</button>
            <button>Wishlist</button>
            <button>Customer Support</button>
            <button>Login Security</button>
        </div>
    </div>
  )
}

export default Profile