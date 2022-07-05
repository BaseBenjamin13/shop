import React from 'react';
import axios from 'axios';

import DetailedCarousel from './DetailedCarousel';
import Review from './Review';

function DetailedResult({ item }) {

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