import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FeaturedItem from '../components/homepage/FeaturedItem';
import TopChoiceKeyBoard from '../components/homepage/TopChoiceKeyBoard';
import TopChoiceMouse from '../components/homepage/TopChoiceMouse';
import TopChoiceHeadPhones from '../components/homepage/TopChoiceHeadPhones';


function HomePage() {

    const [featuredMonitor, setFeaturedMonitor] = useState()
    const [topKeyBoard, setTopKeyBoard] = useState()
    const [topMouse, setTopMouse] = useState()
    const [topHeadPhone, setTopHeadPhone] = useState()

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    const getMonitors = async () => {
        const { data } = await axios.get(baseUrl + '/items/2?format=json')
        setFeaturedMonitor(data)
    }
    const getTopChoiceKeyBoard = async () => {
        const { data } = await axios.get(baseUrl + '/items/3?format=json')
        setTopKeyBoard(data)
    }
    const getTopChoiceMouse = async () => {
        const { data } = await axios.get(baseUrl + '/items/4?format=json')
        setTopMouse(data)
    }
    const getTopChoiceHeadPhone = async () => {
        const { data } = await axios.get(baseUrl + '/items/1?format=json')
        setTopHeadPhone(data)
    }

    useEffect(() => {
        getMonitors()
        getTopChoiceKeyBoard()
        getTopChoiceMouse()
        getTopChoiceHeadPhone()
    }, [])

    if(!featuredMonitor && !topKeyBoard && !topMouse && !topHeadPhone) {
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
    <div>
        {featuredMonitor && <FeaturedItem featured={featuredMonitor} />}
        {topKeyBoard && <TopChoiceKeyBoard keyboard={topKeyBoard} url={'/keyboards/'} /> }
        {topMouse && <TopChoiceMouse mouse={topMouse} url={'/mouses/'}/> }
        {topHeadPhone && <TopChoiceHeadPhones headphone={topHeadPhone} url={'/headphones/'}/> }
    </div> 
  )
}

export default HomePage