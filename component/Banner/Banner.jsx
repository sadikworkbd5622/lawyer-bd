import React from 'react';
import BannerImage from './images/banner-img.png';

const Banner = () => {
    const handleBrowseLawyers = () => {
        const lawyersSection = document.getElementById('lawyers-section');
        if (lawyersSection) {
            lawyersSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            style={{ 
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(14, 165, 6, 0.4) 100%), url(${BannerImage})`,
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover"
            }} 
            className='py-20 md:py-32 lg:py-44 rounded-2xl px-4 md:px-8'
        >
            <div className='max-w-4xl mx-auto'>
                <div className='space-y-6'>
                    <h1 className='h1 text-white font-extrabold'>
                        Find Your Perfect Legal Expert
                    </h1>
                    
                    <div className='w-16 h-1 bg-[#0EA106]'></div>
                    
                    <p className='p text-white text-opacity-90 text-lg leading-relaxed'>
                        Connect with experienced, verified lawyers across multiple specialties. Get professional legal advice, consultations, and representation when you need it most.
                    </p>
                    
                    <div className='pt-6'>
                        <button 
                            onClick={handleBrowseLawyers}
                            className='greenBtn inline-block hover:shadow-lg transition-all duration-300 cursor-pointer'
                        >
                            Browse Lawyers
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;