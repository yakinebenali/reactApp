import React, { useState } from 'react';
function Comp5() {
 {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
       incrementer
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrementer
      </button>
    </div>
  );
}
}
export default Comp5;