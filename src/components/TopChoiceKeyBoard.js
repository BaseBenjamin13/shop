import React from 'react'
import '../assets/style/homepage/TopChoice.css';


function TopChoiceKeyBoard({ keyboard }) {
  return (
    <div className="top-choice-keyboard-container">
        <div className="top-choice-keyboard">
            {!keyboard &&
                <div className="loading-data-container">
                    <h1 className="loading-data">Loading ...</h1>
                </div>
            }
            <h1>Top Choice Keyboard</h1>
            <img className="featured-img featured-keyboard-img" src={keyboard.featured_image_url} />
        </div>
    </div>
  )
}

export default TopChoiceKeyBoard