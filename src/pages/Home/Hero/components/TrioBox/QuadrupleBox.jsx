// import React from 'react';

// const BoxComponent = ({ image }) => (
//     <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md overflow-hidden w-64">
//         <img src={image} alt="Box" className="w-full h-40 object-cover" />
//         <button className="bg-gray-100 text-black px-4 py-2 mt-4 mb-4 rounded hover:bg-gray-200">
//             Button
//         </button>
//     </div>
// );

// const TrioBox = () => (
//     <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
//             <BoxComponent image="https://images.unsplash.com/photo-1607355237291-c2bb971ffacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDIyMXx8YXJ0aXN0fGVufDF8fHx8MTY4OTcwNzU5MHww&ixlib=rb-4.0.3&q=80&w=1000" />
//             <BoxComponent image="https://images.unsplash.com/photo-1452802447250-470a88ac82bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDExOHx8YXJ0aXN0fGVufDF8fHx8MTY4OTcwNzQzMXww&ixlib=rb-4.0.3&q=80&w=1000" />
//             <BoxComponent image="https://images.unsplash.com/photo-1516748413653-9829208eeb5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDU3MXx8YXJ0aXN0fGVufDF8fHx8MTY4OTcwNzc2M3ww&ixlib=rb-4.0.3&q=80&w=1000" />
//             <BoxComponent image="https://images.unsplash.com/photo-1616140588045-d1fe5b9a9665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDU1fHxhcnRpc3R8ZW58MXx8fHwxNjg5NzA3MzgwfDA&ixlib=rb-4.0.3&q=80&w=1000" />
//         </div>
//     </div>
// );

// export default TrioBox;

import React from 'react';

const BoxComponent = ({ image, buttonName }) => (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md overflow-hidden w-[15rem] relative">
        <img src={image} alt="Box" className="w-full h-[13rem] object-cover" />
            <button className="bg-white text-black px-4 py-2 mt-4 mb-4 rounded hover:bg-gray-200 absolute bottom-0">
                {buttonName}
            </button>
    </div>
);

const QuadrupleBox = () => (
    <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <BoxComponent image="https://images.unsplash.com/photo-1607355237291-c2bb971ffacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDIyMXx8YXJ0aXN0fGVufDF8fHx8MTY4OTcwNzU5MHww&ixlib=rb-4.0.3&q=80&w=1000" buttonName="Button 1" />
            <BoxComponent image="https://images.unsplash.com/photo-1452802447250-470a88ac82bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDExOHx8YXJ0aXN0fGVufDF8fHx8MTY4OTcwNzQzMXww&ixlib=rb-4.0.3&q=80&w=1000" buttonName="Button 2" />
            <BoxComponent image="https://images.unsplash.com/photo-1516748413653-9829208eeb5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDU3MXx8YXJ0aXN0fGVufDF8fHx8MTY4OTcwNzc2M3ww&ixlib=rb-4.0.3&q=80&w=1000" buttonName="Button 3" />
            <BoxComponent image="https://images.unsplash.com/photo-1616241673708-b93676c33b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDE3N3x8YXJ0JTIwbWFya2VyfGVufDF8fHx8MTY4OTcxNDc1OXww&ixlib=rb-4.0.3&q=80&w=1000" buttonName="Button 4" />
        </div>
    </div>
);

export default QuadrupleBox;