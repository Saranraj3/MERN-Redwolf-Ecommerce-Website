import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import search from '../../Assets/Png/searchicon.png'
import icon from '../../Assets/Png/icon.png'
import Location from '../../Assets/Png/Location.png'
import User from '../../Assets/Png/User.png'
import Cart from '../../Assets/Png/Cart.png'
import Title from '../../Assets/Png/rw-logo-gif-transparent-red.gif'
const Navbar = () => {
  return (
    <div>
      <nav className='flex'>
        <p className=' xl:pt-2 xl:pl-4 xl:h-12 xl:text-2xl xl:w-40 lg:h-12 lg:w-40 lg:pt-2 lg:pl-4 lg:text-2xl hover: bg-Red text-white font-extrabold text-2xl'>REDWOLF</p>
        <ul className='xl:items-center xl:ml-8 xl:gap-4 xl:text-sm lg:text-sm lg:gap-5 flex items-center font-extrabold mt-2 ml-6 '>
          <li className='flex'>SHOP<RiArrowDropDownLine className='lg:h-7 lg:w-7' /> </li>
          <li className='flex'>MEN<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className='flex'>WOMEN<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className='flex'>ACCESSORIES<RiArrowDropDownLine className='lg:h-7 lg:w-7' /></li>
          <li className='flex'>CHARACTERS<RiArrowDropDownLine className=' lg:h-7 lg:w-7' /></li>
          <li className='flex'>ARTISTMERCH<RiArrowDropDownLine className='xl:h-7 xl:w-7 lg:h-7 lg:w-7 ' /></li>
        </ul>
        <div className='xl:mb-2 relative items-center flex'>
          <img className='xl:mt-2 lg:mt-2 w-4 h-4 absolute ml-6' src={search} alt="" />
          <input className='xl:w-52 lg:w-52 border border-bordergray placeholder-gray-500 bg-backgroundgray cursor-pointer rounded-md text-sm h-8 w-52 pl-6 ml-5 mt-2' type="search" placeholder='Search for Products,Shows Or Characters' />
        </div>
        <div className='xl:grid-cols-5 divide-x xl:mb-2 xl:items-center xl:gap-10 xl:ml-9 lg:gap-4 lg:ml-3 lg:mt-3 flex'>
          <img className='h-7 w-7' src={icon} alt="" />
          <img className='h-7 w-7' src={Location} alt="" />
          <img className='h-7 w-7' src={User} alt="" />
          <img className='h-7 w-7' src={Cart} alt="" />
        </div>
      </nav>
      <hr/>
        <img className='invisible' src={Title} alt="" />
    </div>
  )
}

export default Navbar