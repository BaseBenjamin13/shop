import React from 'react'

function WishlistDetail({ wishlist }) {
  return (
    <div className="wishlist-detail-container">
        <h1>{wishlist.name}</h1>
    </div>
  )
}

export default WishlistDetail