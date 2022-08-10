import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div id='hero' className='text-white'>
        <div className='max-w-[800px] w-full  h-[90vh] mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2'>Grow with data and analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text:4xl font-bold md:py-6'>Grow with data</h1>
            <div className='flex justify-center  gap-7'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast Flexible Financing For</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold text-green-500'
                strings={['JGD','BTB','BTC','SASS']} typeSpeed={120} backSpeed={130} loop/>
            </div>
            <p className='my-6 md:text-2xl md:text-xl font-bold text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black hover:bg-green-900 ease-linear duration-500'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero