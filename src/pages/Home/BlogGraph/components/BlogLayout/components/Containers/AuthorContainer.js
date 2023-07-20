import React from 'react';
import {BsFacebook} from 'react-icons/bs'
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function AuthorContainer({data}) {
  return (
    <div className="h-80 w-full bg-transparent mb-4 md:mb-0 flex flex-col items-center justify-center p-4">
      <img src={data.imgRound} alt="Small Img" className="w-24 h-24 rounded-full object-cover" />
      <h2 className="mt-4 text-lg text-center">Author Name</h2>
      <p className="mt-2 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="mt-4 flex justify-between w-1/2">
        <i className=""><BsFacebook/></i>
        <i className=""><FaTwitter/></i>
        <i className=""><FaInstagram/></i>
        <i className=""><FaLinkedin/></i>
        <i className=""><FaYoutube/></i>
      </div>
    </div>
  );
}
