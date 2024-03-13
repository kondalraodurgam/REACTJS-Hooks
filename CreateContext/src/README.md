![image](https://github.com/kondalraodurgam/REACTJS-Hooks/assets/20201281/9f941f2e-db2d-4bb5-ae85-cb3936af0205)

![image](https://github.com/kondalraodurgam/REACTJS-Hooks/assets/20201281/9ce1a5a2-fb90-456f-99ca-c02cf74d469a)


Creating the Context:

First, create a context using the createContext function. This will create a context object with a Provider and a Consumer.
jsx
```
// AppContext.js
import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;

```
Creating the Provider Component:

Create a component that will act as the provider for the context. This component will wrap the part of the component tree where you want to share the state.
jsx
```
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
```
Using the Context Provider:

Wrap your application or a part of it with the AppProvider component to provide the context to the components within that scope.
jsx
```
// App.js
import React from 'react';
import AppProvider from './AppProvider';
import HomePage from './HomePage';

const App = () => {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};

export default App;
```
Consuming the Context:

Use the useContext hook or the Consumer component to access the context values in any child component.
jsx
```
// HomePage.js
import React, { useContext } from 'react';
import AppContext from './AppContext';

const HomePage = () => {
  const { username, isLoggedIn, login, logout } = useContext(AppContext);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, {username}! <button onClick={logout}>Logout</button></p>
      ) : (
        <p>Please log in <button onClick={() => login('John')}>Login</button></p>
      )}
    </div>
  );
};
```

export default HomePage;
In this example, the AppProvider component wraps the HomePage component, making the AppContext values available to it. The HomePage component consumes the context using the useContext hook to access the state and functions provided by the context. The login and logout actions are then used to update the shared state.






