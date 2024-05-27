"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const slides = [

  {
    id: 1,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.ibb.co/fXjQ391/yasu-shots-y6h-Mz1p-JC0-unsplash.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 2,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.ibb.co/xFwggtJ/khaled-ghareeb-Ny-Pn9up-7o-unsplash.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.ibb.co/7Q5Y5nj/adriano-goncalves-Ie-HLtt-Crs-XE-unsplash.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.ibb.co/zGs75Z2/dom-hill-nim-El-Tc-TNy-Y-unsplash.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 5,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://i.ibb.co/tYB95jr/mahdi-bafande-HOTWXfb-II6k-unsplash.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  }
];


const Slider = () => {

  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide?.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide?.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide?.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide?.title}
              </h1>
              <Link href={slide?.url}>
                <button className="rounded-md bg-black text-white py-3 px-4 ">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <div className='h-full w-10/12'>
                <Image
                  src={slide?.img}
                  alt=""
                  fill
                  sizes="100%"
                  className="object-fill scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""
              }`}
            key={slide?.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;