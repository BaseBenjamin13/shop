import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserState';
import axios from 'axios';

import Orders from '../../components/cart/Orders';


function OrderHistory() {

    const { user, setUser } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    useEffect(() => {
            axios.get(baseUrl + '/user/carts/completed',
            {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            }).then((res) => {
                setOrders(res.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="order-history">
        <div className="orders-header border-blue">
            {user.username ? <h1>{user.username}'s Orders</h1>: <h1>Orders</h1>}
        </div>
        <div className="orders border-blue">
            {
                orders.length > 0 ? 
                orders.map((order, i) => {
                    console.log(order)
                    return <Orders key={i} order={order} index={i}/>
                })
                : 
                <div className="orders border-blue">
                    <h2>No Orders</h2>
                </div>
            }
        </div>
    </div>
  )
}

export default OrderHistory