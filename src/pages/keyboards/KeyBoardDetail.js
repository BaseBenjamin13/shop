import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/style/DetailPage.css';

import DetailedResult from '../../components/results/DetailedResult';


function KeyBoardDetail() {
    const { id } = useParams();

    const [keyboard, setKeyboard] = useState()

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    const getKeyboard = async () => {
        const { data } = await axios.get(baseUrl + `/items/${id}?format=json`)
        await setKeyboard(data)
    }

    useEffect(() => {
        getKeyboard()
    }, [])

    if(!keyboard) {
        return (
            <div className="loading-data-container">
                Loading
                <div className="spinner-sector spinner-red"></div>
                <div className="spinner-sector spinner-blue"></div>
                <div className="spinner-sector spinner-yellow"></div>
            </div>
        )
    }

  return (
    <div className="monitor-detail">
        <h1 className="page-title">Keyboard Detail</h1> 
        <DetailedResult item={keyboard} getItems={getKeyboard}/>
    </div>
  )
}

export default KeyBoardDetail