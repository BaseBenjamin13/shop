import React from 'react';
import '../../assets/style/user/Wishlists.css';

function Wishlist({ wishlist, index, renderWishlist, setrenderWishlist }) {

    const showWishlist = () => {
        setrenderWishlist(index);
    }

  return (
    <div className="wishlist">
        <h1>{wishlist.name}</h1>
        
        <button className="wishlist-link" onClick={showWishlist}>Go To Wishlist</button>

        <h1>Amount: {wishlist.items.length}</h1>
    </div>
  )
}

export default Wishlist