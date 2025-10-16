import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // In a real app, you might check for a token in localStorage here
  // to persist the login state across sessions.

  const handleLogin = () => {
    // This simulates a successful login. In a real app, this would
    // be called after verifying credentials with a backend service.
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    // This simulates logging out by resetting the state.
    setIsLoggedIn(false);
  };


  return (
    <>
      {isLoggedIn ? <TodoPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </>
  );
};

export default App;