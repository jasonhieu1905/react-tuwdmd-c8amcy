import { useDeferredValue } from 'react';
import * as React from 'react';

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
