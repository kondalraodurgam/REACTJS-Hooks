import React,{useState} from 'react'


function myApp(){
  return(
    <div>
      <h4>Buttons increament separately</h4>
      <Button />
      <Button />
    </div>
  )
}
export default myApp;

function Button (){
  const [count,setCount] = useState(0)

  function handleButton() {
    setCount(count+1)
  }
  return(
    <div>
      <p>Count Value is Increased {count}</p>
    <button onClick={handleButton}>
      Click Here
    </button>
    </div>
  )
}
