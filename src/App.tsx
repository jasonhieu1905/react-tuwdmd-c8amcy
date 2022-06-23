import * as React from 'react';
import { useState, useTransition } from 'react';
import ProductList from './ProductList';


export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const [isPending, startTransition] = useTransition(); 

  const TOTAL_ITEMS = 20000;


  function handleChange(event) {
    setInput(event.target.value);

    // startTransition(() => {
    //   const l = [];
    //   for(let i=0;i < TOTAL_ITEMS; i++) {
    //     l.push(<div key={i}>{event.target.value}</div>)
    //   }
  
    //   setList(l);
    // })
    
  }

  return (
    <div id="app">
      <input type="text" value={input} onChange={handleChange} />
      {/* { isPending ? 'Loading ...' : list} */}
      {/* {isPending && <p style={{color: 'white'}}>Updating List...</p>} */}
      <ProductList input={input} />
    </div>
  );
}
