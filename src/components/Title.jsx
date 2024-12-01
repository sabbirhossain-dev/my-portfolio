import React from 'react'

const Title = ({text}) => {
  return (
    <div className='text-center'>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize tracking-wider" >{text}</h1>
    </div>
  )
}

export default Title
