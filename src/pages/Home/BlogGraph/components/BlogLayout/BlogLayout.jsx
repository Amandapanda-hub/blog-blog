import React from 'react';
import BigImage from '../../../../../assets/images/cropaiartcouple.jpg'
import { longContainerData } from './components/Data/longContainerData';
import { smallContainerData } from './components/Data/smallContainerData';
import TitleBanner from './components/Containers/TitleBanner';
import ImageContainer from './components/Containers/ImageContainer';
import LongContainer from './components/Containers/LongContainer';
import AuthorContainer from './components/Containers/AuthorContainer';
import SmallContainer from './components/Containers/SmallContainer';


export default function BlogLayout() {
  const hrShadow = {
    color: '#000000', 
    backgroundColor: '#000000', 
    height: '2px'
  };

  return (
    <div className='p-4 md:p-16 mx-auto lg:ml-[8rem]'>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
    <div className="col-span-1 md:col-span-2 md:pr-8">
      <TitleBanner />
      <ImageContainer imgSrc={BigImage} />

      <div className="flex flex-col mt-10">
        <hr style={hrShadow} className=''></hr>
        {longContainerData.map((data, index) => (
          <LongContainer key={index} data={data} />
        ))}
      </div>
    </div>

    <div className="col-span-1 mt-10 md:mt-20 md:pl-8 space-y-20">
      <AuthorContainer data={smallContainerData[0]} />

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8 justify-items-center md:mx-auto space-y-10 ">
      {smallContainerData.map((data, index) => {
  if (index !== 0) {
    return <SmallContainer key={index} data={data} index={index} />;
  } else {
    return null;
  }
})}
      </div>
    </div>
  </div>
</div>
  );
}


