"use client"
import Image from 'next/image';
import React from 'react';

const ProductImages = () => {
    return (
        <div className=''>
            <div className='h-[500px] relative'>
                <Image src="/product1.png" fill alt='' className='object-cover rounded-md' sizes='50vw' />
            </div>

            <div>

            </div>

        </div>
    );
};

export default ProductImages;