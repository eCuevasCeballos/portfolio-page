import React from 'react'
import HTML from '../assets/HTML-logo.png'
import CSS from '../assets/CSS-logo.png'
import JavaScript from '../assets/JavaScript-logo.png'
import ReactJs from '../assets/ReactJs-logo.png'
import Tailwind from '../assets/Tailwind-logo.png'
import Studio from '../assets/UiStudio-logo.png'

const Skills = () => {
  return (
    <div className='h-fit w-full'>
     <div className='bg-light-gray pb-10 md:w-full md:m-0 md:p-10'>
       <h3 className='text-white font-bold text-2xl pt-10 pl-9'><span className='text-orange font-icon font-bold px-3'>&#60;&#47;&#62;</span>Skills</h3>
       <div className='items-center justify-center mx-auto grid grid-cols-2 grid-rows-3 px-2 py-4 w-3/4 justify-items-center gap-4'>
        <div className='w-full h-auto bg-dark-gray rounded-lg shadow-2xl shadow-html cursor-pointer'>
        <img src={HTML} alt="html logo" className='w-3/5 mx-auto p-1'/>
        <p className='text-white font-semibold text-center'>HTML</p>
        </div>
        <div className='w-full h-auto bg-dark-gray rounded-lg shadow-2xl shadow-css cursor-pointer'>
        <img src={CSS} alt="css logo" className='w-3/5 mx-auto p-1'/>
        <p className='text-white font-semibold text-center'>CSS</p>
        </div>
        <div className='w-full h-auto bg-dark-gray rounded-lg shadow-2xl shadow-js cursor-pointer'>
        <img src={JavaScript} alt="javascript logo" className='w-3/5 mx-auto p-1'/>
        <p className='text-white font-semibold text-center'>JavaScript</p>
        </div>
        <div className='w-full h-auto bg-dark-gray rounded-lg shadow-2xl shadow-jsx cursor-pointer'>
        <img src={ReactJs} alt="reactjs logo" className='w-3/5 mx-auto py-2'/>
        <p className='text-white font-semibold text-center'>ReactJs</p>
        </div>
        <div className='w-full py-2 h-auto bg-dark-gray rounded-lg shadow-2xl shadow-tailwind cursor-pointer'>
        <img src={Tailwind} alt="tailwind logo" className='w-3/5 mx-auto p-1'/>
        <p className='text-white font-semibold text-center '>Tailwind</p>
        </div>
        <div className='w-full h-auto bg-dark-gray rounded-lg shadow-2xl shadow-studio cursor-pointer'>
        <img src={Studio} alt="studio logo" className='w-3/5 mx-auto py-2'/>
        <p className='text-white font-semibold text-center'>UiPath Studio</p>
        </div>
       </div>
       <div className='py-6 text-center'>
       <button className='font-bold text-white bg-orange w-1/2 p-3 rounded-full'>Get my CV</button>
       </div>
     </div>
    </div>
  )
}

export default Skills