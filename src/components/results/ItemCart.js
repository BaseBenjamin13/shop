import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import axios from 'axios';


function ItemCart({ item }) {

    const {user, setUser} = useContext(UserContext)

    const [newCart, setNewCart] = useState()
    const newCartUrl = 'http://127.0.0.1:8000/user/carts/' + user.cart.id
    const addToCart = () => {
        const copy = item.carts
        copy.push(newCartUrl)
        setNewCart(copy)
    }
    if(newCart) {
        axios.put('http://127.0.0.1:8000/items/edit/' + item.id, {
            "category": item.category,
            "description": item.description,
            "price": item.price,
            "image_urls": item.image_urls,
            "wishlists": item.wishlists,
            "carts": newCart
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
    <div>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ItemCart