import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FeaturedItem from '../components/FeaturedItem';
import TopChoiceKeyBoard from '../components/TopChoiceKeyBoard';


function HomePage() {

    const [featuredMonitor, setFeaturedMonitor] = useState([])
    const [topKeyBoard, setTopKeyBoard] = useState()

    const getMonitors = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/monitors/?format=json')
        await setFeaturedMonitor(data[0])
    }
    const getTopChoiceKeyBoard = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/keyboards/?format=json')
        await setTopKeyBoard(data[0])
    }

    useEffect(() => {
        getMonitors()
        getTopChoiceKeyBoard()
    }, [])

  return (
    <div>
        <FeaturedItem featured={featuredMonitor} />
        <TopChoiceKeyBoard keyboard={topKeyBoard} />
    </div>
  )
}

export default HomePage