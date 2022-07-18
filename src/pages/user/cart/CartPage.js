import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserState';
import '../../../assets/style/user/Cart.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Cart from '../../../components/cart/Cart';


function CartPage() {

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/user/carts/current',
            {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            }).then((res) => {
                console.log(res)
                localStorage.setItem('cart', JSON.stringify(res.data[0]))
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="cart-page">
        <div className="cart-header border-blue">
            {user.username ? <h1>{user.username}'s Cart</h1>: <h1>Cart</h1>}
        </div>
        
        <Cart />

    </div>
  )
}

export default CartPage