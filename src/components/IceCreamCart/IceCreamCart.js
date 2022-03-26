import React from 'react';
import './IceCreamCart.css';

const IceCreamCart = (props) => {
  const { iceCreamCart, selectOneFromIceCreamCart, removeFromIcerCreamCart } =
    props;

  return (
    <div>
      <h3>Selected Items:</h3>
      <ul>
        {iceCreamCart.map((iceCream) => {
          return (
            <li key={iceCream?.id} className="iceCreamList">
              <img src={iceCream?.img} alt={iceCream?.name} />
              <p>{iceCream?.name}</p>
            </li>
          );
        })}
      </ul>
      <div className="btnGrp">
        <button
          id="btn"
          className="selectBtn"
          onClick={selectOneFromIceCreamCart}
        >
          Choose One
        </button>
        <button id="btn" className="clearBtn" onClick={removeFromIcerCreamCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default IceCreamCart;
