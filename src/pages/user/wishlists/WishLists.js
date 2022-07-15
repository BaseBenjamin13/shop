import React, { useState, useEffect, useContext } from 'react';
import '../../../assets/style/user/Wishlists.css';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserState';

import Wishlist from '../../../components/wishlist/Wishlist';
import WishlistDetail from '../../../components/wishlist/WishlistDetail';

function WishLists() {

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
    if(newWishlist){
        axios.post('http://127.0.0.1:8000/user/wishlists', 
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
        })
        .catch(err => console.log(err))
    }


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

  return (
    <div className="wishlists">
        <div className="wishlists-container">
            <h1>WishLists</h1>

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