import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/style/Results.css';

import Results from '../components/Results';

function KeyBoards() {

    const [keyboards, setKeyboards] = useState([
        {
            title: 'IQUNIX Lime 80',
            image_urls: ['https://i.imgur.com/usVAk4u.jpg']
        },
        {
            title: 'Redragon K628 PRO',
            image_urls: ['https://i.imgur.com/NhpivZ9.jpg']
        },
    ])

   



  return (
    <div>
        <h1>KeyBoards</h1>
        {keyboards.length === 0 && <h1>Loading ...</h1>}
        <Results items={keyboards} />
    </div>
  )
}

export default KeyBoards