import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Review({index, reviewUrl, item }){

    const [showForm, setShowForm] = useState();
    
    const [review, setReview] = useState()
    const [editReviewForm, setEditReviewForm] = useState(
        {author: 'unknown', body: '', rating: 0})

    const getReview = async () => {
        const { data } = await axios.get(reviewUrl)
        setReview(data)
    }
    const deleteReview = async () => {
        await axios.delete(reviewUrl)
        window.location.reload()
    }
    const editBtn = () => {
        setShowForm(true);
    }
    const handleEditFormChange = (e) => {
        setEditReviewForm({ ...editReviewForm, [e.target.id]: e.target.value})
    }

    const editReview = async (e) => {
        console.log(editReviewForm)
        e.preventDefault()
        await axios.put(reviewUrl,
        {
            "item": "http://127.0.0.1:8000/items/" + item.id,
            "author": editReviewForm.author,
            "body": editReviewForm.body,
            "rating": editReviewForm.rating
        })
        // setEditReviewForm()
        setShowForm(false);
        // window.location.reload()
    }
   

    useEffect(() => {
        getReview()
    }, [])

    if(!review) {
        return <h1>loading...</h1>
    }
  return (
    <div className="review">
        <div>
            <h2>Author: {review.author}</h2>
            <p>{review.body}</p>
            <p>{review.rating}</p>
        </div>
        <button onClick={deleteReview}>Delete</button>
        <button onClick={editBtn}>Edit</button>

        {showForm && 
        <form onSubmit={editReview}>
            <label>author:</label>
            <input type="text" id="author" value={editReviewForm.author} onChange={handleEditFormChange}></input>
            <br></br>
            <label>body:</label>
            <textarea type="text" id="body" value={editReviewForm.body} onChange={handleEditFormChange}></textarea>
            <br></br>
            <label>rating:</label>
            <input type="number" id="rating" value={editReviewForm.rating} onChange={handleEditFormChange}></input>
            <br></br>
            <button type="submit">Update Review</button>
        </form>
        }
    </div>
  )
}

export default Review