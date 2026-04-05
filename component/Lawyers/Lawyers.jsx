import React, { useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';
import { useLoaderData } from 'react-router';


const Lawyers = () => {

    const lawyersData = useLoaderData();
    
    const [visibleLawyers, setVisibleLawyers] = useState(6);
    const [showAll,setShowAll] = useState(true)

    const handleShowAllLawyer = () => {
        if (showAll) {
            setVisibleLawyers(lawyersData.length)
            setShowAll(false);
        } else {
            setVisibleLawyers(6)
            setShowAll(true);
        }
    }



    return (
        <div id="lawyers-section" className='py-10 md:py-15 lg:py-20'>
            <h2 className='h2 text-center pb-4'>Our Best Lawyers</h2>
            <p className='p text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-6 lg:pt-8 gap-5 md:gap-8 lg:gap-12'>
                {
                    lawyersData.slice(0, visibleLawyers).map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>)
                }
            </div>
            <div className='text-center pt-4 md:pt-6 lg:pt-8'>
                <a onClick={handleShowAllLawyer} className="btn greenBtn">{showAll?"Show All":"Show Less"} Lawyer</a>
            </div>
        </div>
    );
};

export default Lawyers;