import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserState';


function OrderHistory() {

    const { user, setUser } = useContext(UserContext);

  return (
    <div className="order-history">
        <div className="orders-header border-blue">
            {user.username ? <h1>{user.username}'s Orders</h1>: <h1>Orders</h1>}
        </div>
    </div>
  )
}

export default OrderHistory