import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function WishlistItem({ itemUrl }) {

    const [item, setItem] = useState()

    useEffect(() => {
        axios.get(itemUrl)
            .then((res) =>{
                setItem(res.data);
            })
            .catch(err => console.log(err))
        
    }, [])

    if(!item) {
        return <h2>Loding...</h2>
    }

  return (
    <div className="wishlist-item-container">
        <div className="wishlist-img-container">
            <img className="wishlist-img" src={item.image_urls[0]}></img>
        </div>
        <div className="wishlist-title-container">
            <Link to={`/${item.category}s/${item.id}`}>
                <h2>{item.title}</h2>
            </Link>
        </div>
        <div className="wishlist-price-container">
            <h2>${item.price}</h2>
        </div>
    </div>
  )
}

export default WishlistItem