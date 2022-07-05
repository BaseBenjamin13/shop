import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Review({ reviewUrl }) {

    const [ review, setReview ] = useState()

    const getReview = async () => {
        const {data} = await axios.get(reviewUrl)
        console.log(data)
        setReview(data)
    }
    useEffect(() => {
        getReview()
    }, [])

    if(!review) {
        return <h1>loading...</h1>
    }
  return (
    <div>
        <h1>Reviews</h1>
        <div>
            <h2>Author: {review.author}</h2>
            <p>{review.body}</p>
        </div>
    </div>
  )
}

export default Review