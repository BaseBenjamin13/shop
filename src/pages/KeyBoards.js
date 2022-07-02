import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/style/Results.css';

import Results from '../components/Results';

function KeyBoards() {

    const [keyboards, setKeyboards] = useState([])

   
    useEffect(() => {
        const getKeyboards = async () => {
            const { data } = await axios.get('http://127.0.0.1:8000/keyboards/?format=json')
            await setKeyboards(data)
        }
        getKeyboards()
    }, [])


  return (
    <div>
        {keyboards.length === 0 && 
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        }
        <Results items={keyboards} url={'/keyboards/'} />
    </div>
  )
}

export default KeyBoards