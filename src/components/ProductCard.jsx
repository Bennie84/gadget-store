import PhoneImage from "./PhoneImage";

function ProductCard({ product, onView }) {
  return (
    <div className="card">
      <PhoneImage src={product.image} name={product.name} />
      {/* <img src={product.image} alt={product.name} /> */}
      <h3>{product.name}</h3>
      <p>{product.storage}</p>
      <p className="price">₦{product.price.toLocaleString()}</p>
      <button onClick={() => onView(product)}>View Details</button>
    </div>
  );
}

export default ProductCard;
