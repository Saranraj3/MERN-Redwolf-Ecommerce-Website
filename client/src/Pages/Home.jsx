import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import Sections from '../Components/Sections/Sections'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <LogoSlider/>
        <ImageSlider/>
        <Sections/>
    </div>
  )
}

export default Home