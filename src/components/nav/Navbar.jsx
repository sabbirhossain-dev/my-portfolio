import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaFacebookF,FaLinkedinIn , FaInstagram, FaTwitter} from "react-icons/fa";
import sabbirLogoo from '../../assets/images/sabbirLogoo2.png'

import { navData } from '../../constans'
import { FaBars} from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <>

        <div className='w-full h-20 md:h-24 py-2 md:py-5 flex justify-between items-center mx-auto sticky z-50 top-0 bg-bodyColor border-b-[1px] border-gray-600'>

        <div className=''>
        <Link 
                    activeClass="active" 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-95} 
                    duration={500} 
                    >
           <img src={sabbirLogoo} alt='logo' className='w-[70px] lg:w-28 h-auto cursor-pointer'/>
           </Link>
        </div>

        <div className=''>
            <ul className='hidden md:flex gap-10'>
                {navData.map(({id, link, title})=>(
                    <li key={id} className=' text-base text-gray-400 tracking-wider cursor-pointer hover:text-designColor transition-colors duration-300'>
                    <Link 
                    activeClass="active" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    offset={-95} 
                    duration={500} 
                    >
                    {title}
                    </Link>
                    </li>
                ))}
            </ul>
            <div className='md:hidden p-[7px] bg-black bg-opacity-65 text-designColor rounded-md'>
            {toggle? <RxCross1 onClick={()=>{setToggle(!toggle)}} size={26} /> :<FaBars onClick={()=>{setToggle(!toggle)}} size={26}/>
            }
            </div>

        </div>

        {toggle && <motion.ul 
            initial={{ opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:.6, delay:.1}}
            className='flex flex-col w-4/5 py-7 h-screen mr-[-20px] bg-gradient-to-b from-gray-950 to-gray-700 gap-2 absolute top-20 right-0 lg:hidden'>
              {navData.map(({id,title,link})=>{
                    return <li key={id} className='text-md text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 w-full shadow-xl text-left px-8 py-2'>
                    <Link  onClick={()=>{setToggle(false)}}
                    activeClass="active" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                    >
                    {title}
                    </Link>
                    </li>
                })}
                <div className='mt-5 px-8'>
              <p className='uppercase text-xs'>get in touch</p>
              <ul className='flex gap-3 mt-4'>
                <li className='bannerToggleIcon'><FaFacebookF /></li>
                <li className='bannerToggleIcon'><FaLinkedinIn /></li>
                <li className='bannerToggleIcon'><FaInstagram /></li>
                <li className='bannerToggleIcon'><FaTwitter /></li>
              </ul>
            </div>
            </motion.ul>}


    </div>
      
    </>
  )
}

export default Navbar
