import React from 'react';
import './index.css';

const PriceCard = props => {
  const { service, price, priceModifier, time } = props.priceData;
  return (
    <div className="PriceCard">
      <div className="PriceCard__service">{service}</div>
      <div className="PriceCard__price">
        {price}
        {priceModifier && <span>{priceModifier}</span>}
      </div>
      <div className="PriceCard__time">{time}</div>
    </div>
  );
};

export default PriceCard;
