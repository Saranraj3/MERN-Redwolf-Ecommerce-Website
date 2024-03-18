import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lollapalooza from '../../Assets/BannerImageSlieder/lollapalooza-merchandise-india-slider.jpg'
import drop from '../../Assets/BannerImageSlieder/Drop-cut.jpg'
import naruto from '../../Assets/BannerImageSlieder/Naruto.jpg'
import hoodie from '../../Assets/BannerImageSlieder/hoodies.jpg'
import redwolf from '../../Assets/BannerImageSlieder/redwolf-t-shirts-homepage.jpg'
import fullsleeve from '../../Assets/BannerImageSlieder/fullsleeves.jpg'
import oversized from '../../Assets/BannerImageSlieder/oversized-tees.jpg'
import womenTshirt from '../../Assets/BannerImageSlieder/t-shirts-for-women-homepage.jpg'

function ImageSlider() {

  const settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className='overflow-x-hidden'>
      <Slider {...settings} className='overflow-x-hidden'>
        <div>
          <img src={lollapalooza} alt="" />
        </div>
        <div>
          <img src={drop} alt="" />
        </div>
        <div>
          <img src={naruto} alt="" />
        </div>
        <div>
          <img src={hoodie} alt="" />
        </div>
        <div>
          <img src={redwolf} alt="" />
        </div>
        <div>
          <img src={fullsleeve} alt="" />
        </div>
        <div>
          <img src={oversized} alt="" />
        </div>
        <div>
          <img src={womenTshirt} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider