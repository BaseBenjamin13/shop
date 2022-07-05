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
        Review
        <h1>{review.author}</h1>
        <p>{review.body}</p>
    </div>
  )
}

export default Review