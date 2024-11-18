import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-items ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link
            className="dropdown-toggle nav-link"
            to="#"
            onClick={toggleDropdown}
          >
            Company
          </Link>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/company-profile">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/video-gallery">
                  Video Gallery
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/news-events">
                  News & Events
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/support">
            Support
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
