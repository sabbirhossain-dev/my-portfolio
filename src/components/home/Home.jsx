import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import sabbir from '../../assets/images/sabbir.png'
import { FaFacebookF,FaLinkedinIn , FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-scroll';




const Home = () => {
  return (
    <section id='home' className='w-full h-auto pb-20 border-b-[1px] border-black'>
      <div  className='flex flex-col gap-6 md:gap-10 md:flex-row items-center lg:gap-16'>

      {/* left side */}
      <div className='w-full md:w-1/2 flex flex-col gap-3 lg:gap-4 pt-10 md:pt-12 lg:pt-8 '>
          <p className='text-lightText text-base lg:text-md font-xl'>WELCOME TO MY PORTFOLIO</p>
          <h1 className='font-bold text-4xl md:text-3xl lg:text-5xl'>I'm <span className='text-designColor'>Md Sabbir Hossain</span></h1>
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
          <p className='text-sm md:text-sm lg:text-base text-gray-300 w-auto md:w-auto lg:w-[520px] py-3'>Hi Dear, I am a Professional Frontend Developer. My experience of
            Frontend Development is over 1 year. I usually make high quality and
            Responsive Website for both mobile and desktop platforms. I will
            provide quality and satisfaction work.</p>

            <div className='flex items-center gap-4 md:mt-3 mt-6'>
              <button className='px-3 md:px-3 lg:px-5 py-3 text-sm md:text-xs lg:text-base  bg-black bg-opacity-25 shadow-shadowOne rounded-md text-center hover:bg-opacity-60 hover:text-designColor duration-300 transition-all'><Link
                    to='portfolio'
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    offset={-95} 
                    duration={500}>See My Portfolio</Link></button>
              <button className='px-3 md:px-3 lg:px-5 py-3 text-sm md:text-xs lg:text-base bg-black bg-opacity-25 shadow-shadowOne rounded-md text-center hover:bg-opacity-60 hover:text-designColor duration-300 transition-all'><a href=' https://drive.google.com/file/d/1Kx9FT4kYcLWiQfxoytHDYOhMQa1IZ9R8/view?usp=sharing' target='_blank'>Download Resume</a></button>

            </div>

            <div className='mt-7'>
              <p className='uppercase text-base'>get in touch</p>
              <ul className='flex gap-4 mt-4'>
                <li className='bannerIcon'><FaFacebookF /></li>
                <li className='bannerIcon'><FaLinkedinIn /></li>
                <li className='bannerIcon'><FaInstagram /></li>
                <li className='bannerIcon'><FaTwitter /></li>
              </ul>
            </div>
      </div>


{/* right side */}
      <div className='w-full xl:w-1/2 flex justify-center items-center relative pt-8'>
            <img src={sabbir} alt='bannerImg' className='w-[300px] h-[380px] lg:w-[420px] xl:h-[520px] z-10 opacity-95' />
            <div className='absolute bottom-0 flex justify-center items-center h-[350px] w-[300px]  lg:h-[350px] lg:w-[430px] bg-gradient-to-r from-slate-950 to-gray-800 opacity-30 shadow-shadowOne rounded-md'></div>
        </div>
      
    </div>
    </section>
  )
}

export default Home
