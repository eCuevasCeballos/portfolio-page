import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {RiShareBoxLine} from 'react-icons/ri'
import Project1 from '../assets/projects-1.png'
import Project2 from '../assets/projects-2.png'
import Project3 from '../assets/projects-3.png'
import Project4 from '../assets/projects-4.png'
import Project5 from '../assets/projects-5.png'
import Project6 from '../assets/projects-6.png'

const Grid = () => {

    const projects = [
        {
            id: 1,
            img: Project1
        },
        {
            id: 2,
            img: Project2
        },
        {
            id: 3,
            img: Project3
        },
        {
            id: 4,
            img: Project4
        },
        {
            id: 5,
            img: Project5
        },
        {
            id: 6,
            img: Project6
        }
    ]

  return (
    <div>
        
            {projects.map(projects =>(
                <div className='my-6 shadow-2xl rounded-lg overflow-hidden'>
                <img key={projects.id} src={projects.img} alt="project screenshot" />
                <p className='p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime, nulla deserunt enim 
            adipisci mollitia cum obcaecati quia, asperiores dolores delectus incidunt inventore? Eum sed 
            exercitationem quis voluptatum iusto quaerat?</p>
            <div className='flex justify-center items-center py-2 cursor-pointer font-medium'>
                <RiShareBoxLine size={35} className='text-light-gray '/>
                <a href='1' className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>See Live</a>
                <p className='text-3xl pr-4'>|</p>
                <BsGithub size={35} className='text-light-gray'/>
                <a href='1' className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>View Code</a>
            </div>
            </div>
            ))}     
    </div>
  )
}

export default Grid