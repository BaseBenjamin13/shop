import React from 'react'
import '../../assets/style/homepage/TopChoice.css';
import { Link } from 'react-router-dom';


function TopChoiceMouse({ mouse, url }) {
  return (
    <div className="top-choice-mouse-container">
        <div className="top-choice-mouse">
            <Link to={url + mouse.id}>
                <h1>Top Choice Mouse</h1>
                <img className="featured-img featured-mouse-img" src={mouse.featured_image_url} />
            </Link>
        </div>
    </div>
  )
}

export default TopChoiceMouse