import React from 'react'

function ChildComp(props) {
    const {handleClick}=props;
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ChildComp