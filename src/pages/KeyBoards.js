import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/style/Results.css';

import NavBar from '../components/NavBar';
import Results from '../components/Results';

function KeyBoards() {

    const [keyboards, setKeyboards] = useState([
        {
            name: 'IQUNIX Lime 80',
            img: 'https://i.imgur.com/usVAk4u.jpg'
        },
        {
            name: 'Redragon K628 PRO',
            img: 'https://i.imgur.com/NhpivZ9.jpg'
        },
    ])

    useEffect(() => {
        const getTunr = async () => {
            const { data } = await axios.get('http://127.0.0.1:8000/artists/?format=json')
            console.log('test')
            console.log(data)
            console.log('test2')
        }
        // getTunr()
    })



  return (
    <div>
        <NavBar />
        <h1>KeyBoards</h1>
        <Results items={keyboards} />
    </div>
  )
}

export default KeyBoards