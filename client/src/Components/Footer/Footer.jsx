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
    <div className=' box-border sm:mt-5 bg-LightBlack sm:w-[100%]'>
      <p className='sm:text-sm text-center sm:text-footercolor sm:pt-[4rem] '>Subscribe to our Newsletter for updates and exclusive coupons & deals</p>
      <div className='sm:mt-[-2rem]'>
        <input className='sm:ml-3 sm:mt-[3rem] sm:pl-2 sm:w-[95%] sm:h-[3rem] font-light sm:text-sm placeholder-black rounded-md ' type="email" placeholder='Enter Your Email Address' name="" id="" />
        <button className='sm:ml-3 sm:mt-5 sm:w-[95%] sm:h-[3rem] sm:text-sm font-extrabold  bg-Red text-white rounded-md ' type='submit'>Submit</button>
      </div>
      <div>
        <h3 className='sm:ml-[4rem] sm:mt-6  sm:text-white sm:text-sm'>Information</h3>
        <p className='sm:ml-[4.5rem] sm:mt-2 sm:text-sm sm:text-footercolor '>About Us </p>
        <p className='sm:ml-[2rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Delivery Information</p>
        <p className='sm:ml-[3.5rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Return Policy</p>
        <p className='sm:ml-[1rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Frequently Asked</p>
        <p className='sm:ml-[8.2rem] sm:mt-[-1.3rem] sm:text-footercolor sm:text-sm'>Questions</p>
        <p className='sm:ml-[3rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Term & Conditions</p>
        <p className='sm:ml-[4rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Privacy Policy</p>
        <p className='sm:ml-[2rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Bulk & Custom</p>
        <p className='sm:ml-[8rem] sm:mt-[-1.3rem] sm:text-footercolor sm:text-sm'>Orders</p>
        <p className='sm:ml-[2.4rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Preorder Campaigns</p>
        <p className='sm:ml-[1rem] sm:mt-1 sm:text-footercolor sm:text-sm'>Campus Abassador</p>
        <p className='sm:ml-[8.7rem] sm:mt-[-1.2rem] sm:text-footercolor sm:text-sm'>Program</p>
      </div>
      <div>
        <h3 className='sm:text-right sm:mr-[3.5rem] sm:text-white sm:text-sm sm:mt-[-15rem]'>Extras</h3>
        <p className='sm:text-right sm:mr-[2rem] sm:text-footercolor sm:text-sm sm:mt-2'>Gift Vouchers</p>
        <p className='sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1'>Afflliates</p>
        <p className='sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1'>Fan Wall</p>
        <p className='sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1'>Site Map</p>
      </div>
      <div>
        <h3 className='sm:ml-[2rem] sm:mt-[9rem] sm:text-white sm:text-sm'>Customer Services</h3>
        <p className='sm:ml-[3rem] sm:mt-2 sm:text-footercolor sm:text-sm' >Contact Us</p>
        <p className='sm:ml-[2rem] sm:text-footercolor sm:text-sm'>Request A Return</p>
      </div>
      <div>
        <h3 className='sm:text-right sm:mr-[3rem] sm:mt-[-4.5rem] sm:text-white sm:text-sm '>My Account</h3>
        <p className='sm:text-right sm:mr-[3rem] sm:sm:text-footercolor sm:text-sm sm:mt-1  '>My Account</p>
        <p className='sm:text-right sm:mr-[2.6rem] sm:text-footercolor sm:text-sm sm:mt-1  '>Order History</p>
        <p className='sm:text-right sm:mr-[3rem] sm:text-footercolor sm:text-sm sm:mt-1 '>Newslatter</p>
      </div>
      <div >
        <h3 className='sm:text-center sm:mt-[2rem] sm:text-sm text-white'>Social</h3>
        <div className='sm:ml-[47%] sm:w-8 items-center justify-center sm:gap-8 flex' >
          <img className=' hover:bg-black' src={facebook} alt="" />
          <img className=' hover:bg-black' src={twitter} alt="" />
          <img className=' hover:bg-black' src={instagram} alt="" />
          <img className=' hover:bg-black' src={pinterest} alt="" />
        </div>
      </div>
      <div>
        <h3 className=' sm:mt-5 sm:text-center text-white '>Our site uses secure payment gateways. All major credit & debit cards accepted.</h3>
        <img className=' sm:ml-[1rem] sm:mt-[2rem]' src={deliverytruck} alt="" />
        <p className='sm:text-footercolor sm:mt-[-2rem] sm:ml-[4rem]  '>FREE SHIPPING ON ALL PREPAID ORDERS OVER Rs. 499</p>
        <img className='sm:ml-[1rem] sm:mt-[1rem]' src={indianruppe} alt="" />
        <p className='sm:text-footercolor sm:mt-[-2rem] sm:ml-[4rem] '>CASH ON DELIVERY AVAILABLE TO MOST PARTS OF INDIA</p>
        <img className='sm:ml-[1rem] sm:mt-[1rem] ' src={boxorder} alt="" />
        <p className='sm:text-footercolor sm:mt-[-2rem] sm:ml-[4rem] ' >EASY 15 DAY RETURN POLICY</p>
      </div>
      <div className='sm:w-full sm:h-3rem bg-gray-700 sm:mt-5 flex items-center justify-center'>
        <img className='sm:w-4' src={cicon} alt="" />
        <p className='text-white sm:text-sm sm:text-center'>2023 Redwolf, All Rights Reserved</p>
      </div>
      <div className='bg-white sm:w-full sm:h-[1rem]'>
      </div>
    </div>
  )
}

export default Footer