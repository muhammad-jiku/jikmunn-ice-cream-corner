import React, { useEffect, useState } from 'react';
import IceCream from '../IceCream/IceCream';

const IceCreameShop = () => {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    fetch('iceCreams.json')
      .then((res) => res.json())
      .then((data) => setIceCreams(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Lovable Ice Cream Shop</h1>
      <div className="iceCreamShopContainer">
        <h1>Ice Cream Shop</h1>
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
