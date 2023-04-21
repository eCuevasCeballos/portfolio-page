import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const NavBar = () => {

    const [nav, setNav] = useState(false)

    const Links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about-me'
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
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-medium'>Erick</h1>
        </div>
        <ul className='hidden md:flex'>

            {Links.map(link => (
                <li key={link.id} className='px-4 cursor-pointer capitalize font-medium hover:scale-110 duration-300'>
                    {link.link}
                </li>
            ))}

        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 to-gray-500'>
        {Links.map(link => (
                <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-3xl font-light'>
                    {link.link}
                </li>
            ))}
        </ul>   
        )}
    </div>
  )
}

export default NavBar