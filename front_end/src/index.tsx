import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Homepage} from './components/HomePage'
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