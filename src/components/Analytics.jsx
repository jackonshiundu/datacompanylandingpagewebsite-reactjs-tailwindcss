import React from 'react'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={require('../assets/laptop.jpg')} alt="/" className='w-[500px] mx-auto py-4 '/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-5 '>Manage Data Anaalytics Centrally</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sed dicta suscipit sit, perspiciatis distinctio deserunt corporis aperiam architecto eaque veniam iusto modi ab odio fugiat atque necessitatibus rerum exercitationem!</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-white hover:bg-green-900 ease-linear duration-500'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics