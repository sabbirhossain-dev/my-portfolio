import React from 'react'
import { motion } from 'framer-motion'
const Education = () => {
  return (
    <div 
    
    className='w-full'>
      <h3 className='text-2xl uppercase tracking-wider text-designColor opacity-90 font-medium pb-12 pt-5'>Education</h3>

      <motion.div
        initial={{x:"-60%", opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:.6, delay:.3}}
        className='flex flex-col gap-5'>
      <div className='flex flex-col gap-3 bg-black bg-opacity-25 hover:bg-opacity-60 transition-colors duration-300 p-6 md:p-8 rounded-md '>
        <h4 className='text-xl md:text-2xl font-semibold text-white'>Diploma in Computer Science</h4>
        <p className='tex-base md:text-lg font-medium'>National Polytechnic Institute</p>
        <p className='text-sm md:text-base'>2017 - 2021</p>
      </div>

      <motion.div 
      initial={{x:"60%", opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:.4, delay:.3}}
      className='flex flex-col gap-3 bg-black bg-opacity-25 hover:bg-opacity-60 transition-colors duration-300 p-6 md:p-8 rounded-md '>
        <h4 className='text-xl md:text-2xl font-semibold text-white'>Bsc in Computer Science</h4>
        <p className='text-base md:text-lg font-medium'>Bangladesh University of Business and Technology (BUBT)</p>
        <p className='text-sm md:text-base'>2024 - Present</p>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Education
