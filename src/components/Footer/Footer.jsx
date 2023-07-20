// import React from 'react'
// import {BiShieldQuarter} from 'react-icons/bi'
// import {GrArticle} from 'react-icons/gr'
// import {BsHouseHeart, BsBagHeart} from 'react-icons/bs'
// import './FooterStyles.css'

// export default function Footer() {
//   const shadowStyle = {
//     boxShadow: "0px -10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)"
//   };

//   return (
//     <>
//         <div className='bg-white'>
//             <div style={shadowStyle} className="flex justify-center bg-white px-6 py-4">
//                 <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">First link</a>
//                 <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Second link</a>
//                 <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Third link</a>
//                 <a href="!#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Fourth link</a>
//             </div>
           
//             <div className="flex justify-center items-center bg-white font-black tracking-widest px-6 py-4 mt-1 ">
//                 <a href="/" className="text-xl font-bold text-gray-800 md:text-2xl">Palette Paradise</a>
//             </div>
//             <div className='flex justify-center mr-7 pb-2 text-xl'>
//                 <a href='!#' className='p-2'><BsHouseHeart/></a>
//                 <a href='!#' className='p-2'><GrArticle/></a>
//                 <a href='!#' className='p-2'><BsBagHeart/></a>
//                 <a href='!#' className='p-2'><BiShieldQuarter/></a>
//             </div>
            
//         </div>  
//     </>
//   )
// }

import React from 'react';
import { BiShieldQuarter } from 'react-icons/bi';
import { GrArticle } from 'react-icons/gr';
import { BsHouseHeart, BsBagHeart } from 'react-icons/bs';
import './FooterStyles.css';

export default function Footer() {
  const shadowStyle = {
    boxShadow:
      '0px -10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <div className="bg-white">
        <div
          style={shadowStyle}
          className="flex flex-wrap justify-center bg-white px-6 py-4"
        >
          <a
            href="!#"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:my-0"
          >
            First link
          </a>
          <a
            href="!#"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:my-0"
          >
            Second link
          </a>
          <a
            href="!#"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:my-0"
          >
            Third link
          </a>
          <a
            href="!#"
            className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-2 md:my-0"
          >
            Fourth link
          </a>
        </div>

        <div className="flex justify-center items-center bg-white font-black tracking-widest px-6 py-4 mt-1">
          <a
            href="/"
            className="text-xl font-bold text-gray-800 md:text-2xl"
          >
            Palette Paradise
          </a>
        </div>

        <div className="flex justify-center bg-white font-black tracking-widest px-6 py-2">
          <div className="flex justify-center items-center">
            <a href="!#" className="p-2">
              <BsHouseHeart />
            </a>
            <a href="!#" className="p-2">
              <GrArticle />
            </a>
            <a href="!#" className="p-2">
              <BsBagHeart />
            </a>
            <a href="!#" className="p-2">
              <BiShieldQuarter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
