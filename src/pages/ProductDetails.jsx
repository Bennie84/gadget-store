import PhoneImage from "../components/PhoneImage";

function ProductDetails({ product, setPage, backPage, onBuy, onEnquire }) {
  const hasDeal = product.dealPrice < product.price;
  const backLabel =
    backPage === "deals"
      ? "← Back to deals"
      : backPage === "home"
        ? "← Back home"
        : "← Back to phones";

  return (
    <div className="section">
      <button className="back" onClick={() => setPage(backPage)}>
        {backLabel}
      </button>

      <div className="details-layout">
        <PhoneImage src={product.image} name={product.name} />

        <div className="details-info">
          <h1>{product.name}</h1>
          {hasDeal ? (
            <div className="details-deal-price">
              <span className="deal-badge">10% OFF</span>
              <span className="price-was">
                ₦{product.price.toLocaleString()}
              </span>
              <p className="price big">
                ₦{product.dealPrice.toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="price big">₦{product.price.toLocaleString()}</p>
          )}
          <p>{product.description}</p>

          <h3>Specifications</h3>
          <ul>
            {product.specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="product-facts">
            <div className="product-fact">
              <span>Battery health</span>
              <strong>{product.battery}</strong>
            </div>
            <div className="product-fact">
              <span>Condition</span>
              <strong>{product.condition}</strong>
            </div>
          </div>

          <div className="actions">
            <button className="buy" onClick={() => onBuy(product)}>
              Buy Now
            </button>
            <button className="whatsapp" onClick={() => onEnquire(product)}>
              Enquire more on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
