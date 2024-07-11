import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css3.svg'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'


const Skills = () => {
  return (
    <div id="skill-section">
        <h1 className='font-bold text-3xl text-center mb-3 bg-orange-300 w-40 m-auto rounded text-orange-500'>Skills</h1>
        <div className='grid grid-cols-2 m-auto items-center justify-items-center mb-10 md:grid-cols-4 max-w-screen-lg'>
                    <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-orange-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-orange-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 ' data-tip='HTML'>
                        <img src={html} alt="html" className='w-40 hover:scale-105'/>
                    </div>
                    <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-blue-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-blue-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='CSS'>
                        <img src={css} alt="css" className='w-36 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-purple-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-purple-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Bootstrap'>
                        <img src={bootstrap} alt="bootstrap" className='w-40 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-5 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-blue-500 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-blue-500 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Tailwind CSS'>                
                        <img src={tailwind} alt="tailwind" className='w-40 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-yellow-400 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-yellow-400 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Javascript'>
                        <img src={javascript} alt="javascript" className='w-46 hover:scale-105'/>
                    </div>
                    <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-green-500 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-green-500 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Node JS'>
                        <img src={node} alt="node" className='w-40 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-green-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-green-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='MongoDB'>
                        <img src={mongo} alt="mongo" className='w-40 hover:scale-105'/>
                    </div>
                    <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:top-1 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-sky-400 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-1 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-sky-400 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='ReactJS'>
                        <img src={react} alt="react" className='w-40 hover:scale-105'/>
                    </div>
          
            

        </div>
    </div>
  )
}

export default Skills