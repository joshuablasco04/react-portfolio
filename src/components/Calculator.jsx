import React, { useState } from 'react'

const Calculator = () => {
    
   const [value, setValue] = useState('0');
   const [newInput, setNewInput] = useState(true)

   const handleEval= () => {
        const result = eval(value)
        setValue(result.toString())
        
        setNewInput(true)
   }

   const handleDot= (e)=>{
        if(value == 0){
            setValue(value + e.target.value)
        }else if(value.includes('.')){
            return
        }
        else{
            setValue(value + e.target.value)
        }
            
   }
 
   const handleInput= (e)=>{
       
        {newInput 
        ? 
        (
            setValue(e.target.value),
            setNewInput(false)
        )
        :
        (setValue(value == '0' ? e.target.value : value + e.target.value))
        }
        
   }

    const handleOperator = (e)=> {
        setValue(value == '0' ? '0' : value + e.target.value)
        setNewInput(false)
    }

    const handleDelete = () => {
       setValue(value == ''? 0: value.slice(0 , -1))
    }
   

  return (
    <div className='w-52'>
        <h1 className='font-bold'>Calculator</h1>
        <input type="text" name="" id="" disabled placeholder={value} className='text-end bg-gray-200 w-48'/>
        <div className='grid gap-2 mt-3'>
            <div className=' grid grid-cols-3 w-full gap-2'>
                <button className=' border-2 w-24' onClick={(e)=> setValue(e.target.value = 0)} value={'AC'}>AC</button>
                <button className=' border-2 ml-8 w-10' onClick={handleDelete} value={'DEL'}>DEL</button>
                <button className='mx-3 border-2' onClick={handleOperator} value={'/'}>/</button>
            </div>
            <div className='grid grid-cols-4 w-full'>
                <button className=' p-1 border-2 w-10' onClick={handleInput} value={7}>7</button>
                <button className=' p-1 border-2 w-10' onClick={handleInput} value={8}>8</button>
                <button className=' p-1 border-2 w-10' onClick={handleInput} value={9}>9</button>
                <button className=' p-1 border-2 w-10' onClick={handleOperator} value={'*'}>*</button>
            </div>
            <div className='grid grid-cols-4 w-full'>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={4}>4</button>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={5}>5</button>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={6}>6</button>
                <button className='p-1 border-2 w-10' onClick={handleOperator} value={'-'}>-</button>
            </div>
            <div className='grid grid-cols-4 w-full'>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={1}>1</button>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={2}>2</button>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={3}>3</button>
                <button className='p-1 border-2 w-10' onClick={handleOperator} value={'+'}>+</button>
            </div>
            <div className='grid grid-cols-4 w-full'>
                <button className='p-1 border-2 w-10' onClick={(e)=> setValue(value == '0' ? 0 : value + e.target.value)} value={'00'}>00</button>
                <button className='p-1 border-2 w-10' onClick={handleInput} value={0}>0</button>
                <button className='p-1 border-2 w-10' onClick={handleDot} value={'.'}>.</button>
                <button className='p-1 border-2 w-10' onClick={handleEval}>=</button>
            </div>
        </div>

    </div>
  )
}

export default Calculator