import React, { useState } from 'react'
import {FaGripHorizontal} from 'react-icons/fa'
import {BiCarousel} from 'react-icons/bi'

const Projects = () => {

const [icon, setIcon] = useState(false)

  return (
    <div className='w-full flex justify-between py-10 px-5 items-center'>
        <h3 className='text-black text-2xl '><span className='text-blue font-icon font-semibold px-3'>&#60;&#47;&#62;</span>Projects</h3>
        <div onClick={() => (setIcon(!icon))}>
            {icon ? <FaGripHorizontal  size={30}/> : <BiCarousel size={30} />}
            
        </div>
    </div>
  )
}

export default Projects