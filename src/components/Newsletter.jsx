import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-5'>
                <h1 className='md:text-4xl sm:text-3xl  font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our nesletter and stya up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-3'>
                    <input type="text" placeholder='jaguar@gmail.com' className='p-3 w-full rounded-md text-black outline-none'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black hover:bg-green-900 ease-linear duration-500'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-green-700 cursor-pointer underline'> privacy Policy</span> </p>
            </div>
        </div>

    </div>
  )
}

export default Newsletter