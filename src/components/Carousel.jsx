import React, { useState } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {RiShareBoxLine} from 'react-icons/ri'
import Description1 from '../assets/Descriptions/projects-1.json'
import Description2 from '../assets/Descriptions/projects-2.json'
import Description3 from '../assets/Descriptions/projects-3.json'
import Description4 from '../assets/Descriptions/projects-4.json'
import Description5 from '../assets/Descriptions/projects-5.json'
import Description6 from '../assets/Descriptions/projects-6.json'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id : 1,
      title : 'Social Proof Component',
      description : Description1,
      live : 'https://social-proof-section-ec.netlify.app/',
      github : 'https://github.com/eCuevasCeballos/social-proof-section-master'
    },
    {
      id : 2,
      title : 'Order Summary Component',
      description : Description2,
      live : 'https://order-summary-ec.netlify.app/',
      github : 'https://github.com/eCuevasCeballos/order-summary-component-main'
    },
    {
      id : 3,
      title : 'FAQ Component',
      description : Description3,
      live : 'https://faq-accordion-card-ec.netlify.app/',
      github : 'https://github.com/eCuevasCeballos/faq-accordion-card-main' 
    },
    {
      id : 4,
      title : 'Article Overview',
      description : Description4,
      live : 'https://article-preview-ec.netlify.app/',
      github : 'https://github.com/eCuevasCeballos/article-preview-component-master' 
    },
    {
      id : 5,
      title : 'E-sports Magazine',
      description : Description5,
      live : 'https://cosmo-techno.netlify.app/',
      github : 'https://github.com/eCuevasCeballos/Proyecto_interfaces'
    },
    {
      id : 6,
      title : 'Interactive Rating Component',
      description : Description6,
      live : 'https://interactive-rating-component-ec.netlify.app/',
      github : 'https://github.com/eCuevasCeballos/interactive-rating-component-main' 
    }
  ]

  const project = projects.filter(project => project.id)[currentIndex];

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
            <div>
              <h3 key={project.id} className='px-4 py-3 text-2xl font-semibold flex justify-center'>{project.title}</h3>
              <p className="p-3">{project.description}</p>
            </div>
      </div>
      <div>
      
      </div>
      <div className="flex justify-center items-center py-2 cursor-pointer font-medium">
      <button onClick={goToPrevSlide} className="px-3 text-light-gray hover:scale-125 duration-300"><GrPrevious size={25}/></button>
        <RiShareBoxLine size={35} className='text-light-gray '/>
        <a href={project.live} className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>See Live</a>
        <p className='text-3xl pr-4'>|</p>
        <BsGithub size={35} className='text-light-gray'/>
        <a href={project.github} className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>View Code</a>
        <button onClick={goToNextSlide} className="px-3 text-light-gray hover:scale-125 duration-300"><GrNext size={25}/></button>
        </div>
      <div className="carousel__buttons flex justify-between p-2 md:px-20"> 
      </div>
    </div>
  );
};

export default Carousel;
