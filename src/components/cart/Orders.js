import React from 'react'
import OrderItems from './OrderItems';

function Orders({ order, index }) {
    console.log(order.items)
  return (
    <div className="order">
        <h1>Order: {index + 1}</h1>
        <h1>Total: ${order.total}</h1>
        {
            order.items.length > 0 ?
            order.items.map((item, i) => {
                return <OrderItems itemUrl={item} />
            })
            : <h2>No orders found</h2>
        }
    </div>
  )
}

export default Orders