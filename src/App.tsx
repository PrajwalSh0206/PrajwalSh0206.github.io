import './css/App.scss'
import HeroPage from './components/HeroPage'
import SkillPage from './components/SkillPage'
import './css/Navbar.scss'
import ProjectSection from './components/ProjectSection'
import FooterSection from './components/Footer'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to call when the loading is complete
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Add event listener for 'load' event
    window.addEventListener('load', handleLoad);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {isLoading && <Loader></Loader>}
      <div className='flex p-5 w-full shadow-md sticky z-40 top-0 bg-white shadow-gray-200 border-b-2 border-indigo-100 justify-end'>
        <ul className='list-none flex flex-row space-x-5 text-lg'>
          <li><a className='navlink' href="#home">Home</a></li>
          <li><a className='navlink' href="#skills">Skills</a></li>
          <li><a className='navlink' href="#project">Projects</a></li>
          <li><a className='navlink' href="#contactme">Contacts</a></li>
        </ul>
      </div>
      <div className='flex flex-col items-center px-10'>
        {/* Hero Page */}
        <HeroPage />
        {/* Skills Page */}
        <SkillPage />
        {/* Project Page */}
        <ProjectSection />

      </div>
      {/* Footer Page */}
      <FooterSection />
    </>
  )
}

export default App
