import "./ProductCard.css";

const ProductCard = ({ img, title, stay, price, children }) => {
  return (
    <div class="card round-5">
      <div>
        <img src="https://imgur.com/edOjtEC.png" className="card-img-top" />
      </div>
      <span className="stay">{stay}</span>
      <div>
        <h3 className="text-center">{title}</h3>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default ProductCard;
