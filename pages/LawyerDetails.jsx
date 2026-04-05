import React from 'react';
import { Link, Navigate, useLoaderData, useNavigate, useParams } from 'react-router';
import { addBookingId, getLawyersData } from '../utility';

const LawyerDetails = () => {

    const { lawyerid } = useParams();
    const lawyersData = useLoaderData();
    const findData = lawyersData.find(lawyerData => lawyerData.id === lawyerid);
    const { name, image, availability, experience, speciality, licenseNumber, consultationFee } = findData;

    const navigate = useNavigate();

    const handleAppointment = () => {
        const getLawyers = getLawyersData();
        const getLawyersDataResult = getLawyers.find(getLawyer => getLawyer.id === lawyerid);
        addBookingId(findData);
        if (getLawyersDataResult) {
            return;
        } else {
            return navigate("/my-bookings");
        }

    }

    return (
        <div className='py-6 md:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white'>
            {/* Profile Header Section */}
            <div className='bg-white rounded-2xl max-sm:p-5 md:p-10 lg:p-12 mb-8 md:mb-10 shadow-lg border border-gray-200'>
                <div className='max-w-4xl mx-auto'>
                    <div className='flex items-center gap-3 mb-6'>
                        <div className='w-1 h-8 bg-[#0EA106] rounded'></div>
                        <h3 className='h3 max-sm:text-2xl text-gray-900 m-0'>Profile Overview</h3>
                    </div>
                    <p className='p text-gray-700 leading-relaxed text-[15px] md:text-[16px] mb-0 font-medium'>I am a dedicated and experienced legal professional committed to providing effective legal solutions. With over a decade of experience in law, I have successfully represented clients in complex cases and earned a reputation for reliability and integrity. I believe in transparent communication and personalized legal assistance.</p>
                </div>
            </div>

            {/* Lawyer Info Card */}
            <div className='bg-white rounded-2xl p-5 md:p-10 lg:p-12 mb-8 md:mb-10 shadow-2xl border border-gray-100'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-10'>
                    {/* Image Section */}
                    <div className='flex justify-center md:justify-start flex-shrink-0'>
                        <div className='relative'>
                            <div className='absolute -inset-2 bg-gradient-to-br from-[#0EA106] to-blue-500 rounded-2xl opacity-20 blur-xl'></div>
                            <img className='relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-xl' src={image} alt={name} />
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className='flex-1'>
                        {/* Experience & Status Badges */}
                        <div className='flex flex-wrap gap-3 mb-6'>
                            <span className='inline-flex items-center text-blue-700 px-4 py-2.5 bg-blue-50 rounded-full text-[12px] font-bold border border-blue-200'>
                                ⭐ {experience}+ Years Experience
                            </span>
                            <span className='inline-flex items-center text-green-700 px-4 py-2.5 bg-green-50 rounded-full text-[12px] font-bold border border-green-200'>
                                ✓ Verified Professional
                            </span>
                        </div>

                        {/* Name */}
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>{name}</h2>

                        {/* Divider */}
                        <div className='h-1 w-12 bg-gradient-to-r from-[#0EA106] to-blue-500 mb-6'></div>

                        {/* Speciality and License */}
                        <div className='mb-6 pb-6 border-b-2 border-gray-200'>
                            <p className='text-[18px] font-bold text-[#0EA106] mb-3'>⚖️ {speciality} Expert</p>
                            <p className='p text-gray-700'>License Number: <span className='font-bold text-gray-900 text-[15px]'>#{licenseNumber}</span></p>
                        </div>

                        {/* Availability */}
                        <div className='mb-6'>
                            <p className='p text-gray-800 font-bold mb-4 flex items-center'>
                                <span className='inline-block w-2 h-2 bg-[#0EA106] rounded-full mr-2'></span>
                                Available On:
                            </p>
                            <div className='flex flex-wrap gap-3'>
                                {
                                    availability.map((day, index) => (
                                        <span key={index} className='text-orange-700 px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg text-[13px] font-bold border border-orange-300 shadow-sm'>
                                            📅 {day}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Consultation Fee - Highlighted */}
                        <div className='bg-gradient-to-r from-[#0EA106] to-emerald-600 rounded-xl p-4 text-white inline-block'>
                            <p className='text-[13px] font-semibold text-white text-opacity-90 mb-1'>Consultation Fee</p>
                            <p className='text-3xl font-bold'>${consultationFee}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Appointment Section */}
            <div className='bg-white rounded-2xl p-5 md:p-10 lg:p-12 shadow-2xl border border-gray-100'>
                <h4 className='h4 text-center w-full pb-6 border-b-3 border-[#0EA106] mb-8 text-gray-900'>📅 Book an Appointment</h4>
                
                <div className='mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-[#0EA106]'>
                    <p className="text-gray-800 font-bold mb-3 flex items-center">
                        <span className='inline-block w-3 h-3 bg-[#0EA106] rounded-full mr-3'></span>
                        Current Status
                    </p>
                    <span className='inline-flex items-center text-green-700 px-5 py-3 bg-white rounded-lg text-[13px] font-bold border-2 border-green-300 shadow-md'>
                        ✓ Available Today
                    </span>
                </div>

                <div className='mb-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-400 rounded-xl'>
                    <p className='text-orange-900 text-[14px] font-semibold leading-relaxed'>
                        💡 Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </p>
                </div>

                <button onClick={handleAppointment} className='btn btn-block greenBtn w-full py-4 md:py-5 text-base md:text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default LawyerDetails;