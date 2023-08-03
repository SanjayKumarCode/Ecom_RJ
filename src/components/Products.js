import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
// console.log(Products)
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>
                    e-commerce has transformed the way we shop by offering convenience, access to a global marketplace, and increased competition.e-commerce is likely to further expand and shape the future of retail, offering new opportunities and challenges for businesses and consumers alike.
                </p>
            </div>

            {/* for product cart */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-10 py-10">
                {products.map((item) => (
                    <ProductCard key={item._id} product={item} />
                ))}
            </div>

        </div>
    );
};

export default Products;
