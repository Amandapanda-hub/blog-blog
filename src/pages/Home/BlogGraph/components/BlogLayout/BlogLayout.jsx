import React from 'react';
import BigImage from '../../../../../assets/images/cropaiartcouple.jpg'
import BlogCarousel from '../BlogCarousel/BlogCarousel';
import {BsFacebook} from 'react-icons/bs'
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


export default function BlogLayout() {
  // data for the longer containers >>
  const longContainerData = [
    { title: 'Title 1', subtitle: 'Subtitle 1', description: 'Description 1', imgSrc: 'https://images.unsplash.com/photo-1516146544193-b54a65682f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDU3Mnx8YXJ0JTIwbWFya2VyfGVufDF8fHx8MTY4OTcyMDkzMXww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 2', subtitle: 'Subtitle 2', description: 'Description 2', imgSrc: 'https://images.unsplash.com/photo-1505416795390-0beeb662b1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDc3N3x8YXJ0JTIwbWFya2VyfGVufDF8fHx8MTY4OTcyMTEwOXww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 3', subtitle: 'Subtitle 3', description: 'Description 3', imgSrc: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDk3OHx8YXJ0JTIwbWFya2VyfGVufDF8fHx8MTY4OTcyMTM4OXww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 4', subtitle: 'Subtitle 4', description: 'Description 4', imgSrc: 'https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDU0fHxhcnR8ZW58MXx8fHwxNjg5Njg5NTEzfDA&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 5', subtitle: 'Subtitle 5', description: 'Description 5', imgSrc: 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDIwOXx8YXJ0fGVufDF8fHx8MTY4OTcwMzcyNnww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 6', subtitle: 'Subtitle 6', description: 'Description 6', imgSrc: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDI3N3x8YXJ0fGVufDF8fHx8MTY4OTcwMzg1M3ww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 7', subtitle: 'Subtitle 7', description: 'Description 7', imgSrc: 'https://images.unsplash.com/photo-1586032788085-d75f745f26e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDMwMXx8YXJ0fGVufDF8fHx8MTY4OTcwMzg2Nnww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 8', subtitle: 'Subtitle 8', description: 'Description 8', imgSrc: 'https://images.unsplash.com/photo-1499892477393-f675706cbe6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDM3N3x8YXJ0fGVufDF8fHx8MTY4OTcwMzkxNXww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 9', subtitle: 'Subtitle 9', description: 'Description 9', imgSrc: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDQxNHx8YXJ0fGVufDF8fHx8MTY4OTcwMzkxNnww&ixlib=rb-4.0.3&q=80&w=1000' },
    { title: 'Title 10', subtitle: 'Subtitle 10', description: 'Description 10', imgSrc: 'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDQ2Nnx8YXJ0fGVufDF8fHx8MTY4OTcwMzk2Mnww&ixlib=rb-4.0.3&q=80&w=1000' },

  ];
  // data for the smaller column containers >>
  const smallContainerData = [
    { imgRound: 'https://images.unsplash.com/photo-1601887389937-0b02c26b602c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDI1OHx8YXJ0fGVufDF8fHx8MTY4OTcwMzg1M3ww&ixlib=rb-4.0.3&q=80&w=1000' },
    
    { images: [
      'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDQ3N3x8YXJ0fGVufDF8fHx8MTY4OTcwMzk2Mnww&ixlib=rb-4.0.3&q=80&w=1000',
      'https://images.unsplash.com/photo-1560547168-3a6b03b1d436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDUwN3x8YXJ0fGVufDF8fHx8MTY4OTcwMzk2OXww&ixlib=rb-4.0.3&q=80&w=1000',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDUwNHx8YXJ0fGVufDF8fHx8MTY4OTcwMzk2OXww&ixlib=rb-4.0.3&q=80&w=1000'
    ] },
    { imgSrc: 'https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEwOXx8YXJ0JTIwc3R1ZmZ8ZW58MXx8fHwxNjg5NzQzNDM3fDA&ixlib=rb-4.0.3&q=80&w=1000' },
    { images: [
      'https://images.unsplash.com/photo-1505840541251-02ab21f95b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDYxOXx8YXJ0fGVufDF8fHx8MTY4OTcwMzk3N3ww&ixlib=rb-4.0.3&q=80&w=1000',
      'https://images.unsplash.com/photo-1515160813423-b851dc54a427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDgxMXx8YXJ0fGVufDF8fHx8MTY4OTcwNDI2OHww&ixlib=rb-4.0.3&q=80&w=1000',
      'https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDY2M3x8YXJ0fGVufDF8fHx8MTY4OTcwNDA4MHww&ixlib=rb-4.0.3&q=80&w=1000'
    ] },
    { imgSrc: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEyfHxhcnQlMjBzdHVmZnxlbnwxfHx8fDE2ODk3NDM0Mjl8MA&ixlib=rb-4.0.3&q=80&w=1000' },
  ];

  return (
    // long containers >>
    <div className='m-[10rem]'>
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-2/3">
        <div className="mb-4">
          <h1 className="text-4xl text-black">Title Over Image</h1>
          <p className="text-xl text-black">Description over Image</p>
        </div>
        <div className="relative h-64 md:h-[21rem]">
          <img src={BigImage} alt="Art Couple Img" className="w-full h-full object-cover" />
        </div>

        <div className="mt-4">
          {longContainerData.map((data, index) => (
            <div key={index} className="flex items-center bg-gray-300 mt-9 h-40">
              <img src={data.imgSrc} alt="Long img" className="w-1/3 h-full object-cover" />
              <div className="p-4 flex flex-col justify-between w-1/2">
                <div>
                  <h1 className="text-2xl">{data.title}</h1>
                  <h2 className="text-lg">{data.subtitle}</h2>
                  <p>{data.description}</p>
                </div>
                <div className="flex pt-5 space-x-4">
                  <button className="w-4 h-4 bg-gray-500 rounded-full"></button>
                  <button className="w-4 h-4 bg-gray-400 rounded-full"></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/4 flex flex-col items-start md:items-stretch justify-start md:space-y-20">
          {/* the first container with a round image */}
          <div className="h-80 w-full bg-transparent mb-4 md:mb-0 flex flex-col items-center justify-center p-4">
            <img src={smallContainerData[0].imgRound} alt="Small Img" className="w-24 h-24 rounded-full object-cover" />
            <h2 className="mt-4 text-lg text-center">Title</h2>
            <p className="mt-2 text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="mt-4 flex justify-between w-1/2">
              <i className=""><BsFacebook/></i>
              <i className=""><FaTwitter/></i>
              <i className=""><FaInstagram/></i>
              <i className=""><FaLinkedin/></i>
              <i className=""><FaYoutube/></i>
            </div>
          </div>
          {/* rest of the small column containers */}
          <div className='flex flex-col items-center space-y-20'>
            {smallContainerData.map((data, index) => {
            if (index === 0) {
              return null;
            }
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
    })}
</div>
        </div>
      </div>
    </div>
  );
}