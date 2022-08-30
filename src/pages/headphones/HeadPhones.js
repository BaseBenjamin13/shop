import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/style/Results.css';

import Results from '../../components/results/Results';

function HeadPhones() {

    const [headPhones, setHeadPhones] = useState([])

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
   
    useEffect(() => {
        const getHeadPhones = async () => {
            const { data } = await axios.get(baseUrl + '/headphones/?format=json')
            await setHeadPhones(data)
        }
        getHeadPhones()
    }, [])


  return (
    <div>
        {headPhones.length === 0 &&      
            <div className="loading-data-container">
                Loading
                <div className="spinner-sector spinner-red"></div>
                <div className="spinner-sector spinner-blue"></div>
                <div className="spinner-sector spinner-yellow"></div>
            </div>
        }
        <Results items={headPhones} url={'/headphones/'} />
    </div>
  )
}

export default HeadPhones