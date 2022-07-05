import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Review({ reviewUrl, item }) {

    const [ review, setReview ] = useState()

    const getReview = async () => {
        const {data} = await axios.get(reviewUrl)
        console.log(data)
        setReview(data)
    }
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
    useEffect(() => {
        getReview()
    }, [])

    if(!review) {
        return <h1>loading...</h1>
    }
  return (
    <div>
        <h1>Reviews</h1>
        <form onSubmit={createReview}>
            <button type="submit">create Keyboard</button>
        </form>
        <div>
            <h2>Author: {review.author}</h2>
            <p>{review.body}</p>
        </div>

    </div>
  )
}

export default Review