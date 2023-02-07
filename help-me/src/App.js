import React, { useState, useEffect } from 'react';
import AppRouters from './Pages/main'
import { authService } from "./Firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true)
    })
  }, [])

  return (
    <>
      { init ? <AppRouters isLoggedIn={isLoggedIn}/> : "Initializing." }
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;