import React from 'react';
import './index.css';

const ReviewCard = props => {
  const { image, title, subtitle, quote } = props.reviewData;
  return (
    <div className="ReviewCard">
      <div className="ReviewCard__header">
        <div className="ReviewCard__image">
          <img src={image} alt={title} />
        </div>
        <div className="ReviewCard__title">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <p className="ReviewCard__quote">“{quote}”</p>
    </div>
  );
};

export default ReviewCard;
