import React from 'react';

const Filter = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div>
                <select name="type" id="" className='py-2 rounded-2xl text-xs font-medium bg-white'>
                    <option>Type</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                </select>
                <input type="text" name='min' placeholder='min price' />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Filter;