import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <>
      <div className='bg'>
        <NavbarComponent />
        <ItemListContainer greeting={'Travel VIP Web'} />
      </div>
    </>
  )
}

export default App
