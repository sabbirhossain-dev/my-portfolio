import React from 'react'
import gym from '../../assets/images/gym.png'
import hunt from '../../assets/images/hunt3.png'
import bizzency from '../../assets/images/bizzency2.png'
import personalWebsite from '../../assets/images/personalWebsite.png'

import Card from '../Card'

const Development = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <Card image={hunt} title='Business Website' liveLink='https://sabbirhossain-dev.github.io/Hunt/' codeLink='https://github.com/sabbirhossain-dev/Hunt.git'/>
        <Card image={personalWebsite} title='Personal Website' liveLink='https://portfolio-website-pi-lac-81.vercel.app/' codeLink='https://github.com/sabbirhossain-dev/portfolio-website.git'/>
        <Card image={gym} title='Gymnasium Website' liveLink='https://sabbirhossain-dev.github.io/Gym-by-sabbir/' codeLink='https://github.com/sabbirhossain-dev/Gym-by-sabbir.git'/>
      <Card image={bizzency} title='Business Website' liveLink='https://sabbirhossain-dev.github.io/Bizzency/' codeLink='https://github.com/sabbirhossain-dev/Bizzency.git'/>
    </div>
    </>
  )
}

export default Development
