import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Products from '../Json/Products.json'
import ProductDetailList from '../ProductDetailList/ProductDetailList';

const ProductDetailContainer = () => {
    
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const getProducts = async() => {
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

    return (
        <div>
            <ProductDetailList product={product} />
        </div>
    )
}

export default ProductDetailContainer