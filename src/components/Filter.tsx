import React from 'react';

const Filter = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div className='flex gap-6 flex-wrap'>
                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>Type</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                </select>
                <input type="text"
                    name='min'
                    placeholder='min price'
                    className='text-xs rounded-2xl pl-2 ring-1 ring-gray-400'
                />
                <input type="text"
                    name='min'
                    placeholder='max price'
                    className='text-xs rounded-2xl pl-2 ring-1 ring-gray-400'
                />

                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>Size</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                </select>
                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>Color</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                </select>
                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>Category</option>
                    <option value="digital">New Arrival</option>
                    <option value="physical">Popular</option>
                </select>
                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>All Filter</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                </select>
            </div>
            <div>
                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>Sort By</option>
                    <option value="digital">Price (low to high)</option>
                    <option value="physical">  Price (high to low) </option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;