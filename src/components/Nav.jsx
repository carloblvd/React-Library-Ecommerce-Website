import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Nav({ cart }) {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list ">
            <Link
              to="/"
              className="nav__link link__hover-effect--purple link__hover-effect">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link
              to="/books"
              className="nav__link link__hover-effect--purple link__hover-effect ">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link click">
              <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
            </Link>
            {cart.length > 0 ? (
              <span className="cart__length">{cart.length}</span>
            ) : null}
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
