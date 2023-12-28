import React from 'react'
import featuredcategorytshirt from '../../Assets/Categories/featured-category-t-shirts-23.jpg'
import oversizedTshirt from '../../Assets/Categories/featured-category-oversized-t-shirts-23.jpg'
import femaltTshirt from '../../Assets/Categories/featured-category-female-t-shirt.jpg'
import stickers from '../../Assets/Categories/featured-category-stickers-23.jpg'
import phonecase from '../../Assets/Categories/featured-category-phone-cases-23.jpg'
import coaster from '../../Assets/Categories/featured-category-coasters-23.jpg'
import socks from '../../Assets/Categories/featured-category-socks-23.jpg'
import dropcutS from '../../Assets/Categories/featured-category-oversized-drop-cut.jpg'
import sweatshirts from '../../Assets/Categories/featured-category-oversized-sweat-shirts-23.jpg'
import feamteoversized from '../../Assets/Categories/featured-category-female-oversized-t-shirt.jpg'
import mugs from '../../Assets/Categories/featured-category-mugs-23.jpg'
import poster from '../../Assets/Categories/featured-category-posters-23.jpg'
import baseballcap from '../../Assets/Categories/featured-category-baseball-caps-23.jpg'
import mask from '../../Assets/Categories/featured-category-masks-23.jpg'

function CategoriesSlider() {
  return (

    <div>
      <h1 className='text-2xl font-extrabold text-center text-gray-700 mt-5' >FEATURED CATEGORIES</h1>
      <p className='mt-1 text-center font-light italic text-gray-700 '>Discover amazing designs by artists from all over the globe!</p>

      <div className='overflow-hidden'>
        <div className='flex animate-logoslider w-[15rem] mt-5'>
          <img className='relative' src={featuredcategorytshirt} alt="" />
          <p className='text-sm text-white absolute bg-Red'>T-SHIRTS</p>
          <img className='relative' src={oversizedTshirt} alt="" />
          <p className=' bg-Red text-white text-sm absolute ml-[15rem]'>OVERSIZED</p>
          <img className='relative' src={femaltTshirt} alt="" />
          <p className=' bg-Red text-white text-sm absolute ml-[30rem]'>WOMENSTSHIRTS</p>
          <img className='relative' src={stickers} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[45rem]'>STICKERS</p>
          <img className='relative' src={phonecase} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[60rem]' >MOBILECOVERS</p>
          <img className='relative' src={coaster} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[75rem]'>COASTERS</p>
          <img className='relative' src={socks} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[90rem]'>SOCKS</p>
          <img className='relative' src={dropcutS} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[105rem]'>DROPCUTS</p>
          <img className='relative' src={sweatshirts} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[120rem]'>SWEATSHIRTS</p>
          <img className='relative' src={feamteoversized} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[135rem]'>FEMALEOVERSIZED</p>
          <img className='relative' src={mugs} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[150rem]'>MUGS</p>
          <img className='relative' src={poster} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[165rem]'>POSTERS</p>
          <img className='relative' src={baseballcap} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[180rem]'>BASEBALLCAPS</p>
          <img className='relative' src={mask} alt="" />
          <p className='bg-Red text-white text-sm absolute ml-[195rem]'>FACEMASKS</p>
        </div>
      </div>
    </div>

  )
}

export default CategoriesSlider;