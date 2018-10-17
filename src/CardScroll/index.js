import React from 'react';
import './index.css';

const CardScroll = props => (
  <div className="CardScroll">
    <div className="CardScroll__leadingSpacer" />
    {props.children}
    <div className="CardScroll__trailingSpacer" />
  </div>
);

export default CardScroll;
