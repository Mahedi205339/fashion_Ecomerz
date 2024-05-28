import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryList = () => {
    return (
        <div className='px-4 overflow-x-scroll'>
            <div className='flex gap-4 md:gap-8'>
                <Link href="/lost?cat=text">
                    <div>
                        <Image src="" alt='' className='bg-slate-100 w-full gap-96'/>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;