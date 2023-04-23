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

  const images = [
 
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6
  ]

  const projects = [
    {
      id : 1,
      title : 'Social Proof Component',
      description : Description1
    },
    {
      id : 2,
      title : 'Order Summary Component',
      description : Description2
    },
    {
      id : 3,
      title : 'FAQ Component',
      description : Description3
    },
    {
      id : 4,
      title : 'Article Overview',
      description : Description4
    },
    {
      id : 5,
      title : 'E-sports Magazine',
      description : Description5
    },
    {
      id : 6,
      title : 'Interactive Rating Component',
      description : Description6
    }
  ]

const [icon, setIcon] = useState(false)

  return (
    <div className='w-full py-10 px-10 items-center'>
      <div className='flex justify-between'>
        <h3 className='text-black text-2xl font-bold md:pl-9'><span className='text-blue font-icon font-semibold px-3'>&#60;&#47;&#62;</span>Projects</h3>
        <div onClick={() => (setIcon(!icon))}>
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