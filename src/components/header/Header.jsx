import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container">
      <nav className="nav">
        <div className="nav-logo">
          <Link to={'/'}>Logo</Link>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/news">New</Link>
        </div>
        <div className="nav-btn">
          <input type="text" placeholder="Search" />
          <button>
            Savat
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
