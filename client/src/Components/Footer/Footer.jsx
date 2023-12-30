import React from 'react'
import facebook from '../../Assets/FooterIcons/facebook-.png'
import twitter from '../../Assets/FooterIcons/twitter.png'
import instagram from '../../Assets/FooterIcons/instagram.png'
import pinterest from '../../Assets/FooterIcons/pinterest.png'
import deliverytruck from '../../Assets/FooterIcons/fast-delivery.png'
import indianruppe from '../../Assets/FooterIcons/rupee-indian.png'
import boxorder from '../../Assets/FooterIcons/sent.png'
import cicon from '../../Assets/FooterIcons/c-icon.png'

function Footer() {
  return (
    <div className='box-border mt-5 bg-LightBlack w-[100%] h-[38rem]'>
      <p className='text-footercolor  ml-20 pt-[4rem] '>Subscribe to our Newsletter for updates and exclusive coupons & deals</p>
      <div className='mt-[-2rem]'>
        <input className=' font-light text-sm placeholder-black pl-2 w-[25rem] h-[3rem] ml-[38rem] rounded-md ' type="email" placeholder='Enter Your Email Address' name="" id="" />
        <button className=' text-sm font-extrabold ml-3 bg-Red text-white w-[10rem] h-[3rem] rounded-md ' type='submit'>Submit</button>
      </div>
      <div>
        <h3 className='ml-36 mt-6 text-white text-sm'>Information</h3>
        <p className='text-footercolor text-sm ml-36 mt-2'>About Us </p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Delivery Information</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Return Policy</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Frequently Asked</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Questions</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Term & Conditions</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Privacy Policy</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Bulk & Custom</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Orders</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Preorder Campaigns</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Campus Abassador</p>
        <p className='text-footercolor text-sm ml-36 mt-1'>Program</p>
      </div>
      <div>
        <h3 className='text-white text-sm ml-[20rem] mt-[-19.6rem]'>Extras</h3>
        <p className='text-footercolor text-sm ml-[20rem] mt-1'>Gift Vouchers</p>
        <p className='text-footercolor text-sm ml-[20rem] mt-1'>Afflliates</p>
        <p className='text-footercolor text-sm ml-[20rem] mt-1'>Fan Wall</p>
        <p className='text-footercolor text-sm ml-[20rem] mt-1'>Site Map</p>
      </div>
      <div>
        <h3 className='text-white text-sm ml-[28rem] mt-[-7.4rem]'>Customer Services</h3>
        <p className='text-footercolor text-sm ml-[28rem] mt-1' >Contact Us</p>
        <p className='text-footercolor text-sm ml-[28rem] mt-1'>Request A Return</p>
      </div>
      <div>
        <h3 className='text-white text-sm ml-[38rem] mt-[-4.2rem]'>My Account</h3>
        <p className='text-footercolor text-sm ml-[38rem] mt-1'>My Account</p>
        <p className='text-footercolor text-sm ml-[38rem] mt-1'>Order History</p>
        <p className='text-footercolor text-sm ml-[38rem] mt-1'>Newslatter</p>
      </div>
      <div >
        <h3 className='text-white text-sm ml-[46rem] mt-[-5.8rem]' >Social</h3>
        <img className='w-9 ml-[46rem]' src={facebook} alt="" />
        <img className='w-9 ml-[49rem] mt-[-2.2rem]' src={twitter} alt="" />
        <img className='w-9 ml-[52rem] mt-[-2.3rem]' src={instagram} alt="" />
        <img className='w-9 ml-[55rem] mt-[-2.4rem]' src={pinterest} alt="" />
      </div>
      <div>
        <h3 className='text-white text-md mt-[20rem] text-center '>Our site uses secure payment gateways. All major credit & debit cards accepted.</h3>
        <img className='ml-36 mt-5' src={deliverytruck} alt="" />
        <p className='text-footercolor mt-[-3rem] ml-[12rem]  '>FREE SHIPPING ON ALL <br />PREPAID ORDERS OVER Rs. <br /> 499</p>
        <img className='ml-[34rem] mt-[-4rem]' src={indianruppe} alt="" />
        <p className='text-footercolor mt-[-2.2rem] ml-[37rem] '>CASH ON DELIVERY AVAILABLE <br /> TO MOST PARTS OF INDIA</p>
        <img className='ml-[60rem] mt-[-3rem] ' src={boxorder} alt="" />
        <p className='text-footercolor mt-[-2rem] ml-[63rem] ' >EASY 15 DAY <br /> RETURN POLICY</p>
      </div>
      <div className='w-[100%] h-[3rem] bg-gray-600 mt-7 '>
        <img className='w-4 ml-[34rem] pt-4 ' src={cicon} alt="" />
        <p className='text-white text-sm mt-[-1rem] text-center '>2023 Redwolf, All Rights Reserved</p>
      </div>
      <div className='bg-white w-[100%] h-[1rem]'>
      </div>
    </div>
  )
}

export default Footer