import React, { useContext } from 'react';
import { UserContext } from '../../../contexts/UserState';
import '../../../assets/style/user/Cart.css';
import { useNavigate } from 'react-router-dom';


function CartPage() {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);


  return (
    <div className="cart-page">
        <div className="cart-header">
            <h1>{user.username}'s Cart</h1>
        </div>

    </div>
  )
}

export default CartPage