import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './Navicons';
import "./text.css"

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>

            <div className='flex items-center justify-between md:hidden'>
                {/* MOBILE */}
                <Link href="/">
                    <div  className='text-2xl tracking-wide text_color '>
                        M.Fashion  
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Large Screen */}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/* LEFT SIDE */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link className='flex items-center gap-3' href="/">
                        <div className='flex flow-row gap-2 items-center'>
                             <Image src="/logo.png" alt='' width={24} height={24}/>
                             <h2 className='text-xl text_color font-semibold'> M.Fashion</h2>
                        </div>
                       
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                    <Link href="" >Home</Link>
                    <Link href="">Shop</Link>
                    <Link href="" >Deals</Link>
                    <Link href="" >About</Link>
                    <Link href="" >Contact</Link>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar/>
                    <NavIcons/>
                </div>

            </div>


        </div>
    );
};

export default Navbar;