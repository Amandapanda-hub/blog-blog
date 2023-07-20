import React from 'react';
import {BsShareFill} from 'react-icons/bs'
import {FiMoreHorizontal} from 'react-icons/fi'
import { Link } from 'react-router-dom';


function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n-1) + "...." : str;
  }

export default function LongContainer({data}) {
    return (
      <div className="flex flex-col md:flex-row items-center bg-gray-300 mt-9 md:h-40">
        <img src={data.imgSrc} alt="Long img" className="w-full md:w-1/3 h-64 md:h-full object-cover" />
        <div className="p-4 flex flex-col justify-between w-full md:w-2/3 overflow-hidden">
          <div className="overflow-auto whitespace-normal overflow-wrap">
            <h1 className="text-2xl">{data.title}</h1>
            <h2 className="text-lg">{data.subtitle}</h2>
            <p>{truncate(data.description, 80)}</p>
          </div>
          <div className="flex pt-5 space-x-4">
          <Link to={`/post/${data.id}`} className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
              <FiMoreHorizontal className='text-[1.2rem]'/>
            </Link>
            <button className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <BsShareFill className='text-[0.8rem]'/>
            </button>
          </div>
        </div>
      </div>
    );
  }
 