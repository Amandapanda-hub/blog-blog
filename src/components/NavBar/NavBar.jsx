import React, { useState } from 'react';
import './NavBarStyles.css';
import { BiShieldQuarter } from 'react-icons/bi';
import { GrArticle } from 'react-icons/gr';
import { BsHouseHeart, BsBagHeart } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center md:justify-end md:mr-7 pt-2 md:text-xl ">
          <div className="md:hidden" onClick={handleToggle}>
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>

          <div className={`flex md:flex hidden`}>
            <a href="/" className="p-2">
              <BsHouseHeart />
            </a>
            <a href="/about" className="p-2">
              <GrArticle />
            </a>
            <a href="#!" className="p-2">
              <BsBagHeart />
            </a>
            <a href="#!" className="p-2">
              <BiShieldQuarter />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center bg-white font-black tracking-widest px-6 py-4 mt-1 shadow-md">
          <a href="/" className="text-xl font-bold text-gray-800 md:text-2xl">
            Palette Paradise
          </a>
        </div>
        <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 h-full w-full items-center justify-center transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0 flex" : "translate-x-full hidden"}`}>
          <AiOutlineClose className="absolute top-0 right-0 m-6 md:hidden" onClick={handleToggle} size={30} />
          <div className="flex flex-col items-center space-y-5">
            <a
              href="#!"
              className="text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
            >
              First link
            </a>
            <a
              href="#!"
              className="text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
            >
              Second link
            </a>
            <a
              href="#!"
              className="text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
            >
              Third link
            </a>
            <a
              href="#!"
              className="text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
            >
              Fourth link
            </a>
          </div>
        </div>
        <div className={`flex flex-wrap justify-center bg-white px-6 py-4 shadow-md md:flex hidden`}>
          <a
            href="#!"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
          >
            First link
          </a>
          <a
            href="#!"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
          >
            Second link
          </a>
          <a
            href="#!"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
          >
            Third link
          </a>
          <a
            href="#!"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:mx-4 md:my-0"
          >
            Fourth link
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
