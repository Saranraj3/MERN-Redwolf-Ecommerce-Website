import React from 'react'
import redwolftitlegif from '../../Assets/Png/rw-logo-gif-transparent-red.gif'
import { RiArrowDropDownLine } from "react-icons/ri";
import search from '../../Assets/Png/searchicon.png'
import icon from '../../Assets/Png/icon.png'
import Location from '../../Assets/Png/Location.png'
import User from '../../Assets/Png/User.png'
import Cart from '../../Assets/Png/Cart.png'
import smsearch from '../../Assets/Png/sm-search.png'
import smmenu from '../../Assets/Png/sm-menu.png'
import smcart from '../../Assets/Png/sm-cart.png'
const Navbar = () => {
  return (
    <div>
      <p className='sm:text-center sm:font-extrabold sm:text-2xl sm:h-10 sm:pt-1 lg:invisible relative bg-Red text-white font-extrabold '>REDWOLF</p>
       <div className=' sm:left-0 absolute' >
       <img className='lg:invisible sm:mt-[-2.4rem] sm:ml-4  sm:h-8 sm:w-8  'src={smmenu} alt="" />
       </div>
      <div className='lg:invisible sm:right-0  sm:h-8 sm:w-8 sm:mt-[-2.4rem] absolute flex '>
        <img className='sm:ml-[-3rem]'src={smsearch} alt="" />
        <img className=' 'src={smcart} alt="" />
      </div>
      <nav className='lg:mt-[-2.5rem] lg:visible sm:invisible flex'>
        <p className='lg:h-[3rem] lg:pt-1 lg:text-2xl lg:text-center font-extrabold text-white bg-Red'>REDWOLF</p>
        <img className='lg:h-10 lg:ml-[-8rem] opacity-0 transition-opacity duration-300 transform hover:opacity-100' src={redwolftitlegif} alt="" />
        <ul className='lg:mt-3 lg:ml-[5rem] lg:gap-1 lg:text-xs font-extrabold flex'>
          <li className='flex hover:text-Red'>SHOP<RiArrowDropDownLine className='lg:h-7 lg:w-7'/> </li>
          <li className='flex hover:text-Red'>MEN<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
          <li className='flex hover:text-Red'>WOMEN<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
          <li className='lg:invisible flex hover:text-Red'>ACCESSORIES<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
          <li className='lg:ml-[-7.3rem] flex hover:text-Red'>CHARACTERS<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
          <li className='flex hover:text-Red'>ARTISTMERCH<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
        </ul>
        <div className='relative lg:mt-[-0.5rem] items-center flex'>
          <img className='lg:h-4 lg:ml-2 absolute ' src={search} alt="" />
          <input className='lg:h-[2rem] lg:w-[79%] lg:pl-[2rem] lg:text-xs border border-bordergray placeholder-gray-500 bg-backgroundgray cursor-pointer rounded-md ' type="search" placeholder='Search for Products,Shows Or Characters' />
        </div>
        <div className='lg:h-7 lg:mt-2 lg:right-0 lg:gap-5 divide-x flex'>
          <img className='' src={icon} alt="" />
          <img className='' src={Location} alt="" />
          <img className='' src={User} alt="" />
          <img className='' src={Cart} alt="" />
        </div>
      </nav>
      <hr className='lg:mt-0 sm:mt-[-3.1rem] '/>
    </div>
  )
}

export default Navbar