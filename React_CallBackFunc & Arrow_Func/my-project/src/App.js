import React from 'react'

function ParentComponent({child}) {
  const handleClick=()=>{
    console.log("This is Parent Component")
    child()
  }
  return (
    <button onClick={handleClick}>Click Here</button>
    
  )
}

function ChildrenComponent(){
  const handleClick1=()=>{
    console.log("This is Children Component")
  }
  return(
    <ParentComponent child={handleClick1} />
  )
}

export default ChildrenComponent