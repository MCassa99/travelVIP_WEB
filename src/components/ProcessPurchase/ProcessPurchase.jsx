import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Products from '../Json/Products.json'
import wppLogo from '../../assets/WhatsApp_icon.webp'
import agentLogo from '../../assets/Agent_icon.png'
import { useCartContext } from '../CartContext/CartContext';

const ProcessPurchase = () => {

    const { addToCart } = useCartContext();

    const [product, setProduct] = useState([]);
    const { id, qty } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(id ? Products.find(item => item.id === parseInt(id)) : Products);
                    }, 1000);
                });
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [id]);

    let botonWpp = () => {
        // LO QUE HARIA PARA QUE EL OPERADOR TE HABILITE LA COMPRA AL CARRITO
        let mensaje = `Hola TravelVIP ! Me contacto porque queria averiguar por una cotizacion a ${product.title}  por la cantidad de ${product.stay} dias. Muchas Gracias!`;
        let telefono = "+59896327431";
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}&source=&data=`;
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div>
            <h2 className='d-flex justify-content-center mt-5 mb-3'>Aqui se Redireccionara a el Usuario a Whatsapp para Concretar con un Operador</h2>
            <div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span className='mb-3'><strong>Consultar por {product.title}</strong></span>
                    <button className='btn btn-success mb-4' onClick={botonWpp}><img style={{ width: 40, marginRight: 10 }} src={wppLogo} /><strong>Whatsapp</strong></button>
                </div>
            </div>
            <div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span>Validar Destino</span>
                    <span className='mb-3'><strong>(*Este paso lo dara el Agente luego de concretar todo por WhatsApp*)</strong></span>
                    <button className='btn btn-primary mb-4' onClick={() => {addToCart({product},qty)}}><img style={{ width: 40, marginRight: 10 }} src={agentLogo} /><strong>Habilitar Destino</strong></button>
                </div>
            </div>
            <div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span>Mira tus productos</span>
                    <Link to={`/cart`} className="text-decoration-none">
                        <button className='btn btn-secondary'><strong>IR AL CARRITO</strong></button>
                    </Link>    
                </div>
            </div>
        </div>
    )
}

export default ProcessPurchase