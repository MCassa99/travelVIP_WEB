import "./ProductCard.css";
import StarRating from "./StarRating";


const ProductCard = ({ img, title, stay, type, rating, price, children }) => {
  return (
    <div className="card round-5">
      <div>
        <img src={img} className="card-img-top" />
      </div>
      <span className="stay">{stay}</span>
      <span className="type mb-2"><strong>{type}</strong></span>
      <div>
        <h3>{title}</h3>
        <StarRating rating={rating} />
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default ProductCard;
