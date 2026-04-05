import React from 'react';

const Blog = ({ blog }) => {
    
    const { id, question, answer } = blog;
    return (
        <>
            <div className="border border-solid border-gray-200 rounded-2xl p-4 md:p-6 bg-gray-50">
                <h4 className="h4 pb-2 border-b border-b-gray-200 border-dashed pb-2 md:pb-4">{id}. {question}</h4>
                <p className="p text-gray-500 font-bold pt-2 md:pt-4">{answer}</p>
            </div>
        </>
    );
};

export default Blog;