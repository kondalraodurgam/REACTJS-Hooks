
function Button() {

  function handleButton(){
    alert("Clicked Handle Button")
  }
  return (
      <button onClick={handleButton}>Click Button</button>
  )
}

export default Button;
