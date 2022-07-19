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


            axios.get('http://127.0.0.1:8000/user/carts/' + user.cart.id,
            {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            }).then((res) => {
                console.log(res)
                axios.put('http://127.0.0.1:8000/user/carts/' + user.cart.id,
                {
                    "total": res.data.total + item.price,
                    "order_completed": res.data.order_completed,
                    "items": res.data.items
                },
                {
                    headers: {
                        'Authorization': `Token ${user.knoxToken}`
                    }
                }).then((res) => {
                    console.log({res})
                    localStorage.setItem('cart', JSON.stringify(res.data))
                })
                .then(() => window.location.reload())
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })


        .then(() => {
            // window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="cart-button-container">
        <button className="add-cart-btn" onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ItemCart