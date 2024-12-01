import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div>
      <h3 className='text-2xl text-designColor opacity-90 font-medium pb-12 pt-5 uppercase tracking-wider'>Experience</h3>

      <motion.div
        initial={{x:"60%", opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:.4, delay:.3}}
     className='flex flex-col gap-5 bg-black bg-opacity-30 hover:bg-opacity-60 transition-colors duration-300 px-6 md:px-8 py-10 rounded-md shadow-md'>
        <div className='flex justify-between gap-10'>
            <p className='text-lg font-medium text-white '>Freelance</p>
            <p className='text-base font-medium'>2023 - present</p>
        </div>
        <ul className='flex flex-col gap-5'>
            <li className='text-base'>Collaborated with stakeholders during development processes to confirm creative proposals and design
            best practices</li>

            <li className='text-base'>Coded using HTML, CSS, JavaScript and React to develop features for both mobile and desktop
            platforms.</li>

            <li className='text-base'>Produced websites compatible with multiple browsers. Designed and updated layouts to meet usability and performance requirements.</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Experience
