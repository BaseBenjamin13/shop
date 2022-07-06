import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/style/DetailPage.css';

import DetailedResult from '../../components/DetailedResult';

function MonitorDetail() {
    const { id } = useParams();

    const [monitor, setMonitor] = useState()

    const getMonitor = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/items/${id}?format=json`)
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
                <h1 className="loading-data">Loading ...</h1>
            </div>
        )
    }

  return (
    <div className="monitor-detail">
        <h1 className="page-title">MonitorDetail</h1> 
        <DetailedResult item={monitor} />
    </div>
  )
}

export default MonitorDetail