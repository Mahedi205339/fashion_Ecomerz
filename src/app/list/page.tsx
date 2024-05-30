import Image from 'next/image';
import React from 'react';

const ListPage = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            <div>
                <div>
                    <h1>Grab up to 50% off on
                        Selected Products

                    </h1>

                </div>
                <div className='relative w-1/3'>
                <Image src="/woman.png" alt='' fill className='overscroll-contain'/>
                </div>
            </div>

        </div>
    );
};

export default ListPage;