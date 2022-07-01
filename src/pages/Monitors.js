import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/style/Results.css';

import Results from '../components/Results';

function Monitors() {

    const [monitors, setMonitors] = useState([])

    useEffect(() => {
        const getMonitors = async () => {
            const { data } = await axios.get('http://127.0.0.1:8000/monitors/?format=json')
            await setMonitors(data)
            console.log(monitors)
            console.log(data)
        }
        getMonitors()
    }, [])


    

  return (
    <div>
        {monitors.length === 0 && <h1>Loading ...</h1>}
        <Results items={monitors}/>
    </div>
  )
}

export default Monitors