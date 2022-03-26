import React from 'react';
import './IceCream.css';

const IceCream = (props) => {
  console.log(props);
  const { name, id, price, img } = props?.iceCream;
  return (
    <div className="iceCreamDiv">
      <img src={img} alt={name} />
      <h3> {name} </h3>
      <h4>Price: ${price} </h4>
    </div>
  );
};

export default IceCream;
