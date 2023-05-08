/* About Me section */
import React from 'react'

const About = () => {

  return (
    /* Main div */
    <div className='w-full' id='about me'>
      
      {/* Header */}
      <div className='bg-light-gray'>
        <h3 className='text-white font-bold text-2xl pt-10 pl-9 md:w-3/5 md:mx-auto md:text-3xl'>
        <span className='text-orange font-icon font-bold px-3'>&#60;&#47;&#62;</span>About Me</h3> 

        {/* Paragraphs */}
      <div className='flex flex-col justify-center items-center md:w-3/5 md:mx-auto'>
        <p className='text-white px-9 py-6 md:w-full'>My name is Erick Cuevas, I'm from Colima, Mexico.
           I majored in software engineering at the University of Colima and graduated in June 2023.</p>
        <p className='text-white px-9 pb-6 md:w-full'>I worked as a Branch assistant in a tech store 
          named Itech Colima for almost three years. Then I started  working for a local company called Binden, where 
          I was the Shipping Manager for a year. In 2023 I became an intern for Roboyo Mexico, an RPA development company.</p>
        <p className='text-white px-9 pb-16 md:w-full'>In my free time, I like to watch movies, series, and sports, like
          football ⚽ and the UFC🥊. I'm also a big fan of video games of any kind.</p>
      </div>
      </div>

    </div>
  )
}

export default About