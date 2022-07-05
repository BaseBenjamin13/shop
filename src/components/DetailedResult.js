import React, { useState } from 'react';
import axios from 'axios';

import DetailedCarousel from './DetailedCarousel';
import Review from './Review';

function DetailedResult({ item }) {

    const [reviewForm, setReviewForm] = useState({author: 'unknown', body: '', rating: 0})

    const createReview = async (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/reviews/',
        {
            "monitor": "http://127.0.0.1:8000/monitors/" + item.id,
            "author": "test",
            "body": "gretsetsetsetis.",
            "rating": 5
        })
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
                        <input></input>
                        <br></br>
                        <label>body:</label>
                        <textarea></textarea>
                        <br></br>
                        <label>rating:</label>
                        <input></input>
                        <br></br>
                        <button type="submit">create Keyboard</button>
                    </form>
                </div>
                {
                    item.reviews && item.reviews.length !== 0 ? 
                    item.reviews.map((review) => {
                        return <Review reviewUrl={review} item={item}/>
                    })
                    : <h2>No Reviews</h2>
                }
            </div>
        </div>
    )
}

export default DetailedResult