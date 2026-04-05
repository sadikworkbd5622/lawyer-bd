import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({lawyer}) => {
    
    const {id,image,name,isAvailability,experience,speciality,licenseNumber} = lawyer;
    return (
        <div className='border border-solid border-gray-200 rounded-2xl flex  items-center p-4 md:p-6 hover:bg-green-100 hover:text-gray-900 duration-200'>
            <img className='w-[120px] md:w-[158px] h-[120px] md:h-[158px] rounded-lg object-cover mr-4 md:mr-8 lg:mr-12' src={image} alt="" />
            <div className='flex-1 '>
                <span className='text-green-800 px-3.5 py-1.5 bg-green-200 rounded-4xl text-[12px]'>{isAvailability?"Available":"Not Available"}</span>
                <span className='text-blue-800 px-3.5 py-1.5 bg-blue-200 rounded-4xl text-[12px] ml-3'>{experience}+ Years Experience</span>
                <h4 className='h4 py-2 '>{name}</h4>
                <p className='p text-gray-500 font-medium pb-1'>{speciality} Expert</p>
                <p className='p text-gray-500'>License No: {licenseNumber}</p>
                <Link to={`/lawyer-details/${id}`} className='blueBtn'>View Details</Link>
            </div>
        </div>
    );
};

export default Lawyer;