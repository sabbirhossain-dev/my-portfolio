import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import sabbir from '../../assets/images/sabbir.png'
import sabbir2 from '../../assets/images/sabbir2.png'
import { FaFacebookF,FaLinkedinIn , FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { BsArrowDown } from 'react-icons/bs';
import { LuDownload } from "react-icons/lu";





const Home = () => {
  return (
    <section id='home' className='w-full h-auto pb-20 border-b-[1px] border-gray-600'>
      <div  className='flex flex-col gap-6 md:gap-10 md:flex-row items-center lg:gap-16'>

      {/* toggle image */}

      <motion.div
     initial={{y:"-20%",  opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:.4, delay:.2}} 
       className='flex md:hidden items-center justify-center mt-12 w-[220px] h-[220px] bg-gradient-to-br from-purple-800 to-designColor rounded-full border border-cyan-700 '>
        <img src={sabbir2} alt='banner picture' className='w-full h-[240px] -mt-6 rounded-full'/>
      </motion.div>

      {/* left side */}
      <motion.div 
      initial={{y:"100%", opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:.6, delay:.3}}
      className='w-full md:w-1/2 flex flex-col gap-3 lg:gap-4 pt-6 md:pt-12 lg:pt-16 '>
          <p className='text-lightText text-base lg:text-md font-xl'>WELCOME TO MY PORTFOLIO</p>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl md:w-80 lg:w-auto'>I'm <span className='text-designColor text- lg:text-5xl'>Md Sabbir Hossain</span></h1>
          <h3 className='text-2xl md:text-2xl lg:text-4xl text-white font-bold'>a  
          <Typewriter
            words={[' Frontend Developer', ' Web Designer', ' Photographer']}
            loop={true}
            cursor
            cursorStyle= <span className='text-designColor'> | </span>
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></h3>
          <p className='text-sm md:text-sm lg:text-base text-gray-300 w-auto md:w-auto lg:w-[520px] py-2'>Hi Dear, I am a Professional Frontend Developer. My experience of
            Frontend Development is over 1 year. I usually make high quality and
            Responsive Website for both mobile and desktop platforms. I will
            provide quality and satisfaction work.</p>

            <div className='flex items-center gap-4 mt-3 md:mt-3 lg:mt-4'>
              <button className='px-3 md:px-3 lg:px-5 py-3 text-sm md:text-xs lg:text-base md:w-28 lg:w-auto  bg-black bg-opacity-25 shadow-shadowOne rounded-md text-center hover:bg-opacity-60 hover:text-designColor duration-300 transition-all'><Link
                    to='portfolio'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-95} 
                    duration={500}>See My Portfolio</Link></button>

              <button className='px-3 md:px-3 lg:px-5 py-3 text-sm md:text-xs md:w-36 lg:w-auto lg:text-base bg-black bg-opacity-25 shadow-shadowOne rounded-md text-center hover:bg-opacity-60 text-designColor duration-300 transition-all'><a href='https://drive.google.com/file/d/12N_WEHMrJIK98Hb3TDS2EzRakjGvVzdz/view?usp=sharing' target='_blank' className='flex justify-center items-center gap-2'>Download Resume
              <LuDownload className='text-designColor animate-bounce'/></a></button>

            </div>

            <div className='mt-4 lg:mt-6'>
              <p className='uppercase text-base'>get in touch</p>
              <ul className='flex gap-4 mt-3 lg:mt-4'>
                <li className='bannerIcon'><a href='https://www.facebook.com/sabbir.hossain.445886/' target='_blank'><FaFacebookF /></a></li>

                <li className='bannerIcon'><a href="https://www.linkedin.com/in/md-sabbir-hossain-5777602a4/" target='_blank'><FaLinkedinIn /></a></li>

                <li className='bannerIcon'><a href='https://www.instagram.com/___sabbirhossain/' target='_blank'><FaInstagram /></a></li>

                <li className='bannerIcon'><FaTwitter /></li>
              </ul>
            </div>
      </motion.div>


{/* right side */}
      <motion.div
      initial={{y:"-20%",  opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:.4, delay:.2}} 
       className='hidden  w-full xl:w-1/2 md:flex justify-center items-center relative pt-8'>
            <img src={sabbir} alt='bannerImg' className='w-[300px] h-[380px] lg:w-[420px] xl:h-[520px] z-10 opacity-95 rounded-full' />
            <div className='absolute bottom-0 flex justify-center items-center h-[350px] w-[350px] md:w-[307px] md:h-[307px]  lg:h-[425px] lg:w-[425px] bg-gradient-to-br from-purple-800 to-designColor rounded-full opacity-90
             shadow-xl border border-cyan-700'></div>
        </motion.div>

      
    </div>
        <div className='hidden md:flex justify-center items-center'>
        <button className='px-2 py-4 rounded-full  border border-gray-600 text-designColor animate-bounce'>
        <Link
                    to='about'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-95} 
                    duration={500}><BsArrowDown size={26} /></Link>
        </button>
        </div>
    </section>
  )
}

export default Home
