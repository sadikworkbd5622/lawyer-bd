import React from 'react';
import notFound from '../src/assets/notFound.jpg';
import { Link } from 'react-router';
import Navbar from '../component/Navbar/Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='text-center py-10 md:py-15 lg:py-20'>
                <img className='max-w-96 inline-block' src={notFound} alt="" />
                <div className='pt-5 md:pt-6 lg:pt-10'>
                    <Link to={"/"}><span className="btn greenBtn">Go Homepage</span></Link>
                </div>
            </div>

        </>
    );
};

export default NotFound;