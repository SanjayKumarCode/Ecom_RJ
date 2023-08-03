import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/EOSS/UNREC/Shoes/Shoes_3000._CB603440768_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/July23/PC_3000x1200_2x._CB602705602_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/SVD/July/Hero/PC_tall_Hero_SVD_UNREC_set1_icici_3000x1200._CB602708645_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg"
    ];
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 4 : (prev)=>prev - 1);
      
    };
    const nextSlide = () => {
      setCurrentSlide(currentSlide === 4 ? 0 : (prev)=>prev + 1);
      
    };
    // console.log(prevSlide)
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div 
            style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
            className="w-[400vw] h-full flex transition-transform duration-1000">
                <img className='w-screen h-full object-cover' 
                src={data[0]}
                 alt='ImgOne'
                 Loading='priority'
                 />
           
                <img className='w-screen h-full object-cover' 
                src={data[1]}
                 alt='ImgTWo'
                 Loading='priority'
                 />
           
                <img className='w-screen h-full object-cover' 
                src={data[2]}
                 alt='ImgThree'
                 Loading='priority'
                 />
           
                <img className='w-screen h-full object-cover' 
                src={data[3]}
                 alt='ImgFour'
                 Loading='priority'
                 />
            
                <img className='w-screen h-full object-cover' 
                src={data[4]}
                 alt='ImgFive'
                 Loading='priority'
                 />
             </div>
 
 <div className='left-right-btn'>
 {/* className='absolute w-fit left-0 right-0 mx-auto flex gap-8 button-44' */}
<div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white'><AiOutlineArrowLeft/></div>
<div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white'><AiOutlineArrowRight/></div>

 </div>

        </div>
      
    </div>
  )
}

export default Banner
