import React from 'react'
import batman from '../../Assets/Logos/batman-merchandise-india 1.jpg'
import ben10 from '../../Assets/Logos/ben10-merchandise.jpg'
import cartoon from './../../Assets/Logos/cartoon-network-t-shirts-india.jpg'
import dc from '../../Assets/Logos/dc-comics-merchandise2.jpg'
import deadpool from '../../Assets/Logos/Deadpool-1.jpg'
import disney from '../../Assets/Logos/disney-logo-3.jpg'
import friends from '../../Assets/Logos/friends-merchandise-india.jpg'
import game from '../../Assets/Logos/game-of-thrones-merchandise.jpg'
import garfield from '../../Assets/Logos/garfield-merchandise-india.jpg'
import harry from '../../Assets/Logos/harry-potter-merchandise.jpg'
import isro from '../../Assets/Logos/isro-merchandise-india.jpg'
import loki from '../../Assets/Logos/Loki-logo.jpg'
import marvel from '../../Assets/Logos/marvel-merchandise-india.jpg'
import naruto from '../../Assets/Logos/Naruto.jpg'
import nasa from '../../Assets/Logos/nasa-meatball-logo.jpg'
import peanuts from '../../Assets/Logos/peanuts-snoopy-merchandise.jpg'
import rick from '../../Assets/Logos/rick-and-morty-merchandise-india.jpg'
import spider from '../../Assets/Logos/spider-man-merchandise-india2.jpg'
import star from '../../Assets/Logos/star-wars-merchandise-india.jpg'
import superman from '../../Assets/Logos/Superman-1.jpg'
import tom from '../../Assets/Logos/tom-and-jerry-logo-1.jpg'

function LogoSlider() {
  return (
    <div className=' overflow-hidden whitespace-nowrap'>
        <div className='sm:w-[18%] sm:gap-5 animate-slidesm flex'>
        <img className='' src={batman} alt="" />
        <img className=''src={dc} alt="" />
        <img className=''src={harry} alt="" />
        <img className=''src={ben10} alt="" />
        <img className=''src={rick} alt="" />
        <img className=''src={game} alt="" />
        <img className=''src={deadpool} alt="" />
        <img className=''src={garfield} alt="" />
        <img className=''src={isro} alt="" />
        <img className=''src={superman} alt="" />
        <img className=''src={cartoon} alt="" />
        <img className='' src={friends} alt="" />
        <img className=''src={nasa} alt="" />
        <img className=''src={star} alt="" />
        <img className=''src={disney} alt="" />
        <img className=''src={tom} alt="" />
        <img className=''src={peanuts} alt="" />
        <img className=''src={spider} alt="" />
        <img className=''src={naruto} alt="" />
        <img className=''src={marvel} alt="" />
        <img className=''src={loki} alt="" />
        </div>
    </div>
  )
}

export default LogoSlider