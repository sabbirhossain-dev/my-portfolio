import React from 'react'
import gym from '../../assets/images/gym.png'
import hunt from '../../assets/images/hunt3.png'
import gyan from '../../assets/images/gyan2.png'
import bizzency from '../../assets/images/bizzency2.png'

import Card from '../Card'

const Design = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <Card image={gyan} title='Learning Website'/>
      <Card image={bizzency} title='Business Website' liveLink='https://sabbirhossain-dev.github.io/Bizzency/' codeLink='https://github.com/sabbirhossain-dev/Bizzency.git'/>
        <Card image={hunt} title='Business Website' liveLink='https://sabbirhossain-dev.github.io/Hunt/' codeLink='https://github.com/sabbirhossain-dev/Hunt.git'/>
        <Card image={gym} title='Gymnasium Website' liveLink='https://sabbirhossain-dev.github.io/Gym-by-sabbir/' codeLink='https://github.com/sabbirhossain-dev/Gym-by-sabbir.git'/>
    </div>
    </>
  )
}

export default Design