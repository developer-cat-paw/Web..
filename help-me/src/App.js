import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Main from './Pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ({ auth }) => {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;