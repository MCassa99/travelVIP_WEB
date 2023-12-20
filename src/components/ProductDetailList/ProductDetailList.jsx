import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailList = ({ product }) => {
    return (
        <div>
            <ProductDetail destino={product} />
        </div>
    )
}

export default ProductDetailList;