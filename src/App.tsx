import * as React from 'react';
import { useState, useTransition } from 'react';
import ProductList from './ProductList';

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function generateProducts() {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
}

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });
    setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {/* {isPending && <p style={{color: 'white'}}>Updating List...</p>} */}
      <ProductList products={filteredProducts} />
    </div>
  );
}
