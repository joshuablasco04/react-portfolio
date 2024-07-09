import chLead from '../assets/ch-lead.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css3.svg'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'

const Projects = () => {
  return (
    <div className='relative flex flex-col items-center my-10 '>
        <h2 className='font-bold text-3xl text-center mb-3 bg-orange-300 w-40 m-auto rounded text-orange-500 '>Project</h2>
        <div className='bg-white w-96 p-5 text-center rounded-3xl group hover:bg-gradient-to-t from-gray-200 to-orange-500'>
            <img src={chLead} alt="" className='group-hover:opacity-10'/>
            <h2 className='text-2xl font-bold text-orange-500 group-hover:opacity-10'>Company web page</h2>
            <div className='hidden group-hover:block absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
                <p className='font-bold text-xl'>A company web page with e-commerce</p>
                <p>Tech-stack</p>
                <div className='grid grid-cols-6 items-center'>
                    <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-orange-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-orange-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='HTML 5'>
                        <img src={html} alt="html" className='w-10 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-blue-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-blue-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='CSS'>
                       
                    <img src={css} alt="css" className='w-10 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-purple-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-purple-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Bootstrap'>
                        
                    <img src={bootstrap} alt="bootstrap" className='w-10 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-yellow-400 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-yellow-400 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Javascript'>
                       
                    <img src={javascript} alt="javascript" className='w-14 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-green-500 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-green-500 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='Node JS'>
                        
                    <img src={node} alt="node" className='w-10 hover:scale-105'/>
                    </div>
                     <div className='relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-green-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-spacing-8 after:border-t-green-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100' data-tip='MongoDB'>
                       
                    <img src={mongo} alt="mongo" className='w-10 hover:scale-105'/>
                    </div>
                </div>
                <button className='bg-orange-500 p-2 rounded-xl hover:scale-110 mt-2'><a href="https://my-mini-project2.netlify.app/" target='_black'> View project</a></button>
            </div>
        </div>
    </div>
  )
}

export default Projects