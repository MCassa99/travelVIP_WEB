import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import Swal from "sweetalert2";

const Brief = () => {
  const { getCartTotal } = useCartContext();

  function pay() {
    Swal.fire({
      title: "Pasarela de Pago",
      text: "Al presionar el boton sera redireccionado a la pasarela de pago segura.",
      icon: "success",
      confirmButtonText: "Genial!",
    });
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      console.log("redirect");
      <Link to={`/checkout`} />
    });
  }

  return (
    <div>
      <div className="row justify-content-between">
        <p className="col-auto">Subtotal:</p>
        <p className="col-3">${getCartTotal()}</p>
      </div>
      <div className="row justify-content-between">
        <p className="col-auto">Total:</p>
        <p className="col-3">${getCartTotal() * 1.22}</p>
      </div>
      <div className="">
        <button className="w-100 btn btn-primary" onClick={pay}>
          PAGAR
        </button>
      </div>
    </div>
  );
};

export default Brief;
