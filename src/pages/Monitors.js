import React, { useState } from 'react';
import '../assets/style/Results.css';

import NavBar from '../components/NavBar';
import Results from '../components/Results';

function Monitors() {

    const [monitors, setMonitors] = useState([
        {
            name: 'LG 34WN750-B Monitor 34"',
            img: 'https://i.imgur.com/zOskYQF.jpeg'
        },
        {
            name: 'Alienware 240Hz Gaming Monitor 24.5"',
            img: 'https://i.imgur.com/IvIMQBY.jpg'
        },
        {
            name: 'ASUS ROG Strix 34"',
            img: 'https://i.imgur.com/D36qxYq.jpg'
        }
    ])

  return (
    <div>
        <NavBar />
        <h1>Monitors</h1>
        <Results monitors={monitors}/>
    </div>
  )
}

export default Monitors