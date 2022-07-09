
// https://www.youtube.com/watch?v=0d7cIfiydAc
// user tutorial

import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserState';

function UsersReviews() {

    const user = useContext(UserContext)
    const [usersReviews, setUsersReviews] = useState()


    // const returnErrors = (msg, status) => {
    //     return {
    //         type: GET_ERRORS,
    //         payload: { msg, status }
    //     }
    // }

    useEffect(() =>{
        const getUsersReviews = () => {
            axios.get('http://127.0.0.1:8000/user/reviews?format=json', {
                headers: {
                    'Authorization': 'Token 9066ab0db7d6b6496c4a80c557baab2a3a4b06e904eb3f92d4ae835fffae4e86'
                    }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                // dispatch(returnErrors(err.response.data, err.response.status))
            })
        }
        // getUsersReviews()
    }, [])

    if(!user) {
        return <h1>no user</h1>
    }
    console.log(user)
  return (
    <div style={{ backgroundColor: 'red' }}>
        UsersReviews
        <h1>Username: {user.user}</h1>
    </div>
  )
}

export default UsersReviews