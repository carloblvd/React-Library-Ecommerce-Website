import React from "react";
import Logo from "../assets/Library.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={Logo} alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">
              <span className="link__hover-effect--white link__hover-effect">
                Home
              </span>
            </a>
            <span className="footer__link  no-cursor">About</span>
            <a href="/books" className="footer__link">
              <span className="link__hover-effect--white link__hover-effect">
                Books
              </span>
            </a>
            <a href="/cart" className="footer__link">
              <span className="link__hover-effect--white link__hover-effect">
                Cart
              </span>
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
