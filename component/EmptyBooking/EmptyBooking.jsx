import React from 'react';
import { Link } from 'react-router';

const EmptyBooking = () => {
    return (
        <div className='text-center py-10 md:py-15 lg:py-20'>
            <h2 className='h2 text-center pb-4'>You Have Not Booked Any Appointment Yet</h2>
            <p className='p text-center'>Our platform connects you with verified, experienced Lawyer across various specilities -all at your convenience</p>
            <div className='pt-5 md:pt-6 lg:pt-10'>
                <Link to={"/"}><span className="btn greenBtn">Book an Appointment</span></Link>
            </div>
        </div>
    );
};

export default EmptyBooking;