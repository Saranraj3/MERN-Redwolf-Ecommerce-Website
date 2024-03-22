import React from 'react'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import Sections from '../Components/Sections/Sections'
import CategoriesSlider from '../Components/CategoriesSlider/CategoriesSlider'
import BrandsSlider from '../Components/BrandsSlider/BrandsSlider'
import ProductList from '../Components/ProductsList/ProductList'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import PressLogos from '../Components/PressLogos/PressLogos'
import Description from '../Components/Description/Description'

const Home = () => {
  return (
    <div>
        <LogoSlider/>
        <ImageSlider/>
        <Sections/>
        <CategoriesSlider/>
        <BrandsSlider/>
        <ProductList/>
        <HomeCategory/>
        <PressLogos/>
        <Description/>
    </div>
  )
}

export default Home