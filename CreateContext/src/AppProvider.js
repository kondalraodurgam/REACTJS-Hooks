// AppProvider.js
import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    // Initial state values
    username: '',
    isLoggedIn: false,
  });

  const login = (username) => {
    setAppState({ ...appState, username, isLoggedIn: true });
  };

  const logout = () => {
    setAppState({ ...appState, username: '', isLoggedIn: false });
  };

  return (
    <AppContext.Provider value={{ ...appState, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
