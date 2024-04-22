import React from 'react'
import './App.css'
import ParticleBg from './components/ParticleBg'
import Navbar from './components/Navbar'

function App() {

  return (

    <div className=''>
      <ParticleBg/>
      <div className="max-w-screen relative z-1 text-white flex flex-col">
      <Navbar />
      
    </div>
    </div>
   
  )
}

export default App
