import React from 'react'
import HeroImage from '../assets/HeroImage.png'

const Home = () => {
  return (
    <div name='home' className='w-full'>
      <div className='max-w-screen-lg mx-auto grid items-center justify-center px-6 md:flex-row text-black md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
         <h2 className='text-4xl sm:text-6xl font-bold'><span className='font-light'>I'm Erick,</span>
         <br /> a <span className='text-blue'>Front End Web</span><br /> Developer.</h2>
        <p className='py-10 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias nesciunt aperiam ex incidunt animi optio, 
        voluptatem voluptates deleniti temporibus voluptatum, magni sed expedita sequi! Voluptate provident dolores magni nisi!</p> 
        </div> 
        <div className='w-full h-auto l:hidden'>
      <img src={HeroImage} alt="My profile pic" className='w-full h-auto ' /> 
      </div>
      </div>
    </div>
  )
}

export default Home