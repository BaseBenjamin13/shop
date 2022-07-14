import React, { useState, useEffect, useContext } from 'react';
import '../../../assets/style/user/Wishlists.css';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserState';

import Wishlist from '../../../components/wishlist/Wishlist';
import WishlistDetail from '../../../components/wishlist/WishlistDetail';

function WishLists() {

    const { user, setUser } = useContext(UserContext)

    const [wishlists, setWishlists] = useState([])
    const [wishlistForm, setWishlistForm] = useState()
    const [renderWishlistIndex, setrenderWishlistIndex] = useState()

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

            <div>
                <form>
                    <label>Name:</label>
                    <input></input>
                    <button type="submit" >Create Wishlist</button>
                </form>
            </div>

            {!renderWishlistIndex && renderWishlistIndex !== 0 ?
                wishlists.map((wishlist, i) => {
                    return <Wishlist key={i} wishlist={wishlist} index={i} renderWishlistIndex={renderWishlistIndex} setrenderWishlistIndex={setrenderWishlistIndex}/>
                })
                : <WishlistDetail wishlist={wishlists[renderWishlistIndex]} setrenderWishlistIndex={setrenderWishlistIndex}/>
            }
        </div>
    </div>
  )
}

export default WishLists