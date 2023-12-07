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
        <ProductCard img='./src/assets/Madrid.webp' title='Madrid' stay='13 Días / 11 Noches'>
          <p>Desde Vie 22 Mar Hasta Mié 03 Abr</p>
          <button>Comprar</button>
        </ProductCard>
        <ProductCard img='' title='Madrid' stay='13 Días / 11 Noches'>
          <p>Desde Vie 22 Mar Hasta Mié 03 Abr</p>
          <button>Comprar</button>
        </ProductCard>
        <ProductCard img='' title='Madrid' stay='13 Días / 11 Noches'>
          <p>Desde Vie 22 Mar Hasta Mié 03 Abr</p>
          <button>Comprar</button>
        </ProductCard>
      </div>
    </>
  )
}

export default App
