import React, { useState } from 'react';

import '../assets/style/DetailPage.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import ImageModal from './ImageModal';

function DetailedCarousel({ item }) {

    const [modal, setModal] = useState({show: false, image: ''})

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

    function showModal(index) {
        setModal({show: !modal.show, image: item.image_urls[index]})
        console.log(modal.show)
    }

 
  return (
      <div>
        {modal.show && <ImageModal img={modal.image} modal={modal} setModal={setModal} />}
        <div className="detailed-img-div">
            <Slider {...settings}>
                {
                    item.image_urls.map((img, index) => {
                        return (
                            <div key={index} onClick={() => showModal(index)} >
                                <img className="detailed-img myImg" src={img} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default DetailedCarousel