import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNav = e => {
    if (e.target.classList.contains("overlay")) {
      setToggleNav(false);
    } else if (
      e.target.classList.contains("hamburger") ||
      e.target.classList.contains("hamburger__line")
    ) {
      setToggleNav(!toggleNav);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="brand">
          <h2 className="brand__title">Brand</h2>
        </div>
        <div
          className={toggleNav ? "nav__wrapper overlay" : "nav__wrapper"}
          onClick={handleNav}
        >
          <nav className="nav">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Product
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact
              </a>
            </li>
          </nav>
        </div>
        <div className="icons">
          <div className="cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="shopping-cart-icon"
            />
            <span className="badge">0</span>
          </div>
          <div
            className={toggleNav ? "hamburger hamburger-trans" : "hamburger"}
            onClick={handleNav}
          >
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
