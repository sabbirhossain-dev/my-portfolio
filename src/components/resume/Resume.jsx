import React,{useState} from 'react'
import Title from '../Title'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  // const [skills, setSkills] = useState(true)
  //   const [education, setEducation] = useState(false)
  //   const [experience, setExperience] = useState(false)

  return (
    <div id="resume" className='py-5 border-b border-gray-600 overflow-x-hidden'>
      <div className='text-center py-6 md:py-10 lg:py-16'>
        {/* <h2 className='text-sm font-light tracking-widest text-designColor mb-1'>Here is My Resume</h2> */}
        <Title text='My Resume' />
      </div>
      <div className="pb-10">
        {/* <ul className='w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-3 '>
          <li onClick={()=>{
            setSkills(true)
            setEducation(false)
            setExperience(false)
          }} className={`${skills ? 'border-gray-500 text-designColor':''} resumeli`}>Professional Skills</li>
          <li onClick={()=>{
            setSkills(false)
            setEducation(true)
            setExperience(false)
          }} className={`${education ? 'border-gray-500 text-designColor':''} resumeli`}>Education</li>
          <li
          onClick={()=>{
            setSkills(false)
            setEducation(false)
            setExperience(true)
          }} className={`${experience ? 'border-gray-500 text-designColor':''} resumeli`}>Experience</li>
        </ul> */}

        {/* {skills && <Skills /> }
        {education && <Education />} */}


        <Skills />
        <div className='flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-20 pt-10 md:pt-20 py-10'>
          <Education />
          <Experience />
        </div>
        
      </div>
    </div>
  )
}

export default Resume
