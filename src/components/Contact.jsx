import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import {AiFillLinkedin} from 'react-icons/ai'


const Contact = () => {
  return (
    <div className='w-full py-10 px-10 items-center'>
         <h3 className='text-black text-2xl font-bold md:pl-9'><span className='text-blue font-icon font-semibold px-3'>&#60;&#47;&#62;</span>Contact</h3>
         <div className='p-5 flex justify-between text-center'>
         <div className=' items-center'>
            <CgMail size={60} className='text-dark-gray cursor-pointer hover:text-orange' />
            <p className='font-semibold'>Mail</p>
         </div>
         <div className=' items-center'>
            <BsGithub size={60} className='text-dark-gray cursor-pointer hover:text-orange' />
            <p className='font-semibold'>GitHub</p>
         </div>
         <div className=' items-center'>
            <AiFillLinkedin size={60} className='text-dark-gray cursor-pointer hover:text-orange' />
            <p className='font-semibold'>LinkedIn</p>   
         </div> 
         </div>
    </div>
  )
}

export default Contact