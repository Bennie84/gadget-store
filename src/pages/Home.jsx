import config from "../config";
import ProductCard from "../components/ProductCard";

function Home({ setPage, onView }) {
  const featured = config.products.filter((p) => p.featured);

  return (
    <div>
      <section className="hero">
        <p className="hero-eyebrow">Thoughtful picks. Fair, honest prices.</p>
        <h1>{config.storeName}</h1>
        <p>{config.tagline}</p>
        <button className="cta" onClick={() => setPage("catalogue")}>
          Browse Phones
        </button>
      </section>

      <section className="trust">
        {config.trust.map((item) => (
          <div className="trust-item" key={item.text}>
            <span>{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Featured Phones</h2>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} onView={onView} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
