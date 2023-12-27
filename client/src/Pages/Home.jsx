import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import LogoSlider from '../Components/LogoSlider/LogoSlider'
import ImageSlider from '../Components/ImageSlider/ImageSlider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <LogoSlider/>
        <ImageSlider/>
    </div>
  )
}

export default Home