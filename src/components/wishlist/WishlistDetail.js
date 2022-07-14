import React from 'react';
import WishlistItem from './WishlistItem';

function WishlistDetail({ wishlist, setrenderWishlistIndex }) {

    const goBack = () => {
        setrenderWishlistIndex()
    }

  return (
    <div className="wishlist-detail-container">
        <h1>{wishlist.name}</h1>
        <button className="wishlist-back-btn" onClick={goBack}>Back</button>
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