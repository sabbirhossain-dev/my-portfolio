import React from 'react'
import { FaPhoneAlt,FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import Title from '../Title'
import FormPart from './FormPart';


const Contact = () => {
  return (
    <section id='contact' className='py-10 overflow-x-hidden'>

    <div>
      <Title text='Contact Me'/>
    </div>


      <div 
      
      className='flex flex-col
      sm:flex-row gap-10 md:gap-20 pt-8 md:pt-20'>


{/* left part */}
      <div className='w-full md:w-1/2 flex flex-col gap-3 md:gap-4 px-1 md:px-8 pt-2 pb-6 shadow-xl rounded-md'>
        <div></div>
        <h2 className='text-2xl md:text-2xl text-gray-50 font-semibold'>Md Sabbir Hossain</h2>
        <p className='text-lg font-medium'>Frontend Developer</p>
       <div className='mt-3 flex flex-col gap-3'>
       <p className='flex gap-4 items-center'><FaPhoneAlt className='text-md md:text-xl text-designColor' /><span className='text-md md:text-xl'>01981441578</span></p>
        <p className='flex gap-4 items-center'><MdEmail className='text-md md:text-xl text-designColor' /><span className='text-md md:text-xl'>hossainsabbir309@gmail.com</span></p>
        <p className='flex gap-4 items-center'><FaLocationDot className='text-md md:text-xl text-designColor' /><span className='text-md md:text-xl'>Mirpur 11, Dhaka</span></p>


        <div className='mt-4 lg:mt-7'>
              <p className='uppercase text-base'>get in touch</p>
              <ul className='flex gap-4 mt-3 lg:mt-4'>
                <li className='bannerIcon'><FaFacebookF /></li>
                <li className='bannerIcon'><FaLinkedinIn /></li>
                <li className='bannerIcon'><FaInstagram /></li>
                <li className='bannerIcon'><FaTwitter /></li>
              </ul>
            </div>
       </div>
      </div>


      
{/* form part */}
      <div className='w-full md:w-1/2 shadow-xl rounded-md px-1 md:px-10 pt-2 pb-10'>
        <FormPart />

      </div>

      </div>
    </section>
  )
}

export default Contact
