import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-logo">
          <Link to={"/"}> Logo</Link>
        </div>
        <div className={`nav-link ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleMenuToggle}>
            <span>
              <FaHome />
            </span>{" "}
            Uy
          </Link>
          <Link to="/about" onClick={handleMenuToggle}>
            <span>
              <FcAbout />
            </span>{" "}
            Biz haqimizda
          </Link>
          <Link to="/service" onClick={handleMenuToggle}>
            <span>
              <MdMiscellaneousServices />
            </span>{" "}
            Xizmatlar
          </Link>
          <Link to="/contact" onClick={handleMenuToggle}>
            <span>
              <IoMdCall />
            </span>{" "}
            Aloqa
          </Link>
        </div>
        <div className="nav-btn">
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
          >
            {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
