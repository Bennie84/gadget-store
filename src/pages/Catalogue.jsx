// import config from "../config";
// import ProductCard from "../components/ProductCard";

// function Catalogue({ onView }) {
//   return (
//     <div className="section">
//       <h2>All Phones</h2>
//       <div className="grid">
//         {config.products.map((p) => (
//           <ProductCard key={p.id} product={p} onView={onView} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Catalogue;

import { useState } from "react";
import config from "../config";
import ProductCard from "../components/ProductCard";

function Catalogue({ onView }) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");

  const results = config.products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = brand === "All" || p.brand === brand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="section">
      <h2>All Phones</h2>

      <input
        className="search"
        type="text"
        placeholder="Search for a phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="brands">
        {config.brands.map((b) => (
          <button
            key={b}
            className={brand === b ? "brand active" : "brand"}
            onClick={() => setBrand(b)}
          >
            {b}
          </button>
        ))}
      </div>

      {results.length === 0 && <p>No phones found.</p>}

      <div className="grid">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} onView={onView} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
