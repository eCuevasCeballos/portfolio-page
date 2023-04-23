import React, { useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {RiShareBoxLine} from 'react-icons/ri'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel shadow-2xl rounded-lg overflow-hidden">
      <div className="carousel__image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div>
        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, illum tempore culpa voluptas atque perferendis 
            est ad ex dolorem omnis laborum earum facilis distinctio suscipit provident, esse rerum unde in?</p>
      </div>
      <div className="flex justify-center items-center py-2 cursor-pointer font-medium">
      <button onClick={goToPrevSlide} className="px-3 text-light-gray hover:scale-125 duration-300"><GrPrevious size={25}/></button>
        <RiShareBoxLine size={35} className='text-light-gray '/>
        <a href='1' className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>See Live</a>
        <p className='text-3xl pr-4'>|</p>
        <BsGithub size={35} className='text-light-gray'/>
        <a href='1' className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>View Code</a>
        <button onClick={goToNextSlide} className="px-3 text-light-gray hover:scale-125 duration-300"><GrNext size={25}/></button>
        </div>
      <div className="carousel__buttons flex justify-between p-2 md:px-20"> 
      </div>
    </div>
  );
};

export default Carousel;
