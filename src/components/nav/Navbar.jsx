import React, { useDebugValue, useState } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import logo from '../../assets/images/logo.png'

import { navData } from '../../constans'
import { FaBars} from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <>

        <div className='w-full h-24 py-5 flex justify-between items-center mx-auto sticky z-50 top-0 bg-bodyColor border-b-[1px] border-gray-600'>

        <div className=''>
            {/* <img src={logo} alt='logo' className='w-24'/> */}
            <h2 className='text-2xl font-mono font-semibold uppercase'>Sabbir</h2>
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
            <div className='md:hidden'>
            {toggle? <RxCross1 onClick={()=>{setToggle(!toggle)}} size={26} /> :<FaBars onClick={()=>{setToggle(!toggle)}} size={26}/>}
            </div>

        </div>

        {toggle && <motion.ul 
            initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.6, delay:.1}}
            className='flex flex-col items-center  w-4/5  py-10 text-2xl h-[400px] bg-gradient-to-b from-black to-gray-600 gap-5 absolute top-24 right-0 lg:hidden'>
              {navData.map(({id,title,link})=>{
                    return <li key={id} className='text-2xl text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                    <Link  onClick={()=>{setToggle(false)}}
                    activeClass="active" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    offset={-95} 
                    duration={100} 
                    >
                    {title}
                    </Link>
                    </li>
                })}
            </motion.ul>}


    </div>
      
    </>
  )
}

export default Navbar
