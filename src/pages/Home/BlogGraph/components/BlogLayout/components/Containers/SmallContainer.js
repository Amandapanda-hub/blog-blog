import React from 'react';
import BlogCarousel from '../../../BlogCarousel/BlogCarousel';

export default function SmallContainer({ data, index }) {
  if (data.images) {
    return <BlogCarousel key={index} images={data.images} showDots={index === 1 || index === 3} />;
  } else if (index === 2 || index === 4) {  // replace '3' with the index of the specific container where you want the button to appear
    return (
      <div key={index} className="h-80 w-60 bg-gray-300 mb-4 md:mb-0 relative flex items-center justify-center">
        <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover absolute top-0 left-0" />
        <button className="uppercase bg-gray-400 text-white px-8 py-1 mt-4 mb-[9rem] rounded hover:bg-gray-500 absolute bottom-0">My Button</button>
      </div>
    );
  } else {
    return (
      <div key={index} className="h-80 w-60 bg-gray-300 mb-4 md:mb-0">
        <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover" />
      </div>
    );
  }
}
