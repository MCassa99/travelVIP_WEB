import "./ProductCard.css";

const ProductCard = ({ destino, children }) => {
  const {id, title, stay, price, img, desc, disp, cat} = destino;

  return (
    <div className="card round-5">
      <div>
        <img src={img} className="card-img-top" />
      </div>
      <span className="stay">{stay} Dias / {stay-1} Noches</span>
      <div>
        <h5 className="text-center">{title}</h5>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default ProductCard;
