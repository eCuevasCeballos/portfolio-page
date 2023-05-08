/* Carousel component */
import React, { useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {RiShareBoxLine} from 'react-icons/ri'

/* Function carousel takes 5 parameters */
const Carousel = ({ images, description,title, live, github }) => {

  /* Manages current index */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Sets current index to -1 (Previous slide) */
  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length; /* Value remains within the bounds */
    setCurrentIndex(index);
  };

  /* Sets current index to +1 (Next slide) */
  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    /* Main container */
    <div className="carousel shadow-2xl rounded-lg overflow-hidden md:w-1/2 mx-auto w-full">
      
      {/* Carousel */}
      <div className="carousel__image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <div>
            <h3 key={currentIndex} className='px-4 py-3 text-2xl font-semibold flex justify-center'>{title[currentIndex]}</h3>
            <p className="p-3">{description[currentIndex]}</p>
          </div>
      </div>
      
      {/* Carousel buttons + Links */}
      <div className="flex justify-center items-center py-2 cursor-pointer font-medium">
        {/* Calls Previous slide function */}
          <button onClick={goToPrevSlide} className="px-3 text-light-gray hover:scale-125 duration-300"><GrPrevious size={25}/></button>
            <RiShareBoxLine size={35} className='text-light-gray '/>
            <a href={live[currentIndex]} target='_blank' rel='noopener noreferrer' className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>See Live</a>
            <p className='text-3xl pr-4'>|</p>
            <BsGithub size={35} className='text-light-gray'/>
            <a href={github[currentIndex]} target='_blank' rel='noopener noreferrer' className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>View Code</a>
        {/* Calls Previous next function */}
          <button onClick={goToNextSlide} className="px-3 text-light-gray hover:scale-125 duration-300"><GrNext size={25}/></button>

      </div>
    </div>

  );
};

export default Carousel;
