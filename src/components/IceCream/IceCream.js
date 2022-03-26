import React from 'react';
import './IceCream.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IceCream = (props) => {
  // console.log(props);
  //  destructuring
  const { iceCream, addToIceCreamCart } = props;
  const { name, price, img } = iceCream;
  return (
    // class added
    <div className="iceCreamCard">
      <img src={img} alt={name} />
      {/* class added */}
      <div className="iceCreamInfo">
        {/* class added */}
        <h3 className="iceCreamName"> {name} </h3>
        <h4>Price: ${price} </h4>
      </div>
      {/* class added */}
      <button className="addBtn" onClick={() => addToIceCreamCart(iceCream)}>
        {/* class added */}
        <p className="addBtnTxt">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default IceCream;
