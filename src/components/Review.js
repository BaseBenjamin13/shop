import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../contexts/UserState';

function Review({index, reviewUrl, item }){

    const user = useContext(UserContext)

    const [showForm, setShowForm] = useState();
    
    const [review, setReview] = useState()
    const [editReviewForm, setEditReviewForm] = useState(
        {author: 'unknown', body: '', rating: 0})

    const getReview = async () => {
        const { data } = await axios.get(reviewUrl)
        setReview(data)
    }
    const deleteReview = async () => {
        await axios.delete(`http://127.0.0.1:8000/reviews/${review.id}/change`)
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
        await axios.put(`http://127.0.0.1:8000/reviews/${review.id}/change`,
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
            <p>Rating: {review.rating}</p>
        </div>

        {user.user.username === review.author &&
            <div>
                <button onClick={deleteReview}>Delete</button>
                <button onClick={editBtn}>Edit</button>
            </div>
        }

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