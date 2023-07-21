import React from 'react';
import BlogCarousel from '../../../BlogCarousel/BlogCarousel';

// export default function SmallContainer({ data, index }) {
//   if (data.images) {
//     return <BlogCarousel key={index} images={data.images} showDots={index === 1 || index === 3} />;
//   } else if (index === 2 || index === 4) {  // replace '3' with the index of the specific container where you want the button to appear
//     return (
//       <div key={index} className="h-80 w-60 bg-gray-300 mb-4 md:mb-0 relative flex items-center justify-center">
//         <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover absolute top-0 left-0" />
//         <button className="uppercase bg-gray-400 text-white px-8 py-1 mt-4 mb-[9rem] rounded hover:bg-gray-500 absolute bottom-0">My Button</button>
//       </div>
//     );
//   } else {
//     return (
//       <div key={index} className="h-80 w-60 bg-gray-300 mb-4 md:mb-0">
//         <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover" />
//       </div>
//     );
//   }
// }

export default function SmallContainer({ data, index }) {
  if (data.images) {
    return <BlogCarousel key={index} images={data.images} showDots={index === 1 || index === 3} />;
  } else if (index === 2 || index === 4) {
    return (
      <div key={index} className="lg:h-80 lg:w-60 h-48 w-36 bg-gray-300 mb-4 md:mb-0 relative flex items-center justify-center">
        <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover absolute top-0 left-0" />
        <button className="uppercase bg-gray-400 text-white px-6 py-0 text-sm rounded-full hover:bg-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">My Button</button>
      </div>
    );
  } else {
    return (
      <div key={index} className="lg:h-80 lg:w-60 h-48 w-36 bg-gray-300 mb-4 md:mb-0">
      <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover" />
      </div>
    );
  }
}






// export default function SmallContainer({ data, index }) {
//   if (data.images) {
//     return <BlogCarousel key={index} images={data.images} showDots={index === 1 || index === 3} />;
//   } else if (index === 2 || index === 4) {
//     return (
//       <div key={index} className="h-80 sm:h-64 w-60 sm:w-48 bg-gray-300 mb-4 md:mb-0 relative flex items-center justify-center">
//         <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover absolute top-0 left-0" />
//         <button className="uppercase bg-gray-400 text-white px-8 py-1 mt-4 mb-[9rem] rounded hover:bg-gray-500 absolute bottom-0">My Button</button>
//       </div>
//     );
//   } else {
//     return (
//       <div key={index} className="h-80 sm:h-64 w-60 sm:w-48 bg-gray-300 mb-4 md:mb-0">
//         <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover" />
//       </div>
//     );
//   }
// }



// export default function SmallContainer({ data, index }) {
//     if (data.images) {
//       return (
//         <div className="sm:w-60 w-40 sm:h-80 h-15 bg-gray-300 mb-4 md:mb-0 relative flex items-center justify-center">
//           <BlogCarousel key={index} images={data.images} showDots={index === 1 || index === 3} />
//         </div>
//       );
//     } else if (index === 2 || index === 4) {  
//       return (
//         <div key={index} className="sm:w-60 w-40 sm:h-80 h-56 bg-gray-300 mb-4 md:mb-0 relative flex items-center justify-center">
//           <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover absolute top-0 left-0" />
//           <button className="uppercase bg-gray-400 text-white px-8 py-1 mt-4 mb-[9rem] rounded hover:bg-gray-500 absolute bottom-0">My Button</button>
//         </div>
//       );
//     } else {
//       return (
//         <div key={index} className="sm:w-60 w-40 sm:h-80 h-56 bg-gray-300 mb-4 md:mb-0">
//           <img src={data.imgSrc} alt="Small Img" className="w-full h-full object-cover" />
//         </div>
//       );
//     }
//   }
  