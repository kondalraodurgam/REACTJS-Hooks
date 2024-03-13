// App.js
import React from 'react';
import AppProvider from './AppProvider';
import Home from './Home';

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
