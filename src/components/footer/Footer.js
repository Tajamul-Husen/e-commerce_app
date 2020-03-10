import React from "react";
import footerContentData from "./footerContentData";
import FooterContent from "./FooterContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const data = footerContentData.map(cont => {
    return (
      <FooterContent
        key={cont.header}
        header={cont.header}
        content1={cont.content1}
        content2={cont.content2}
        content3={cont.content3}
        content4={cont.content4}
      />
    );
  });
  return (
    <div className="footer__wrapper">
      <div className="footer">
        <div className="footer__container">
          {data}
          <div className="newsletter">
            <h3 className="newsletter__header">Subscribe to letter</h3>
            <div className="newsletter__form">
              <input
                type="text"
                className="input-text"
                placeholder="enter your email"
              ></input>
              <button className="btn">SUBSCRIBE</button>
            </div>
            <div className="newsletter__social-links">
              <FontAwesomeIcon icon={faFacebookSquare} className="fb" />
              <FontAwesomeIcon icon={faTwitterSquare} className="tw" />
            </div>
          </div>
        </div>
        <div className="footer__endline">
          <p className="footer__endline-text">
            &copy; Copyright Ecommerce.com 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
