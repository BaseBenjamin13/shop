import React from 'react';

import '../assets/style/DetailPage.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function DetailedCarousel({ item }) {

    const settings = {
        dots: true,
        fade: false,
        infinite: true,
        speed:400,
        slidesToShow: 1,
        arrows: true,
        slidesToStroll: 1,
        className: "slides"
    }


  return (
    <div>
                <div className="detailed-img-div">
            <Slider {...settings}>
                {
                    item.image_urls.map((img) => {
                        return <img className="detailed-img" src={img} />
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default DetailedCarousel