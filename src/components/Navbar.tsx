import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './Navicons';

const Navbar = () => {
    return (
        <div className='h-20 px-10 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>

            <div className='flex items-center justify-between md:hidden'>
                {/* MOBILE */}
                <Link href="/">
                    <div  className='text-2xl tracking-wide'>
                        M.FAS   
                    </div>
                </Link>
                <Menu />
            </div>
            {/* Large Screen */}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/* LEFT SIDE */}
                <div className='w-1/3'>
                    <Link className='flex items-center gap-3' href="/">
                        <Image src="/logo.png" alt='' width={24} height={24}/>
                    </Link>
                </div>
                {/* RIGHT SIDE */}
                <div className='w-2/3 flex items-center justify-between gap-8'>
                    <SearchBar/>
                    <NavIcons/>
                </div>

            </div>


        </div>
    );
};

export default Navbar;