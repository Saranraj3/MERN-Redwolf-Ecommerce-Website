import React from 'react'
import anime from '../../Assets/SectionPngs/featured-theme-anime.jpg'
import superhero from '../../Assets/SectionPngs/featured-theme-superhero.jpg'
import glowindark from '../../Assets/SectionPngs/featured-theme-glow-in-dark.jpg'
import cartoon from '../../Assets/SectionPngs/featured-theme-cartoon.jpg'
import slogan from '../../Assets/SectionPngs/featured-theme-slogan.jpg'
import funny from '../../Assets/SectionPngs/featured-theme-funny.jpg'
import geek from '../../Assets/SectionPngs/featured-theme-geek.jpg'
import funky from '../../Assets/SectionPngs/featured-theme-funky.jpg'

function Sections() {
    return (
        <div>
            <div className='container' >
                <p className='mt-6 ml-16 text-center font-extrabold text-2xl text-gray-700'>FEATURED THEMES</p>
                <div className='flex pl-20 mt-5 '>
                    <div>
                        <img src={anime} alt="" />
                        <p className='text-sm ml-12' >ANIME</p>
                    </div>
                    <div>
                        <img src={superhero} alt="" />
                        <p className='text-sm ml-9'>SUPERHERO</p>
                    </div>
                    <div>
                        <img src={glowindark} alt="" />
                        <p className='text-sm ml-6' >GLOW IN DARK</p>
                    </div>
                    <div>
                        <img src={cartoon} alt="" />
                        <p className='text-sm ml-10'>CARTOON</p>
                    </div>
                    <div>
                        <img src={slogan} alt="" />
                        <p className='text-sm ml-14'>SLOGAN</p>
                    </div>
                    <div>
                        <img src={funny} alt="" />
                        <p className='text-sm ml-14'>FUNNY</p>
                    </div>
                    <div>
                        <img src={geek} alt="" />
                        <p className='text-sm ml-14'>GEEK</p>
                    </div>
                    <div>
                        <img src={funky} alt="" />
                        <p className='text-sm ml-14'>FUNKY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sections