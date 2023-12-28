import React from 'react'
import HomePage from '../HomeCategory/HomeMenu'
import HomeCategory from '../HomeCategory/HomeCategory'

function ProductList() {
  return (
    <div >
        <p className='text-2xl font-extrabold text-center text-gray-700  mt-5'>FEATURED PRODUCTS</p>
         <div className='flex justify-center flex-wrap'>
         {HomePage.map((list,i)=>{
        return <HomeCategory key={i} image={list.image} name={list.name} brand={list.brand} newprice={list.newprice} oldprice={list.oldprice} />
        })}
         </div>
    </div>
  )
}

export default ProductList