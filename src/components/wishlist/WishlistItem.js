import axios from 'axios';
import React, { useState, useEffect } from 'react';


function WishlistItem({ itemUrl }) {

    const [item, setItem] = useState()

    useEffect(() => {
        axios.get(itemUrl)
            .then((res) =>{
                console.log(res);
                setItem(res.data);
            })
            .catch(err => console.log(err))
        
    }, [])

    if(!item) {
        return <h2>Loding...</h2>
    }

  return (
    <div className="wishlist-item-container">
        <h2>{item.title}</h2>
    </div>
  )
}

export default WishlistItem