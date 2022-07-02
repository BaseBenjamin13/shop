import React from 'react'
import '../../assets/style/homepage/TopChoice.css';


function TopChoiceMouse({ mouse }) {
  return (
    <div className="top-choice-mouse-container">
        <div className="top-choice-mouse">
            <h1>Top Choice Mouse</h1>
            <img className="featured-img featured-mouse-img" src={mouse.featured_image_url} />
        </div>
    </div>
  )
}

export default TopChoiceMouse