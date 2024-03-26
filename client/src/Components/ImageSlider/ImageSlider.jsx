import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import alpha from '../../Assets/BannerImageSlieder/redwolf-alpha-membership.jpg'
import dtpromo from '../../Assets/BannerImageSlieder/dtg-promo.jpg'
import dropcut from '../../Assets/BannerImageSlieder/dropcut-t-shirts-india.jpg'
import fullsleeve from '../../Assets/BannerImageSlieder/fullsleeve-t-shirts.jpg'
import oversized from '../../Assets/BannerImageSlieder/oversized-t-shirts.jpg'
import naruto from '../../Assets/BannerImageSlieder/Naruto.jpg'
import tshirt from '../../Assets/BannerImageSlieder/t-shirts-india.jpg'
import xmen from '../../Assets/BannerImageSlieder/x-men-dp-wolverine.jpg'
import hoodies from '../../Assets/BannerImageSlieder/hoodies-india.jpg'
import womentshirt from '../../Assets/BannerImageSlieder/t-shirts-for-women.jpg'
import basicpremium from '../../Assets/BannerImageSlieder/redwolf-basics.jpg'


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
    <div className=' overflow-x-hidden'>
      <Slider {...settings} className='overflow-x-hidden'>
        <div>
          <img src={alpha} alt="" />
        </div>
        <div>
          <img src={dtpromo} alt="" />
        </div>
        <div>
          <img src={dropcut} alt="" />
        </div>
        <div>
          <img src={fullsleeve} alt="" />
        </div>
        <div>
          <img src={oversized} alt="" />
        </div>
        <div>
          <img src={naruto} alt="" />
        </div>
        <div>
          <img src={tshirt} alt="" />
        </div>
        <div>
          <img src={xmen} alt="" />
        </div>
        <div>
          <img src={hoodies} alt="" />
        </div>
        <div>
          <img src={womentshirt} alt="" />
        </div>
        <div>
          <img src={basicpremium} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider