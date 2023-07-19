import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BlogCarousel({ images, showDots = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className='relative h-80 w-60 bg-gray-300 mb-4 md:mb-0'>
      <img 
        src={images[currentIndex]}
        alt={`Small Img ${currentIndex + 1}`} 
        className="w-full h-full object-cover" 
      />
      {showDots && 
        <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4'>
          {images.map((image, index) => (
            <button 
              key={index}
              className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-400'}`}
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
