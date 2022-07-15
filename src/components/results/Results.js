import React from 'react';
import { Link } from 'react-router-dom';

function Results({ items, url}) {
  return (
    <div className="results">
        {
            items.map((item, i) => {
                return(                        
                    <div key={i} className="items">
                        <Link className="link" to={url + item.id}>
                            {item.title ? <h2>{item.title.slice(0,30)}</h2> : <h1>title not found</h1>}
                            {item.image_urls && <img className="img" src={item.image_urls[0]} />}
                        </Link>
                        
                        <div className="price">
                            <h3>${item.price}</h3>
                        </div>

                        <button className="cart-btn">Add to Cart</button>
                    </div>    
                )
            })
        }
        
    </div>
  )
}

export default Results