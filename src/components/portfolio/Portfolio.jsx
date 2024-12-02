import React, { useState } from 'react'

import Title from '../Title'
import All from './All'
import Design from './Design'
import Development from './Development'

// import gymImg from '../../assets/images/gym.png'

const Portfolio = () => {

  const [all ,setAll] = useState(true)
  const [design ,setDesign] = useState(false)
  const [development ,setDevelopment] = useState(false)
  return (
    <>
      <section id="portfolio" className='py-16 border-b border-gray-600 overflow-x-hidden'>
      <div className=''>
          <Title text='My projects' />
      </div>

      <ul className='flex gap-3 pt-16 pb-10 justify-center items-center'>
        <li onClick={()=>{
          setAll(true)
          setDesign(false)
          setDevelopment(false)
        }} className={`px-5 py-2 border bg-black bg-opacity-30 rounded-md cursor-pointer ${all ? 'text-designColor border border-designColor bg-opacity-50':''}`}>All</li>

        <li onClick={()=>{
          setAll(false)
          setDesign(true)
          setDevelopment(false)}} className={`px-5 py-2 border bg-black bg-opacity-30 rounded-md cursor-pointer ${design ? 'text-designColor border border-designColor bg-opacity-50':''}`}>Design</li>


        <li onClick={()=>{
          setAll(false)
          setDesign(false)
          setDevelopment(true)}}
          className={`px-5 py-2 border bg-black bg-opacity-30 rounded-md cursor-pointer ${development ? 'text-designColor border border-designColor bg-opacity-50':''}`}>Development</li>
      </ul>
        
        {all && <All />}
        {design && <Design />}
        {development && <Development />}
        
    </section>
    </>
  )
}

export default Portfolio
