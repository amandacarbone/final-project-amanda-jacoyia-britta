import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import { Homepage } from './components/HomePage';

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