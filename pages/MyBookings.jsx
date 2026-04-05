import React, { useEffect, useState } from 'react';
import { getLawyersData, removeLawyersData } from '../utility';
import BookedLawyers from '../component/BookedLawyers/BookedLawyers';
import EmptyBooking from '../component/EmptyBooking/EmptyBooking';
import BookedLawyerChart from '../component/BookedLawyerChart/BookedLawyerChart';
import { toast } from 'react-toastify';

const MyBookings = () => {

    const [lawyersData, setLawyersData] = useState([]);
    useEffect(() => {
        const data = getLawyersData();
        setLawyersData(data);
    }, [])

    const handleRemoveAppointment = (id) => {
        removeLawyersData(id);
        setLawyersData(getLawyersData());
        const removedLawyer = lawyersData.find(lawyer => lawyer.id === id);
        toast.success(`${removedLawyer?.name || 'Lawyer'} Appointment Canceled`)
    }

    if (lawyersData.length < 1) {
        return <EmptyBooking></EmptyBooking>
    }

    if(!lawyersData){
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    return (
        <>
            <div className='pt-10 md:pt-15 lg:pt-20'>
                <div className='border border-solid border-gray-200 rounded-2xl p-4'>
                    <BookedLawyerChart lawyersData={lawyersData}></BookedLawyerChart>
                </div>
            </div>
            <div className='py-10 md:py-15 lg:py-20'>
                <h2 className='h2 text-center pb-4'>My Today Appointments</h2>
                <p className='p text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                {
                    lawyersData.map(lawyerData => <BookedLawyers key={lawyerData.id} lawyerData={lawyerData} handleRemoveAppointment={handleRemoveAppointment}></BookedLawyers>)
                }
            </div>
        </>
    );
};

export default MyBookings;