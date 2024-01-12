import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { FaPlane } from "react-icons/fa";


const itemCart = ({ product, qty }) => {
  const { removeProduct, removeFromCart } = useCartContext();
  const { id, title, stay, rating, price, img, desc, disp, cat } = product;


  return (
    <div>
      <div className="row">
        <button className='btn bg-dark rounded' style={{width: 1+'rem'}}>X</button>
        <div className="bg-light p-4 rounded-5">
          <div id='item-info'>
            <h3 className='text-center bg-info rounded-5 p-2 mb-3'> {title.toUpperCase()} </h3>
          </div>
          <div id='passenger-info'>
            <div className='d-flex justify-content-around mb-3'>
              <div className="flex-column">
                <p>PASAJERO</p>
                <p className='cart-text'> <strong> MCASSA99 </strong> </p>
              </div>
              <div className="flex-column">
                <p>VUELO</p>
                <p className='cart-text'> <strong> AF1234 </strong> </p>
              </div>
              <div className="flex-column">
                <p>DIA</p>
                <p className='cart-text'> <strong> 12 DEC 2021 </strong> </p>
              </div>
              <div className="flex-column">
                <p>ASIENTO</p>
                <p className='cart-text'> <strong> 62 </strong> </p>
              </div>
            </div>
          </div>
          <div id="flight-info">
            <div className='d-flex justify-content-center flex-row mb-3'>
              <p> <strong className='m-5 h2'> ORIGEN </strong> </p>
              <FaPlane size={60} className='mx-5' />
              <p> <strong className='m-5 h2'> DESTINO </strong> </p>
            </div>
          </div>
          <div id='flight-additional-info'>
            <div className='d-flex justify-content-around mb-3'>
              <div className="flex-column text-center">
                <p>HORA DE EMBARQUE</p>
                <p className='cart-text'> <strong> 21:30 </strong> </p>
              </div>
            </div>
            <div className='d-flex' style={{ marginInline: 5 + 'rem', marginTop: -4 + 'rem' }}>
              <div className="flex-column">
                <p>PUERTA</p>
                <p className='cart-text'> <strong> 53 </strong> </p>
              </div>
              <div className="flex-column ms-auto text-end">
                <p>VENDIDO POR AGENTE</p>
                <p className='cart-text'> <strong> MATIAS CASSANELLO </strong> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default itemCart