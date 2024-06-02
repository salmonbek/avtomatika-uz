import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaShoppingBag, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-logo">
          <Link to={"/"}>Logo</Link>
        </div>
        <div className={`nav-link ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleMenuToggle}>
            Home
          </Link>
          <Link to="/about" onClick={handleMenuToggle}>
            About
          </Link>
          <Link to="/service" onClick={handleMenuToggle}>
            Service
          </Link>
          <Link to="/shop" onClick={handleMenuToggle}>
            Shop
          </Link>
          <Link to="/contact" onClick={handleMenuToggle}>
            Contact
          </Link>
          <Link to="/news" onClick={handleMenuToggle}>
            New
          </Link>
        </div>
        <div className="nav-btn">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <button className="icon-shop">
            <FaShoppingBag />
          </button>
        </div>
        <button className="hamburger" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
