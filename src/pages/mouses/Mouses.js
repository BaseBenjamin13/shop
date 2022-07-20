import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/style/Results.css';

import Results from '../../components/results/Results';

function Mouses() {

    const [mouses, setMouses] = useState([])

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
   
    useEffect(() => {
        const getMouses = async () => {
            const { data } = await axios.get(baseUrl + '/mouses/?format=json')
            await setMouses(data)
        }
        getMouses()
    }, [])


  return (
    <div>
        {mouses.length === 0 && 
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        }
        <Results items={mouses} url={'/mouses/'} />
    </div>
  )
}

export default Mouses