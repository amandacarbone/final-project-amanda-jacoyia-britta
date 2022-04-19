
import './App.css';
import { useLocation } from 'react-router-dom';
import { Header } from './components/constants/Header';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9QAl1Ubi4eRxP4akDfzPHiRsLZCG2pIg",
  authDomain: "thoughtless-da50e.firebaseapp.com",
  projectId: "thoughtless-da50e",
  storageBucket: "thoughtless-da50e.appspot.com",
  messagingSenderId: "57802830627",
  appId: "1:57802830627:web:aafe84cdd884bf1c239296",
  measurementId: "G-C588CKV8FH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null
  } else {
    return <Header/>
  }

}

export default App;