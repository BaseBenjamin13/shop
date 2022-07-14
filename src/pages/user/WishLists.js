import React, { useState, useEffect, useContext } from 'react';
import '../../assets/style/user/Wishlists.css';
import axios from 'axios';
import { UserContext } from '../../contexts/UserState';

function WishLists() {

    const { user, setUser } = useContext(UserContext)

    const [wishlists, setWishlists] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/user/wishlists',
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        }).then((res) => {
            console.log(res)
            setWishlists(res.data)
        })
    }, [])

    if(wishlists.length === 0) {
        return (
            <div className="wishlists">
                <div className="wishlists-container">
                    <h1>You have no WishLists</h1>
                </div>
            </div>
        )
    }

  return (
    <div className="wishlists">
        <div className="wishlists-container">
            <h1>WishLists</h1>
        </div>
    </div>
  )
}

export default WishLists