import React from 'react'
import '../../assets/style/homepage/HomePage.css';
import { Link } from 'react-router-dom';


function TopChoiceKeyBoard({ keyboard, url }) {
  return (
    <div className="top-choice-keyboard-container">
        <div className="top-choice-keyboard">
            <Link className="link" to={url + keyboard.id}>
                <h1>Top Choice Keyboard</h1>
                <img className="featured-img featured-keyboard-img" src={keyboard.featured_image_url} />
            </Link>
        </div>
    </div>
  )
}

export default TopChoiceKeyBoard