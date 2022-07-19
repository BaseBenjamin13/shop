import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import '../../assets/style/user/ProfilePage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
                localStorage.removeItem('username')
                localStorage.removeItem('email')
                localStorage.removeItem('knox_token')
                localStorage.setItem('cart', 'no cart')
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
                axios.get('http://127.0.0.1:8000/user/carts/current',
                {
                    headers: {
                        'Authorization': `Token ${user.knoxToken}`
                    }
                }).then((res) => {
                    console.log(res)
                    localStorage.setItem('cart', JSON.stringify(res.data[0]))
                })
                .catch(err => console.log(err))
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
            <button className="help-btn">Order History</button>

            <button onClick={() => navigate('/user/wishlists')} 
            className="help-btn">Wishlists</button>

            <button className="help-btn">Customer Support</button>
            <button className="help-btn">Login Security</button>

        </div>
    </div>
  )
}

export default Profile