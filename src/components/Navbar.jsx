import config from "../config";

function Navbar({ page, setPage, theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2>{config.storeName}</h2>
      <div className="links">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={page === "catalogue" ? "active" : ""}
          onClick={() => setPage("catalogue")}
        >
          Phones
        </button>

        <button
          className={page === "deals" ? "active" : ""}
          onClick={() => setPage("deals")}
        >
          Deals
        </button>

        <button
          className="theme-btn"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
