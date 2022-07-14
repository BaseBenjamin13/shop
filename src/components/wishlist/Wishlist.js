import React from 'react';
import '../../assets/style/user/Wishlists.css';

function Wishlist({ wishlist, index, renderWishlistIndex, setrenderWishlistIndex }) {

    const showWishlist = () => {
        setrenderWishlistIndex(index);
    }

  return (
    <div className="wishlist">
        <button className="wishlist-link" onClick={showWishlist}>Go To Wishlist</button>
        <h1>{wishlist.name}</h1>
        <h1>Amount: {wishlist.items.length}</h1>
    </div>
  )
}

export default Wishlist