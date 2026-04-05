import React from 'react';
import Banner from '../component/Banner/Banner';
import ProvideServices from '../component/ProvideServices/ProvideServices';
import Lawyers from '../component/Lawyers/Lawyers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lawyers></Lawyers>
            <ProvideServices></ProvideServices>
        </div>
    );
};

export default Home;