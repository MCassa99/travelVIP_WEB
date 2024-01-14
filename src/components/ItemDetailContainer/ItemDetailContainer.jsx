import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductDetailList from '../ItemDetailList/ItemDetailList';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ProductDetailContainer = () => {
    
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const queryDB = getFirestore();
        const queryDoc = doc(queryDB, 'destino', id);
        getDoc(queryDoc).then((response) => {
            setProduct({id: response.id, ...response.data()});
        });
    }, [id]);

    return (
        <div>
            <ProductDetailList product={product} />
        </div>
    )
}

export default ProductDetailContainer