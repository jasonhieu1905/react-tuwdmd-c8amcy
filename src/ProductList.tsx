import { useDeferredValue, useMemo, useEffect } from 'react';
import * as React from 'react';

function ProductList({ input }) {
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`input ${input} \n deferredInput  ${deferredInput}`)
  }, [input, deferredInput])
  return list;
}

export default ProductList;
