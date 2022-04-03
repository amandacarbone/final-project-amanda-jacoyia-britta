
import './App.css';
import { Homepage } from './components/HomePage';

import React, { useContext } from 'react';
import { ThoughtlessContext } from './context/ThoughtlessContext';
import { Landing } from './components/Landing';

function App() {

  const { loggedUsers } = useContext(ThoughtlessContext);

  return (
    <div className="App">

      <Homepage></Homepage>
      <Landing/>

      {/* {loggedUsers === true ? <Profile/> : <Login/>} */}

    </div>
  );
}

export default App;
