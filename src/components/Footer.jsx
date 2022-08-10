import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] py-16 px-4 lg:grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>JaGUar & dAta.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sed ducimus cumque placeat recusandae vel blanditiis odit assumenda cum quis.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
          <FaDribbbleSquare size={30}/>
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-8">
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insigts</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documention</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>APIs Status</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About </li>
              <li className='py-2 text-sm'>Blogs</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer