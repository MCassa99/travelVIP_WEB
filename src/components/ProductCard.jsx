
const ProductCard = ({img, title, stay, children}) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{stay}</p>
      <div>{children}</div>
    </div>
  )
}

export default ProductCard