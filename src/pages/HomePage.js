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

    const getMonitors = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/items/2?format=json')
        await setFeaturedMonitor(data)
        console.log(data)
    }
    const getTopChoiceKeyBoard = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/items/3?format=json')
        await setTopKeyBoard(data)
    }
    const getTopChoiceMouse = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/items/4?format=json')
        await setTopMouse(data)
    }
    const getTopChoiceHeadPhone = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/items/1?format=json')
        await setTopHeadPhone(data)
    }

    useEffect(() => {
        getMonitors()
        getTopChoiceKeyBoard()
        getTopChoiceMouse()
        getTopChoiceHeadPhone()
    }, [])

    if(!featuredMonitor === 0 && !topKeyBoard && !topMouse && !topHeadPhone) {
        return (
            <div className="loading-data-container">
                <h1 className="loading-data">Loading ...</h1>
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