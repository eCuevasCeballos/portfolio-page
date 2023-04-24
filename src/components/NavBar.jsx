import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';



const NavBar = () => {

    const [nav, setNav] = useState(false)

    const Links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about me'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
    

  return (
    <div className='flex justify-between items-center w-full h-20  text-black px-5 py-5 top-0 fixed bg-white shadow-2xl'>
        <div>
            <h1 className='text-3xl font-header md:pl-20 md:text-4xl'> <span className='text-blue font-icon font-semibold'>&#60;<span className='text-blue'>&#47;</span>&#62;</span>Erick<span className='text-blue'>.</span></h1>
        </div>
        <ul className='hidden md:flex pr-20'>

            {Links.map(link => (
                <li key={link.id} className='px-6 cursor-pointer text-1xl capitalize font-medium hover:scale-110 duration-300 hover:text-blue'>
                    <Link to={link.link} smooth duration={500} offset={-100}>{link.link}</Link>
                </li>
            ))}

        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} className='text-white'/> : <FaBars size={30}/>}
        </div>

        {nav && (
         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen to-gray-800 to-gray-500  bg-gradient-to-b from-dark-gray to-light-gray text-white'>
        {Links.map(link => (
                <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-3xl font-light  items-center justify-center hover:scale-110 duration-300 hover:text-orange'>
                    <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
                </li>
            ))}
        </ul>   
        )}
    </div>
  )
}

export default NavBar