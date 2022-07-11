import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserState';

import DetailedCarousel from './DetailedCarousel';
import Review from './Review';

function DetailedResult({ item }) {

    const user = useContext(UserContext)
    const [reviewForm, setReviewForm] = useState({author: 'unknown', body: '', rating: 0})
    const [reviewState, setReviewState] = useState()
    

    const handleFormChange = (e) => {
        setReviewForm({ ...reviewForm, [e.target.id]: e.target.value})
    }

    const createReview = async (e) => {
        e.preventDefault()
        await setReviewState(reviewForm)
    }


    
    if(reviewState) {
        axios.post('http://127.0.0.1:8000/reviews/create',
        {
            "item": "http://127.0.0.1:8000/items/" + item.id,
            "author": reviewState.author,
            "body": reviewState.body,
            "rating": reviewState.rating
        },
        {
            headers: {
                'Authorization': `Token ${user.user.knoxToken}`
            }
        }
        )
        .then((res) => {
            setReviewState()
            console.log(res)
        })
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
   

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
                </div>

                <div className="description-container">
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>
            <div className="reviews">
                <div className="review-form-container">
                    
                    <form onSubmit={createReview}>
                        <label>author:</label>
                        <input type="text" id="author" value={reviewForm.author} onChange={handleFormChange}></input>
                        <br></br>
                        <label>body:</label>
                        <textarea type="text" id="body" value={reviewForm.body} onChange={handleFormChange}></textarea>
                        <br></br>
                        <label>rating:</label>
                        <input type="number" id="rating" value={reviewForm.rating} onChange={handleFormChange}></input>
                        <br></br>
                        <button type="submit">Create Review</button>
                    </form>
                </div>
                {
                    item.reviews && item.reviews.length !== 0 ? 
                    item.reviews.map((reviewUrl, i) => {
                        return (<Review key={i} index={i} reviewUrl={reviewUrl} item={item}/>
                        )
                    })
                    : <h2>No Reviews</h2>
                }
            </div>
        </div>
    )
}

export default DetailedResult