import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {RiShareBoxLine} from 'react-icons/ri'
import Project1 from '../assets/projects-1.png'
import Description1 from '../assets/Descriptions/projects-1.json'
import Project2 from '../assets/projects-2.png'
import Description2 from '../assets/Descriptions/projects-2.json'
import Project3 from '../assets/projects-3.png'
import Description3 from '../assets/Descriptions/projects-3.json'
import Project4 from '../assets/projects-4.png'
import Description4 from '../assets/Descriptions/projects-4.json'
import Project5 from '../assets/projects-5.png'
import Description5 from '../assets/Descriptions/projects-5.json'
import Project6 from '../assets/projects-6.png'
import Description6 from '../assets/Descriptions/projects-6.json'

const Grid = () => {

    const projects = [
        {
            id: 1,
            img: Project1,
            title : 'Social Proof Component',
            description : Description1,
            live : 'https://social-proof-section-ec.netlify.app/',
            github : 'https://github.com/eCuevasCeballos/social-proof-section-master'
        },
        {
            id: 2,
            img: Project2,
            title : 'Order Summary Component',
            description : Description2,
            live : 'https://order-summary-ec.netlify.app/',
            github : 'https://github.com/eCuevasCeballos/order-summary-component-main'
        },
        {
            id: 3,
            img: Project3,
            title : 'FAQ Component',
            description : Description3,
            live : 'https://faq-accordion-card-ec.netlify.app/',
            github : 'https://github.com/eCuevasCeballos/faq-accordion-card-main'
        },
        {
            id: 4,
            img: Project4,
            title : 'Article Overview',
            description : Description4,
            live : 'https://article-preview-ec.netlify.app/',
            github : 'https://github.com/eCuevasCeballos/article-preview-component-master'
        },
        {
            id: 5,
            img: Project5,
            title : 'E-sports Magazine',
            description : Description5,
            live : 'https://cosmo-techno.netlify.app/',
            github : 'https://github.com/eCuevasCeballos/Proyecto_interfaces'
        },
        {
            id: 6,
            img: Project6,
            title : 'Interactive Rating Component',
            description : Description6,
            live : 'https://interactive-rating-component-ec.netlify.app/',
            github : 'https://github.com/eCuevasCeballos/interactive-rating-component-main'
        }
    ]

  return (
    <div>
        
            {projects.map(projects =>(
                <div className='mb-20 shadow-2xl rounded-lg overflow-hidden'>
                <img key={projects.id} src={projects.img} alt="project screenshot" />
                <h3 className='px-4 py-3 text-2xl font-semibold flex justify-center'>{projects.title}</h3>
                <p className='px-4 text-justify'>{projects.description}</p>
            <div className='flex justify-center items-center py-4 cursor-pointer font-medium'>
                <RiShareBoxLine size={30} className='text-light-gray '/>
                <a href={projects.live} className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>See Live</a>
                <p className='text-3xl pr-4'>|</p>
                <BsGithub size={30} className='text-light-gray'/>
                <a href={projects.github} className='text-1xl text-light-gray px-4 hover:text-blue hover:scale-110 duration-300'>View Code</a>
            </div>
            </div>
            ))}     
    </div>
  )
}

export default Grid