import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import '../../assets/style/user/ProfilePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()
    const user = useContext(UserContext)

    useEffect(() =>{
        console.log(user)
        const getUser = () => {
            axios.get('http://127.0.0.1:8000/api/auth/user', {
                headers: {
                    'Authorization': `Token ${user.user.knoxToken}`
                    }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                navigate('/login')
            })
        }
        getUser()
    }, [])

    if(user.user.knoxToken){
        console.log(user.user.knoxToken)
    }
  return (
    <div className="profile">
        <div className="user-info-container">
            <h1>Welcome {user.user.username}</h1>
            <br></br>
            <h1>{user.user.email}</h1>
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