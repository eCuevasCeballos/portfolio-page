/* Skills component */
import React from 'react'
import HTML from '../assets/HTML-logo.png'
import CSS from '../assets/CSS-logo.png'
import JavaScript from '../assets/JavaScript-logo.png'
import ReactJs from '../assets/ReactJs-logo.png'
import Tailwind from '../assets/Tailwind-logo.png'
import Studio from '../assets/UiStudio-logo.png'

const Skills = () => {

    /* Objects array */
    const skills = [
        {
            id: 1,
            img: HTML,
            title: 'HTML',
            color : 'shadow-html'
        },
        {
            id: 2,
            img: CSS,
            title: 'CSS',
            color : 'shadow-css'
        },
        {
            id: 3,
            img: JavaScript,
            title: 'JavaScript',
            color : 'shadow-js'
        },
        {
            id: 4,
            img: ReactJs,
            title: 'ReactJs',
            color : 'shadow-jsx'
        },
        {
            id: 5,
            img: Tailwind,
            title: 'Tailwind',
            color : 'shadow-tailwind'
        },
        {
            id: 6,
            img: Studio,
            title: 'Ui Studio',
            color : 'shadow-studio'
        }
    ]


  return (

    /* Main div */
    <div className='h-fit w-full' id='skills'>

        {/* Section header */}
        <div className='bg-light-gray md:w-full md:m-0 md:p-10'>
            <h3 className='text-white font-bold text-2xl pt-10 mb-4 pl-9 md:w-3/5 md:mx-auto md:text-3xl' ><span className='text-orange font-icon font-bold px-3'>&#60;&#47;&#62;
            </span>Skills</h3>

        {/* Skills container */}
        <div className='items-center justify-center mx-auto grid grid-cols-2 grid-rows-3 px-2 py-4 w-3/4 justify-items-center gap-x-7 gap-y-10 xl:grid-cols-6 sm:grid-rows-1'>
        {
            /* Iterates through the skills array */
            skills.map(skills =>(

                /* Sets the skills based on the id */
                <div  className={`w-full h-auto p-5 bg-dark-gray rounded-lg shadow-2xl ${skills.color} cursor-pointer`}>
                    <img key={skills.id} src={skills.img} alt={`${skills.title} logo`} className='w-20 h-20 mx-auto'/>
                    <p className='text-white font-semibold text-center pt-3'>{skills.title}</p>
                </div>
            ))
        }
        </div>

        {/* Download personal resume */}
        <div className='py-6 text-center'>
            {/* Opens link to google drive on user click */}
            <a href='https://drive.google.com/file/d/1fWgm-Phs9s2Sry-qlg81yoZYxPt73xf4/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
            <button className='font-bold text-white border-2 border-black bg-black w-1/2 p-3 rounded-full mb-7 hover:border-2 hover:border-white 
            hover:bg-light-gray sm:w-1/3 md:w-1/4'>Get my CV</button>
            </a>
        </div>

        </div>
    </div>
  )
}

export default Skills