import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/style/DetailPage.css';

import DetailedResult from '../../components/DetailedResult';


function MouseDetail() {
    const { id } = useParams();

    const [mouse, setMouse] = useState()

    const getMouse = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/mouses/${id}?format=json`)
        await setMouse(data)
    }

    useEffect(() => {
        getMouse()
    }, [])

    if(!mouse) {
        return (
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        )
    }

  return (
    <div className="monitor-detail">
        <h1 className="page-title">Mouse Detail</h1> 
        <DetailedResult item={mouse} />
    </div>
  )
}

export default MouseDetail