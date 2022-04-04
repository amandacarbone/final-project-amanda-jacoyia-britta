import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Homepage} from './components/HomePage'
import { ThoughtlessContextProvider } from './contexts/ThoughtlessContextProvider';
import Login from './components/Login';
import SignUp from './components/Signup';
import { Home } from './components/Home';
import { Questions } from './components/Questions';
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
  </React.StrictMode>,
  document.getElementById("root")
    
);