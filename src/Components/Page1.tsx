import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';

const Page1 = () => {
  const [count, setCount] = useState();
  
  return (
    <div>
      hello i'm page1
    </div>
  );
}

export default Page1;