import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThoughtlessContextProvider } from './contexts/ThoughtlessContextProvider';
<<<<<<< HEAD
import Login from './components/Login';
import { Home } from './components/Home'
=======
import { Login } from './components/Login';
import { Home } from './components/Home';
>>>>>>> a28cd540aa402248fdbf18996473a3a538fdd13e
import SignUp from './components/Signup';
import { Questions } from './components/Questions';
import { SearchPage } from './components/SearchPage';
import { Profile } from './components/Profile';
import { ProfileDetails } from './components/ProfileDetail';

ReactDOM.render(
  <React.StrictMode>
    <ThoughtlessContextProvider>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/questions' element={<Questions/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/:id' element={<ProfileDetails />}/>
      </Routes>
    </BrowserRouter>
    </ThoughtlessContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);