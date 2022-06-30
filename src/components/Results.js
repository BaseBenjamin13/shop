import React from 'react'

function Results({ items }) {
  return (
    <div className="results">
        {
            items.map(item => {
                return(
                    <div className="items">
                        {item.title ? <h1>{item.title}</h1> : <h1>title not found</h1>}
                        {item.image_urls && <img className="img" src={item.image_urls[0]} />}
                        <button className="cart-btn">Add to Cart</button>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Results