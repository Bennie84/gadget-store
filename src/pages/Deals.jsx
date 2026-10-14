import config from "../config";
import ProductCard from "../components/ProductCard";

function Deals({ onView }) {
  const deals = config.products.filter((product) => product.dealPrice < product.price);

  return (
    <section className="section deals-page">
      <p className="deals-eyebrow">A little more value</p>
      <h1>Hot Deals</h1>
      <p className="deals-intro">
        Enjoy 10% off selected phones. Sale prices are shown upfront, with no
        surprises.
      </p>

      <div className="grid">
        {deals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={onView}
            showDealDescription
          />
        ))}
      </div>
    </section>
  );
}

export default Deals;
