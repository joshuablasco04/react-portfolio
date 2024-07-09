import Calculator from "./Calculator"
import DigitalClock from "./DigitalClock"
import TodoList from "./TodoList"

const CodingExercise = () => {
  return (
    <div className="max-w-screen-lg justify-items-center m-auto ">
        <h1 className='font-bold text-2xl text-center mb-3 bg-orange-300 w-52 m-auto rounded text-orange-500 md:flex '>Coding Exercises</h1>
        <div className="grid-cols-1 grid justify-around m-auto gap-10 my-5 md:grid-cols-3 mx-5">
          <div className="border-2 p-5 bg-orange-300 border-black rounded-md justify-center flex items-center ">
              <Calculator/>
          </div>
          <div className="border-2 p-5 bg-orange-300 border-black rounded-md justify-center flex items-center">
              <DigitalClock/>
          </div>
          <div className="border-2 p-1 bg-orange-300 border-black rounded-md  justify-center flex">
              <TodoList/>
          </div>
        </div>
    </div>
  )
}

export default CodingExercise