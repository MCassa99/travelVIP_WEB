import { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({ destino, children }) => {
  const { id, title, stay, rating, price, img, desc, disp, cat } = destino;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="background-details">
        <div className="product-content">
          <div className="h-75 detail-img" style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
          <p className="price"> desde ${price}.00 </p>
          <p className="detail-stay"> {stay} Dias / {stay - 1} Noches</p>
          <p className="Regisha-3 color-s"> Presentamos </p>
          <p className="Regisha-6 color-s" style={{ marginTop: -3.5 + 'rem' }}> {title.toUpperCase()} </p>
          <p className="w-25 color-s description"> {desc} </p>
          <button className="btn btn-primary px-5 mt-4">Cotizar</button>
        </div>
        <div className="relevent-content ">

        </div>
        </div>
        
      </div>

    </>
  );
};

export default ProductDetail;
