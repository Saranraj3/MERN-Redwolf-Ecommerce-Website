import React from 'react'
import marvel from '../../Assets/BrandIcons/marvel.jpg'
import dc from '../../Assets/BrandIcons/DC-comics.jpg'
import harrypotter from '../../Assets/BrandIcons/harry-potter.jpg'
import rickanfmorty from '../../Assets/BrandIcons/rick-and-morty.jpg'
import garfield from '../../Assets/BrandIcons/garfield.jpg'
import peanuts from '../../Assets/BrandIcons/peanuts.jpg'
import redwolfbasic from '../../Assets/BrandIcons/redwolf basics.jpg'

function BrandsSlider() {
    return (
        <div>
            <h1 className='text-2xl font-extrabold text-center text-gray-700 mt-5' >FEATURED BRANDS</h1>
            <div >
                <div className='sm:animate-brandslidersm sm:gap-[5rem] sm:mt-5 flex '>
                    <img className='sm:ml-[4rem]' src={marvel} alt="" />
                    <img src={dc} alt="" />
                    <img src={harrypotter} alt="" />
                    <img src={rickanfmorty} alt="" />
                    <img src={garfield} alt="" />
                    <img src={peanuts} alt="" />
                    <img src={redwolfbasic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BrandsSlider