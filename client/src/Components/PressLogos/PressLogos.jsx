import React from 'react'
import rollingstone from '../../Assets/Press/redwolf-rollingstone.jpg'
import homegrown from '../../Assets/Press/redwolf-homegrown.jpg'
import hindustan from '../../Assets/Press/redwolf-hindustan-times.jpg'
import midday from '../../Assets/Press/redwolf-mid-day.jpg'
import theindianexpress from '../../Assets/Press/redwolf-the-indian-express.jpg'
import thenewindianexpress from '../../Assets/Press/redwolf-new-indian-express.jpg'
import stuff from '../../Assets/Press/stuff-logo.jpg'
import mensxp from '../../Assets/Press/redwolf-mensxp.jpg'
import llb from '../../Assets/Press/lbb-logo.jpg'
import theecnomictimes from '../../Assets/Press/redwolf-economic-times.jpg'

function PressLogos() {
  return (
    <div>
      <p className='text-2xl font-extrabold text-center text-gray-700  mt-5'>PRESS</p>
      <div className='flex  ml-8 '>
        <img src={rollingstone} alt="" />
        <img src={homegrown} alt="" />
        <img src={hindustan} alt="" />
        <img src={midday} alt="" />
        <img src={theindianexpress} alt="" />
        <img src={thenewindianexpress} alt="" />
        <img src={stuff} alt="" />
        <img src={mensxp} alt="" />
        <img src={llb} alt="" />
        <img src={theecnomictimes} alt="" />
      </div>
    </div>
  )
}

export default PressLogos