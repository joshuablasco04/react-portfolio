import { useState } from 'react';
import logo from '/images/logo3.png';
import { MdDarkMode, MdOutlineWbSunny  } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import Resume from '../assets/Joshua Blasco - Resume.pdf'


const Navbar = () => {

  const [darkBG, setDarkBG] = useState(false);

  const [toggle, setToggle] = useState(false);

  const toggleDarkMode = () => {
    setDarkBG(!darkBG);
}

  const handleShowMenu = ()=>{
    setToggle(!toggle)
  };

  return (
    <div className={darkBG ? 'dark' : '' }>
      <div className=' bg-orange-300 dark:bg-orange-800'>
      <div className="flex justify-between p-5 lg:flex-row  dark:text-white md:flex font-serif text-3xl items-center ssm:flex-col md:flex-row m-auto max-w-screen-lg">
        
        <div className='flex items-center mb-5 w-96 justify-between'>
          <img src={logo} alt='logo' className='w-50 h-20' />
          <CgMenu className='md:hidden text-3xl cursor-pointer hover:scale-125 ' onClick={handleShowMenu} />
        </div>
        <div className='md:flex ssm:self-start md:mt-5'>
          {toggle  ? 
                <div className='ssm:flex ssm:flex-col md:flex-row mx-5 '>
                  {darkBG ? <MdOutlineWbSunny  className='cursor-pointer hover:scale-110' onClick={toggleDarkMode}/> : <MdDarkMode className='cursor-pointer hover:scale-110' onClick={toggleDarkMode}/>} 
                  <a href="#" className="hover:scale-110 rounded-full px-5 py-2 text-xl ">Skills</a>
                  <a href="#" className="hover:scale-110 rounded-full px-5 py-2 text-xl">Projects</a>
                  <button className='m-auto flex p-2 rounded bg-gradient-to-r from-orange-300 to-amber-500 hover:scale-105 text-xl'><a href={Resume} download='Resume'>Resume</a></button>
                </div> 
              : <div>       
                <div className=' ssm:flex-col md:flex md:flex-row mx-5 ssm:hidden '>
                  <div className='flex justify-end mb-2'>
                    {darkBG ? <MdOutlineWbSunny  className='cursor-pointer  w-10 h-10 hover:scale-110' onClick={toggleDarkMode}/> : <MdDarkMode className='cursor-pointer w-10 h-10 hover:scale-110' onClick={toggleDarkMode}/>}
                  </div>
                  <div className='flex'>
                    <a href="#" className="hover:scale-110 rounded-full px-5 py-2 text-xl ">Skills</a>
                    <a href="#" className="hover:scale-110 rounded-full px-5 py-2 text-xl">Projects</a>
                    <button className='px-2 rounded bg-gradient-to-r from-orange-300 to-amber-500 hover:scale-105 text-xl '><a href={Resume} download='Resume'>Resume</a></button>
                  </div>
                </div>  
              </div>
            }                
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar