import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PayPal from './PayPal';
import CartItem from './CartItem';

function Cart() {

    const { user, setUser } = useContext(UserContext);

    const [showCheckout, setShowCheckout]= useState(false);
    

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
    const checkout = () => {
        axios.put(baseUrl + '/user/carts/' + user.cart.id,
        {
            "total": user.cart.total,
            "order_completed": true,
            "items": user.cart.items
        },
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        }).then(() => {
            axios.post(baseUrl + '/user/carts', 
                {
                    "total": 0,
                    "order_completed": false,
                    "items": []
                },
                {
                    headers: {
                        'Authorization': `Token ${user.knoxToken}`
                    }
                })
                .then((res) => {
                    console.log(res)
                    localStorage.setItem('cart', JSON.stringify(res.data))
                })
                .then(() => {
                    window.location.reload()
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(user.cart);
    }, [])

    if(!user.cart){
        return (
            <div className="cart border-blue">
                <h2>No Items</h2>
                <h2><Link to="/login">Login</Link> To Add To Items</h2>
            </div>
        )
    }

  return (
    <div className="cart border-blue">
        <h2>Your Items</h2>

        {
            user.cart.items.length > 0 ?
            user.cart.items.map((itemUrl, i) => {
                return (
                <CartItem key={i} itemUrl={itemUrl} />
                )
            }) 
            : <h1>No Items</h1>
        }
        <div className="total-container">
            <h1>Total: ${user.cart.total}</h1>
            
            {   user.cart.items.length > 0 ? 
                showCheckout ? 
                <div className="paypal">
                    <PayPal total={user.cart.total} checkoutFunc={checkout} />
                </div>
            : 
                <button onClick={() => setShowCheckout(true)} className="checkout-btn">Checkout</button>
            : null
            }
        </div>
    </div>
  )
}

export default Cart