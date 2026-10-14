import PhoneImage from "./PhoneImage";

function ProductCard({ product, onView, showDealDescription = false }) {
  const hasDeal = product.dealPrice < product.price;

  return (
    <div className="card">
      <div className="product-image-wrap">
        <PhoneImage src={product.image} name={product.name} />
        {hasDeal && <span className="deal-badge">10% OFF</span>}
      </div>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      {showDealDescription && (
        <p className="deal-description">{product.dealDescription}</p>
      )}
      {hasDeal ? (
        <p className="price price-deal">
          <span className="price-was">₦{product.price.toLocaleString()}</span>
          <strong>₦{product.dealPrice.toLocaleString()}</strong>
        </p>
      ) : (
        <p className="price">₦{product.price.toLocaleString()}</p>
      )}
      <button onClick={() => onView(product)}>View Details</button>
    </div>
  );
}

export default ProductCard;
