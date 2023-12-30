import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import Sections from '../Components/Sections/Sections'
import CategoriesSlider from '../Components/CategoriesSlider/CategoriesSlider'
import BrandsSlider from '../Components/BrandsSlider/BrandsSlider'
import ProductList from '../Components/ProductsList/ProductList'
import HomeCategory from '../Components/HomeCategory/HomeCategory'
import PressLogos from '../Components/PressLogos/PressLogos'
import Description from '../Components/Description/Description'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <LogoSlider/>
        <ImageSlider/>
        <Sections/>
        <CategoriesSlider/>
        <BrandsSlider/>
        <ProductList/>
        <HomeCategory/>
        <PressLogos/>
        <Description/>
        <Footer/>
    </div>
  )
}

export default Home