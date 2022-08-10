import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav]=useState(false);

    const handleNavbar=()=>{
        setNav(!nav)
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4' onClick={handleNavbar}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>JaGUar & dAta.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-green-500 cursor-pointer'>Home</li>
        <li className='p-4 hover:text-green-500 cursor-pointer'>Company</li>
        <li className='p-4 hover:text-green-500 cursor-pointer'>Resources</li>
        <li className='p-4 hover:text-green-500 cursor-pointer'>About</li>
        <li className='p-4 hover:text-green-500 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNavbar} className='block md:hidden'>
        {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        
      </div>
      <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-gray-700 bg-[#000300] ':'fixed left-[-100%] ease-in-out duration-500 '}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>JaGUar & dAta.</h1>

        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-400 hover:text-green-500 cursor-pointer'>Home</li>
            <li className='p-4 border-b border-gray-400 hover:text-green-500 cursor-pointer'>Company</li>
            <li className='p-4 border-b border-gray-400 hover:text-green-500 cursor-pointer'>Resources</li>
            <li className='p-4 border-b border-gray-400 hover:text-green-500 cursor-pointer'>About</li>
            <li className='p-4 border-b border-gray-400 hover:text-green-500 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
