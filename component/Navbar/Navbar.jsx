import React from 'react';
import Logo from './images/logo.png';
import { Link, NavLink } from 'react-router';
import './navbar.css';



export const navLink = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
</>



const Navbar = () => {

    return (
        <div className='border-b border-b-solid border-b-gray-200'>
            <div className="navbar !px-0 md:py7 py-4 responsive-box">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 py-2 mr-2 !border-none !bg-green-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <Link to="/"><img src={Logo} className=' max-w-28 md:max-w-48' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn greenBtn">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;