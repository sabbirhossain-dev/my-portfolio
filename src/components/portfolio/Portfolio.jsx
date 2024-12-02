import React from 'react'

import Title from '../Title'
import gym from '../../assets/images/gym.png'
// import hunt from '../../assets/images/hunt.png'
import beatls from '../../assets/images/beatls2.png'
import bizzency from '../../assets/images/bizzency2.png'

import Card from '../Card'
// import gymImg from '../../assets/images/gym.png'

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className='py-16 border-b border-gray-600 overflow-x-hidden'>
      <div className=''>
          <Title text='My projects' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-16'>
        

        <Card image={gym} title='Gymnasium Website'/>
        <Card image={beatls} title='Business Website'/>
        <Card image={bizzency} title='Business Website'/>
        <Card image={gym} title='Gymnasium Website'/>
        <Card image={beatls} title='Business Website'/>
        <Card image={bizzency} title='Business Website'/>
      </div>
    </section>
    </>
  )
}

export default Portfolio
