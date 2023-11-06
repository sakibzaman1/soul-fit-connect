import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='relative '>
            <div className=' absolute right-[480px] top-24 w-64'>
            <Link to="/"><h1 className='text-black bg-white font-kalam font-semibold text-5xl w-64'>Go Back to Home</h1></Link>
            </div>
            <img className='min-h-screen w-full' src="https://i.ibb.co/ZWbNFgR/error.jpg" alt="" />
            
        </div>
    );
};

export default ErrorPage;