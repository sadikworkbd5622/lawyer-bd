import React from 'react';


const BookedLawyers = ({ lawyerData, handleRemoveAppointment }) => {
    const {id,name,speciality,consultationFee} = lawyerData;

    return (
        <div className="border border-solid border-gray-200 rounded-2xl p-4 md:p-6 mt-5 md:mt-8">
            <div className="flex justify-between items-center pb-2 md:pb-4 border-b border-b-gray-200 border-dashed">
                <div>
                <h4 className="h4 pb-2">{name}</h4>
                <span className="p text-gray-500 font-medium pb-1 mr-3 md:mr-6 lg:mr-10">{speciality} Expert</span>
                </div>
                <div>
                <p className="p text-gray-500 font-bold">Consultation Fee: <span className="text-green-600">${consultationFee}</span></p>
                </div>
            </div>
            <button onClick={()=>handleRemoveAppointment(id)} className="btn btn-block redBtn mt-3 md:mt-5">Cancel Appointment</button>
        </div>
    );
};

export default BookedLawyers;