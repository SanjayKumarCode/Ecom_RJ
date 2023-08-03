import React from 'react'
// import "../components/Footer.css"
// import '../components/Footer.css'
import { light_logo, payment } from '../assets'
import { FaFacebookF,FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import {HiOutlineHome } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>

                <div className='flex flex-col gap-7'>
<img className='w-40' src={light_logo} alt='light_logo'/>
<p className='text-white text-sm tracking-wide'>© ReactJs.com</p>
<div className='payment-img'><img className='w-60' src={payment} alt='payment'/></div>

<div className='flex flex-row gap-5'>
  <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
  <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
  <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
  <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>

</div>
                </div>
 <div>
 <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
 <div className='text-base flex flex-col gap-2'>
 <p>Kanpur, Delhi,210121,India</p>
 <p>Mobile:  08874369688</p>
 <p>Phone:  06252638974</p>
 <p>e-mail:  sanjay@gmail.com</p>
 </div>

 </div>

 <div>
 <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
 <div className='text-base flex flex-col gap-2'>
 <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdOutlineAccountCircle/></span>my account</p>

 <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdPayment/></span>checkout</p>


 <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><HiOutlineHome/></span>checkout</p>

 <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><GoLocation/></span>help & support</p>

 </div>

 </div>

 <div className='flex flex-col justify-center'>

<input
className='bg-transparent border px-4 py-2 text-sm pl' placeholder='e-mail'
 type='text'/>
<button className=' text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
 </div>
            </div>
        </div>
    )
}

export default Footer