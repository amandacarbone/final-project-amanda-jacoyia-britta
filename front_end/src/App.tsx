
import './App.css';
import { useLocation } from 'react-router-dom';
import { Header } from './components/constants/Header';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
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