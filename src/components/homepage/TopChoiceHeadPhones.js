import React from 'react'
import '../../assets/style/homepage/TopChoice.css';


function TopChoiceHeadPhones({ headphone }) {
  return (
    <div className="top-choice-headphone-container">
        <div className="top-choice-headphone">
            <h1>Top Choice HeadPhones</h1>
            <img className="featured-img featured-headphone-img" src={headphone.featured_image_url} />
        </div>
    </div>
  )
}

export default TopChoiceHeadPhones