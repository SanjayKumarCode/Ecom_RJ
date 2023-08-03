import React from 'react'
import { cart, darklogo } from '../assets/index'
import '../components/Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   

    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50' >
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'> 
     
<Link to="/">
       <div><img className='w-20' src={darklogo} alt='darklogo'/>
       </div></Link>

       <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
          
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1x] cursor-pointer duration-300'>Pages</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1x] cursor-pointer duration-300'>Shop</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1x] cursor-pointer duration-300'>Element</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1x] cursor-pointer duration-300'>Blog</li>
        </ul>

       <div className='relative'>
    <div className='span-add2'><span >0</span></div>
       <div className='cart-0'><img className='w-5' src={cart} alt='cart'/></div>
       </div>

       <div>
<img className='w-8 h-8 rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='userLogo'/>

       </div>
       





      </div>
      </div>
      
      
      
    </div>



  )
}

export default Header
