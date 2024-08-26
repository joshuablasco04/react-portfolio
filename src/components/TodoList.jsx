import React, { useState } from 'react'

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleAddTodo = (e) => {
    e.preventDefault()
    if(newTodos !== ''){
      setTodos([newTodos, ...todos])
    }
    setNewTodos('')
  }

  const handleDelete = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index)
        setTodos(newTodos)
  }



  return (
    <div className=' border-black p-5 w-full m-auto'>
      <h1 className='font-bold'>To do List</h1>
      <div className='m-auto w-full'>
        <div className='flex m-auto w-full'>
          <input type="text" name="" id="" className='w-full' placeholder='Add item here...' value={newTodos} onChange={e=> setNewTodos(e.target.value)} />
          <button onClick={handleAddTodo} className='bg-green-500 p-1 rounded-sm ml-2'>Add</button>
        </div>
        <ul className=' border-black mt-3'>
          {todos.map((todo,index) => 
            <li key={index} className='flex justify-between' >
              <span>{todo}</span>
            <button onClick={()=> handleDelete(index)} className='bg-red-500 p-1 rounded-sm mt-1 items-center'>Delete</button>
            </li>
          )}
          
        </ul>
      </div>
    </div>
  )
}

export default TodoList