import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FeaturedItem from '../components/homepage/FeaturedItem';
import TopChoiceKeyBoard from '../components/homepage/TopChoiceKeyBoard';
import TopChoiceMouse from '../components/homepage/TopChoiceMouse';


function HomePage() {

    const [featuredMonitor, setFeaturedMonitor] = useState([])
    const [topKeyBoard, setTopKeyBoard] = useState()
    const [topMouse, setTopMouse] = useState()

    const getMonitors = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/monitors/?format=json')
        await setFeaturedMonitor(data[0])
    }
    const getTopChoiceKeyBoard = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/keyboards/?format=json')
        await setTopKeyBoard(data[0])
    }
    const getTopChoiceMouse = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/mouses/?format=json')
        await setTopMouse(data[0])
        console.log(data[0])
    }

    useEffect(() => {
        getMonitors()
        getTopChoiceKeyBoard()
        getTopChoiceMouse()
    }, [])

    if(featuredMonitor.length === 0 && !topKeyBoard && !topMouse) {
        return (
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
            </div>
        )
    }

  return (
    <div>
        {featuredMonitor && <FeaturedItem featured={featuredMonitor} />}
        {topKeyBoard && <TopChoiceKeyBoard keyboard={topKeyBoard} /> }
        {topMouse && <TopChoiceMouse mouse={topMouse} /> }
    </div> 
  )
}

export default HomePage