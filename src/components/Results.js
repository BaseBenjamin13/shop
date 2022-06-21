import React from 'react'

function Results({ monitors }) {
  return (
    <div className="results">
        {
            monitors.map(monitor => {
                return(
                    <div className="items">
                        <h1>{monitor.name}</h1>
                        {monitor.img && <img className="img" src={monitor.img} />}
                        <button className="cart-btn">Add to Cart</button>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Results