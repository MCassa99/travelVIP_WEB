import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { getCartCount, cartItems } = useCartContext();

    if (getCartCount() === 0) {
        return (
            <>
                {/* Retorno algo para insitar la compra */}
                <div className='d-flex flex-column justify-content-center text-center p-5 background-details' style={{backgroundColor: 'lightgrey'}}>
                    <h1 className='mb-3'> NO HAY PRODUCTOS EN EL CARRITO </h1>
                    <h4> ¡Agrega Productos al Carrito 😁!</h4>
                    <div className='mb-2'>
                        <Link to={`/`} className="text-decoration-none">
                            <button className="btn btn-lg btn-primary">Volver a la Tienda</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='d-flex justify-content-evenly mt-5'>
                <div className='cart-items col-8 rounded-5'>
                    {cartItems.map((product) => (
                        <ItemCart key={product.product.id} product={product.product} qty={product.people} />
                    ))}
                </div>
                <div className='col-3 bg-light rounded-5'>
                    <div className='h-100'>
                        hola dssssssssssssss
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart