import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import SignUp from './components/Signup';
import { Questions } from './components/Questions';
import { ThoughtlessContextProvider } from './contexts/ThoughtlessContextProvider';
import Login from './components/Login';
import './index.css';

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