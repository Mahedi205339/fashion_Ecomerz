import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm '>
            {/* top */}
            <div className='flex justify-between'>
                {/* left */}
                <div className='w-1/4 flex flex-col gap-8'>
                    <Link className='' href="/">
                        <div className='text-2xl tracking-wide'>M.Fashion  </div>
                    </Link>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi tempora
                    </p>
                    <span>mFashion@gmail</span>
                    <span>+880 123 456 789</span>

                    <div>
                        <Image src="/facebook.png" alt="" width={16} height={16} />
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                        <Image src="/x.png" alt="" width={16} height={16} />
                    </div>


                </div>
                {/* center */}
                <div>

                </div>
                {/* right */}
                <div>

                </div>

            </div>
            {/* bottom */}
            <div>

            </div>
        </div >
    );
};

export default Footer;