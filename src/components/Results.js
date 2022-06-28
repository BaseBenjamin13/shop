import React from 'react'

function Results({ items }) {
  return (
    <div className="results">
        {
            items.map(item => {
                return(
                    <div className="items">
                        {item.title ? <h1>{item.title}</h1> : <h1>title not found</h1>}
                        {item.image_url && <img className="img" src={item.image_url} />}
                        <button className="cart-btn">Add to Cart</button>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Results