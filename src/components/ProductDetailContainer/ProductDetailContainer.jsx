import React, { useState, useEffect } from 'react';
import Products from '../Json/Products.json'


const ProductDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Products.find(item => item.id === parseInt(id)) : Products);
            }, 2000);
        });
        promesa.then((data) => setProduct(data));
    }, [id]);

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <h2 className='greeting'>{greeting}</h2>
            </div>
            <div>
                <ItemList product={product} />
            </div>
        </div>
    )
}

export default ProductDetailContainer