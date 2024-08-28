const user  = {
    name : 'Kondal',
    userUrl :'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize :150,
}

function App() {
  return (
    <div>
        <h2>{user.name}</h2>
        <img src={user.userUrl}
        style={{
            width:user.imageSize,
            height:user.imageSize,
            borderRadius:'50%',
            textAlign:'center'
        }}></img>
    </div>
  );
}

export default App;
