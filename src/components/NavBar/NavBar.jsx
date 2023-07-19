import React from 'react';
import './NavBarStyles.css';
import {BiShieldQuarter} from 'react-icons/bi'
import {GrArticle} from 'react-icons/gr'

const Navbar = () => {
    return (
        <>
        <div className='bg-white'>
            <div className='flex justify-end mr-7 pt-2 text-xl'>
                <a href='!#' className='p-2'><BiShieldQuarter/></a>
                <a href='!#' className='p-2'><GrArticle/></a>
                <a href='!#' className='p-2'>+</a>
                <a href='!#' className='p-2'>+</a>
            </div>
            <div className="flex justify-center items-center bg-white font-black tracking-widest px-6 py-4 mt-1 shadow-md ">
                <a href="/" className="text-xl font-bold text-gray-800 md:text-2xl">Palette Paradise</a>
            </div>
            <div className="flex justify-center bg-white px-6 py-4 shadow-md">
                <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">First link</a>
                <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Second link</a>
                <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Third link</a>
                <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Fourth link</a>
            </div>
        </div>  
     </>
    );
};

export default Navbar;
