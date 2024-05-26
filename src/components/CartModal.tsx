"use client"
import Image from 'next/image';
import React from 'react';

const CartModal = () => {

    const cartItems = true;

    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-2 z-20'>
            {!cartItems ? (
                <div className=''>Cart is empty </div>
            ) : (
                <>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-lg font-semibold'>Shopping Cart</h2>
                        {/* item */}
                        <div className='flex gap-4'>
                            <Image src="/product_1.png" alt='' width={72} height={96} className='object-cover rounded-md' />
                            <div className='flex flex-col justify-between w-full'>
                                {/* TOP */}

                                <div className=''>
                                    {/* title */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>Product Name</h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                                    </div>
                                    {/* description */}

                                </div>
                                <div className=' text-sm text-gray-500'>
                                    available
                                </div>

                                {/* Bottom */}
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty- 2</span>
                                    <span className='text-blue-500'>Remove</span>
                                </div>
                            </div>

                        </div>
                        {/* item */}
                        <div className='flex gap-4'>
                            <Image src="/product_1.png" alt='' width={72} height={96} className='object-cover rounded-md' />
                            <div className='flex flex-col justify-between w-full'>
                                {/* TOP */}

                                <div className=''>
                                    {/* title */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>Product Name</h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                                    </div>
                                    {/* description */}

                                </div>
                                <div className=' text-sm text-gray-500'>
                                    available
                                </div>

                                {/* Bottom */}
                                <div className='flex justify-between text-sm'>
                                    <span className='text-gray-500'>Qty- 2</span>
                                    <span className='text-blue-500'>Remove</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* bottom */}
                    <div>
                        <div className='flex justify-between text-sm'>
                            <button className='rounded-md px-4 py-3 ring-1 ring-gray-300'>View Cart</button>
                            <button className='rounded-md px-4 py-3 ring-1  text-white bg-black'>Checkout</button>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb4
                    '>
                            Lorem ipsum dolor sit .
                        </p>
                    </div>
                </>
            )
            }
        </div>
    );
};

export default CartModal;