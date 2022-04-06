import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThoughtlessContextProvider } from './contexts/ThoughtlessContextProvider';
import Login from './components/Login';
import { Homepage } from './components/HomePage'
import SignUp from './components/Signup';
import { Questions } from './components/Questions';
import { SearchPage } from './components/SearchPage';

ReactDOM.render(
  <React.StrictMode>
    <ThoughtlessContextProvider>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/questions' element={<Questions/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
    </ThoughtlessContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);