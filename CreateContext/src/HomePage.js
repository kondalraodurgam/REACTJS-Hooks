// HomePage.js
import React, { useContext } from 'react';
import AppContext from './AppContext';

const HomePage = () => {
  const { username, isLoggedIn, login, logout } = useContext(AppContext);

  return (
    <div>
      {isLoggedIn ? (
        <p>
          Welcome, {username}! <button onClick={logout}>Logout</button>
        </p>
      ) : (
        <p>
          Please log in <button onClick={() => login('John')}>Login</button>
        </p>
      )}
    </div>
  );
};

export default HomePage;
