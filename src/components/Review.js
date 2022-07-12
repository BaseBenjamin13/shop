import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../contexts/UserState';

function Review({ reviewUrl, item, getItems }){

    const user = useContext(UserContext)

    const [showForm, setShowForm] = useState();
    
    const [review, setReview] = useState()
    const [editReviewForm, setEditReviewForm] = useState(
        {
            title: 'title here',
            body: 'body here',
            rating: 0
        }
    )
    const [editReviewState, setEditReviewState] = useState()

    const getReview = () => {
        axios.get(reviewUrl)
        .then((res) => {
            console.log(res.data)
            setReview(res.data)
        })
        .catch(err => console.log(err))
    }
    const deleteReview = () => {
        axios.delete(`http://127.0.0.1:8000/reviews/${review.id}/change`,
        {
            headers: {
                'Authorization': `Token ${user.user.knoxToken}`
            }
        }).then(() => getItems())
        
    }
    const editBtn = () => {
        setShowForm(true);
        setEditReviewForm({
            title: review.title,
            body: review.body,
            rating: review.rating
        })
    }
    const handleEditFormChange = (e) => {
        setEditReviewForm({ ...editReviewForm, [e.target.id]: e.target.value})
    }

    const editReview = (e) => {
        console.log(editReviewForm)
        e.preventDefault()
        setEditReviewState(editReviewForm)
    }

    if(editReviewState) {
        axios.put(`http://127.0.0.1:8000/reviews/${review.id}/change`,
        {
            "item": "http://127.0.0.1:8000/items/" + item.id,
            "title": editReviewState.title,
            "body": editReviewState.body,
            "rating": editReviewState.rating
        },
        {
            headers: {
                'Authorization': `Token ${user.user.knoxToken}`
            }
        }
        ).then(() => getReview())
        .then(() => setShowForm(false))
        .catch(err => console.log(err))
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
                <button className="delete-review-btn" onClick={deleteReview}>Delete</button>
                <button className="edit-review-btn" onClick={editBtn}>Edit</button>
            </div>
        }

        {showForm && 
        <div className="review-form-container">
        <form onSubmit={editReview}>
            <div className="inner-review-form">
                <label>title:</label>
                <input type="text" id="title" value={editReviewForm.title} onChange={handleEditFormChange}></input>
                <br></br>
                <label>body:</label>
                <textarea type="text" id="body" value={editReviewForm.body} onChange={handleEditFormChange}></textarea>
                <br></br>
                <label>rating:</label>
                <input type="number" min="0" max="5" id="rating" value={editReviewForm.rating} onChange={handleEditFormChange}></input>
                <br></br>
                <button className="update-btn" type="submit">Update Review</button>
            </div>
        </form>
        </div>
        }
    </div>
  )
}

export default Review