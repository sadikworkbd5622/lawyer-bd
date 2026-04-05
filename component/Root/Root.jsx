import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='responsive-box'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

export default Root;