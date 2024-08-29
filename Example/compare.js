  import { useState } from 'react';

  function MyApp(){

  const [count, setCount] = useState(0);

  function handleButton() {
    setCount(count+1)
  }
  return(
    <div>
      <h4>Buttons increament separately</h4>
      <Button count={count} onClick={handleButton}/>
      <Button count={count} onClick={handleButton}/>
    </div>
  )
}
export default MyApp;

function Button ({count,onClick}){
  return(
    <div>
      <p>Count Value is Increased {count}</p>
      <button onClick={onClick}>
        Click Here
      </button>
    </div>
  )}

