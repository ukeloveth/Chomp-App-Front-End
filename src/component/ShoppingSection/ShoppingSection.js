import React from 'react'
import "./ShoppingSection.css";

const ShoppingSection = ({img, title, price, description, btn}) => {
  return (
    <div className="menuCard">
      <div className="menuCard__container">
        <img
          src={img}
          alt="burger"
        />
        <div className="menuCard__left">
          <div className="menuCard__left-header">
            <h6>{title}</h6>
            <p>$ {price}</p>
          </div>
          <p>
           {description}
          </p>
          <div className="menuItem__left-bottom">
            <input type="number" min="0" max="25"/>
            <button className="btn btn-success">{btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSection;