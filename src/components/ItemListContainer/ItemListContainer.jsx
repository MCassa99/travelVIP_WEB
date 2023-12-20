import Products from '../Json/Products.json'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [product, setProduct] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const getProducts = async() => {
        try {
            const data = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(id ? Products.filter(item => item.cat === id) : Products);
                }, 0);
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
            <div className='d-flex align-items-center justify-content-center'>
                <h2 className='greeting'>{greeting}</h2>
            </div>
            <div>
                <ItemList product={product} />
            </div>
        </div>
    )
}

export default ItemListContainer
