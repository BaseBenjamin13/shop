import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserState';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/style/user/Cart.css';

function CartItem({ itemUrl }) {

    const { user, setUser } = useContext(UserContext);
    const [item, setItem] = useState()

    const [replaceCart, setReplaceCart] = useState()
    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
    const newCartUrl = baseUrl + '/user/carts/' + user.cart.id;
    const removeItem = () => {
        const index = item.carts.indexOf(newCartUrl);
        const copy = item.carts;
        copy.splice(index, 1);
        setReplaceCart(copy)
    }

    if(replaceCart) {
        axios.put(baseUrl + '/items/edit/' + item.id, {
            "category": item.category,
            "description": item.description,
            "price": item.price,
            "image_urls": item.image_urls,
            "wishlists": item.wishlists,
            "carts": replaceCart
        },{
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        })
        .then(() => {
            axios.get(baseurl + '/user/carts/' + user.cart.id,
            {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            }).then((res) => {
                console.log(res)
                axios.put(baseUrl + '/user/carts/' + user.cart.id,
                {
                    "total": res.data.total - item.price,
                    "order_completed": res.data.order_completed,
                    "items": res.data.items
                },
                {
                    headers: {
                        'Authorization': `Token ${user.knoxToken}`
                    }
                }).then((res) => {
                    console.log({res})
                    localStorage.setItem('cart', JSON.stringify(res.data))
                })
                .then(() => window.location.reload())
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }


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
                <button className="remove-item-btn" onClick={removeItem}>Remove Item</button>
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