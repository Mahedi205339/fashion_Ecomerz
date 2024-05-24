"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBar = () => {
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if(name){
            router.push(`/list?name=${name}`)
        }

    }


    return (
        <form onSubmit={handleSearch} className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md'>
            <input className='flex-1' type="text" placeholder='Search' name="name" id="" />
            <button className='cursor-pointer'>
                <Image src="/search.png" width={16} height={16} alt='' />
            </button>
        </form>
    );
};

export default SearchBar;