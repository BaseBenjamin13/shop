import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import { Link } from 'react-router-dom';

function Cart() {

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        console.log(user);
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
    </div>
  )
}

export default Cart