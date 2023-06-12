import React from 'react';

function ParentComponent({ callback }) {
  const handleClick = () => {
 
    console.log('Button clicked in ParentComponent');
    callback();
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function ChildComponent() {
  const handleCallback = () => {
    console.log('Callback function called in ChildComponent');
   
  };

  return (
    <div>
      <ParentComponent callback={handleCallback} />
    </div>
  );
}

export default ChildComponent;
