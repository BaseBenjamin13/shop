import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/style/DetailPage.css';

import DetailedResult from '../../components/DetailedResult';



function HeadPhoneDetail() {
    const { id } = useParams();

    const [headphone, setHeadphone] = useState()

    const getHeadphone = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/items/${id}?format=json`)
        setHeadphone(data)
    }

    useEffect(() => {
        getHeadphone()
    }, [])

    if(!headphone) {
        return (
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        )
    }

  return (
    <div className="monitor-detail">
        <h1 className="page-title">Headphone Detail</h1> 
        <DetailedResult item={headphone} getItems={getHeadphone} />
    </div>
  )
}

export default HeadPhoneDetail