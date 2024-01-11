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
    <div className=''>
      <p className='sm:text-center sm:font-extrabold sm:text-2xl sm:h-10 sm:pt-1 lg:invisible relative bg-Red text-white font-extrabold '>REDWOLF</p>
       <div className='sm:left-0 absolute' >
       <img className='sm:mt-[-2.4rem] sm:ml-4  sm:h-8 sm:w-8  'src={smmenu} alt="" />
       </div>
      <div className='sm:right-0  sm:h-8 sm:w-8 sm:mt-[-2.4rem] lg:invisible absolute flex '>
        <img className='sm:ml-[-3rem]'src={smsearch} alt="" />
        <img className=' 'src={smcart} alt="" />
      </div>
      <nav className=' sm:invisible lg:visible lg:mt-[-2.5rem] flex'>
        <p className='xl:w-[11rem] xl:h-[3rem] xl:pt-2 text-center lg:h-10 lg:text-2xl font-extrabold text-white bg-Red'>REDWOLF</p>
        <img className='xl:ml-[-10rem] xl:mt-1 lg:visible xs:invisible opacity-0 transition-opacity duration-300 transform hover:opacity-100  h-10 w-40  ' src={redwolftitlegif} alt="" />
        <ul className='xl:ml-8 xl:gap-3 xl:text-sm lg:text-[12px] lg:mt-3 lg:ml-[-4rem] font-extrabold flex'>
          <li className='flex hover:text-Red'>SHOP<RiArrowDropDownLine className='lg:h-7 lg:w-7'/> </li>
          <li className='flex hover:text-Red'>MEN<RiArrowDropDownLine className='lg:h-7 lg:w-7 '/></li>
          <li className='flex hover:text-Red'>WOMEN<RiArrowDropDownLine className='lg:h-7 lg:w-7 '/></li>
          <li className='xl:visible lg:invisible flex hover:text-Red'>ACCESSORIES<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
          <li className='xl:ml-1 lg:ml-[-6.8rem] flex hover:text-Red'>CHARACTERS<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
          <li className='flex hover:text-Red'>ARTISTMERCH<RiArrowDropDownLine className='lg:h-7 lg:w-7'/></li>
        </ul>
        <div className='relative  items-center flex'>
          <img className='xl:ml-6 xl:mt-1 lg:h-4 lg:w-4 lg:ml-2 absolute ' src={search} alt="" />
          <input className='divide-x grid grid-cols-1 xl:w-[15rem] xl:pl-14 lg:h-8 lg:w-[10rem] lg:text-sm lg:font-light lg:pl-7 border border-bordergray placeholder-gray-500 bg-backgroundgray cursor-pointer rounded-md ' type="search" placeholder='Search for Products,Shows Or Characters' />
        </div>
        <div className='divide-x  xl:gap-8 xl:mt-2 lg:h-7 lg:gap-5 lg:ml-10 lg:mt-1 flex'>
          <img className='' src={icon} alt="" />
          <img className='' src={Location} alt="" />
          <img className='' src={User} alt="" />
          <img className='' src={Cart} alt="" />
        </div>
      </nav>
      <hr className='sm:mt-[-2.5rem] '/>
    </div>
  )
}

export default Navbar