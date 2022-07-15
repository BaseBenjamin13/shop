import React from 'react'

function ItemWishlist({ wishlist }) {
  return (
    <div className="item-wishlist">
        <button className="add-to-btn">Add To</button>
        <h2>{wishlist.name}</h2>
    </div>
  )
}

export default ItemWishlist