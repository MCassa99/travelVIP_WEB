import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ProductCard from './components/ProductCard.jsx'


function App() {
  return (
    <>
      <div className='bg'>
        <NavbarComponent />
        <ItemListContainer greeting={'Travel VIP Web'} />
        <div className='row p-4'>
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <ProductCard img='./src/assets/Madrid.webp' title='Madrid' stay='13 Días / 11 Noches' price={12354}>
              <div>
              </div>
            </ProductCard>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4'><ProductCard img='./src/assets/Madrid.webp' title='Madrid' stay='13 Días / 11 Noches' price={12354}/></div>
          <div className='col-lg-3 col-md-4 col-sm-6 mb-4'><ProductCard img='./src/assets/Madrid.webp' title='Madrid' stay='13 Días / 11 Noches' price={12354}/></div>
        </div>
      </div>
    </>
  )
}

export default App
