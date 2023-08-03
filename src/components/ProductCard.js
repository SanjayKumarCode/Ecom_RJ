import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate =useNavigate();
  const _id = product.title;
   const idString = (_id) =>{
    return String(_id).toLowerCase().split(" ").join("");
   };
   
   const rootId = idString(_id);

   const handleDetails = () => {
    
    navigate (`/product/${rootId}`, {
      state:{
     item: product,
      },
    });
  };



  return (
    <div className='group relative'>
    <div onClick={handleDetails} className='w-full h-80  cursor-pointer overflow-hidden'>
      <img className='w-full border-[1px] px-2 py-4 object-cover group-hover:scale-110 duration-500'
       src={product.image} alt="PriductImg"/>
       
    </div>
       {/* For title and price */}
   <div className='flex justify-center items-center'>
   <div className='w-full  border-[1px] shadow-md px-2 py-4'>


  
    <div className='font-titleFont text-base font-bold'>
      <h2>{product.title.substring(0, 15)}</h2>
    </div>


<div className=' gap-2 relative overflow-hidden w-50 text-sm'>
    <div className='flex gap-20  transition-transform duration-500'>
    <p className='line-through text-gray-500'>₹{product.oldPrice}</p>
    <p className='font-semibold'>₹{product.price}</p>
    </div>
    <p className='justify-end z-100 w-[100px] text-gray-500 hover:text-gray-900 flex-item-center gap-1 top-5 transform-translate-x-32 group-hover;translate-x-0 transition-transform cursor-pointer duration-500'>add to cart</p>
</div>


<div>
    <p>{product.category}</p>
   </div>

<div className='absolute top-5 right-0'>
  {product.isNew && <p className='bg-gray-500  text-white font-titleFont font-semibold px-6 py-1'>Sale</p>}
</div>



    </div>

     
   </div>

  
    </div>
  )
}

export default ProductCard