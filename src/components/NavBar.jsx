/* Navigation bar */
import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';



const NavBar = () => {

    /* Manages nav and set nav + set useState to false */
    const [nav, setNav] = useState(false)

    /* Objects array */
    const Sections = [
        {
            id: 1, /* id to set the components in order */
            section: 'home' /* Name of the page section */
        },
        {
            id: 2,
            section: 'about me'
        },
        {
            id: 3,
            section: 'projects'
        },
        {
            id: 4,
            section: 'skills'
        },
        {
            id: 5,
            section: 'contact'
        }
    ]
    

  return (

    /* Main div */
    <div className='flex justify-between items-center w-full h-20  text-black px-5 py-5 top-0 fixed bg-white shadow-2xl'>

        {/* Section header */}
        <div>
            <h1 className='text-3xl font-header md:pl-20 md:text-4xl'> <span className='text-blue font-icon font-semibold'>&#60;<span className='text-blue'>&#47;</span>&#62;</span>Erick<span className='text-blue'>.</span></h1>
        </div>

        {/* List with the sections Desktop version */}
        <ul className='hidden md:flex pr-20'>

            {/* Iterates through the Sections array */}
            {Sections.map(section => (
                <li key={section.id} className='px-6 cursor-pointer text-1xl capitalize font-medium hover:scale-110 duration-300 hover:text-blue'>
                    {/* Smooth scroll */}
                    <Link to={section.section} smooth duration={500} offset={-100}>{section.section}</Link>
                </li>
            ))}
        </ul>
        
        {/* For mobile set useState to true */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'> {/* Show icon for smaller screens */}
            {nav ? <FaTimes size={30} className='text-white'/> : <FaBars size={30}/>} {/* Change icon when is clicked */}
        </div>

        {/* List with the sections Mobile version based on nav value*/}
        {nav && (
         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen to-gray-800 to-gray-500  
         bg-gradient-to-b from-dark-gray to-light-gray text-white'>
            {/* Iterates through the Sections array */}
            {Sections.map(section => (
            <li key={section.id} className='px-4 cursor-pointer capitalize py-6 text-3xl font-light  items-center justify-center hover:scale-110 duration-300 hover:text-orange'>
                {/* Smooth scroll */}
                <Link onClick={() => setNav(!nav)} to={section.section} smooth duration={500} offset={-100}>{section.section}</Link>
            </li>
            ))}
        </ul>   
        )}
    </div>
  )
}

export default NavBar