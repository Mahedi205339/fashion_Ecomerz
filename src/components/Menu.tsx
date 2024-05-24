"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Image alt='menu'
                width={28}
                height={28}
                src="/menu.png"
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className='absolute bg-black text-white left-0 top-20 h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center z-10 gap-8 text-xl'>
                    <Link href="" >Home</Link>
                    <Link href="">Shop</Link>
                    <Link href="" >Deals</Link>
                    <Link href="" >About</Link>
                    <Link href="" >Contact</Link>
                    <Link href="" >Logout</Link>
                    <Link href="" >Cart[1]</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;