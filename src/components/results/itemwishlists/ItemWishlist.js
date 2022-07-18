import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserState';

function ItemWishlist({ wishlist, item }) {

    const {user, setUser} = useContext(UserContext)
    const [newWishlists, setNewWishlists] = useState()
    const newWishlistUrl = 'http://127.0.0.1:8000/user/wishlists/' + wishlist.id
    const addToWishlist = () => {
        console.log(wishlist)
        console.log(item)
        const copy = item.wishlists
        copy.push(newWishlistUrl)
        console.log(copy)
        setNewWishlists(copy)
    }
    if(newWishlists) {
        axios.put('http://127.0.0.1:8000/items/edit/' + item.id, {
            "category": item.category,
            "description": item.description,
            "price": item.price,
            "image_urls": item.image_urls,
            "wishlists": newWishlists,
            "carts": item.carts,
        },{
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        })
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="item-wishlist">
        <button className="add-to-btn" onClick={addToWishlist}>Add To</button>
        <h2>{wishlist.name}{item.wishlists.includes(newWishlistUrl + '?format=json') && ' ✅'}</h2>
    </div>
  )
}

export default ItemWishlist