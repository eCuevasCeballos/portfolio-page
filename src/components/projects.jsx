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


const Projects = () => {

  const images = [
 
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6
  ]


const [icon, setIcon] = useState(false)

  return (
    <div className='w-full py-10 px-10 items-center' id='projects'>
      <div className='flex justify-between md:w-3/5 md:mx-auto'>
        <h3 className='text-black text-2xl font-bold  md:pl-0 md:text-3xl'><span className='text-blue font-icon font-semibold px-3' >&#60;&#47;&#62;</span>Projects</h3>
        <div onClick={() => (setIcon(!icon))} className='cursor-pointer flex items-center'>
            <p className='pr-2'>Change view!</p>
            {icon ? <FaGripHorizontal  size={30} /> : <BiCarousel size={30} />}
        </div>
      </div >
        <div className='py-20 pb-0'>
        {icon ? <Carousel images={images} /> : <Grid />}
        
        </div>
    </div>

  )
}

export default Projects