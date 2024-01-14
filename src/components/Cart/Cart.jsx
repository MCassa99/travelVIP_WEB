import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Cart = () => {
  const { getCartCount, cartItems, getCartTotal } = useCartContext();

  if (getCartCount() === 0) {
    return (
      <>
        {/* Retorno algo para insitar la compra */}
        <div
          className="d-flex flex-column justify-content-center text-center p-5 background-details"
          style={{ backgroundColor: "lightgrey" }}
        >
          <h1 className="mb-3"> NO HAY PRODUCTOS EN EL CARRITO </h1>
          <h4> ¡Agrega Productos al Carrito 😁!</h4>
          <div className="mb-2">
            <Link to={`/`} className="text-decoration-none">
              <button className="btn btn-lg btn-primary">
                Volver a la Tienda
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }


  function pay() {
    Swal.fire({
        title: 'Pasarela de Pago',
        text: 'Al presionar el boton sera redireccionado a la pasarela de pago segura.',
        icon: 'success',
        confirmButtonText: 'Genial!'
      })
    new Promise(resolve => setTimeout(resolve, 2000)).then(() => { paySuccess() });
  }

  function paySuccess() {
    Swal.fire({
        title: 'Pago Exitoso',
        text: 'Su pago fue exitoso, sera redireccionado a la pagina de inicio.',
        icon: 'success',
        confirmButtonText: 'Genial!'
      })
    new Promise(resolve => setTimeout(resolve, 3000)).then(() => { window.location.href = "/" });
  }

  return (
    <>
      <div className="d-flex justify-content-evenly mt-5">
        <div className="col-8 rounded-5">
          {cartItems.map((product) => (
            <ItemCart
              key={product.product.id}
              product={product.product}
              qty={product.people}
              information={product.information}
            />
          ))}
        </div>
        <div className="col-3 bg-light rounded-5 mt-4 h-100 d-inline-block">
          <div className="h-100 p-4 d-flex flex-column justify-content-center">
            <div className="row align-items-start">
                <h3>Resumen del Pedido</h3>
                <p className="col">
                  <strong>Cantidad de Productos: {getCartCount()}</strong>
                </p>
                <hr />
            </div>

            <div className="col">
              {cartItems.map((product) => (
                <div
                  key={product.product.id}
                  className="row justify-content-between"
                >
                  <p className="col-auto">{product.product.title}</p>
                  <p className="col-3">${product.product.price}</p>
                </div>
              ))}
            </div>
            <hr className="mt-5"/>
            <div className="row justify-content-between">
              <p className="col-auto">Subtotal:</p>
              <p className="col-3">${getCartTotal()}</p>
            </div>
            <div className="row justify-content-between">
              <p className="col-auto">Total:</p>
              <p className="col-3">${getCartTotal() * 1.22}</p>
            </div>
            <div className="">
              <button className="w-100 btn btn-primary" onClick={pay}>PAGAR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
