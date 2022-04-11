import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThoughtlessContextProvider } from './contexts/ThoughtlessContextProvider';
import { Login } from './components/account/Login';
import { Home } from './components/home/Home';
import { SignUp } from './components/account/Signup';
import { Questions } from './components/questions/Questions';
import { SearchPage } from './components/search/SearchPage';
import { Profile } from './components/profile/Profile';
import { ProfileDetails } from './components/profile/ProfileDetail';
import { RecipeDetail } from './components/recipes/RecipeDetail';
import { Update } from './components/profile/Update';

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
      <Route path='/recipedetail/:id' element={<RecipeDetail/>}/>
      <Route path='/update' element={<Update/>}/>
      
      </Routes>
    </BrowserRouter>
    </ThoughtlessContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);