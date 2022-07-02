import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/style/Results.css';

import Results from '../../components/Results';

function Mouses() {

    const [mouses, setMouses] = useState([])

   
    useEffect(() => {
        const getMouses = async () => {
            const { data } = await axios.get('http://127.0.0.1:8000/mouses/?format=json')
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