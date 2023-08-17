import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={Logo} alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              <span className="link__hover-effect--white link__hover-effect">
                Home
              </span>
            </Link>
            <span className="footer__link  no-cursor">About</span>
            <Link to="/books" className="footer__link">
              <span className="link__hover-effect--white link__hover-effect">
                Books
              </span>
            </Link>
            <Link to="/cart" className="footer__link">
              <span className="link__hover-effect--white link__hover-effect">
                Cart
              </span>
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
