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
      <div className=' md:animate-presslidermd flex sm:gap-[7rem] '>
        <img className='' src={rollingstone} alt="" />
        <img className='' src={homegrown} alt="" />
        <img className='' src={hindustan} alt="" />
        <img className='' src={midday} alt="" />
        <img className='' src={theindianexpress} alt="" />
        <img className='' src={thenewindianexpress} alt="" />
        <img className='' src={stuff} alt="" />
        <img className='' src={mensxp} alt="" />
        <img className='' src={llb} alt="" />
        <img className='' src={theecnomictimes} alt="" />
      </div>
    </div>
  )
}

export default PressLogos