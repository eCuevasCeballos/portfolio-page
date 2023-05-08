/* Projects component */
import React, { useState } from 'react'
import {FaGripHorizontal} from 'react-icons/fa'
import {BiCarousel} from 'react-icons/bi'
import Carousel from './Carousel'
import Grid from './Grid'
import Project1 from '../assets/projects-1.png'
import Project2 from '../assets/projects-2.png'
import Project3 from '../assets/projects-3.png'
import Project4 from '../assets/projects-4.png'
import Project5 from '../assets/projects-5.png'
import Project6 from '../assets/projects-6.png'
import Description1 from '../assets/Descriptions/projects-1.json'
import Description2 from '../assets/Descriptions/projects-2.json'
import Description3 from '../assets/Descriptions/projects-3.json'
import Description4 from '../assets/Descriptions/projects-4.json'
import Description5 from '../assets/Descriptions/projects-5.json'
import Description6 from '../assets/Descriptions/projects-6.json'



const Projects = () => {

  /* Array */
  const projects = {

    images: [Project1, Project2, Project3, Project4, Project5, Project6],
    title : ['Social Proof Component', 'Order Summary Component', 'FAQ Component', 'Article Overview', 'E-sports Magazine', 'Interactive Rating Component'],
    description : [Description1, Description2, Description3, Description4, Description5, Description6],
    live : [
      'https://social-proof-section-ec.netlify.app/',
      'https://order-summary-ec.netlify.app/',
      'https://faq-accordion-card-ec.netlify.app/',
      'https://article-preview-ec.netlify.app/',
      'https://cosmo-techno.netlify.app/',
      'https://interactive-rating-component-ec.netlify.app/'
    ],
    github : [
      'https://github.com/eCuevasCeballos/social-proof-section-master',
      'https://github.com/eCuevasCeballos/order-summary-component-main',
      'https://github.com/eCuevasCeballos/faq-accordion-card-main',
      'https://github.com/eCuevasCeballos/article-preview-component-master',
      'https://github.com/eCuevasCeballos/Proyecto_interfaces',
      'https://github.com/eCuevasCeballos/interactive-rating-component-main'
    ] 
  }
    
  /* Manages the icons Carousel & Grid */
  const [icon, setIcon] = useState(false)

  return (

    /* Main div */
    <div className='w-full py-10 px-10 items-center' id='projects'>

      {/* Section header + icons */}
      <div className='flex justify-between md:w-3/5 md:mx-auto'>
        <h3 className='text-black text-2xl font-bold  md:pl-0 md:text-3xl'><span className='text-blue font-icon font-semibold px-3' >&#60;&#47;&#62;</span>Projects</h3>
        
        {/* Changes useState value on user click */}
        <div onClick={() => (setIcon(!icon))} className='cursor-pointer flex items-center'>
            <p className='pr-2'>Change view!</p>
            {icon ? <FaGripHorizontal  size={30} /> : <BiCarousel size={30} />}
        </div>

        {/* Displays the components using the icon */}
        </div >
          <div className='py-20 pb-0'>
            {/* Adds the values to the parameters in the component */}
            {icon ? <Carousel {...projects} /> : <Grid {...projects} />}
        </div>
    </div>

  )
}

export default Projects