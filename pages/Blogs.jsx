import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../component/Blog/Blog';

const Blogs = () => {

    const blogs = useLoaderData();
    

    return (
        <>
            <div className='py-10 md:py-15 lg:py-20 flex flex-col gap-5 md:gap-8'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </>

    );
};

export default Blogs;