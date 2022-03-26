import React, { useEffect, useState } from 'react';
import IceCream from '../IceCream/IceCream';
import './IceCreameShop.css';

const IceCreameShop = () => {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    fetch('iceCreams.json')
      .then((res) => res.json())
      .then((data) => setIceCreams(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="iceCreamContainer">
      <div className="iceCreamShopContainer">
        {iceCreams.map((iceCream) => (
          //   console.log(iceCream)
          <IceCream key={iceCream?.id} iceCream={iceCream} />
        ))}
      </div>
      <div className="iceCreamCartContainer">
        <h1>Ice Cream Cart</h1>
      </div>
    </div>
  );
};

export default IceCreameShop;
