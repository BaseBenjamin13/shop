import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserState';

function ItemWishlist({ wishlist, item }) {

    const {user, setUser} = useContext(UserContext)
    const [newWishlists, setNewWishlists] = useState()

    const addToWishlist = () => {
        console.log(wishlist)
        console.log(item)
        const copy = item.wishlists
        copy.push('http://127.0.0.1:8000/user/wishlists/' + wishlist.id)
        console.log(copy)
        setNewWishlists(copy)
    }
    if(newWishlists) {
        axios.put('http://127.0.0.1:8000/items/edit/' + item.id, {
            "category": item.category,
            "description": item.description,
            "price": item.price,
            "image_urls": item.image_urls,
            "wishlists": newWishlists
        },{
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        })
    }

  return (
    <div className="item-wishlist">
        <button className="add-to-btn" onClick={addToWishlist}>Add To</button>
        <h2>{wishlist.name}</h2>
    </div>
  )
}

export default ItemWishlist