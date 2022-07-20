import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserState';
import { Link, useNavigate } from 'react-router-dom';

import DetailedCarousel from './DetailedCarousel';
import Review from './Review';
import ItemWishlists from './itemwishlists/ItemWishlists';
import ItemCart from './ItemCart';

function DetailedResult({ item, getItems }) {

    const navigate = useNavigate()

    const {user, setUser} = useContext(UserContext)
    const [reviewForm, setReviewForm] = useState({title: '', body: '', rating: 0})
    const [reviewState, setReviewState] = useState()
    

    const handleFormChange = (e) => {
        setReviewForm({ ...reviewForm, [e.target.id]: e.target.value})
    }

    const createReview = async (e) => {
        e.preventDefault()
        await setReviewState(reviewForm)
    }

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
    
    if(reviewState) {
        axios.post(baseUrl + '/reviews/create',
        {
            "item": baseUrl + "/items/" + item.id,
            // "author": user.user.id,
            // thought i needed to send user but in create route i had to set author 
            // too the authenticated user, its wonderful.
            "title": reviewState.title,
            "body": reviewState.body,
            "rating": reviewState.rating
        },
        {
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        }
        )
        .then((res) => {
            setReviewState()
        })
        .then(() => getItems())
        .catch(err => console.log(err))
    }

    useEffect(() => {
    }, [])
   

    return ( 
        <div>

            <div className="detailed-container">
                <h1 className="detailed-title">{item.title}</h1>
                <div className="detailed-img-div">
                    <DetailedCarousel item={item} />
                </div>

                <div className="info-container">
                    <h2 className="brand">Brand: {item.brand}</h2>
                    <h2 className="detailed-price" >${item.price}</h2>
                    {
                        user.cart &&
                        <ItemCart item={item} />
                    }

                    <ItemWishlists item={item}/>
                </div>

                <div className="description-container">
                    <h2>Description:</h2>
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>
            <div className="reviews">
                <div className="review-form-container">
                    {user.knoxToken ?
                    <form onSubmit={createReview}>
                        <div className="inner-review-form">
                            <label>title:</label>
                            <input type="text" id="title" value={reviewForm.title} onChange={handleFormChange}></input>
                            <br></br>
                            <label>body:</label>
                            <textarea type="text" id="body" value={reviewForm.body} onChange={handleFormChange}></textarea>
                            <br></br>
                            <label>rating:</label>
                            <input type="number" min="0" max="5" id="rating" value={reviewForm.rating} onChange={handleFormChange}></input>
                            <br></br>
                            <button className="create-review-btn" type="submit">Create Review</button>
                        </div>
                    </form>
                    : <h2><Link to="/login">Login</Link> to create a review</h2> }
                </div>
                {
                    item.reviews && item.reviews.length !== 0 ? 
                    item.reviews.map((reviewUrl, i) => {
                        return (
                            <Review key={i} reviewUrl={reviewUrl} item={item} getItems={getItems}/>
                        )
                    })
                    : <h2>No Reviews</h2>
                }
            </div>
        </div>
    )
}

export default DetailedResult