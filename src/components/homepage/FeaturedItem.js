import React from 'react';
import '../../assets/style/homepage/FeaturedItem.css';


function FeaturedItem({ featured }) {
  return (
    <div className="featured-container">
        <div className="featured-item">
            <h1>Featured Item</h1>
            {/* {featured.length === 0 &&
                <div className="loading-data-container">
                    <h1 className="loading-data">Loading ...</h1>
                </div>
            } */}
            <img className="featured-img" src={featured.featured_image_url} />
        </div>
    </div>
  )
}

export default FeaturedItem