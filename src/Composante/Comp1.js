import './Comp1.css';

import React, { useState } from 'react';
function Comp1() {
  const [valeur, convIndex] = useState(0);
  return (
    <div id="Cm1">
  <div id="t">
      <input type="text" ></input>
      <button onClick={() => convIndex(valeur *3.3)}>
       dinar vers euro
      </button>

      <button onClick={() => convIndex(valeur -3.3)}>
       euro vers dinar
      </button>
    </div>
    
     <span id="x">© yakine benali</span> 

    
    
  
  </div>
 
         
         
      
      
  );
};

export default Comp1;