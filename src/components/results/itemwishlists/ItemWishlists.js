import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';

import { UserContext } from '../../../contexts/UserState';
import ItemWishlist from './ItemWishlist';

function ItemWishlists({ item }) {

    const { user, setUser } = useContext(UserContext);
    const [wishlists, setWishlists] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/user/wishlists',
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        }).then((res) => {
            console.log(res)
            setWishlists(res.data)
        })
    }, [])

    if(!wishlists) return null
    return (
        <div className="item-wishlists">
            <div className="item-wishlists-container">

                <h2>Wishlists</h2>
                {
                    wishlists.map((wishlist, i) => {
                        return <ItemWishlist key={i} wishlist={wishlist} item={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default ItemWishlists