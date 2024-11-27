import React from 'react'
import { FaBootstrap, FaHtml5 ,FaFigma} from 'react-icons/fa'
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiJquery,SiAdobexd } from "react-icons/si";
import { RiNextjsLine,RiTailwindCssFill } from "react-icons/ri";




const Skills = () => {

    
  return (
    <div>
      <div className='text-center'>
        <h3 className='text-3xl font-medium py-20'>My Skills</h3>
        <div className='w-full md:w-4/5 lg:4/6 mx-auto'>
            <ul className='gap-7 md:gap-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6'>
                <li className='skillsIcon animate-pulse'><FaHtml5 /></li>
                <li className='skillsIcon animate-pulse'><IoLogoCss3 /></li>
                <li className='skillsIcon animate-pulse'><IoLogoJavascript /></li>
                <li className='skillsIcon animate-pulse'><FaReact /></li>
                <li className='skillsIcon animate-pulse'><TbBrandRedux /></li>
                <li className='skillsIcon animate-pulse'><SiJquery /></li>
                <li className='skillsIcon animate-pulse'><RiNextjsLine /></li>
                <li className='skillsIcon animate-pulse'><RiTailwindCssFill /></li>
                <li className='skillsIcon animate-pulse'><FaBootstrap /></li>
                <li className='skillsIcon animate-pulse'><FaFigma /></li>
                <li className='skillsIcon animate-pulse'><SiAdobexd /></li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
