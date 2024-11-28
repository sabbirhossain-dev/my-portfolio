import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaLaptopCode,FaCameraRetro } from "react-icons/fa";

import Title from '../Title'

const About = () => {
  return (
    <section id="about" className='py-10 lg:py-20'>
      <div>
      <div>
        <Title text='Know Me More'  />
      </div>

      {/* left side */}
      <div className='flex flex-col sm:flex-row gap-10 lg:gap-16  pt-8 md:pt-20 pb-10'>
        <div className='w-full lg:w-2/3 flex flex-col gap-2'>
          <h1 className='text-md sm:text-xl md:text-3xl font-normal pb-4 md:pb-6'><span className='text-designColor font-medium'>Md Sabbir Hossain, </span>a Frontend Developer</h1>
          <p className='text-sm md:text-base'>I am a Professional Frontend Developer. I usually make high quality and
          Responsive Website for both mobile and desktop platforms. I will
          provide quality and satisfaction work.</p>
          <p className='text-sm md:text-base'>Coded using HTML, CSS, JavaScript and React to
          develop features for both mobile and desktop
          platforms.</p>
          <p className='text-sm md:text-base'>Produced websites compatible with multiple
          browsers. Designed and updated layouts to meet
          usability and performance requirements.</p>
        </div>

        {/* right side */}
        <div className='w-full lg:w-1/3 flex flex-col'>
            <p className='text-gray-300 md:text-[17px] border-b border-gray-600 pt-0 pb-3 '><span className='text-designColor font-medium'>Name: </span> Md Sabbir Hossain</p>

            <p className='text-gray-300 md:text-[18px] border-b border-gray-600 py-3'><span className='text-designColor font-medium'>Age: </span>24</p>

            <p className='text-gray-300 md:text-[17px] border-b border-gray-600 py-3'><span className='text-designColor font-medium'>Email: </span>hossainsabbir309@gmail.com</p>

            <p className='text-gray-300 md:text-[17px] border-b border-gray-600 py-3'><span className='text-designColor font-medium'>Phone: </span>01981441578</p>

            <p className='text-gray-300 md:text-[17px] border-b border-gray-600 py-3'><span className='text-designColor font-medium'>Location: </span>Mirpur 11, Dhaka</p>

        </div>
      </div>

{/* feature part */}
      <div>
        <div className='pt-8 md:pt-16 pb-12'>
          <Title text='What I Do'/>
        </div>

{/* card start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-10'>

        <div className='flex flex-col gap-2 md:gap-3 px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors'>
        <FaLaptopCode  className='group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]'/>
        <h3 className='text-2xl font-medium'>Frontend Development</h3>
        <p className='text-sm md:text-base'>Produced websites compatible with multiple
          browsers. Designed and updated layouts to meet
          usability and performance requirements.Coded using HTML, CSS, JavaScript and React to
          develop features for both mobile and desktop
          platforms.</p>
        </div>

        <div className='flex flex-col gap-3 px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors'>
        <LuMonitorSmartphone className='group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]'/>
        <h3 className='text-2xl font-medium'>Web Design</h3>
        <p className='text-sm md:text-base'> Designed and updated layouts to meet
          usability and performance requirements.Coded using HTML, CSS, JavaScript and React to
          develop features for both mobile and desktop
          platforms.</p>
        </div>

        <div className='flex flex-col gap-3 px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors'>
        <CgWebsite className='group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]'/>
        <h3 className='text-2xl font-medium'>E-Commerce</h3>
        <p className='text-sm md:text-base'>Produced e-commerce websites compatible wit multiple browsers. Designed and updated layouts meet
        usability and performance requirements</p>
        </div>

        <div className='flex flex-col gap-3 px-8 py-7 bg-black bg-opacity-30 rounded-md shadow-lg group hover:bg-opacity-90 duration-300 transition-colors'>
        <FaCameraRetro className='group-hover:text-designColor transition-all duration-300 text-[45px] md:text-[50px]'/>
        <h3 className='text-2xl font-medium'>Photography</h3>
        <p className='text-sm md:text-base'>I am not a professional photographer but I like to take pictures.</p>
        </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default About
