
// https://www.youtube.com/watch?v=0d7cIfiydAc
// user tutorial

import React, {useState, useEffect} from 'react';
import axios from 'axios';

function UsersReviews() {

    const [usersReviews, setUsersReviews] = useState()

    // const returnErrors = (msg, status) => {
    //     return {
    //         type: GET_ERRORS,
    //         payload: { msg, status }
    //     }
    // }

    useEffect(() =>{
        const getUsersReviews = () => {
            axios.get('http://127.0.0.1:8000/user/reviews?format=json')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                // dispatch(returnErrors(err.response.data, err.response.status))
            })
        }
        getUsersReviews()
    }, [])

  return (
    <div>UsersReviews</div>
  )
}

export default UsersReviews