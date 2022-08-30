import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/style/DetailPage.css';

import DetailedResult from '../../components/results/DetailedResult';

function MonitorDetail() {
    const { id } = useParams();

    const [monitor, setMonitor] = useState()

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    const getMonitor = async () => {
        const { data } = await axios.get(baseUrl + `/items/${id}?format=json`)
        await setMonitor(data)
        console.log(monitor)
        console.log(data)
    }

    useEffect(() => {
        getMonitor()
    }, [])

    if(!monitor) {
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
        <h1 className="page-title">MonitorDetail</h1> 
        <DetailedResult item={monitor} getItems={getMonitor}/>
    </div>
  )
}

export default MonitorDetail