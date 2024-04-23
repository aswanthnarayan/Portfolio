import React from 'react'
import './App.css'
import ParticleBg from './components/ParticleBg'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {

  return (

    <div className=''>
      <ParticleBg/>
      <div className="max-w-screen relative z-1 text-white flex flex-col">
      <Navbar />
      <section>
      <HomePage/>
      </section>
      <section>
        
      </section>
    </div>
    </div>
   
  )
}

export default App
