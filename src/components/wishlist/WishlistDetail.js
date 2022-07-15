import React, { useContext } from 'react';
import WishlistItem from './WishlistItem';
import { UserContext } from '../../contexts/UserState';
import axios from 'axios';

function WishlistDetail({ wishlist, setrenderWishlistIndex }) {

    const { user, setUser } = useContext(UserContext)

    const goBack = () => {
        setrenderWishlistIndex()
    }
    const deleteWishlist = () => {
        axios.delete('http://127.0.0.1:8000/user/wishlists/' + wishlist.id,
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        }).then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="wishlist-detail-container">
        <h1>{wishlist.name}</h1>
        <button className="wishlist-back-btn" onClick={goBack}>Back</button>
        {
            wishlist.items.length !== 0 ?
            wishlist.items.map((itemUrl, i) => {
                return <WishlistItem key={i} itemUrl={itemUrl} wishlist={wishlist} />
            })
            : <h1>No Items</h1>
        }
        <button className="wishlist-delete-btn" onClick={deleteWishlist}>Delete</button>
    </div>
  )
}

export default WishlistDetail