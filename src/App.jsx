import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ProductsContainer from './components/ProductsContainer.jsx'


const getDestinos = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(destinos);
    }, 3000);
  });
}

async function awaitDestinos() {
  try {
    const destinosAwait = await getDestinos();
    console.log(destinosAwait);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  return (
    <>
      <div className='bg'>
        <NavbarComponent />
        <ItemListContainer greeting={'Travel VIP Web'} />
        <ProductsContainer/>
      </div>
    </>
  )
}

export default App
