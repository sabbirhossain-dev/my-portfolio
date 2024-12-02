import React from 'react'
import { FaCode, FaLink } from 'react-icons/fa'

const Card = ({image,title}) => {
  return (
    <div>
      <div className='flex flex-col gap-3 bg-black bg-opacity-40 p-3 rounded-md shadow-2xl group relative overflow-hidden cursor-pointer'>
          <img src={image} alt='hunt image' className='w-full h-[400px]md:h-[300px]' />
          <div className='translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 w-[50%] h-[90%] md:h-[89%] absolute top-0 left-0 bg-gray-900 bg-opacity-70 flex justify-center items-center gap-10'>
            <FaLink size={26} className='text-white font-light cursor-pointer hover:text-designColor transition-all duration-300' />
            <FaCode size={26} className='text-white font-light cursor-pointer hover:text-designColor transition-all duration-300' />
          </div>
          <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Card