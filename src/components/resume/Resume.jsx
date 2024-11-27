import React,{useState} from 'react'
import Title from '../Title'
import Skills from './Skills'

const Resume = () => {
  const [skills, setSkills] = useState(true)
    const [education, setEducation] = useState(false)
    const [experience, setExperience] = useState(false)
  return (
    <div id="resume" className='py-20 border-b border-black'>
      <div className='text-center mb-16'>
        <h2 className='text-sm font-light tracking-widest text-designColor mb-1'>Here is My Resume</h2>
        <Title text='My Resume' />
      </div>
      <div className="pb-20">
        <ul className='w-full md:w-3/4 lg:w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-3 '>
          <li onClick={()=>{
            setSkills(true)
            setEducation(false)
            setExperience(false)
          }} className={`${skills ? 'border-gray-500':''} resumeli`}>Professional Skills</li>
          <li onClick={()=>{
            setSkills(false)
            setEducation(true)
            setExperience(false)
          }} className={`${education ? 'border-gray-500':''} resumeli`}>Education</li>
          <li
          onClick={()=>{
            setSkills(false)
            setEducation(false)
            setExperience(true)
          }} className={`${experience ? 'border-gray-500':''} resumeli`}>Experience</li>
        </ul>

        {skills && <Skills />}
      </div>
    </div>
  )
}

export default Resume
