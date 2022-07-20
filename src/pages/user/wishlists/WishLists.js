import React, { useState, useEffect, useContext } from 'react';
import '../../../assets/style/user/Wishlists.css';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserState';
import { useNavigate } from 'react-router-dom';

import Wishlist from '../../../components/wishlist/Wishlist';
import WishlistDetail from '../../../components/wishlist/WishlistDetail';

function WishLists() {

    const navigate = useNavigate()

    const { user, setUser } = useContext(UserContext)

    const [wishlists, setWishlists] = useState([])
    const [wishlistForm, setWishlistForm] = useState('Name here')
    const [newWishlist, setNewWishlist] = useState()
    const [renderWishlistIndex, setrenderWishlistIndex] = useState()

    const handleFormChange = (e) => {
        setWishlistForm(e.target.value)
        console.log(wishlistForm)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setNewWishlist(wishlistForm)
    }

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    if(newWishlist){
        axios.post(baseUrl + '/user/wishlists', 
        {
            "name": newWishlist,
            "items": []
        },
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        })
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        axios.get(baseUrl + '/user/wishlists',
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        }).then((res) => {
            console.log(res)
            setWishlists(res.data)
        })
    }, [])

  return (
    <div className="wishlists">
        <div className="wishlists-container">
            <h1>WishLists</h1>
            {!renderWishlistIndex && renderWishlistIndex !== 0 && 
                <button className="wishlist-back-btn" onClick={() => navigate(-1)}>Back</button>
            }

            <div>
                <form onSubmit={handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" id="name" value={wishlistForm} onChange={handleFormChange}></input>
                    <button type="submit" >Create Wishlist</button>
                </form>
            </div>
            {wishlists.length !== 0 ?

                !renderWishlistIndex && renderWishlistIndex !== 0 ?
                    wishlists.map((wishlist, i) => {
                        return <Wishlist key={i} wishlist={wishlist} index={i} renderWishlistIndex={renderWishlistIndex} setrenderWishlistIndex={setrenderWishlistIndex}/>
                    })
                    : <WishlistDetail wishlist={wishlists[renderWishlistIndex]} setrenderWishlistIndex={setrenderWishlistIndex}/>
                : 
                <div className="wishlists">
                    <div className="wishlists-container">
                        <h1>You have no WishLists</h1>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default WishLists