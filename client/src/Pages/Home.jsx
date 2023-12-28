import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import Sections from '../Components/Sections/Sections'
import CategoriesSlider from '../Components/CategoriesSlider/CategoriesSlider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <LogoSlider/>
        <ImageSlider/>
        <Sections/>
        <CategoriesSlider/>
    </div>
  )
}

export default Home