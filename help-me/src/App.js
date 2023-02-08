import React, { useState, useEffect } from 'react';
import AppRouters from './Pages/main'
import { authService } from "./Firebase";
import Loading from './Pages/Loding';

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
      { init ? <AppRouters isLoggedIn={isLoggedIn}/> : <Loading/> }
      {/* <footer>&copy;  {new Date().getFullYear()}</footer> */}
    </>
  );
}

export default App;