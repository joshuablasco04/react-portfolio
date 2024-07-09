import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

  const [time, setTime] = useState(new Date())

  useEffect(()=> {
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000)

    return ()=> {
      clearInterval(intervalId)
    }
  },[])

  const handleDate = () =>{
   
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const miridiem = hours >= '12' ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${miridiem}`

  }

  const addZero = (date) =>{
    return (date < 10 ? '0' : '') + date
  }

  return (
    <div className='border-2 w-52 text-center border-black mt-5 bg-gray-700 text-white'> 
      <h1 className='font-bold'>Digital Clock</h1>
      <div className='text-3xl'>
        {handleDate()}
      </div>
    </div>
  )
}

export default DigitalClock