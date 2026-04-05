import React from 'react';
import { navLink } from '../Navbar/Navbar';
import { Link } from 'react-router';
import Logo from './images/logo.png';
import './footer.css';
import { FaFacebookF,FaWhatsapp,FaEnvelope } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-black py-10 md:py-15 lg:py-20'>
            <div className='responsive-box text-center'>
                <div className='mb-4 md:mb-8'>
                    <Link to="/"><img src={Logo} className='max-w-28 md:max-w-48 inline-block' alt="" /></Link>
                </div>
                <div className='pb-4 md:pb-7 border-b border-b-gray-700 border-dashed'>
                    <ul className="menu menu-horizontal p-0 footerMenu justify-center">
                        {navLink}
                    </ul>
                </div>
                <div className='pt-4 md:pt-7'>
                    <ul className='flex flex-wrap justify-center items-center text-white gap-6'>
                        <li><a className='hover:text-[#0EA106]' href="https://www.facebook.com/hanjalahabibsadik22/" target='_blank'><FaFacebookF /></a></li>
                        <li><a className='hover:text-[#0EA106]' href="https://wa.me/+8801607006991" target='_blank'><FaWhatsapp/></a></li>
                        <li><a className='hover:text-[#0EA106]' href="mailto:sadik.work.bd@gmail.com" target='_blank'><FaEnvelope/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;