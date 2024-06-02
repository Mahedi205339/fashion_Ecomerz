"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/21852581/pexels-photo-21852581/free-photo-of-gift-to-you.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/25070727/pexels-photo-25070727/free-photo-of-two-people-wearing-backpacks-looking-at-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/20886322/pexels-photo-20886322/free-photo-of-tulips.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/20410205/pexels-photo-20410205/free-photo-of-a-sculpture-of-bread-and-croissants-on-top-of-a-stack-of-bread.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
]

const ProductImages = () => {

    const [index, setIndex] = useState(0)
    // console.log(index);



    return (
        <div className=''>
            <div className='h-[500px] relative'>
                <Image src={images[index]?.url} fill alt='' className='object-cover rounded-md' sizes='50vw' />
            </div>

            <div className=' flex gap-4'>
                {

                    images.map((image , i) => (
                        <div
                        className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
                        key={image.id}
                        onClick={()=>setIndex(i)}
                        >
                            <Image src={image.url} fill alt='' className='object-cover rounded-md' sizes='50vw' />
                        </div>
                    )
                    )
                }
            </div>

            <div>

            </div>

        </div>
    );
};

export default ProductImages;