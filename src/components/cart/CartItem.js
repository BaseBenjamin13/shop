import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/style/user/Cart.css';

function CartItem({ itemUrl }) {

    const { user, setUser } = useContext(UserContext);
    const [item, setItem] = useState()

    useEffect(() => {
        axios.get(itemUrl)
            .then((res) =>{
                setItem(res.data);
            })
            .catch(err => console.log(err))
        
        
    }, [])

    if(!item) {
        return <h2>Loding...</h2>
    }

    return (
        <div className="cart-item-container">
            <div className="cart-img-container">
                <img className="cart-img" src={item.image_urls[0]}></img>
            </div>
            <div className="cart-title-container">
                <button className="remove-item-btn">Remove Item</button>
                <Link className="item-link" to={`/${item.category}s/${item.id}`}>
                    <h2>{item.title}</h2>
                    <h2>Brand:{item.brand}</h2>
                </Link>
            </div>
            <div className="cart-price-container">
                <h1>${item.price}</h1>
            </div>
        </div>
    )
}

export default CartItem