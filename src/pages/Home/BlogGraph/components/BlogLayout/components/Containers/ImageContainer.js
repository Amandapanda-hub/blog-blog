import React from 'react';

export default function ImageContainer({ imgSrc }) {
  return (
    <div className="relative h-64 md:h-[30rem]">
      <img src={imgSrc} alt="Art Couple Img" className="w-full h-full object-cover" />
    </div>
  );
}
