// import React from 'react';

// export default function TitleBanner() {
//   return (
//     <div className="mb-6 flex-col justify-center text-center">
//       <h1 className="text-5xl text-black">Title Over Image</h1>
//       <p className="text-xl text-black">Description over Image</p>
//     </div>
//   );
// }

import React from 'react';

export default function TitleBanner() {
  return (
    <div className="mb-6 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">Title Over Image</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black">Description over Image</p>
    </div>
  );
}



// export default function TitleBanner() {
//     return (
//       <div className="text-center text-sm md:text-2xl bg-yellow-400 py-2">
//         <h1>Blog</h1>
//       </div>
//     );
//   }
  