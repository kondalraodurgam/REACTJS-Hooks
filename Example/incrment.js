import React,{useState} from 'react'

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
export default Button;
