import React from 'react';

const IceCreamCart = (props) => {
  console.log(props);
  const { iceCreamCart } = props;

  // let name = '';

  // const listItems = for(let x of iceCreamCart) {
  //   console.log(x);
  //   return <li> x?.name</li>
  // }

  const listItems = iceCreamCart.map((myList) => {
    return (
      <li key={myList?.id}>
        <img
          src={myList?.img}
          alt={myList?.name}
          style={{
            height: '50px',
            width: '50px',
            border: '1px solide black',
            borderRadius: '50%',
          }}
        />{' '}
        {myList?.name}
      </li>
    );
  });

  return (
    <div style={{ backgroundColor: 'yellow', height: '100vh' }}>
      <h1>hello</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default IceCreamCart;
