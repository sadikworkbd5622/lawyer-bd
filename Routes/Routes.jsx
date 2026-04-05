import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Root from '../component/Root/Root';
import MyBookings from '../pages/MyBookings';
import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';
import LawyerDetails from '../pages/LawyerDetails';
import ErrorBoundary from '../component/ErrorBoundary/ErrorBoundary';
import NoLowyerFound from '../component/NoLowyerFound/NoLowyerFound';

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        children : [
            {
                index : true,
                element : <Home></Home>,
                hydrateFallbackElement : <span className="loading loading-spinner loading-xl"></span>,
                loader : ()=> fetch("../lawyersData.json"),
                errorElement : <ErrorBoundary></ErrorBoundary>   
            },
            {
                path : "/lawyer-details/:lawyerid",
                element : <LawyerDetails></LawyerDetails>,
                hydrateFallbackElement : <span className="loading loading-spinner loading-xl"></span>,
                loader : ()=> fetch("../lawyersData.json"),
                errorElement : <NoLowyerFound></NoLowyerFound>,   
            },
            {
                path : "/my-bookings",
                element : <MyBookings></MyBookings>,
                errorElement : <ErrorBoundary></ErrorBoundary>,   
                hydrateFallbackElement : <span className="loading loading-spinner loading-xl"></span>,           
            },
            {
                path : "/blogs",
                element : <Blogs></Blogs>,
                hydrateFallbackElement : <span className="loading loading-spinner loading-xl"></span>,
                loader : ()=> fetch("../blogData.json"),
                errorElement : <ErrorBoundary></ErrorBoundary>,   
            }
        ]
    },
    {
        path : "*",
        element : <NotFound></NotFound>,
        errorElement : <ErrorBoundary></ErrorBoundary>,
        hydrateFallbackElement : <span className="loading loading-spinner loading-xl"></span>,
    }
])