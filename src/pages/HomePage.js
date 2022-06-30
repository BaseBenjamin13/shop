import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FeaturedItem from '../components/FeaturedItem';


function HomePage() {

    const [featuredMonitor, setFeaturedMonitor] = useState([])

    useEffect(() => {
        const getMonitors = async () => {
            const { data } = await axios.get('http://127.0.0.1:8000/monitors/?format=json')
            await setFeaturedMonitor(data[0])
        }
        getMonitors()
    }, [])

  return (
    <div>
        <FeaturedItem  featured={featuredMonitor} />
    </div>
  )
}

export default HomePage