
// https://www.youtube.com/watch?v=0d7cIfiydAc
// user tutorial

import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserState';

function UsersReviews() {

    const user = useContext(UserContext)
    const [usersReviews, setUsersReviews] = useState()

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    useEffect(() =>{
        const getUsersReviews = () => {
            axios.get(baseUrl + '/user/reviews?format=json', {
                headers: {
                    'Authorization': `Token ${user.user.knoxToken}`
                    }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
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
        <h1>Username: {user.user.username}</h1>
    </div>
  )
}

export default UsersReviews