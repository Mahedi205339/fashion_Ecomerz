"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Slider = () => {

  const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://i.ibb.co/3BSB5Qs/khaled-ghareeb-Ny-Pn9up-7o-unsplash.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://i.ibb.co/PQpBQvP/adriano-goncalves-Ie-HLtt-Crs-XE-unsplash.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://i.ibb.co/dB5wcVv/yasu-shots-y6h-Mz1p-JC0-unsplash.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    ,
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://i.ibb.co/LhhrcDr/dom-hill-nim-El-Tc-TNy-Y-unsplash.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    ,
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://i.ibb.co/wKrp3S5/mahdi-bafande-HOTWXfb-II6k-unsplash.jpg",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className='w-max h-full flex transition-all ease-in duration-1000'>
        {
          slides.map(slide => (
            <div className={`${slide?.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide?.id}>
              {/* text */}
              <div className='w-full lg:w-1/2  flex flex-col items-center justify-center gap-8  2xl:gap-12'>
                <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide?.description}</h2>
                <h1 className='text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-semibold'>{slide?.title}</h1>
                <Link href={slide?.url}>
                  <button className='rounded-md bg-black text-white py-2 px-3'>SHOP NOW</button>
                </Link>
              </div>
              {/* image */}
              <div className='h-full xl:w-1/2 relative'>
                <Image src={slide?.img} alt='' fill sizes='100%' className='object-cover' />
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Slider;