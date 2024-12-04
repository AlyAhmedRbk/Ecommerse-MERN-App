import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-sm">

        <div className="">
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius impedit animi ratione dignissimos consectetur ipsum voluptate ut, est, voluptatum facere doloremque iusto totam!
            </p>
        </div>

        <div className="">
            <p className='text-xl font-medium mb-5'>COMPANY</p>

            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+923470515054</li>
                <li>alyahmedrbk@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
            &copy;Copyright 2024@forever.com - All Right Reserve.
        </p>
      </div>
    </div>
  )
}

export default Footer
