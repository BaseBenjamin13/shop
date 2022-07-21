import React from 'react'
import OrderItems from './OrderItems';

function Orders({ order, index }) {

  return (
    <div className="order">
        <h1>Order: {index + 1}</h1>
        <h1>Total: ${order.total}</h1>
        {
            order.items.length > 0 ?
            order.items.map((item, i) => {
                <OrderItems itemUrl={item} />
            })
            : <h2>No items found</h2>
        }
    </div>
  )
}

export default Orders