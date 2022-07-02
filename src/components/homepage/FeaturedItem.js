import React from 'react';
import '../../assets/style/homepage/FeaturedItem.css';
import { Link } from 'react-router-dom';


function FeaturedItem({ featured }) {
  return (
    <div className="featured-container">
        <div className="featured-item">
            <Link className="link" to={'/monitors/' + featured.id}>
                <h1>Featured Item</h1>
                <img className="featured-img" src={featured.featured_image_url} />
            </Link>
        </div>
    </div>
  )
}

export default FeaturedItem