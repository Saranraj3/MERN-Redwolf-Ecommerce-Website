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
      <div className=' sm:animate-presslider flex  ml-8 '>
        <img className='sm:ml-[2rem]' src={rollingstone} alt="" />
        <img className='sm:ml-[8rem]' src={homegrown} alt="" />
        <img className='sm:ml-[8rem]' src={hindustan} alt="" />
        <img className='sm:ml-[8rem]' src={midday} alt="" />
        <img className='sm:ml-[8rem]' src={theindianexpress} alt="" />
        <img className='sm:ml-[8rem]' src={thenewindianexpress} alt="" />
        <img className='sm:ml-[8rem]' src={stuff} alt="" />
        <img className='sm:ml-[8rem]' src={mensxp} alt="" />
        <img className='sm:ml-[8rem]' src={llb} alt="" />
        <img className='sm:ml-[8rem]' src={theecnomictimes} alt="" />
      </div>
    </div>
  )
}

export default PressLogos