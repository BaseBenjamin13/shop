import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../assets/style/Results.css';

import NavBar from '../components/NavBar';
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

    if(!monitors){
        return <h1>Loading ...</h1>
    }

  return (
    <div>
        <NavBar />
        <h1>Monitors</h1>
        <Results items={monitors}/>
    </div>
  )
}

export default Monitors