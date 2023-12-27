import React from 'react'
import drop from '../../Assets/BannerImageSlieder/Drop-cut.jpg'
import naruto from '../../Assets/BannerImageSlieder/Naruto.jpg'
import westlife from '../../Assets/BannerImageSlieder/Westlife.jpg'
import hoodie from '../../Assets/BannerImageSlieder/hoodies.jpg'
import tshirt from '../../Assets/BannerImageSlieder/redwolf-t-shirts-homepage.jpg'
import fullsleeve from '../../Assets/BannerImageSlieder/fullsleeves.jpg'
import oversized from '../../Assets/BannerImageSlieder/oversized-tees.jpg'
import womenTshirt from '../../Assets/BannerImageSlieder/t-shirts-for-women-homepage.jpg'

function ImageSlider() {
  return (
    <div className='overflow-hidden'>
        <div className='flex animate-imageslider'>
           <img src={drop} alt="" />
           <img src={naruto} alt="" />
           <img src={westlife} alt="" />
           <img src={hoodie} alt="" />
           <img src={tshirt} alt="" />
           <img src={fullsleeve} alt="" />
           <img src={oversized} alt="" />
           <img src={womenTshirt} alt="" />
        </div>
    </div>
  )
}

export default ImageSlider