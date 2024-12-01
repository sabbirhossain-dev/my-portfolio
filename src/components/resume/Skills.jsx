import React from 'react'
import { FaBootstrap, FaHtml5 ,FaFigma} from 'react-icons/fa'
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJquery} from "react-icons/si";
import { RiNextjsLine,RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';



const Skills = () => {




    
  return (
    <div>
      <div
      
      className='pb-10 md:pb-16'>
        <h3 className='text-2xl tracking-wider text-designColor opacity-90 font-medium pb-12 pt-5 uppercase'>My Skills</h3>
        <div className=' px-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 sm:gap-16'>
           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.4, delay:.3}}
            className='skillsIcons group'>
            <FaHtml5 className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>HTML</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.5, delay:.3}}
            className='skillsIcons group'>
            <IoLogoCss3 className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>CSS</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.6, delay:.2}}
            className='skillsIcons group'>
            <IoLogoJavascript className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>JavaScript</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.3, delay:.3}}
            className='skillsIcons group'>
            <FaReact className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>React</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.5, delay:.2}}
            className='skillsIcons group'>
            <TbBrandRedux className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>Redux</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.5, delay:.3}}
            className='skillsIcons group'>
            <RiNextjsLine className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>Next</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.5, delay:.2}}
            className='skillsIcons group'>
            <SiJquery className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>jQuery</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.4, delay:.3}}
            className='skillsIcons group'>
            <RiTailwindCssFill className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>Tailwind</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.4, delay:.2}}
            className='skillsIcons group'>
            <FaBootstrap className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>Bootstrap</p>
           </motion.div>

           <motion.div
           initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.5, delay:.3}}
            className='skillsIcons group'>
            <FaFigma className='group-hover:text-designColor transition-colors duration-300 text-[32px] md:text-[50px]'/>
            <p className='text-sm md:text-base'>Figma</p>
           </motion.div>
           
        </div>
      </div>
      
      {/* <ul className='gap-5 md:gap-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6'>
                <li className='skillsIcon animate-pulse'>
                </li>
                <li className='skillsIcon animate-pulse'><IoLogoCss3 /></li>
                <li className='skillsIcon animate-pulse'><IoLogoJavascript /></li>
                <li className='skillsIcon animate-pulse '><FaReact /></li>
                <li className='skillsIcon animate-pulse'><TbBrandRedux /></li>
                <li className='skillsIcon animate-pulse'><SiJquery /></li>
                <li className='skillsIcon animate-pulse'><RiNextjsLine /></li>
                <li className='skillsIcon animate-pulse'><RiTailwindCssFill /></li>
                <li className='skillsIcon animate-pulse'><FaBootstrap /></li>
                <li className='skillsIcon animate-pulse'><FaFigma /></li>
                <li className='skillsIcon animate-pulse'><SiAdobexd /></li>
            </ul> */}
    </div>
  )
}

export default Skills
