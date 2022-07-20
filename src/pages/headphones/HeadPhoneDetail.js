import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/style/DetailPage.css';

import DetailedResult from '../../components/results/DetailedResult';



function HeadPhoneDetail() {
    const { id } = useParams();

    const [headphone, setHeadphone] = useState()

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    const getHeadphone = async () => {
        const { data } = await axios.get(baseUrl + `/items/${id}?format=json`)
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