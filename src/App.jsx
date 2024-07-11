
import './App.css'
import Navbar from './components/Navbar'
import Article from './components/Article'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CodingExercise from './components/CodingExercise'


function App() {
  const skills = 'skills';
  const projects = 'projects'

  
  return (
    <>      
      <div className='bg-orange-200'>
        <section>
          <Navbar />
        </section>
        <section>
          <Article />
        </section>
        <section > 
          <Skills />
        </section>
        <section >
          <Projects />
        </section>
        <section>
          <CodingExercise />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
}

export default App
