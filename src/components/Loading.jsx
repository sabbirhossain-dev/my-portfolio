import React from 'react'
import Preload from '../assets/images/preload5.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center '>
      <img src={Preload} alt='preloader' className='w-auto h-auto rounded-full' />
      <h1 className='text-designColor font-semibold text-3xl tracking-widest absolute bottom-[65%] right-[50%] translate-x-[50%] font-sens'> Let's Go.<spna className='animate-pulse'>.</spna><span className='animate-ping'>.</span> </h1>
     
    </div>
  )
}

export default Loading
