import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
         <h1 className='text-center font-bold text-4xl text-[#00df9a]'>Pricing </h1>
            <p className='text-center mb-10 font-bold'>Plan</p>
        <div className='max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8'>
           
            
            <article className='w-full border shadow-xl flex flex-col p-4 my-[5rem]  rounded-lg hover:scale-105 duration-300'>
                <img src={require('../assets/single.png')} alt="/"
                className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center'>Single User</h2>
                <p className='text-center text-4xl font-bold'>Ksh.149</p>
                <div className='text-center font-mediumffff'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black hover:bg-green-900 ease-linear duration-500'>Notify Me</button>
            </article>
            <article className='w-full md:bg-green-200 bg-white border shadow-xl flex flex-col p-4 my-8 justify-around rounded-lg hover:scale-105 duration-300  '>
                <img src={require('../assets/double.png')} alt="/"
                className='w-20 mx-auto mt-[-3rem] bg-white md:bg-transparent'/>
                <h2 className='text-2xl font-bold text-center'>10 User</h2>
                <p className='text-center text-4xl font-bold'>Ksh.500</p>
                <div className='text-center font-mediumffff'>
                    <p className='py-2 border-b mx-8 mt-8'>2TB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b-black- mx-8 '>Send upto 4 GB</p>
                </div>
                <button className=' bg-[#00df9a] md:bg-black w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-white hover:bg-green-900 ease-linear duration-500'>Notify Me</button>
            </article>
            <article className='w-full border shadow-xl flex flex-col p-4 my-[5rem]  rounded-lg hover:scale-105 duration-300  '>
                <img src={require('../assets/triple.png')} alt="/"
                className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center'>Infinite Users</h2>
                <p className='text-center text-4xl font-bold'>Ksh.1000</p>
                <div className='text-center font-mediumffff'>
                    <p className='py-2 border-b mx-8 mt-8'>3TB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black hover:bg-green-900 ease-linear duration-500'>Notify Me</button>
            </article>
        </div>
    </div>
  )
}

export default Cards