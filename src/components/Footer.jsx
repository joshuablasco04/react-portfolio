import React from 'react'
import {CiMail, CiLinkedin, CiMobile3  } from 'react-icons/ci'


const Footer = () => {
  return (
    <footer className='bg-orange-300 p-4'>
        <div className='flex flex-col m-auto max-w-screen-lg items-center '>
            <h2 className='text-2xl font-semibold mb-3'>Contact</h2>
            <div className='grid  grid-cols-1 gap-x-26 gap-y-2 md:gap-x-56 md:grid-cols-2'>
                <div className='flex align-center'>
                    <CiMail className=' mr-2' size={25}/> <span>joshuablasco04@gmail.com</span>
                </div>
                <div className='flex'>
                    <CiLinkedin className=' mr-2 ' size={25}/> <a href='https://www.linkedin.com/in/joshua-blasco' target='_blank' ><span>Joshua Blasco</span></a>
                </div>
                <div className='flex'>
                    <CiMobile3 className=' mr-2' size={25}/> <span>+63-977-353-1173</span>
                </div>
            </div>
            <div className='text-center '>
                <h2 className='font-bold'>All rights reserved. 2024</h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer