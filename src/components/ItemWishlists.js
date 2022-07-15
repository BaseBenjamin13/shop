import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';

import { UserContext } from '../contexts/UserState';

function ItemWishlists() {

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
        <div>
            {/* map through all users wishlists here loading component */}
        </div>
    )
}

export default ItemWishlists