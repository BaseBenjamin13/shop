import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/style/Results.css';

import Results from '../../components/results/Results';

function HeadPhones() {

    const [headPhones, setHeadPhones] = useState([])

   
    useEffect(() => {
        const getHeadPhones = async () => {
            const { data } = await axios.get('http://127.0.0.1:8000/headphones/?format=json')
            await setHeadPhones(data)
        }
        getHeadPhones()
    }, [])


  return (
    <div>
        {headPhones.length === 0 && 
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        }
        <Results items={headPhones} url={'/headphones/'} />
    </div>
  )
}

export default HeadPhones