import React, { useEffect, useState } from 'react';
import IceCream from '../IceCream/IceCream';
import IceCreamCart from '../IceCreamCart/IceCreamCart';
import './IceCreameShop.css';

const IceCreameShop = () => {
  const [iceCreams, setIceCreams] = useState([]);
  const [iceCreamCart, setIceCreamCart] = useState([]);

  useEffect(() => {
    fetch('iceCreams.json')
      .then((res) => res.json())
      .then((data) => setIceCreams(data))
      .catch((err) => console.log(err));
  }, []);

  const addToIceCreamCart = (selectedIceCream) => {
    let newIceCreamCart = [];
    const existsIceCreamCart = iceCreamCart.find(
      (product) => product?.id === selectedIceCream.id
    );

    if (!existsIceCreamCart) {
      newIceCreamCart = [...iceCreamCart, selectedIceCream];
    } else {
      const restIceCreamCart = iceCreamCart.filter(
        (product) => product?.id !== selectedIceCream.id
      );
      newIceCreamCart = [...restIceCreamCart, existsIceCreamCart];
      alert('Sorry You have already added the item');
    }

    setIceCreamCart(newIceCreamCart);
  };

  const selectOneFromIceCreamCart = () => {
    if (iceCreamCart.length !== 0) {
      const randomIceCream =
        iceCreamCart[Math.floor(Math.random() * iceCreamCart.length)];
      alert(`You can buy ${randomIceCream?.name}!`);
    } else {
      alert(`Please add something to the cart!`);
    }
  };

  const removeFromIcerCreamCart = () => {
    setIceCreamCart([]);
  };

  return (
    // class added
    <div className="iceCreamContainer">
      {/* class added */}
      <div className="iceCreamShopContainer">
        {iceCreams.map((iceCream) => (
          <IceCream
            key={iceCream?.id}
            iceCream={iceCream}
            addToIceCreamCart={addToIceCreamCart}
          ></IceCream>
        ))}
      </div>
      {/* class added */}
      <div className="iceCreamCartContainer">
        <IceCreamCart
          iceCreamCart={iceCreamCart}
          selectOneFromIceCreamCart={selectOneFromIceCreamCart}
          removeFromIcerCreamCart={removeFromIcerCreamCart}
        ></IceCreamCart>
      </div>
    </div>
  );
};

export default IceCreameShop;
