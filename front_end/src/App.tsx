<<<<<<< HEAD
import React from 'react';
import './App.css';
import { Homepage } from './components/HomePage';

=======
import React, { useContext } from 'react';
import { ThoughtlessContext } from './context/ThoughtlessContext';
import { Landing } from './components/Landing';
>>>>>>> 5d91e0d7fd726f909fc1175fea7f886d1c56e5c0

function App() {

  const { loggedUsers } = useContext(ThoughtlessContext);

  return (
    <div className="App">

<<<<<<< HEAD
      <Homepage></Homepage>
=======
      <Landing/>

      {/* {loggedUsers === true ? <Profile/> : <Login/>} */}
>>>>>>> 5d91e0d7fd726f909fc1175fea7f886d1c56e5c0

    </div>
  );
}

export default App;
