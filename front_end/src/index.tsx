import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import { Homepage } from './components/HomePage';
=======
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 5d91e0d7fd726f909fc1175fea7f886d1c56e5c0

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={Homepage}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);