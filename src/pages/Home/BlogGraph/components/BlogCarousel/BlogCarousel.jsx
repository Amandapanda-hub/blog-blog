import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BlogCarousel({ images, showDots = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className='relative lg:h-80 lg:w-60 h-48 w-36 bg-gray-300 mb-4 md:mb-0'>
      <img 
        src={images[currentIndex]}
        alt={`Small Img ${currentIndex + 1}`} 
        className="w-full h-full object-cover" 
      />
      {showDots && 
        <div className='lg:absolute lg:-bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row flex-col items-center justify-center lg:w-auto w-8 absolute -right-4 bottom-1/3 transform translate-x-1/2 -translate-y-1/2'>
          {images.map((image, index) => (
            <button 
              key={index}
              className={`lg:w-4 lg:h-4 w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-400'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      }
    </div>
  );
}

BlogCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  showDots: PropTypes.bool,
};

export default BlogCarousel;
