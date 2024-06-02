"use client"
import React, { useState } from 'react';

const Add = () => {

    const [quantity, setQuantity] = useState(1);
    const stock = 4;

    const handleQuantity = (type: "i"| "d") =>{
        if(type ==="d" && quantity > 1){
            setQuantity((prev) => prev - 1);
        }
        if(type ==="i" && quantity < stock){
            setQuantity((prev) => prev + 1);
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <h3>Chose a Quantity</h3>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='bg-gray-200 py-2 px-4 rounded-3xl flex items-center justify-between w-32' >

                        <button onClick={()=>handleQuantity("d")} className='cursor-pointer text-xl'>-</button>
                        {quantity}
                        <button onClick={()=>handleQuantity("i")} className='cursor-pointer text-xl'>+</button>

                    </div>
                    <div className='text-xs'>
                        Only <span className='text-red-500'>4 items</span> left! <br /> {"Don't"} miss it
                    </div>
                </div>
                <button className='w-36 text-sm rounded-3xl ring-1 ring-fashion text-fashion py-2 px-4 hover:bg-fashion hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white'>Add to Cart</button>
            </div>

        </div>
    );
};

export default Add;