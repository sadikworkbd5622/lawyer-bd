import React from 'react';
import CountUp from 'react-countup';
import provideServiceImg1 from './images/success-doctor.png';
import provideServiceImg2 from './images/success-patients.png';
import provideServiceImg3 from './images/success-review.png';
import provideServiceImg4 from './images/success-staffs.png';

const ProvideServices = () => {
    return (
        <div className='pb-10 md:pb-15 lg:pb-20'>
            <h2 className='h2 text-center pb-4'>We Provide Best Law Services</h2>
            <p className='p text-center text-gray-300'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 md:pt-6 lg:pt-8 max-sm:text-center'>
                <div className='bg-white border border-[#E5E7EB] p-6 md:p-7 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                    <img className='max-w-full mb-4 md:mb-5 lg:mb-6 max-sm:mx-auto' src={provideServiceImg1} alt="Total Lawyers" />
                    <CountUp className='h1 text-[#0EA106]' start={0} end={199} duration={2.75} suffix="+"></CountUp>
                    <p className='text-[15px] md:text-[16px] lg:text-[18px] font-semibold mt-3 text-gray-700'>Total Lawyers</p>
                </div>
                
                <div className='bg-white border border-[#E5E7EB] p-6 md:p-7 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                    <img className='max-w-full mb-4 md:mb-5 lg:mb-6 max-sm:mx-auto' src={provideServiceImg3} alt="Total Reviews" />
                    <CountUp className='h1 text-[#0EA106]' start={0} end={467} duration={2.75} suffix="+"></CountUp>
                    <p className='text-[15px] md:text-[16px] lg:text-[18px] font-semibold mt-3 text-gray-700'>Total Reviews</p>
                </div>
                
                <div className='bg-white border border-[#E5E7EB] p-6 md:p-7 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                    <img className='max-w-full mb-4 md:mb-5 lg:mb-6 max-sm:mx-auto' src={provideServiceImg2} alt="Cases Initiated" />
                    <CountUp className='h1 text-[#0EA106]' start={0} end={1900} duration={2.75} suffix="+"></CountUp>
                    <p className='text-[15px] md:text-[16px] lg:text-[18px] font-semibold mt-3 text-gray-700'>Cases Initiated</p>
                </div>
                
                <div className='bg-white border border-[#E5E7EB] p-6 md:p-7 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                    <img className='max-w-full mb-4 md:mb-5 lg:mb-6 max-sm:mx-auto' src={provideServiceImg4} alt="Total Staff" />
                    <CountUp className='h1 text-[#0EA106]' start={0} end={300} duration={2.75} suffix="+"></CountUp>
                    <p className='text-[15px] md:text-[16px] lg:text-[18px] font-semibold mt-3 text-gray-700'>Total Staff</p>
                </div>
            </div>
        </div>
    );
};

export default ProvideServices;