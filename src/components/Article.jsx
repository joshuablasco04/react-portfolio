import { useState } from 'react'
import profile from '../assets/joshua.png'

import { TypeAnimation } from 'react-type-animation'

const Article = () => {

  return (
    <div className='md:grid-cols-2 md:grid max-w-screen-lg m-auto my-10'>
      <div className='align-center justify-center flex my-10 '>
        <img src={profile} alt="PHOTO" width={400} className='rounded-full w-80 h-80 bg-gradient-to-b from-orange-600'/>
      </div>
      <div className=' w-full flex flex-col items-center justify-center font-serif m-auto'>
        <h2 className='text-4xl font-bold justify-center flex flex-col items-center'>
          <h2>I'm <span className='text-orange-400'> Joshua Blasco </span></h2>
          

          
          <TypeAnimation
            sequence={[
            
            `Frontend Developer`,
            1000,
            `Backend Developer`,
            1000,
            `Fullstack Developer`,
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '0.7em', display: 'inline-block' }}
          repeat={Infinity}
        />
        

        </h2>
        <br />
        <p className=' text-center mx-10 border-y-4 py-2 mb-5 md:border-none'>
          A dedicated Mechanical Engineer with a fervent interest in transitioning into the field of web development. Possesses proficiency in key technologies including HTML, CSS, JavaScript, Node, ExpressJS, MongoDB, and ReactJS. Demonstrates the ability to contribute effectively within a collaborative work environment, eager to acquire new knowledge and experiences in the realm of web development.
        </p>
      </div>
      
     
    </div>
  )
}

export default Article