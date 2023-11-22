import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting.jsx'
import NavbarComponent from './components/Navbar.jsx'


function App() {
  return (
    <>
      <div className='bg'>
        <NavbarComponent />
        <Greeting />
      </div>
    </>
  )
}

export default App
