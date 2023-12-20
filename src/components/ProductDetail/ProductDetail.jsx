import React from "react";

const ProductDetail = ({ product, children }) => {
  const { id, title, stay, rating, price, img, desc, disp, cat } = destino;

  return (
      <div
        className="card round-5"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ cursor: "pointer" }}
      >
        <div>
          <img src={img} className="card-img-top" />
        </div>
        <span className="stay">
          {stay} Dias / {stay - 1} Noches
        </span>
        <div>
          <h5 className="text-center">
            {title}
            <StarRating rating={rating} />
          </h5>
          <div className="card-body">{children}</div>
          <div className="card-footer">
            <div className="d-flex align-items-center justify-content-center">
              Más Información
              {isHovering && <div style={{ marginLeft: 1 + "rem" }}>➜</div>}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetail;
