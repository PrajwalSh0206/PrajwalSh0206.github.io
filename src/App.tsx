import './css/App.scss'
import HeroPage from './components/HeroPage'
import SkillPage from './components/SkillPage'
import './css/Navbar.scss'
import ProjectPage from './components/ProjectPage'

function App() {

  return (
    <>
      <div className='flex p-5 shadow-md sticky z-50 top-0 bg-white shadow-gray-200 border-b-2 border-indigo-100 justify-end'>
        <ul className='list-none flex flex-row space-x-5 text-lg'>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">Skills</a></li>
          <li><a href="#home">Projects</a></li>
          <li><a href="#home">Contacts</a></li>
        </ul>
      </div>
      {/* Hero Page */}
      <HeroPage/>
      {/* Skills Page */}
      <SkillPage/>
      {/* Project Page */}
      <ProjectPage/>
    </>
  )
}

export default App
