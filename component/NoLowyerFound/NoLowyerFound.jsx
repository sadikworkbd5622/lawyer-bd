import React from 'react';
import { Link, useParams } from 'react-router';

const NoLowyerFound = () => {

    const { lawyerid } = useParams();
    console.log(lawyerid);

    return (
        <div className='py-10 md:py-15 lg:py-20'>
            <h2 class="h2 text-center pb-4">No Lawyers Found!!</h2>
            <p class="p text-center">No Lawyers Found with <span className='font-bold text-red-600'>{lawyerid}</span> </p>
            <div className='pt-5 md:pt-6 lg:pt-10 text-center'>
                <Link to={"/"}><span className="btn greenBtn">View All Lawyers</span></Link>
            </div>
        </div>
    );
};

export default NoLowyerFound;