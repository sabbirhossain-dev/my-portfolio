import React from 'react'
import { FaCode, FaLink} from 'react-icons/fa'

const Card = ({image,title,liveLink,codeLink}) => {
  return (
    <div>
      <div className='flex flex-col gap-3 bg-black bg-opacity-40 p-3 rounded-md shadow-2xl   overflow-hidden cursor-pointer relative group'>
          <img src={image} alt='hunt image' className='w-full h-[400px]md:h-[300px] ' />
          <div className='translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 w-[55%] h-[90%] md:h-full absolute top-0 right-0 bg-gray-900 bg-opacity-70 flex justify-center items-center gap-10 '>
           <a href={liveLink} target='_blank'> <FaLink size={26} className='text-white font-medium cursor-pointer hover:text-designColor transition-all duration-300 ' /></a>
            <a href={codeLink} target='_blank'><FaCode size={26} className='text-white font-medium cursor-pointer hover:text-designColor transition-all duration-300 ' /></a>
          </div>
          <h3 className='py-2 '>{title}</h3>
        </div>
    </div>
  )
}

export default Card
