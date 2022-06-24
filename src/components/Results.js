import React from 'react'

function Results({ items }) {
  return (
    <div className="results">
        {
            items.map(item => {
                return(
                    <div className="items">
                        <h1>{item.name}</h1>
                        {item.img && <img className="img" src={item.img} />}
                        <button className="cart-btn">Add to Cart</button>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Results