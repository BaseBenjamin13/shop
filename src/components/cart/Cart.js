import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';

function Cart() {

    const { user, setUser } = useContext(UserContext);
    

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
            <button className="checkout-btn">Checkout</button>
        </div>
    </div>
  )
}

export default Cart