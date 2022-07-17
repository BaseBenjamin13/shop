import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/UserState';
import '../../../assets/style/user/Cart.css';
import { useNavigate } from 'react-router-dom';

import Cart from '../../../components/cart/Cart';


function CartPage() {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);


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