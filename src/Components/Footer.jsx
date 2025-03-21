import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*----------------left part -----------*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt=''/>
            <p className='w-full md:w-2/3 text-gray-600 leading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, accusamus quos cumque, eaque illum eos obcaecati vero nulla esse, officia ipsum reprehenderit est. Deleniti, assumenda?</p>
        </div>

        {/*----------------mid part ------------*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/*----------------right part ----------*/}
        <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-9765432101</li>
                <li>coder@gmail.com</li>
            </ul>
        </div>
        
      </div>

      <div>   {/*------------copyright txt-------*/}
        <hr/>
         <p className='py-5 text-sm text-center'>Copy Right 2024@ All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer
