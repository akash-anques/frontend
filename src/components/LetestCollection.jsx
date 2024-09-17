import React, { useContext } from 'react';
import { shopContext } from '../context/shopContext';

const LatestCollection = () => {
  const { products } = useContext(shopContext);
  console.log(products);
  return (
    <div>LatestCollection</div>
  );
}

export default LatestCollection;
