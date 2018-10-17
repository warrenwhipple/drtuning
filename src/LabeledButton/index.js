import React from 'react';
import './index.css';

const LabeledButton = props => {
  const { icon, iconAlt, label, link } = props;
  return (
    <div className="LabeledButton">
      <a href={link}>
        <img src={icon} alt={iconAlt} />
      </a>
      <div className="LabeledButton__label">{label}</div>
    </div>
  );
};

export default LabeledButton;
