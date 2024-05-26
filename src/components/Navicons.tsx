"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CartModal from './CartModal';

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();

    // for now 
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image src="/profile.png"
                width={22}
                height={22}
                alt=''
                className='cursor-pointer'
                onClick={handleProfile}
            />
            {isProfileOpen &&
                <div className='absolute p-4 rounded-md top-1/2 text-sm left-0 shadow-neutral-200 shadow-lg z-20'>
                    <Link href="/">profile</Link>
                    <div className='mt-2 cursor-pointer'>Logout</div>

                </div>
            }
            <Image src="/notification.png" width={22} height={22} alt='' className='cursor-pointer' />

            <div className='relative cursor-pointer'>



                <Image src="/cart.png" width={22} height={22} alt='' className='cursor-pointer'
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />

                <div className='absolute -top-4 -right-4 w-6 h-6 bg-fashion rounded-full text-white text-sm flex items-center justify-center'>2</div>
            </div>
            {
                isCartOpen && (
                    <div className='absolute p-4 rounded-md top-1/2 text-sm right-0 shadow-neutral-200 shadow-lg z-20 border'>
                        <CartModal/>
                        
                    </div>
                )
            }
        </div>
    );
};

export default NavIcons;