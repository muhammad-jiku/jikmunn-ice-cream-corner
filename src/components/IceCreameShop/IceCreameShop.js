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

  const addToIceCreamCart = (iceCream) => {
    console.log(iceCream);
  };

  return (
    <div className="iceCreamContainer">
      <div className="iceCreamShopContainer">
        {iceCreams.map((iceCream) => (
          //   console.log(iceCream)
          <IceCream
            key={iceCream?.id}
            iceCream={iceCream}
            addToIceCreamCart={addToIceCreamCart}
          />
        ))}
      </div>
      <div className="iceCreamCartContainer">
        <IceCreamCart iceCreamCart={iceCreamCart} />
      </div>
    </div>
  );
};

export default IceCreameShop;
