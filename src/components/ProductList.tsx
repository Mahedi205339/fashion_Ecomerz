import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image
                        src="https://i.ibb.co/tYB95jr/mahdi-bafande-HOTWXfb-II6k-unsplash.jpg"
                        alt=''
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                    />
                    <Image
                        src="https://i.ibb.co/7Q5Y5nj/adriano-goncalves-Ie-HLtt-Crs-XE-unsplash.jpg"
                        alt=''
                        fill
                        sizes='25vw' />
                </div>

                <div className='flex justify-between'>
                    <span className='font-medium '>Product Name</span>
                    <span className='font-semibold'>$45</span>
                </div>
                <div className='text-sm text-gray-500 '>My description</div>
                <button className='rounded-2xl ring-1 ring-fashion text-fashion hover:bg-fashion hover:text-white w-max px-4 py-2'>Add to Cart</button>
            </Link>
        </div>
    );
};

export default ProductList;