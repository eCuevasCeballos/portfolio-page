import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import {AiFillLinkedin} from 'react-icons/ai'


const Contact = () => {
  return (
    <div className='w-full py-10 px-10 items-center' id='contact'>
         <h3 className='text-black text-2xl font-bold pb-12  md:w-3/5 md:mx-auto md:text-3xl' ><span className='text-blue font-icon font-semibold px-3'>&#60;&#47;&#62;</span>Contact</h3>
      <div className='p-5 grid grid-cols-2 md:grid-cols-3 text-center gap-y-6'>
         
         <div className='flex flex-col items-center'>
         <a href="https://github.com/eCuevasCeballos" target='_blank' rel='noopener noreferrer'>
         <span aria-hidden='true'>
         <BsGithub size={60} className='text-dark-gray cursor-pointer hover:text-orange' />
         </span>
         <span className='sr-only'>GitHub</span>
         </a>
            <p className='font-semibold'>GitHub</p>
         </div>

         <div className='flex flex-col items-center'>
            <a href="https://www.linkedin.com/in/erick-cuevas-ceballos-b35973251/" target='_blank' rel='noopener noreferrer'>
               <span aria-hidden='true'>
               <AiFillLinkedin size={60} className='text-dark-gray cursor-pointer hover:text-orange' />
               </span>
               <span className='sr-only'>LinkedIn</span>
            </a>
            <p className='font-semibold'>LinkedIn</p>   
         </div>

         <div className='flex flex-col items-center col-span-2 md:col-span-1'>
         <span aria-hidden='true'>
            <CgMail size={60} className='text-dark-gray cursor-pointer hover:text-orange' />
         </span>
            <p className='font-semibold'>ecuevasceballos@gmail.com</p>
         </div> 
      </div>
    </div>
  )
}

export default Contact