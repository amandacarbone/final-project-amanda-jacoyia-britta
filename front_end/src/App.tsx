
import './App.css';
import { Homepage } from './components/HomePage';


import React from 'react';
import { SearchPage } from './components/SearchPage';

function App() {

  return (
    <div className="App">

      <SearchPage></SearchPage>
     

      {/* {loggedUsers === true ? <Profile/> : <Login/>} */}

    </div>
  );
}

export default App;