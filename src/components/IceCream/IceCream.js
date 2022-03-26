import React from 'react';
import './IceCream.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IceCream = (props) => {
  // console.log(props);
  const { iceCream, addToIceCreamCart } = props;
  const { name, price, img } = iceCream;
  return (
    <div className="iceCreamCard">
      <img src={img} alt={name} />
      <div className="iceCreamInfo">
        <h3 className="iceCreamName"> {name} </h3>
        <h4>Price: ${price} </h4>
      </div>
      <button className="addBtn" onClick={() => addToIceCreamCart(iceCream)}>
        <p className="addBtnTxt">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default IceCream;
