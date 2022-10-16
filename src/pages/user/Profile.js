import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import '../../assets/style/user/ProfilePage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    const logout = () => {
        axios.post(baseUrl + '/api/auth/logout', {},{
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            })
            .then((res) => {
                setUser({})
                localStorage.clear();
            })
            .then(() => {
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const changeColor = () => {
        document.documentElement.style.setProperty('--mylightyellow', 'rgba(217, 30, 80, 1)');
    }

    useEffect(() =>{
        const getUser = () => {
            axios.get(baseUrl + '/api/auth/user', {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                    }
            })
            .then((res) => {
                console.log(res) 
                axios.get(baseUrl + '/user/carts/current',
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
            <Link className="link" to="/user/cart">
                <button className="my-cart-btn">My Cart</button>
            </Link>

            <button onClick={() => changeColor()}className="">Change Color</button>
            
            <button onClick={() => logout()} className="logout-btn">Logout</button>
        </div>
        <div className="help-container">
            <button onClick={() => navigate('/user/orders')} 
            className="help-btn">Order History</button>
            <button onClick={() => navigate('/user/wishlists')} 
            className="help-btn">Wishlists</button>
            <button className="help-btn">Customer Support</button>
            <button className="help-btn">Login Security</button>

        </div>
    </div>
  )
}

export default Profile