
import Contact from './components/Contact'
import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Extracurricular from './components/Extracurricular'
import Header from './components/Header'
import Project from './components/Project'
import Skill from './components/Skill'
import Hobbies from './components/Hobbies'

function App() {
  return (
    <>
    <div className='bg-slate-100 px-3 py-8'>
      <div className='bg-white max-w-4xl mx-auto rounded-xl shadow-lg'>
        <Header/>
        <AboutMe/>
        <Project/>
        <Skill/>
        <Education/>
        <Hobbies/>
        <Extracurricular/>
        <Contact/>
      </div>
     </div>
    </>
  )
}

export default App
