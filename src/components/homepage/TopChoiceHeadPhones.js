import React from 'react'
import '../../assets/style/homepage/TopChoice.css';
import { Link } from 'react-router-dom';


function TopChoiceHeadPhones({ headphone, url }) {
  return (
    <div className="top-choice-headphone-container">
        <div className="top-choice-headphone">
            <Link to={url + headphone.id}>
                <h1>Top Choice HeadPhones</h1>
                <img className="featured-img featured-headphone-img" src={headphone.featured_image_url} />
            </Link>
        </div>
    </div>
  )
}

export default TopChoiceHeadPhones