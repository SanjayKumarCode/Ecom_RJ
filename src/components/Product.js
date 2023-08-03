import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';


const Product = ({product}) => {
  const [details, setDetails] = useState({})
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item); 
// console.log(location.state.item); // Replace this message with your desired log message
  }, []);

  return (
    <div>
<div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
{/* image of product of detail page */}
<div className='w-2/5 relative'>
  <img className='w-full h-[550px] border-[1px] '
       src={details.image} alt="PriductImg"/>

       <div className='absolute top-5 right-0'>
  {details.isNew && <p className='bg-gray-500  text-white font-titleFont font-semibold px-8 py-1'>Sale</p>}
</div>
       </div>
       
{/* Detail of product */}
<div className='w-3/5 flex flex-col justify-center gap-12' >
<div>
  <h2 className='text-4xl font-samibold'>{details.title}</h2>
  {/* <div>

  </div> */}

<div className='flex items-center gap-4 mt-3'>
    <div className='flex gap-20  transition-transform duration-500 mt-3'>
    <p className='line-through text-gray-500 '>₹{details.oldPrice}</p>
    <p className='font-semibold'>₹{details.price}</p>
    </div>
    {/* <p className='justify-end z-100 w-[100px] text-gray-500 hover:text-gray-900 flex-item-center gap-1 top-5 transform-translate-x-32 group-hover;translate-x-0 transition-transform cursor-pointer duration-500'>add to cart</p> */}
</div>
{/* star icon */}
<div className='flex items-center gap-2 text-base mt-3'>
  <div className='flex'>

    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiOutlineStar/>
  </div>
  <p className='text-xs text-gray-500'>(300 customer review)</p>

</div>
<p className='text-base text-gray-500 mt-3'>{details.description}</p>

{/* Quantiti btn */}

<div className='flex gap-4'>
  <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
    <p className='text-sm mt-3'>Quantity</p>
   <div className='flex items-center gap-4 text-sm font-semibold'>
   <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer decoration-300 active:bg-black'>-</button>
   <span>{1}</span>
   <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer decoration-300 active:bg-black'>+</button></div>
  </div>
  <button className='bg-black text-white py-3 px-6 active:bg-gray-800'>Add to Cart</button>
</div>
<p>Category:{details.Category}</p>



</div>
</div>

<div>

</div>

</div>
       </div>

    
  );
};

export default Product;
