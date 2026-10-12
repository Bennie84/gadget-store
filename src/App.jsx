import { useState, useEffect } from "react";
import config from "./config";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(config.defaultTheme);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function openWhatsApp(message) {
    const link =
      "https://wa.me/" +
      config.whatsapp +
      "?text=" +
      encodeURIComponent(message);
    window.open(link, "_blank");
  }

  function onView(product) {
    setSelected(product);
    setPage("details");
    window.scrollTo(0, 0);
  }

  function onEnquire(product) {
    openWhatsApp("Hi, I want to know more about the " + product.name);
  }

  function onBuy(product) {
    openWhatsApp(
      "Hi, I want to buy the " +
        product.name +
        " for ₦" +
        product.price.toLocaleString(),
    );
  }

  return (
    <div>
      <Navbar page={page} setPage={setPage} theme={theme} setTheme={setTheme} />

      {page === "home" && <Home setPage={setPage} onView={onView} />}
      {page === "catalogue" && <Catalogue onView={onView} />}
      {page === "details" && selected && (
        <ProductDetails
          product={selected}
          setPage={setPage}
          onBuy={onBuy}
          onEnquire={onEnquire}
        />
      )}

      <footer className="footer">
        <p>© {config.storeName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import config from "./config";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Catalogue from "./pages/Catalogue";
// import ProductDetails from "./pages/ProductDetails";

// function App() {
//   const [page, setPage] = useState("home");
//   const [theme, setTheme] = useState(config.defaultTheme);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     document.documentElement.style.setProperty("--brand", config.brandColor);
//   }, [theme]);

//   function onEnquire(product) {
//     const message = "Hi, I want to enquire about the " + product.name;
//     const link =
//       "https://wa.me/" +
//       config.whatsapp +
//       "?text=" +
//       encodeURIComponent(message);
//     window.open(link, "_blank");
//   }

//   return (
//     <div>
//       <Navbar page={page} setPage={setPage} theme={theme} setTheme={setTheme} />

//       {page === "home" && <Home setPage={setPage} onEnquire={onEnquire} />}
//       {page === "catalogue" && <Catalogue onEnquire={onEnquire} />}

//       <footer className="footer">
//         <p>© {config.storeName}. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
