import React, { useState ,useEffect} from 'react'
import Navbar from './components/nav/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Loading from './components/Loading'





const App = () => {

  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1800)
  }, [])
  
  return (
    <>
    {loading ? <Loading /> : <div className= "w-full h-auto bg-bodyColor text-lightText">
        <div className='px-5 sm:px-8 md:px-6 lg:max-w-screen-xl mx-auto lg:px-16'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
    
    </div>}
    
    </>
  )
}

export default App
