import React from 'react';
import './IceCreamCart.css';

const IceCreamCart = (props) => {
  // destructuring
  const { iceCreamCart, selectOneFromIceCreamCart, removeFromIcerCreamCart } =
    props;

  return (
    <div>
      {/* class added */}
      <h3 className="iceCreamListHeader">Selected Items:</h3>
      <ul>
        {iceCreamCart.map((iceCream) => {
          return (
            // class added
            <li key={iceCream?.id} className="iceCreamList">
              <p>{iceCream?.name}</p>
            </li>
          );
        })}
      </ul>
      {/* class and id added */}
      <div className="btnGrp">
        <button
          id="btn"
          className="selectBtn"
          onClick={selectOneFromIceCreamCart}
        >
          Choose One
        </button>
        {/* class and id added */}
        <button id="btn" className="clearBtn" onClick={removeFromIcerCreamCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default IceCreamCart;
