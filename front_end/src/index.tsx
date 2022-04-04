import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import {Homepage} from './components/HomePage'
=======
import { Home } from './components/Home';
import SignUp from './components/Signup';
import { Questions } from './components/Questions';
import { ThoughtlessContextProvider } from './contexts/ThoughtlessContextProvider';
import Login from './components/Login';
import './index.css';

>>>>>>> 321509d9a34af7ad1526e9e9547c62c641cdcb84
ReactDOM.render(
  <React.StrictMode>
    <ThoughtlessContextProvider>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/questions' element={<Questions/>}/>
    </Routes>
    </BrowserRouter>
    </ThoughtlessContextProvider>
);