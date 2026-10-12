import PhoneImage from "../components/PhoneImage";

function ProductDetails({ product, setPage, onBuy, onEnquire }) {
  return (
    <div className="section">
      <button className="back" onClick={() => setPage("catalogue")}>
        ← Back to phones
      </button>

      <div className="details-layout">
        <PhoneImage src={product.image} name={product.name} />

        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="price big">₦{product.price.toLocaleString()}</p>
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
