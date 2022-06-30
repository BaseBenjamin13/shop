import React from 'react';
import '../assets/style/FeaturedItem.css';


function FeaturedItem({ featured }) {
  return (
    <div className="featured-container">
        <div className="featured-item">
            <h1>Featured Item</h1>
            <img className="featured-img" src={featured.featured_image_url} />
        </div>
    </div>
  )
}

export default FeaturedItem