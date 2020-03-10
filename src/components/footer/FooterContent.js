import React from "react";

function FooterContent(props) {
  return (
    <div className="footer__content">
      <h3 className="footer__content__header">{props.header}</h3>
      <div>
        <p className="footer__content__info">{props.content1}</p>
        <p className="footer__content__info">{props.content2}</p>
        <p className="footer__content__info">{props.content3}</p>
        <p className="footer__content__info">{props.content4}</p>
      </div>
    </div>
  );
}

export default FooterContent;
