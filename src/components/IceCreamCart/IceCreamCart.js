import React from 'react';

const IceCreamCart = (props) => {
  const { iceCreamCart, selectOneFromIceCreamCart, removeFromIcerCreamCart } =
    props;

  return (
    <div
      style={{ backgroundColor: 'yellow', height: '100vh', display: 'sticky' }}
    >
      <h1>Selected Items:</h1>
      <ul>
        {iceCreamCart.map((myList) => {
          return (
            <li key={myList?.id} style={{ listStyleType: 'none' }}>
              <img
                src={myList?.img}
                alt={myList?.name}
                style={{
                  height: '50px',
                  width: '50px',
                  border: '1px solide black',
                  borderRadius: '50%',
                }}
              />
              {myList?.name}
            </li>
          );
        })}
      </ul>
      <button onClick={selectOneFromIceCreamCart}>Choose One from Cart</button>
      <button onClick={removeFromIcerCreamCart}>Clear Cart</button>
    </div>
  );
};

export default IceCreamCart;
