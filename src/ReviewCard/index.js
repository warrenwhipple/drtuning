import React from 'react';
import './index.css';

const ReviewCard = props => {
  const { image, title, subtitle, quote } = props;
  return (
    <div className="reviewCard">
      <div className="reviewCard__header">
        <div className="reviewCard__image">
          <img src={image} alt={title} />
        </div>
        <div className="reviewCard__title">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <p className="reviewCard__quote">“{quote}”</p>
    </div>
  );
};

export default ReviewCard;
