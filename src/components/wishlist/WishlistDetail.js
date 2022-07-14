import React from 'react';
import WishlistItem from './WishlistItem';

function WishlistDetail({ wishlist }) {
  return (
    <div className="wishlist-detail-container">
        <h1>{wishlist.name}</h1>
        {
            wishlist.items.length !== 0 ?
            wishlist.items.map((itemUrl, i) => {
                return <WishlistItem key={i} itemUrl={itemUrl} />
            })
            : <h1>No Items</h1>
        }
    </div>
  )
}

export default WishlistDetail